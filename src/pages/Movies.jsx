import { Box, Flex, Text } from "@chakra-ui/react"

const Movies = () => {
  return (
    <Flex 
        height='100vh' 
        width='100vw' 
        backgroundColor='background.100'
        overflow='auto'
    >
        <Flex flexDirection='column' position='sticky' top='200px' margin='2rem'>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
            <Text>FiltersFiltersFiltersFiltersFiltersFilters</Text>
        </Flex>
        <Flex flexDirection='column' position='relative' top='200px' margin='2rem'>
            <Text as='h1' fontSize='5xl'>The most popular movies to watch</Text>
            <Text as='p'>Good Movies To Watch On Netflix & Elsewhere</Text>
            <Flex>
                <Text as='p'>1030 movies</Text>
                <Flex justifyContent='space-between'>
                    <Text>Sort by</Text>
                    <Text>Popular</Text>
                    <Text>Top</Text>
                    <Text>New</Text>
                </Flex>
            </Flex>
            <Flex flexWrap='wrap'>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
                <Box width='300px' height='300px' backgroundColor='tomato' border='2px solid blue' flexBasis='33.33%'></Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Movies