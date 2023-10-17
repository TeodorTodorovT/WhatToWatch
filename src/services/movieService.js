const baseURL = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_DB_ACCESS_TOKEN;

console.log(baseURL);
console.log(accessToken);

export const getMovieOfTheDay = async () =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      };

      try {
        const response = await fetch(`${baseURL}/trending/movie/day?language=en-US`, options)
        const data = await response.json();
        return data.results[0];
      } catch (error) {
        console.log(error);
      }
}

export const getRandomMovie = async () =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${accessToken}`
        }
      };

      try {
        const response = await fetch(`${baseURL}/trending/movie/day?language=en-US`, options)
        const data = await response.json();
        return data.results[Math.floor(Math.random()*data.results.length)];
      } catch (error) {
        console.log(error);
      }
}