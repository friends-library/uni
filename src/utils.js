// @flow
const getFriend = async (slug: string) => {
  return fetch(`http://localhost:3000/api/friend/${slug}`)
    .then(data => data.json());
};

export default getFriend;
