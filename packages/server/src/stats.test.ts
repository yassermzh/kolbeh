import "dotenv/config";
import { subDays, subHours } from "date-fns";
import { User } from "./db";
import { didExerciseThisManyTimes, howManyUsersDidExerciseLastWeek, triedThisWeek, triedAppYesterday, userStatsPerCategory, howManyExcercisesUsersDidLastWeek } from "./stats";


const lastWeekTime = subDays(new Date(), 10).getTime();
const rightNowTime = (new Date()).getTime();
const users: User[] = [
    {
        name: "", modifiedAt: subHours(new Date(), 6).getTime(), messagingToken: "",
        happiness: {
            exercises: {
                "mindfulness-1": { "state": "done", "doneAt": rightNowTime }, "mindfulness-2": { "state": "done", "doneAt": rightNowTime }, "mindfulness-3": { "state": "done", "doneAt": rightNowTime }, "mindfulness-4": { "state": "done", "doneAt": rightNowTime }, "mindfulness-5": { "state": "done", "doneAt": rightNowTime }, "optimism-1": { "state": "done", "doneAt": rightNowTime }, "optimism-2": { "state": "done", "doneAt": rightNowTime }, "optimism-3": { "state": "done", "doneAt": rightNowTime }, "optimism-4": { "state": "done", "doneAt": rightNowTime }, "optimism-5": { "state": "done", "doneAt": rightNowTime }, "forgiveness-1": { "state": "done", "doneAt": rightNowTime }, "forgiveness-2": { "state": "locked" }, "forgiveness-3": { "state": "locked" }, "forgiveness-4": { "state": "locked" }, "forgiveness-5": { "state": "locked" }, "connection-1": { "state": "done", "doneAt": rightNowTime }, "connection-2": { "state": "done", "doneAt": rightNowTime }, "connection-3": { "state": "locked" }, "connection-4": { "state": "locked" }, "connection-5": { "state": "locked" }, "empathy-1": { "state": "done", "doneAt": rightNowTime }, "empathy-2": { "state": "done", "doneAt": rightNowTime }, "empathy-3": { "state": "locked" }, "empathy-4": { "state": "locked" }, "empathy-5": { "state": "locked" }, "kindness-1": { "state": "done", "doneAt": rightNowTime }, "kindness-2": { "state": "locked" }, "kindness-3": { "state": "locked" }, "kindness-4": { "state": "locked" }, "kindness-5": { "state": "locked" }, "gratitude-1": { "state": "locked" }, "gratitude-2": { "state": "locked" }, "gratitude-3": { "state": "locked" }, "gratitude-4": { "state": "locked" }, "gratitude-5": { "state": "locked" }, "awe-1": { "state": "locked" }, "awe-2": { "state": "locked" }, "awe-3": { "state": "locked" }, "awe-4": { "state": "locked" }, "awe-5": { "state": "locked" }, "resilience-1": { "state": "locked" }, "resilience-2": { "state": "locked" }, "resilience-3": { "state": "locked" }, "resilience-4": { "state": "locked" }, "resilience-5": { "state": "locked" }, "self-compassion-1": { "state": "done", "doneAt": rightNowTime }, "self-compassion-2": { "state": "locked" }, "self-compassion-3": { "state": "locked" }, "self-compassion-4": { "state": "locked" }, "self-compassion-5": { "state": "locked" }
            },
            reminder: { state: "ACTIVE" }
        }
    },
    {
        name: "", modifiedAt: subDays(new Date(), 10).getTime(), messagingToken: "", happiness: {
            exercises: {
                "mindfulness-1": { "state": "done", "doneAt": rightNowTime }, "mindfulness-2": { "state": "done", "doneAt": rightNowTime }, "mindfulness-3": { "state": "done", "doneAt": rightNowTime }, "mindfulness-4": { "state": "done", "doneAt": rightNowTime }, "mindfulness-5": { "state": "done", "doneAt": rightNowTime }, "optimism-1": { "state": "done", "doneAt": rightNowTime }, "optimism-2": { "state": "done", "doneAt": rightNowTime }, "optimism-3": { "state": "done", "doneAt": rightNowTime }, "optimism-4": { "state": "done", "doneAt": rightNowTime }, "optimism-5": { "state": "done", "doneAt": rightNowTime }, "forgiveness-1": { "state": "done", "doneAt": rightNowTime }, "forgiveness-2": { "state": "locked" }, "forgiveness-3": { "state": "locked" }, "forgiveness-4": { "state": "locked" }, "forgiveness-5": { "state": "locked" }, "connection-1": { "state": "done", "doneAt": rightNowTime }, "connection-2": { "state": "done", "doneAt": rightNowTime }, "connection-3": { "state": "locked" }, "connection-4": { "state": "locked" }, "connection-5": { "state": "locked" }, "empathy-1": { "state": "done", "doneAt": rightNowTime }, "empathy-2": { "state": "done", "doneAt": rightNowTime }, "empathy-3": { "state": "locked" }, "empathy-4": { "state": "locked" }, "empathy-5": { "state": "locked" }, "kindness-1": { "state": "done", "doneAt": rightNowTime }, "kindness-2": { "state": "locked" }, "kindness-3": { "state": "locked" }, "kindness-4": { "state": "locked" }, "kindness-5": { "state": "locked" }, "gratitude-1": { "state": "locked" }, "gratitude-2": { "state": "locked" }, "gratitude-3": { "state": "locked" }, "gratitude-4": { "state": "locked" }, "gratitude-5": { "state": "locked" }, "awe-1": { "state": "locked" }, "awe-2": { "state": "locked" }, "awe-3": { "state": "locked" }, "awe-4": { "state": "locked" }, "awe-5": { "state": "locked" }, "resilience-1": { "state": "locked" }, "resilience-2": { "state": "locked" }, "resilience-3": { "state": "locked" }, "resilience-4": { "state": "locked" }, "resilience-5": { "state": "locked" }, "self-compassion-1": { "state": "done", "doneAt": rightNowTime }, "self-compassion-2": { "state": "done", "doneAt": rightNowTime }, "self-compassion-3": { "state": "locked" }, "self-compassion-4": { "state": "locked" }, "self-compassion-5": { "state": "locked" }
            },
            reminder: { state: "ACTIVE" }
        }
    },
    {
        name: "", modifiedAt: subHours(new Date(), 36).getTime(), messagingToken: ""
    },
    {
        name: "", modifiedAt: subDays(new Date(), 10).getTime(), messagingToken: "", happiness: {
            exercises: {
                "mindfulness-1": { "state": "done", "doneAt": lastWeekTime }, "mindfulness-2": { "state": "locked" }, "mindfulness-3": { "state": "locked" }, "mindfulness-4": { "state": "locked" }, "mindfulness-5": { "state": "locked" }, "optimism-1": { "state": "locked" }, "optimism-2": { "state": "locked" }, "optimism-3": { "state": "locked" }, "optimism-4": { "state": "locked" }, "optimism-5": { "state": "locked" }, "forgiveness-1": { "state": "locked" }, "forgiveness-2": { "state": "locked" }, "forgiveness-3": { "state": "locked" }, "forgiveness-4": { "state": "locked" }, "forgiveness-5": { "state": "locked" }, "connection-1": { "state": "locked" }, "connection-2": { "state": "locked" }, "connection-3": { "state": "locked" }, "connection-4": { "state": "locked" }, "connection-5": { "state": "locked" }, "empathy-1": { "state": "locked" }, "empathy-2": { "state": "locked" }, "empathy-3": { "state": "locked" }, "empathy-4": { "state": "locked" }, "empathy-5": { "state": "locked" }, "kindness-1": { "state": "locked" }, "kindness-2": { "state": "locked" }, "kindness-3": { "state": "locked" }, "kindness-4": { "state": "locked" }, "kindness-5": { "state": "locked" }, "gratitude-1": { "state": "locked" }, "gratitude-2": { "state": "locked" }, "gratitude-3": { "state": "locked" }, "gratitude-4": { "state": "locked" }, "gratitude-5": { "state": "locked" }, "awe-1": { "state": "locked" }, "awe-2": { "state": "locked" }, "awe-3": { "state": "locked" }, "awe-4": { "state": "locked" }, "awe-5": { "state": "locked" }, "resilience-1": { "state": "locked" }, "resilience-2": { "state": "locked" }, "resilience-3": { "state": "locked" }, "resilience-4": { "state": "locked" }, "resilience-5": { "state": "locked" }, "self-compassion-1": { "state": "locked" }, "self-compassion-2": { "state": "locked" }, "self-compassion-3": { "state": "locked" }, "self-compassion-4": { "state": "locked" }, "self-compassion-5": { "state": "locked" }
            },
            reminder: { state: "ACTIVE" }
        }
    },
    {
        name: "", modifiedAt: subDays(new Date(), 10).getTime(), messagingToken: "", happiness: {
            exercises: {
                "mindfulness-1": { "state": "done", "doneAt": rightNowTime }, "mindfulness-2": { "state": "done", "doneAt": rightNowTime }, "mindfulness-3": { "state": "locked" }, "mindfulness-4": { "state": "locked" }, "mindfulness-5": { "state": "locked" }, "optimism-1": { "state": "locked" }, "optimism-2": { "state": "locked" }, "optimism-3": { "state": "locked" }, "optimism-4": { "state": "locked" }, "optimism-5": { "state": "locked" }, "forgiveness-1": { "state": "locked" }, "forgiveness-2": { "state": "locked" }, "forgiveness-3": { "state": "locked" }, "forgiveness-4": { "state": "locked" }, "forgiveness-5": { "state": "locked" }, "connection-1": { "state": "locked" }, "connection-2": { "state": "locked" }, "connection-3": { "state": "locked" }, "connection-4": { "state": "locked" }, "connection-5": { "state": "locked" }, "empathy-1": { "state": "locked" }, "empathy-2": { "state": "locked" }, "empathy-3": { "state": "locked" }, "empathy-4": { "state": "locked" }, "empathy-5": { "state": "locked" }, "kindness-1": { "state": "locked" }, "kindness-2": { "state": "locked" }, "kindness-3": { "state": "locked" }, "kindness-4": { "state": "locked" }, "kindness-5": { "state": "locked" }, "gratitude-1": { "state": "locked" }, "gratitude-2": { "state": "locked" }, "gratitude-3": { "state": "locked" }, "gratitude-4": { "state": "locked" }, "gratitude-5": { "state": "locked" }, "awe-1": { "state": "locked" }, "awe-2": { "state": "locked" }, "awe-3": { "state": "locked" }, "awe-4": { "state": "locked" }, "awe-5": { "state": "locked" }, "resilience-1": { "state": "locked" }, "resilience-2": { "state": "locked" }, "resilience-3": { "state": "locked" }, "resilience-4": { "state": "locked" }, "resilience-5": { "state": "locked" }, "self-compassion-1": { "state": "locked" }, "self-compassion-2": { "state": "locked" }, "self-compassion-3": { "state": "locked" }, "self-compassion-4": { "state": "locked" }, "self-compassion-5": { "state": "locked" }
            },
            reminder: { state: "ACTIVE" }
        }
    },
    {
        name: "", modifiedAt: subDays(new Date(), 10).getTime(), messagingToken: "", happiness: {
            exercises: {
                "mindfulness-1": { "state": "done", "doneAt": rightNowTime }, "mindfulness-2": { "state": "done", "doneAt": rightNowTime }, "mindfulness-3": { "state": "done", "doneAt": rightNowTime }, "mindfulness-4": { "state": "locked" }, "mindfulness-5": { "state": "locked" }, "optimism-1": { "state": "locked" }, "optimism-2": { "state": "locked" }, "optimism-3": { "state": "locked" }, "optimism-4": { "state": "locked" }, "optimism-5": { "state": "locked" }, "forgiveness-1": { "state": "locked" }, "forgiveness-2": { "state": "locked" }, "forgiveness-3": { "state": "locked" }, "forgiveness-4": { "state": "locked" }, "forgiveness-5": { "state": "locked" }, "connection-1": { "state": "locked" }, "connection-2": { "state": "locked" }, "connection-3": { "state": "locked" }, "connection-4": { "state": "locked" }, "connection-5": { "state": "locked" }, "empathy-1": { "state": "locked" }, "empathy-2": { "state": "locked" }, "empathy-3": { "state": "locked" }, "empathy-4": { "state": "locked" }, "empathy-5": { "state": "locked" }, "kindness-1": { "state": "locked" }, "kindness-2": { "state": "locked" }, "kindness-3": { "state": "locked" }, "kindness-4": { "state": "locked" }, "kindness-5": { "state": "locked" }, "gratitude-1": { "state": "locked" }, "gratitude-2": { "state": "locked" }, "gratitude-3": { "state": "locked" }, "gratitude-4": { "state": "locked" }, "gratitude-5": { "state": "locked" }, "awe-1": { "state": "locked" }, "awe-2": { "state": "locked" }, "awe-3": { "state": "locked" }, "awe-4": { "state": "locked" }, "awe-5": { "state": "locked" }, "resilience-1": { "state": "locked" }, "resilience-2": { "state": "locked" }, "resilience-3": { "state": "locked" }, "resilience-4": { "state": "locked" }, "resilience-5": { "state": "locked" }, "self-compassion-1": { "state": "locked" }, "self-compassion-2": { "state": "locked" }, "self-compassion-3": { "state": "locked" }, "self-compassion-4": { "state": "locked" }, "self-compassion-5": { "state": "locked" }
            },
            reminder: { state: "ACTIVE" }
        }
    },];

it("should give number of users who tried app yesterday", () => {
    expect(triedAppYesterday(users)).toBe(1);
})

it("should for each user give a list of number of exercises done per category", () => {
    const expected = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(userStatsPerCategory(users)).toStrictEqual(expected);
})

it("should give number of users who tried app this week", () => {
    expect(triedThisWeek(users)).toBe(2);
})

it("should give number of users who did exercise zero times", () => {
    expect(didExerciseThisManyTimes(users)(0)).toBe(1);
})

it("should give number of users who did exercise once", () => {
    expect(didExerciseThisManyTimes(users)(1)).toBe(1);
})

it("should give number of users who did exercise twice", () => {
    expect(didExerciseThisManyTimes(users)(2)).toBe(1);
})

it("should give number of users who did exercise three times", () => {
    expect(didExerciseThisManyTimes(users)(3)).toBe(1);
})

it("should give number of users who did exercises last week", () => {
    expect(howManyUsersDidExerciseLastWeek(users)).toBe(1);
})

it("should give number of excercises users did last week", () => {
    expect(howManyExcercisesUsersDidLastWeek(users)).toBe(1);
})