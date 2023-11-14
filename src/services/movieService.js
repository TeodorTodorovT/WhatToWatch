const baseURL = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_DB_ACCESS_TOKEN;

const optionsGet = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
}

const currentYear = new Date().toJSON().slice(0, 4);

export const getMovieOfTheDay = async () =>{
      try {
        const response = await fetch(`${baseURL}/trending/movie/day?language=en-US`, optionsGet)
        const data = await response.json();
        return data.results[0];
      } catch (error) {
        console.log(error);
      }
}

export const getRandomMovie = async () =>{
      try {
        const response = await fetch(`${baseURL}/trending/movie/day?language=en-US`, optionsGet)
        const data = await response.json();
        return data.results[Math.floor(Math.random()*data.results.length)];
      } catch (error) {
        console.log(error);
      }
}

export const getMovies = async (pageNumber, moviesSort, releaseDateGTE = '1901-01-01', releaseDateLTE = currentYear, voteAverageGTE = 1, voteAverageLTE = 10, genres) => {

  try {
    const response = await fetch(
      `${baseURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&primary_release_date.gte=${releaseDateGTE}-01-01&primary_release_date.lte=${releaseDateLTE}-12-31&sort_by=${moviesSort}&vote_average.gte=${voteAverageGTE}&vote_average.lte=${voteAverageLTE}&vote_count.gte=1000&with_genres=${genres}`,
      optionsGet
    )
    const data = await response.json();
    
    return {
      movies: data.results,
      totalMovies: data.total_results
    };
  } catch (error) {
    console.log(error);
  }
}

export const getMovie = async (id) =>{
  try {
    const response = await fetch(
      `${baseURL}/movie/${id}`,
      optionsGet
    )
    const data = await response.json();
    return data;
  } catch (error){
    console.log(error);
  }
}

export const getMovieProviders = async (id) => {
  try {
    const response = await fetch(
      `${baseURL}/movie/${id}/watch/providers`,
      optionsGet
    )
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getMovieTrailer = async (id) => {
  try {
    const response = await fetch(
      `${baseURL}/movie/${id}/videos`,
      optionsGet
    )
    const data = await response.json();
    const result = data.results.filter(item => item.type === 'Trailer');
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const getSimilarMovies = async (id) => {
  try {
    const response = await fetch(
      `${baseURL}/movie/${id}/recommendations`,
      optionsGet
    )
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
}