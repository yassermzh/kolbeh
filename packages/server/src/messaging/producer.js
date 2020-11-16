import { getCategoryToTryNext, getNextState } from "../happiness";
import { findAll } from "../db";
import HappinessTraining from "../resolvers/data/happinessTraining";
import { happinessTryNextQueue } from "./queue";
import config from "../config";

function getUserActivityStatus(lastSynced) {
  const diffInHours = (new Date().getTime() - lastSynced) / 1000 / 60 / 60;
  return {
    isActive: diffInHours < config.messaging.happiness.maxInactiveDays * 24,
    lastSyncedInDays: Math.ceil(diffInHours / 24),
    lastSyncedInHour: diffInHours,
  };
}

export function isSendingTimeOk() {
  const hr = new Date().getHours();
  if (
    hr < config.messaging.stopSendingHour &&
    hr > config.messaging.startSendingHour
  ) {
    return true;
  } else {
    return false;
  }
}

export async function producer() {
  if (!isSendingTimeOk()) {
    console.log("not a good time to add notification to queue");
    return;
  }

  const users = await findAll();
  Object.keys(users).map((key) => {
    const user = users[key];

    console.log({ user });

    if (!user.lastSynced) return;
    if (user.reminder?.state === "INACTIVE") {
      console.log("ignore this user, reminder is set to inactive");
      return;
    }

    const userActivityStatus = getUserActivityStatus(user.lastSynced);
    if (!userActivityStatus.isActive) {
      console.log("user not active anymore: ", userActivityStatus);
      return;
    }

    const nextState = getNextState(
      HappinessTraining.categories,
      user?.happiness?.exercises ?? {},
      Date.now()
    );
    const categoryToTryNext = getCategoryToTryNext(
      nextState.categories,
      HappinessTraining.categories
    );

    if (!categoryToTryNext?.title) {
      console.log("no need to send message");
      console.log(user.name, { categoryToTryNext });
      return;
    }

    const exercise = categoryToTryNext.title;
    const name = user.name;

    let messageTitle;
    if (name) {
      messageTitle = `${name}، شکلات رو امروز با ${exercise} مزه کن.`;
    } else {
      messageTitle = `شکلات رو امروز با ${exercise} مزه کن.`;
    }

    const message = {
      token: user.messagingToken,
      notification: {
        title: messageTitle,
        body: "",
        imageUrl: config.host + "/static/images/notification-icon.png",
      },
      // data: {
      //   exerciseToTry: "awe",
      // },
      android: {
        // Required for background/quit data-only messages on Android
        priority: "high",
        ttl: Number(config.messaging.happiness.ttlInHour) * 60 * 60, // duration in seconds to keep on FCM if device is offline
      },
    };

    console.log("to add to queue", message);
    happinessTryNextQueue.add(message);
  });
}
