import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovie, getMovieProviders } from "../services/movieService";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { isoLangs } from "../common/isoLangs";


const ItemDetails = ({type = 'movie'}) => {
    const {id} = useParams();
    const [item, setitem] = useState({})

    
    useEffect(() => {
        const fetchMovie = async () =>{
            const movieData = await getMovie(id);
            const movieProviders = await getMovieProviders(id);
            setitem({...movieData, movieProviders});
        }
        fetchMovie();
    },[id]);
    console.log();
    return (
        <Box backgroundColor='background.100' >
            <Flex gap='4rem' padding='10rem 0' margin='0 2rem'>
                <Flex backgroundColor='#343434' flexDirection='column' flexBasis='20%'>
                    <Image src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} width='100%' fallbackSrc="/placeholder.jpg"/>
                    <Flex flexDirection='column' margin='0.5rem 1rem' >
                        <Text as='h2' fontSize='lg' fontWeight='black' color='#fff' padding='0.5rem 0'>{item?.original_title}</Text>
                        <Text as='h3' fontSize='md' fontWeight='bold' color='#C0C0C0' padding='0 0 1rem 0'>{item.tagline}</Text>
                        <Flex gap='0.5rem'>
                            <Text color='#e1e1e1' fontWeight='normal'>Score: </Text>
                            <Text color='#afafaf'>{item?.vote_average?.toFixed(1)}</Text>
                        </Flex>
                        <Flex gap='0.5rem'>
                            <Text color='#e1e1e1' fontWeight='normal'>Language: </Text>
                            <Text color='#afafaf'>{isoLangs[item?.original_language]?.name}</Text>
                        </Flex>
                        <Flex gap='0.5rem'>
                            <Text color='#e1e1e1' fontWeight='normal'>Genere:</Text>
                            <Text color='#afafaf'>{item?.genres?.map(genre =>{ return `${genre.name}, `}).slice(0)}</Text>
                        </Flex>
                        <Flex gap='0.5rem'>
                            <Text color='#e1e1e1' fontWeight='normal'>Released on:</Text>
                            <Text color='#afafaf'>{item?.release_date}</Text>
                        </Flex>
                        <Flex gap='0.5rem'>
                            <Text color='#e1e1e1' fontWeight='normal'>Duration:</Text>
                            <Text color='#afafaf'>{item?.runtime} mins</Text>
                        </Flex>
                        <Flex flexDirection='column'>
                            <Text color='#e1e1e1' fontWeight='normal'>Overview:</Text>   
                            <Text color='#afafaf'>{item?.overview}</Text>
                        </Flex>
                        <Flex flexDirection='column'>
                            <Text color='#e1e1e1' fontWeight='normal'>Available on:</Text>
                            <Text color='#afafaf'>{item?.movieProviders?.results?.BG?.buy[0]?.provider_name}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <Box flexBasis='70%' backgroundColor='red'>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ItemDetails