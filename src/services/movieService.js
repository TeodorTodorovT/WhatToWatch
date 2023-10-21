import { useParams } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_DB_ACCESS_TOKEN;

const optionsGet = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
}

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

export const getMovies = async (pageNumber, moviesSort) => {
  let currentDate = new Date().toJSON().slice(0, 10);

  try {
    const response = await fetch(
      `${baseURL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&primary_release_date.lte=${currentDate}&sort_by=${moviesSort}`,
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