import { Flex, Text, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSearch } from "../services/movieService"
import { buttonStyles } from "../components/Hero/Hero.theme"
import MoviesGrid from "../components/MoviesGrid/MoviesGrid"

const SearchResults = () => {
    const { searchQuery } = useParams();
    const [currentMovies, setCurrentMovies] = useState([]);
    const [numberOfMovies, setNumberOfMovies] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [noResults, setNoResults] = useState(false);


    useEffect(() => {
      setCurrentMovies([])
    }, [searchQuery])
    

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getSearch(
                searchQuery,
                pageNumber
            )
            if(moviesData.total_results === 0) {
                setNoResults(true);
            }else{
                if (currentMovies.length > 0) {
                    setCurrentMovies(oldMoviesList => [...oldMoviesList, ...moviesData.results])
                } else {
                    setCurrentMovies(moviesData.results)
                }
                setNoResults(false);
            }
            setNumberOfMovies(moviesData.total_results)
        }


        fetchMovies();


    }, [pageNumber, searchQuery])

    const loadNextPage = () => {
        setPageNumber(currentPage => currentPage += 1)
    }




    return (
        <Flex
            backgroundColor='background.100'
            flexDirection='row'
            height='100%'
            justifyContent='center'
        >
            <Flex flexDirection='column' position='relative' margin={{base: '14.5rem 1rem 1rem 1rem', lg:'11.375rem 2rem 2rem 2rem'}} color='#fff' width={{base:'100%', lg:'80%'}}>
                <Text as='h1' fontSize={{base:'3xl', lg:'5xl'}} fontWeight='bold'>Search Results:</Text>
                <Flex justifyContent='space-between' marginBottom='0.5rem'>
                    <Text as='p'><span style={{ 'fontWeight': 'bold' }}>{numberOfMovies}</span> results</Text>
                </Flex>
                <MoviesGrid
                    currentItems={currentMovies.filter(m => m.vote_count >= 300)}
                    noResults={noResults}
                />
                <Button {...buttonStyles} width='10rem' margin='1rem 0' isDisabled={currentMovies.length === numberOfMovies ? true : false} onClick={() => loadNextPage()}>
                    <Text zIndex='1' color='#fff'>Load More</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default SearchResults