const ep = 'http://www.omdbapi.com?apikey=56c992c6';

export const getMovies = async (cat, page) => {
  try{
    if (cat) {
      const endpoint = `${ep}&s=${cat ? cat : 'batman'}&page=${page}`;
      const res = await fetch(endpoint);
      const json = await res.json();
      return json;
    }
  }catch(err){
    console.log(err);
    return null;
  }
};

export const getMovie = async (id) => {
  try{
    if (id) {
      const endpoint = `${ep}&i=${id}`;
      const res = await fetch(endpoint);
      const json = await res.json();
      return json;
    }
  }catch(err){
    console.log(err);
    return null;
  }
};
