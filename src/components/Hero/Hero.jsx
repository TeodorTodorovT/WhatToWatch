import {Text, Flex } from "@chakra-ui/react"
import { heroContainer, heroTitleContainer, heroTitle } from "./Hero.theme"

/* eslint-disable react/prop-types */
const Hero = ({randomMovie}) => {


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
        <Text {...heroTitle}>
          Trusted movie recommendations.</Text>
      </Flex>
    </Flex>
  )
}

export default Hero