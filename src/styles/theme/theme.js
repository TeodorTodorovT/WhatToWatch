import {extendTheme} from '@chakra-ui/react';
import colors from './colors.theme';
import breakpoints from './breakpoints.theme';
// import fonts from './fonts.theme';


const theme = extendTheme({
  colors,
  // fonts,
  breakpoints,
});

export default theme;
