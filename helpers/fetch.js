const ep = 'http://www.omdbapi.com?apikey=faf7e5bb';

export const getMovies = async (cat, page) => {
  if (cat) {
    const endpoint = `${ep}&s=${cat ? cat : 'batman'}&page=${page}`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
  }
  return null;
};

export const getMovie = async (id) => {
  if (id) {
    const endpoint = `${ep}&i=${id}`;
    const res = await fetch(endpoint);
    const json = await res.json();
    return json;
  }
  return null;
};
