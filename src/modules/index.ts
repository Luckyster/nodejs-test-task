import type { Express } from 'express';
import authModule from './auth';
import userModule from './user';

const existModules = [authModule, userModule];

export default function (app: Express) {
  existModules.map((module) => {
    app.use(module);
  });
}
