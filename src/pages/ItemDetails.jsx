import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItem, getItemProviders, getItemTrailer, getSimilarItems } from "../services/movieService";
import { Box, Flex} from "@chakra-ui/react";

import SimilarItems from "../components/SimilarItems/SimilarItems";
import Trailer from "../components/Trailer/Trailer";
import ItemInformation from "../components/ItemInformation/ItemInformation";


const ItemDetails = () => {
    const { id, type } = useParams();
    const [item, setitem] = useState({})


    useEffect(() => {
        const fetchMovie = async () => {
            const movieData = await getItem(id, type);
            const providers = await getItemProviders(id, type);
            const trailer = await getItemTrailer(id, type);
            const similar = await getSimilarItems(id, type)
            setitem({ ...movieData, providers, trailer, similar });

        }
        fetchMovie();
    }, [id, type]);

    return (
        <Box backgroundColor='background.100' >
            <Flex gap='4rem' padding={{ base: '15rem 0', sm: '10rem 0' }} margin='0 2rem' flexDirection={{ base: 'column', lg: 'row' }} >
                <ItemInformation item={item} type={type}/>
                <Flex flexBasis='70%' flexDirection='column' gap='2rem'>
                    <Trailer item={item} />
                    <SimilarItems item={item} type={type}/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ItemDetails