import { Flex, Text } from "@chakra-ui/react"

const SortControlls = ({setPageNumber, setCurrentItems, setItemsSort, itemsSort}) => {

    const changeSortOrder = (e) => {
        if (e.target.id !== itemsSort) {
            setItemsSort(e.target.id);
            setPageNumber(1);
            setCurrentItems([]);
        }
    }

    return (
        <Flex gap='0.5rem'>
            <Text>Sort by:</Text>
            <Flex gap='0.2rem' onClick={(e) => changeSortOrder(e)}>
                <Text style={itemsSort === 'popularity.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='popularity.desc'>Popular</Text>
                <Text style={itemsSort === 'vote_average.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='vote_average.desc'>Top</Text>
                <Text style={itemsSort === 'primary_release_date.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='primary_release_date.desc'>New</Text>
            </Flex>
        </Flex>
    )
}

export default SortControlls