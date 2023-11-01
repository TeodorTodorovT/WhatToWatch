import {extendTheme} from '@chakra-ui/react';
import colors from './colors.theme';
import breakpoints from './breakpoints.theme';


const theme = extendTheme({
  colors,
  // fonts,
  breakpoints,
  styles: {
    global: {

      '::-webkit-scrollbar': {
          width: "10px",
      },
      '::-webkit-scrollbar-track': {
          background: 'main.100',
      },
      '::-webkit-scrollbar-thumb': {
          background: 'main.200',
      }
    
    }}
});

export default theme;
