const branchName = require("current-git-branch");

function addEnvSuffix(name) {
  return process.env.NODE_ENV + "_" + name;
}

const env_staging = {};

const env_production = {};

const app = {
  name: addEnvSuffix("API"),
  script: "yarn start",
  // args: 'one',
  cwd: "./packages/server",
  instances: 1,
  autorestart: true,
  watch: false,
  // env_production,
  // env_staging,
};

module.exports = {
  apps: [
    app,
    // {
    //   ...app,
    //   name: addEnvSuffix("MESSAGING_PRODUCER"),
    //   script: "yarn start:messaging-producer",
    // },
    // {
    //   name: addEnvSuffix("MESSAGING_WORKER"),
    //   ...app,
    //   script: "yarn start:messaging-worker",
    // },
    // {
    //   name: addEnvSuffix("IMAGE"),
    //   script: "yarn start",
    //   cwd: "./packages/image",
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   //interpreter: "babel-node",
    //   env_staging: {
    //     PORT: 9010,
    //     HOST: "https://stg.alacolang.ir/kolbeh",
    //     NODE_ENV: "staging",
    //   },
    //   env_production: {
    //     PORT: 8010,
    //     HOST: "https://alacolang.ir/kolbeh",
    //     NODE_ENV: "production",
    //   },
    // },
  ],

  deploy: {
    production: {
      user: "www",
      host: "vps",
      ref: "origin/master",
      repo: "git@github.com:alacolang/kolbeh.git",
      path: "/home/www/kolbeh-production",
      "post-setup": "./post-deploy.sh",
      "post-deploy":
        "./post-deploy.sh && NODE_ENV=production pm2 reload ecosystem.config.js --env production",
      env: {
        NODE_ENV: "production",
      },
    },
    staging: {
      user: "www",
      host: "vps",
      ref: `origin/${branchName()}`,
      repo: "git@github.com:alacolang/kolbeh.git",
      path: "/home/www/kolbeh-staging",
      "post-setup": "./post-deploy.sh",
      "post-deploy":
        "./post-deploy.sh && NODE_ENV=staging pm2 reload ecosystem.config.js --env staging",
      env: {
        NODE_ENV: "staging",
      },
    },
  },
};
