import { Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Image, Card, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getMovies } from "../services/movieService"
import { buttonStyles } from "../components/Hero/Hero.theme"

const Movies = () => {

    const [currentMovies, setCurrentMovies] = useState([]);
    const [numberOfMovies, setNumberOfMovies] = useState(0);
 
    useEffect(() => {
    
        const fetchMovies = async () => {
            const moviesData = await getMovies()
            if(currentMovies.length > 0) {
                setCurrentMovies(oldMoviesList => moviesData.movies.forEach(movie => oldMoviesList.push(movie)))
            }else {
                setCurrentMovies(moviesData.movies)
            }
            setNumberOfMovies(moviesData.totalMovies)
        }
      

        fetchMovies();
    

    }, [])
console.log(currentMovies);

  return (
    <Flex   
        backgroundColor='secondary.100'
        flexDirection='row'
        height='100%'
        
    >

              <Accordion allowToggle 
                flexDirection='column' 
                position='sticky'       
                margin='14.5rem 2rem 2rem 2rem' 
                width='20%'
                alignSelf='flex-start' 
                background= 'rgba(255, 255, 255, 0.16)'
                boxShadow= '0 4px 10px rgba(0, 0, 0, 0.1)'
                backdropFilter= 'blur(4.6px)'
                border= '1px solid rgba(255, 255, 255, 0.1)'
                >
                  <AccordionItem >
                      <h2>
                          <AccordionButton>
                              <Box as="span" flex='1' textAlign='left' color='#fff' fontWeight='bold'>
                                  Providers
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                      </h2>
                      <AccordionPanel>
                          <Flex flexDirection='row' flexWrap='wrap' gap='5px'>
                            <Box width='80px' height='50px' backgroundColor='tomato'></Box>
                            <Box width='80px' height='50px' backgroundColor='tomato'></Box>
                            <Box width='80px' height='50px' backgroundColor='tomato'></Box>
                            <Box width='80px' height='50px' backgroundColor='tomato'></Box>
                            <Box width='80px' height='50px' backgroundColor='tomato'></Box>
                            <Box width='80px' height='50px' backgroundColor='tomato'></Box>
                          </Flex>
                      </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                      <h2>
                          <AccordionButton>
                              <Box as="span" flex='1' textAlign='left'>
                                  Section 2 title
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                      </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                      <h2>
                          <AccordionButton>
                              <Box as="span" flex='1' textAlign='left'>
                                  Section 2 title
                              </Box>
                              <AccordionIcon />
                          </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                      </AccordionPanel>
                  </AccordionItem>
              </Accordion>
        <Flex flexDirection='column' position='relative' margin='11.375rem 2rem 2rem 2rem' color='#fff' width='80%'>
            <Text as='h1' fontSize='5xl' fontWeight='bold'>The most popular movies to watch</Text>
            <Text as='p'>Good Movies To Watch On Netflix & Elsewhere</Text>
            <Flex justifyContent='space-between' marginBottom='0.5rem'> 
                <Text as='p'><span style={{'font-weight': 'bold'}}>{numberOfMovies}</span> movies</Text>
                <Flex gap='0.5rem'>
                    <Text>Sort by:</Text>
                    <Flex gap='0.2rem'>
                        <Text color='red' fontWeight='bold'>Popular</Text>
                        <Text color='darkgray'>Top</Text>
                        <Text color='darkgray'>New</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexWrap='wrap'>
                {currentMovies?.map(movie => {
                    return (
                        <Card
                            key={movie.id}
                            overflow='hidden'
                            variant='elevated'
                            flexBasis='33.33%'
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
                                filter= 'brightness(80%)'
                                width='100%'
                                height='100%'
                                transition='transform .5s'
                                
                                _hover= {{
                                    transform: 'scale(1.05)',
                                    // filter: 'brightness(50%)'
                                }}
                            />
                            <Flex flexDirection='column' padding='0.5rem'>
                                <Heading size='md' position='relative'>{movie.title} ({movie.release_date.slice(0,4)})</Heading>
                                {/* <Text position='relative'>
                                    {movie.overview}
                                </Text> */}
                            </Flex>
                               


                            
                            </Card>
                    )
                })}
            </Flex>
            <Button {...buttonStyles} width='10rem' margin='1rem 0'>
            <Text zIndex='1' color='#fff'>Load More</Text>
            </Button>
        </Flex>
    </Flex>
  )
}

export default Movies