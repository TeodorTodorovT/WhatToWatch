import {
    Card,
    Image,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react"

const MovieCard = ({ movie }) => {
    return (
        <Card
            overflow='hidden'
            variant='elevated'
            flexBasis={{base: '100%', md: '50%', lg:'33.33%'}}
            color='#fff'
            borderRadius='0'
            width='300px'
            height='300px'

        >
            <Image
                position='absolute'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                objectFit='cover'
                objectPosition='center center'
                filter='brightness(80%)'
                width='100%'
                height='100%'
                transition='transform .5s'
                _hover={{
                    transform: 'scale(1.05)',
                }}
                fallbackSrc="/placeholder.jpg"

            />
            <Flex flexDirection='row' padding='0.5rem' justifyContent='space-between' gap='1rem'>
                <Heading size='md' position='relative'>{movie?.title || movie?.original_name} ({movie.release_date?.slice(0, 4) || movie.first_air_date?.slice(0,4)})</Heading>
                <Text
                    position='absolute'
                    backgroundColor='main.100'
                    bottom='0'
                    right='0'
                    width='4rem'
                    height='4rem'
                    padding='1.3rem 0 0 1.5rem'
                    borderRadius='50px 0 0 0'
                    fontWeight='black'
                    fontSize='lg'
                >
                {  
                    movie?.vote_average > 0 ?
                    movie?.vote_average?.toFixed(1) :
                    'N/A'
                }
                </Text>
            </Flex>
        </Card>
    )
}

export default MovieCard