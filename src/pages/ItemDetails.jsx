import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItem, getItemProviders, getItemTrailer, getSimilarItems } from "../services/movieService";
import { Box, Flex, Image, Text, Spinner } from "@chakra-ui/react";
import { isoLangs } from "../common/isoLangs";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";


const ItemDetails = () => {
    const { id, type } = useParams();
    const [item, setitem] = useState({})
    // const [similarNoResults, setSimilarNoResults] = useState(false);
    // console.log(similarNoResults);


    useEffect(() => {
        const fetchMovie = async () => {
            const movieData = await getItem(id, type);
            const providers = await getItemProviders(id, type);
            const trailer = await getItemTrailer(id, type);
            const similar = await getSimilarItems(id, type)
            setitem({ ...movieData, providers, trailer, similar});

        }
        fetchMovie();
    }, [id, type]);

    console.log(item);

    return (
        <Box backgroundColor='background.100' >
            <Flex gap='4rem' padding='10rem 0' margin='0 2rem'>
                <Flex flexDirection='column' flexBasis='20%'>
                    <Image src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} width='100%' fallbackSrc="/placeholder.jpg" />
                    <Flex flexDirection='column' margin='0.5rem 0'>
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
                            <Text color='#afafaf'>{item?.genres?.map(genre => { return `${genre.name}, ` }).slice(0)}</Text>
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
                        {item?.providers?.results?.US?.buy &&
                            <Flex flexDirection='column'>
                                <Text color='#e1e1e1' fontWeight='normal'>Available to buy on:</Text>
                                <Text color='#e1e1e1' fontWeight='thin' fontSize='xs'>*US region*</Text>
                                <Flex flexWrap='wrap' gap='4px'>
                                    {item?.providers?.results?.US?.buy.map(provider =>
                                        <Image key={provider.link + provider.logo_path} src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} width='20%' fallbackSrc="/placeholder.jpg" />
                                    )}
                                </Flex>
                            </Flex>
                        }
                        {item?.providers?.results?.US?.rent &&
                            <Flex flexDirection='column'>
                                <Text color='#e1e1e1' fontWeight='normal'>Available to rent on:</Text>
                                <Text color='#e1e1e1' fontWeight='thin' fontSize='xs'>*US region*</Text>
                                <Flex flexWrap='wrap' gap='4px'>
                                    {item?.providers?.results?.US?.rent.map(provider =>
                                        <Image key={provider.link + provider.logo_path} src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} width='20%' fallbackSrc="/placeholder.jpg" />
                                    )}
                                </Flex>
                            </Flex>
                        }
                        {item?.providers?.results?.US?.buy === undefined && item?.providers?.results?.US?.rent === undefined &&
                            <Text color='#e1e1e1' fontWeight='normal'>*Not available online</Text>
                        }




                    </Flex>
                </Flex>
                <Flex flexBasis='70%' flexDirection='column' gap='2rem'>
                    <Flex width='100%' height='40rem'>
                        {item.trailer && item.trailer.length > 0 ?
                            <iframe width='100%' height='100%'
                                src={`https://www.youtube.com/embed/${item?.trailer[0]?.key}`}

                            />

                            : item.trailer && item.trailer.length === 0 ?
                                <Text
                                    fontSize='2xl'
                                    margin='300px auto'
                                    color='main.100'
                                    fontWeight='bold'
                                >No Trailer Available</Text>
                                :
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='main.100'
                                    size='xl'
                                    margin='300px auto'
                                />

                        }

                    </Flex>
                    <Flex flexDirection='column'>
                        <Text fontSize='2xl' fontWeight='black' color='#fff'>You might also like:</Text>
                        <MoviesGrid currentItems={item?.similar?.results.filter(item => item.vote_count >= 1000)} noResults={item?.similar?.results.filter(item => item.vote_count >= 1000).length === 0 ? true : false} type={type} />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ItemDetails