import { Flex, Text, Spinner } from "@chakra-ui/react";

const Trailer = ({ item }) => {
    return (
        <Flex width='100%' height={{ base: '20rem', md: '30rem', lg: '40rem' }}>
            {item.trailer?.success !== false ?
                <>
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
                </>
                :
                <Flex color='#fff' fontSize='3xl' justifyContent='center' alignItems='center'>
                    <Text>There was an error loading the trailer. Please try again.</Text>
                </Flex>
            }

        </Flex>
    )
}

export default Trailer