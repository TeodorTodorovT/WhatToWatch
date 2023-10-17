import Hero from "../components/Hero/Hero"
import TodaysMovie from "../components/TodaysMovie/TodaysMovie"

import { useEffect, useState } from "react"

import { getMovieOfTheDay, getRandomMovie } from "../services/movieService"

const Home = () => {
  const [movieOfTheDay, setMovieOfTheDay] = useState({})
  const [randomMovie, setRandomMovie] = useState({})


  useEffect(() => {
    const fetchMovieOfTheDay = async () => {
      const movie = await getMovieOfTheDay()
      setMovieOfTheDay(movie)
    }
    const fetchRandomMovie = async () => {
      const movie = await getRandomMovie()
      setRandomMovie(movie)
    }
    fetchMovieOfTheDay();
    fetchRandomMovie();
    
    
  }, [])
  return (

    <>
      <Hero as='section' randomMovie={randomMovie}/>
      <TodaysMovie as='section' movieOfTheDay={movieOfTheDay}/>
    </>
  )
}

export default Home