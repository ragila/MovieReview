export const getMovie = () => {
    return {type: 'GET_MOVIE'};
  };

  export const getMovieDetail = (id) => {
    return {type: 'GET_MOVIE_DETAIL', id};
  };