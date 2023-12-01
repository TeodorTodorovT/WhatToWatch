import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItem, getItemProviders, getItemTrailer, getSimilarItems } from "../services/movieService";
import { Box, Flex } from "@chakra-ui/react";

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
        <Box background='background.100' overflow='hidden' position='relative'>

            <Box
                position='absolute'
                top='0'
                left='-20%'
                backgroundColor='background.200'
                borderRadius='30% 70% 70% 30% / 30% 30% 70% 70% '
                width='50%'
                height='100%'
                zIndex='0'
            />

            <Box
                position='absolute'
                bottom='0'
                right='-20%'
                backgroundColor='background.200'
                borderRadius='70% 30% 31% 69% / 36% 49% 51% 64% '
                width='40%'
                height='50%'
                zIndex='0'
            />

            

            <Flex gap='4rem' padding={{ base: '15rem 0', sm: '10rem 0' }} margin='0 2rem' flexDirection={{ base: 'column', lg: 'row' }} >
                <ItemInformation item={item} type={type} />
                <Flex flexBasis='70%' flexDirection='column' gap='2rem' zIndex='100'>
                    <Trailer item={item} />
                    <SimilarItems item={item} type={type} />
                </Flex>
            </Flex>
        </Box>
    )
}

export default ItemDetails