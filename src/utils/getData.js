const getData = (api) => {
  return fetch(api)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
// const searchTrack = (songName, sort) =>
//   axios.get(`localhost:3000/search-tracks/${songName}/${sort}`);



  export default getData;
