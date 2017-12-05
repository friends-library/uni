// @flow
const isServer = typeof window === 'undefined';

const getFriend = async (slug: string): Promise<*> => {
  let base: string = '';
  if (isServer) {
    base = process.env.APP_URL || 'http://localhost:1111';
  }

  return fetch(`${base}/api/friend/${slug}`)
    .then(data => data.json());
};

export default getFriend;
