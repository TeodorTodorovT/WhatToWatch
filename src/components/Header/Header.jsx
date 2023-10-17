import logoWithText from "../../common/images/logoWithText.png"
import { HOME_PAGE } from "../../common/routes"
import { Flex, Link as ChakraLink, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { NavLink as ReactRouterLink } from "react-router-dom"

import { headerStyles, logoStyles, inputGroupStyles, inputStyles, searchIconStyles, navStyles, navLinkStyles} from "./Header.theme"

const Header = () => {
  return (
    <Flex 
      {...headerStyles}
    >
      <ChakraLink
        as={ReactRouterLink}
        to={HOME_PAGE}
        variant= 'navLink'
        {...logoStyles}
      ><img src={logoWithText}/>
      </ChakraLink>
      <InputGroup {...inputGroupStyles}>
        <Input {...inputStyles}/>
        <InputRightElement>
          <Search2Icon {...searchIconStyles}/>
        </InputRightElement>
      </InputGroup>
      <Flex 
        {...navStyles}
        >
        <li>
          <ChakraLink
            as={ReactRouterLink}
            to='/movies'
            variant='navLink'
            {...navLinkStyles}
          >MOVIES</ChakraLink>
        </li>
        <li>
          <ChakraLink
            as={ReactRouterLink}
            to='/shows'
            variant='navLink'
            {...navLinkStyles}
          >SHOWS</ChakraLink>
        </li>
      </Flex>
    </Flex>
  )
}

export default Header