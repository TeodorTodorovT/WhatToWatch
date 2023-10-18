import { Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react"

const Movies = () => {
  return (
    <Flex 
        height='auto' 
        width='100vw' 
        backgroundColor='secondary.100'
        flexDirection='row'
        // overflow='auto'
    >

              <Accordion allowToggle 
                flexDirection='column' 
                position='sticky' 
                top='200px' 
                margin='2rem' 
                minWidth='300px' 
                maxWidth='300px' 
                alignSelf='flex-start' 
                boxShadow='1px 20px 100px 100px rgba(0,0,0,0.35)' 
                background= 'rgba(255, 255, 255, 0.16)'
                border-radius= '16px'
                box-shadow= '0 4px 30px rgba(0, 0, 0, 0.1)'
                backdrop-filter= 'blur(4.6px)'
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
              </Accordion>
        <Flex flexDirection='column' position='relative' top='150px' margin='2rem'>
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