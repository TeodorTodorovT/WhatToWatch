import { Flex, Text, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getMovies } from "../services/movieService"
import { buttonStyles } from "../components/Hero/Hero.theme"
import FilterControlls from "../components/FilterControlls/FilterControlls"
import SortControlls from "../components/SortControlls/SortControlls"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

const Movies = () => {
    const currentYear = new Date().toJSON().slice(0, 4);

    const [currentMovies, setCurrentMovies] = useState([]);
    const [numberOfMovies, setNumberOfMovies] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [moviesSort, setMoviesSort] = useState('popularity.desc');
    const [moviesFilter, setMoviesFilter] = useState({yearRange: [1901, currentYear], scoreRange: [0, 10], selectedGeneres: []});
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {

        const fetchMovies = async () => {
            const moviesData = await getMovies(
                pageNumber, 
                moviesSort, 
                moviesFilter.yearRange[0], 
                moviesFilter.yearRange[1], 
                moviesFilter.scoreRange[0], 
                moviesFilter.scoreRange[1], 
                moviesFilter.selectedGeneres.join(',')
            )
            console.log(moviesData);

            if(moviesData.totalMovies === 0) {
                setNoResults(true);
            }else{
                if (currentMovies.length > 0) {
                    setCurrentMovies(oldMoviesList => [...oldMoviesList, ...moviesData.movies])
                } else {
                    setCurrentMovies(moviesData.movies)
                }
                setNoResults(false);
            }
            setNumberOfMovies(moviesData.totalMovies)
        }


        fetchMovies();


    }, [pageNumber, moviesSort, moviesFilter])

    const loadNextPage = () => {
        setPageNumber(currentPage => currentPage += 1)
    }




    return (
        <Flex
            backgroundColor='#121212'
            flexDirection='row'
            height='100%'

        >
            <FilterControlls 
                setPageNumber={setPageNumber} 
                setCurrentMovies={setCurrentMovies}
                setMoviesFilter={setMoviesFilter}

            />
            <Flex flexDirection='column' position='relative' margin='11.375rem 2rem 2rem 2rem' color='#fff' width='80%'>
                <Text as='h1' fontSize='5xl' fontWeight='bold'>The most popular movies to watch</Text>
                <Text as='p'>Good Movies To Watch On Netflix & Elsewhere</Text>
                <Flex justifyContent='space-between' marginBottom='0.5rem'>
                    <Text as='p'><span style={{ 'fontWeight': 'bold' }}>{numberOfMovies}</span> movies</Text>
                    <SortControlls 
                        setPageNumber={setPageNumber} 
                        setCurrentMovies={setCurrentMovies}
                        setMoviesSort={setMoviesSort}    
                        moviesSort={moviesSort}             
                    />
                </Flex>
                <MoviesGrid
                    currentMovies={currentMovies}
                    noResults={noResults}
                />
                <Button {...buttonStyles} width='10rem' margin='1rem 0' isDisabled={currentMovies.length === numberOfMovies ? true : false} onClick={() => loadNextPage()}>
                    <Text zIndex='1' color='#fff'>Load More</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Movies