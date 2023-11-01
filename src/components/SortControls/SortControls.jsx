import { Flex, Text } from "@chakra-ui/react"

const SortControlls = ({setPageNumber, setCurrentMovies, setMoviesSort, moviesSort}) => {

    const changeSortOrder = (e) => {
        if (e.target.id !== moviesSort) {
            setMoviesSort(e.target.id);
            setPageNumber(1);
            setCurrentMovies([]);
        }
    }

    return (
        <Flex gap='0.5rem'>
            <Text>Sort by:</Text>
            <Flex gap='0.2rem' onClick={(e) => changeSortOrder(e)}>
                <Text style={moviesSort === 'popularity.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='popularity.desc'>Popular</Text>
                <Text style={moviesSort === 'vote_average.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='vote_average.desc'>Top</Text>
                <Text style={moviesSort === 'primary_release_date.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='primary_release_date.desc'>New</Text>
            </Flex>
        </Flex>
    )
}

export default SortControlls