import { 
    Accordion, 
    AccordionItem, 
    AccordionButton, 
    AccordionIcon, 
    AccordionPanel, 
    RangeSlider, 
    RangeSliderTrack, 
    RangeSliderFilledTrack, 
    RangeSliderThumb, 
    Text, 
    Box, 
    Flex 
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { genres } from '../../common/genres'


const FilterControlls = ({setPageNumber, setCurrentMovies, setMoviesFilter}) => {


    const [minYearValue, setMinYearValue] = useState(1901);
    const [maxYearValue, setMaxYearValue] = useState(2023);
    const [yearRange, setYearRange] = useState([1901, 2023]);
    const [minScoreValue, setMinScoreValue] = useState(1);
    const [maxScoreValue, setMaxScoreValue] = useState(10);
    const [scoreRange, setScoreRange] = useState([1, 10]);
    const [selectedGeneres, setSelectedGeneres] = useState([]);
    
    useEffect(() => {
      setMoviesFilter({yearRange, scoreRange, selectedGeneres})
    }, [yearRange, scoreRange, selectedGeneres, setMoviesFilter])
    


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



  return (
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
  )
}

export default FilterControlls