// @flow
import auth from 'basic-auth';

const { env: { BASIC_AUTH_REQUIRED, BASIC_AUTH_USER, BASIC_AUTH_PASS } } = process;

export default (
  req: express$Request,
  res: express$Response,
  next: express$NextFunction,
): void => {
  if (!BASIC_AUTH_REQUIRED) {
    next();
    return;
  }

  const creds = auth(req);
  if (!creds || creds.name !== BASIC_AUTH_USER || creds.pass !== BASIC_AUTH_PASS) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Access to staging site"');
    res.end('Access denied');
    return;
  }

  next();
};
