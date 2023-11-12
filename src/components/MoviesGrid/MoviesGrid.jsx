import { Flex, Text, Spinner } from "@chakra-ui/react"
import MovieCard from "../movieCard/MovieCard"

const MoviesGrid = ({currentItems, noResults}) => {

    return (
        <Flex flexWrap='wrap'>
            {
                currentItems.length > 0 && !noResults ?
                    currentItems?.map(movie => {
                        return (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    })
                    : currentItems.length === 0 && noResults ?
                        <Text
                            fontSize='2xl'
                            margin='300px auto'
                            color='main.100'
                            fontWeight='bold'
                        >No Results</Text>
                        : <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='main.100'
                            size='xl'
                            margin='300px auto'
                        />

            }
        </Flex>
    )
}

export default MoviesGrid