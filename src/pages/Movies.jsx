import { Flex, Text, Button, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getMovies } from "../services/movieService"
import { buttonStyles } from "../components/Hero/Hero.theme"
import FilterControlls from "../components/FilterControls/FilterControls"
import SortControlls from "../components/SortControls/SortControls"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

const Movies = () => {
    const currentYear = new Date().toJSON().slice(0, 4);

    const [currentMovies, setCurrentMovies] = useState([]);
    const [numberOfMovies, setNumberOfMovies] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [moviesSort, setMoviesSort] = useState('popularity.desc');
    const [moviesFilter, setMoviesFilter] = useState({ yearRange: [1901, currentYear], scoreRange: [0, 10], selectedGeneres: [] });
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
            if (moviesData.success !== false) {
                if (moviesData.totalMovies === 0) {
                    setNoResults(true);
                } else {
                    if (currentMovies.length > 0) {
                        setCurrentMovies(oldMoviesList => [...oldMoviesList, ...moviesData.movies])
                    } else {
                        setCurrentMovies(moviesData.movies)
                    }
                    setNoResults(false);
                }
                setNumberOfMovies(moviesData.totalMovies)
            } else {
                setCurrentMovies(moviesData)
            }


        }


        fetchMovies();


    }, [pageNumber, moviesSort, moviesFilter])

    const loadNextPage = () => {
        setPageNumber(currentPage => currentPage += 1)
    }




    return (

        <Flex
            backgroundColor='background.100'
            flexDirection='row'
            height='100%'
            position='relative'
            overflow='hidden'
        >
            
            <Box
                position='absolute'
                top='0'
                right='-20%'
                backgroundColor='background.200'
                borderRadius='30% 70% 70% 30% / 30% 30% 70% 70% '
                width='100%'
                height='100%'
                zIndex='0'
            />
            
            {currentMovies.success !== false ?
                <>
                    <FilterControlls
                        setPageNumber={setPageNumber}
                        setCurrentItems={setCurrentMovies}
                        setItemsFilter={setMoviesFilter}

                    />
                    <Flex flexDirection='column' position='relative' margin={{ base: '14.5rem 1rem 1rem 1rem', lg: '11.375rem 2rem 2rem 2rem' }} color='#fff' width={{ base: '100%', lg: '80%' }}>
                        <Text as='h1' fontSize={{ base: '3xl', lg: '5xl' }} fontWeight='bold'>The most popular movies to watch</Text>
                        <Text as='p'>Good Movies To Watch On Netflix & Elsewhere</Text>
                        <Flex justifyContent='space-between' marginBottom='0.5rem'>
                            <Text as='p'><span style={{ 'fontWeight': 'bold' }}>{numberOfMovies}</span> movies</Text>
                            <SortControlls
                                setPageNumber={setPageNumber}
                                setCurrentItems={setCurrentMovies}
                                setItemsSort={setMoviesSort}
                                itemsSort={moviesSort}
                            />
                        </Flex>
                        <MoviesGrid
                            currentItems={currentMovies}
                            noResults={noResults}
                        />
                        <Button {...buttonStyles} width='10rem' margin='1rem 0' isDisabled={currentMovies.length === numberOfMovies ? true : false} onClick={() => loadNextPage()}>
                            <Text zIndex='1' color='#fff'>Load More</Text>
                        </Button>
                    </Flex>
                </>
                :
                <Flex height='100vh' width='100vw' color='#fff' fontSize='3xl' justifyContent='center' alignItems='center'>
                    <Text>There was an error. Please try again.</Text>
                </Flex>
            }

        </Flex>
    )
}

export default Movies