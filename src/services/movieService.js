const baseURL = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_DB_ACCESS_TOKEN;

const optionsGet = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
}

const currentDate = new Date().toJSON().slice(0, 10);

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

export const getMovies = async (pageNumber, moviesSort, releaseDateGTE = '1865-01-01', releaseDateLTE = currentDate, voteAverageGTE = 1, voteAverageLTE = 10) => {

  try {
    const response = await fetch(
      `${baseURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&primary_release_date.gte=${releaseDateGTE}-01-01&primary_release_date.lte=${releaseDateLTE + 1}-01-01&sort_by=${moviesSort}&vote_average.gte=${voteAverageGTE}&vote_average.lte=${voteAverageLTE}&vote_count.gte=1000`,
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