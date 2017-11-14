
export const isServer = typeof window === 'undefined';

export const fetchJson = async (path) => {
  if (isServer) {
    return Promise.resolve('lol'); // @TODO lol
  }
  return fetch(path).then(data => data.json());
};
