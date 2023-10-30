import { Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getMovies } from "../services/movieService"
import { buttonStyles } from "../components/Hero/Hero.theme"
import MovieCard from "../components/movieCard/MovieCard"
import { genres } from "../common/genres"

const Movies = () => {

    const [currentMovies, setCurrentMovies] = useState([]);
    const [numberOfMovies, setNumberOfMovies] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [moviesSort, setMoviesSort] = useState('popularity.desc');
    const [minYearValue, setMinYearValue] = useState(1901);
    const [maxYearValue, setMaxYearValue] = useState(2023);
    const [yearRange, setYearRange] = useState([1901, 2023]);
    const [minScoreValue, setMinScoreValue] = useState(1);
    const [maxScoreValue, setMaxScoreValue] = useState(10);
    const [scoreRange, setScoreRange] = useState([1, 10]);
    const [selectedGeneres, setSelectedGeneres] = useState([]);
    const [noResults, setNoResults] = useState(false);


    // console.log(sliderValue);

    useEffect(() => {

        const fetchMovies = async () => {
            const moviesData = await getMovies(pageNumber, moviesSort, yearRange[0], yearRange[1], scoreRange[0], scoreRange[1], selectedGeneres.join(','))
            console.log(moviesData);

            if(moviesData.totalMovies === 0) {
                setNoResults(true);
            }else{
                if (currentMovies.length > 0) {
                    setCurrentMovies(oldMoviesList => [...oldMoviesList, ...moviesData.movies])
                } else {
                    setCurrentMovies(moviesData.movies)
                }
                setNoResults(false);
            }
            setNumberOfMovies(moviesData.totalMovies)
        }


        fetchMovies();


    }, [pageNumber, moviesSort, yearRange, scoreRange, selectedGeneres])

    const loadNextPage = () => {
        setPageNumber(currentPage => currentPage += 1)
    }

    const changeSortOrder = (e) => {
        if (e.target.id !== moviesSort) {
            setMoviesSort(e.target.id);
            setPageNumber(1);
            setCurrentMovies([]);
        }
    }

    const changeYearRange = () => {
        setYearRange([minYearValue, maxYearValue])
        setPageNumber(1);
        setCurrentMovies([]);
    }

    const changeScoreRange = () => {
        setScoreRange([minScoreValue, maxScoreValue])
        setPageNumber(1);
        setCurrentMovies([]);
    }

    const toggleGenre = (e) => {
        const genreId = Object.keys(genres).find(key => genres[key].genre === e.target.innerText);
        console.log(genreId);
        if(selectedGeneres.includes(genreId)) {
            setSelectedGeneres(currentGenres => currentGenres.filter(genre => genre !== genreId))
        }else{
            setSelectedGeneres(currentGenres => [...currentGenres, genreId]);
        }
        setPageNumber(1);
        setCurrentMovies([]);

    }

    console.log(selectedGeneres);
    console.log(noResults);


    return (
        <Flex
            backgroundColor='#121212'
            flexDirection='row'
            height='100%'

        >

            <Accordion allowToggle
                flexDirection='column'
                position='sticky'
                top='10rem'
                margin='14.5rem 2rem 2rem 2rem'
                width={{ base: '70%', lg: '20%' }}
                alignSelf='flex-start'
                background='rgba(255, 255, 255, 0.16)'
                boxShadow='0 4px 10px rgba(0, 0, 0, 0.1)'
                backdropFilter='blur(4.6px)'
                border='1px solid rgba(255, 255, 255, 0.1)'
                // display={{base: 'none', lg:'flex'}}
                zIndex='997'
            >
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' color='#fff' fontWeight='bold'>
                                Year
                            </Box>
                            <AccordionIcon color='#fff' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel padding='1rem 2rem'>
                        <RangeSlider
                            aria-label={['min', 'max']}
                            defaultValue={[1901, 2023]}
                            min={1901}
                            max={2023}
                            onChange={(val) => { setMinYearValue(val[0]); setMaxYearValue(val[1]); }}
                            onChangeEnd={() => changeYearRange()}
                        >
                            <RangeSliderTrack height='.5rem' borderRadius='30px'>
                                <RangeSliderFilledTrack backgroundColor='main.100' />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} value={minYearValue} textAlign='center'
                                backgroundColor='main.100'
                                color='white'


                            ><Text fontSize='xs' margin='0 0 2.5rem -2rem'>{minYearValue}</Text></RangeSliderThumb>
                            <RangeSliderThumb index={1} value={maxYearValue} textAlign='center'
                                backgroundColor='main.100'
                                color='white'
                            ><Text fontSize='xs' margin='0 0 2.5rem 2rem'>{minYearValue === maxYearValue ? '' : maxYearValue}</Text></RangeSliderThumb>
                        </RangeSlider>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' color='#fff' fontWeight='bold'>
                                Score
                            </Box>
                            <AccordionIcon color='#fff' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel padding='1rem 2rem'>
                        <RangeSlider
                            aria-label={['min', 'max']}
                            defaultValue={[1, 10]}
                            min={1}
                            max={10}
                            onChange={(val) => { setMinScoreValue(val[0]); setMaxScoreValue(val[1]); }}
                            onChangeEnd={() => changeScoreRange()}
                        >
                            <RangeSliderTrack height='.5rem' borderRadius='30px'>
                                <RangeSliderFilledTrack backgroundColor='main.100' />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} value={minScoreValue} textAlign='center'
                                backgroundColor='main.100'
                                color='white'


                            ><Text fontSize='xs' margin='0 0 2.5rem 0'>{minScoreValue}</Text></RangeSliderThumb>
                            <RangeSliderThumb index={1} value={maxScoreValue} textAlign='center'
                                backgroundColor='main.100'
                                color='white'
                            ><Text fontSize='xs' margin='0 0 2.5rem 0'>{minScoreValue === maxScoreValue ? '' : maxScoreValue}</Text></RangeSliderThumb>
                        </RangeSlider>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' color='#fff' fontWeight='bold'>
                                Genre
                            </Box>
                            <AccordionIcon color='#fff' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel padding='0'>
                        <Flex 
                            flexDirection='column' 
                            maxHeight='300px' 
                            overflowY='scroll' 
                            sx={{
                                "::-webkit-scrollbar": {
                                    display: "none",
                                },
                            }}
                        >
                            {

                                Object.values(genres).map(genre => (<Box key={genre.id} width='100%' padding='0.5rem 2rem' cursor='pointer' color='#fff' marginTop='0.2rem' _hover={{ 'backgroundColor': 'main.100' }} backgroundColor={selectedGeneres.includes(genre.id.toString()) ? 'main.100' : 'none'} onClick={(e) => toggleGenre(e)}>{genre.genre}</Box>))
                            }


                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

            </Accordion>
            <Flex flexDirection='column' position='relative' margin='11.375rem 2rem 2rem 2rem' color='#fff' width='80%'>
                <Text as='h1' fontSize='5xl' fontWeight='bold'>The most popular movies to watch</Text>
                <Text as='p'>Good Movies To Watch On Netflix & Elsewhere</Text>
                <Flex justifyContent='space-between' marginBottom='0.5rem'>
                    <Text as='p'><span style={{ 'fontWeight': 'bold' }}>{numberOfMovies}</span> movies</Text>
                    <Flex gap='0.5rem'>
                        <Text>Sort by:</Text>
                        <Flex gap='0.2rem' onClick={(e) => changeSortOrder(e)}>
                            <Text style={moviesSort === 'popularity.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='popularity.desc'>Popular</Text>
                            <Text style={moviesSort === 'vote_average.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='vote_average.desc'>Top</Text>
                            <Text style={moviesSort === 'primary_release_date.desc' ? { 'color': 'red', 'fontWeight': 'bold' } : { 'color': 'darkgray' }} cursor='pointer' id='primary_release_date.desc'>New</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexWrap='wrap'>
                    {
                        currentMovies.length > 0 && !noResults ?
                            currentMovies?.map(movie => {
                                return (
                                    <MovieCard movie={movie} key={movie.id} />
                                )
                            }) 
                            : currentMovies.length === 0 && noResults ?
                                <Text
                                    fontSize='2xl'
                                    margin='300px auto' 
                                    color='main.100' 
                                    fontWeight='bold'
                                >No Results</Text>
                            :   <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='main.100'
                            size='xl'
                            margin='300px auto'
                        />
                            
                    }
                </Flex>
                <Button {...buttonStyles} width='10rem' margin='1rem 0' onClick={() => loadNextPage()}>
                    <Text zIndex='1' color='#fff'>Load More</Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Movies