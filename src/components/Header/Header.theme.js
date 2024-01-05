export const headerStyles = {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.35)',
    position: 'fixed',
    width: '100%',
    flexDirection: {
      base: 'column',
      sm: 'row',
    },
    gap: {
      base: '1rem',
      sm: '0'
    },
    boxShadow: '1px 20px 100px 100px rgba(0,0,0,0.35)',
    padding: '0.5rem 0',
    zIndex: '100',
};

export const active = {
    visibility: "visible",
    transition: "all 0.5s"
}

export const hidden = {
    visibility: "hidden",
    transition: "all 0.5s",
    transform: "translateY(-100%)"
}

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
        color: 'gray.200' 
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