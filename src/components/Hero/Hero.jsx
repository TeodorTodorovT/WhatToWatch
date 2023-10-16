import { Text, Flex, Button, ButtonGroup } from "@chakra-ui/react"
import { heroContainer, heroTitleContainer, heroTitle, buttonStyles } from "./Hero.theme"

/* eslint-disable react/prop-types */
const Hero = ({ randomMovie }) => {


  return (
    <Flex
      background={
        `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.1)
      ),url(https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path})`}
      {...heroContainer}
    >
      <Flex {...heroTitleContainer}>
        <Text {...heroTitle}>Trusted movie recommendations.</Text>
        <ButtonGroup gap='1rem'>
          <Button {...buttonStyles} onClick={() => {window.location.href='#todays-movie'}}>
            <Text zIndex='1' color='#fff'>Todays Movie</Text>
          </Button>
          <Button {...buttonStyles}>
            <Text zIndex='1' color='#fff'>Random Movie</Text>
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  )
}

export default Hero