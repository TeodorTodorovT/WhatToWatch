export const todaysMovieContainer = {
    padding:'2rem',
    backgroundColor:'main.100',
    boxShadow:'1px -50px 122px 100px rgba(205,53,54,1)',
}

export const todaysMovieTitle = {
    textAlign: 'center',
    color: '#fff',
    fontSize: '5xl',
    fontWeight: 'bold',
    paddingBottom: '1rem',
    textShadow: '2px 2px 50px rgba(0,0,0,1)',
}

export const card = {
    direction:{ 
        base: 'column',
        md: 'row' 
    },
    boxShadow: '1px 1px 50px -11px rgba(0,0,0,0.75)'
}

export const cardImage = {
    objectFit: 'cover',
    maxWidth: {
      base: '100%',
      md: '60%',
      lg: '70%',
    }
}

export const cardContentContainer = {
    backgroundColor: 'secondary.100',
    color: '#fff',
}

export const cardTitle = {
    size: 'lg',
    fontWeight: 'bold',
}

export const cardText = {
    paddingY: '2',
    fontSize: {
        base: 'md',
        sm: 'xl'
    }
}

export const cardRating = {
    position: 'absolute',
    bottom: '0',
    right: '0',
    fontWeight: 'black',
    fontSize: '2xl',
    backgroundColor: 'main.100',
    width: '4.5rem',
    height: '4.5rem',
    padding: '1.5rem 0 0 1rem',
    borderRadius: '50px 0 0 0',
    transition:  'height 500ms ease-in-out, width 500ms ease-in-out, font-size 500ms ease-in-out',
    _hover: {               
      height: '5rem',
      width: '5rem',
      fontSize:'3xl'
    },
}

export const featureInfoContainer = {
    flexDirection: 'column',
    color: '#fff',
    margin: {
      base: '0.5rem',
      sm: '3rem',
      md: '5rem'
    },
    textAlign: 'center',
    textShadow: '2px 2px 50px rgba(0,0,0,1)',
}