export const headerStyles = {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    flexDirection: {
      base: 'column',
      sm: 'row',
    },
    gap: {
      base: '1rem',
      sm: '0'
    },
};

export const logoStyles = {
    transition: 'transform 500ms ease-in-out',
    position: 'relative',
    width: '100px',
    _hover: {
      transform: 'scale(1.1)'
    },
}

export const inputGroupStyles = {
    width:{
        base: '70%',
        sm: '30%',
      }
}

export const inputStyles = {
    variant:'flushed',
    placeholder:"Search for movies, TV shows...",
    size:'lg',
    color:'main.100',
    fontWeight:'bold',
    focusBorderColor:'main.100',
    _placeholder:{ 
        color: 'gray.300' 
    },
}

export const searchIconStyles = {
    color: 'main.100',
    cursor: 'pointer',
}

export const navStyles = {
    as: 'ul',
    listStyleType: 'none',
    gap: '2rem',
    fontWeight: 'black',
    fontSize: '2xl',
    color: 'white',
}

export const navLinkStyles = {
    _hover:{
        color: 'main.100'
    }
}