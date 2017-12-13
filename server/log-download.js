// @flow
import mysql from 'mysql';
import uuid from 'uuid';
import useragent from 'express-useragent';
import { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } from './env';

function row(request: express$Request, ua: Object): Object {
  const { originalUrl, ip } = request;
  const {
    isMobile, browser, os, platform, source,
  } = ua;
  return {
    id: uuid.v4(),
    route: originalUrl.replace(/^\/download\//, ''),
    user_agent: source,
    is_mobile: isMobile,
    ip_address: ip,
    browser,
    os,
    platform,
  };
}

export default function logDownload(request: express$Request): void {
  if (!DB_NAME) {
    return;
  }

  const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });

  connection.connect((connectError) => {
    if (connectError) {
      // @TODO handle error (maybe send a slack?)
      console.error(connectError); // eslint-disable-line no-console
      return;
    }

    const ua = useragent.parse(request.headers['user-agent']);
    if (ua.isBot) {
      return;
    }

    connection.query('INSERT INTO `downloads` SET ?', row(request, ua), (err) => {
      if (err) {
        // @TODO handle error (maybe send a slack?)
        console.error(err); // eslint-disable-line no-console
      }
      connection.end();
    });
  });
}
