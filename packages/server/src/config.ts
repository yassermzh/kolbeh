/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Joi from "joi";

const schema = Joi.object({
  host: Joi.string(),
  admin: Joi.object({
    username: Joi.string(),
    password: Joi.string(),
  }),
  db: Joi.object({
    redis: Joi.object({
      host: Joi.string(),
      port: Joi.number(),
      db: Joi.number(),
    }),
  }),
  messaging: Joi.object({
    redis: Joi.object({
      host: Joi.string(),
      port: Joi.number(),
      db: Joi.number(),
    }),
    stopSendingHour: Joi.number(),
    startSendingHour: Joi.number(),
    happiness: {
      cron: Joi.string().pattern(/^([*/0-9]+\s){5}([*/0-9]+)/),
      maxInactiveDays: Joi.number(),
      ttlInHour: Joi.number(),
    },
    firebase: {
      databaseURL: Joi.string(),
    },
  }),
  isDevelopment: Joi.boolean(),
  isStaging: Joi.boolean(),
});

type Config = {
  host: string;
  admin: {
    username: string;
    password: string;
  };
  db: {
    redis: {
      host: string;
      port: number;
      db: number;
    };
  };
  messaging: {
    redis: {
      host: string;
      port: number;
      db: number;
    };
    stopSendingHour: number;
    startSendingHour: number;
    happiness: {
      cron: string;
      maxInactiveDays: number;
      ttlInHour: number;
    };
    firebase: {
      databaseURL: string;
    };
  };
  isDevelopment: boolean;
  isStaging: boolean;
};

const config: Config = {
  host: process.env.HOST!,
  admin: {
    username: process.env.ADMIN_USERNAME!,
    password: process.env.ADMIN_PASSWORD!,
  },
  db: {
    redis: {
      host: process.env.REDIS_HOST!,
      port: Number(process.env.REDIS_PORT),
      db: Number(process.env.REDIS_DATABASE),
    },
  },
  messaging: {
    redis: {
      host: process.env.REDIS_HOST!,
      port: Number(process.env.REDIS_PORT),
      db: Number(process.env.REDIS_DATABASE_MESSAGING),
    },
    stopSendingHour: Number(process.env.STOP_MESSAGING_HOUR),
    startSendingHour: Number(process.env.START_MESSAGING_HOUR),
    happiness: {
      cron: process.env.HAPPINESS_MESSAGING_CRON!,
      maxInactiveDays: Number(process.env.HAPPINESS_MAX_INACTIVE_DAYS),
      ttlInHour: Number(process.env.HAPPINESS_MESSAGING_TTL_IN_HOUR),
    },
    firebase: {
      databaseURL: process.env.FIREBASE_DATABASE_URL!,
    },
  },
  isDevelopment: process.env.NODE_ENV === "development",
  isStaging: process.env.NODE_ENV === "staging",
};

const result = schema.validate(config);
console.log(config);
if (result.error) {
  console.error(result);
  throw "config is not valid";
}

export default config;
