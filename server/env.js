// @flow
/* eslint-disable prefer-destructuring */
const env = ((process.env: any): {[string]: string});

export const DB_NAME = env.DB_NAME;
export const DB_HOST = env.DB_HOST;
export const DB_USER = env.DB_USER;
export const DB_PASSWORD = env.DB_PASSWORD;
