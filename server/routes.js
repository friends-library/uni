// @flow
import { readFile } from 'fs';
import { safeLoad } from 'js-yaml';
import logDownload from './log-download';

export function apiFriend(req: express$Request, res: express$Response): void {
  const { params: { slug } } = req;
  readFile(`friends/${slug}.yml`, (err, data) => {
    const friend: Object = safeLoad(data);
    res.json(friend);
  });
}


export function download(req: express$Request, res: express$Response): void {
  res.send('@TODO -- download the file');
  logDownload(req);
}
