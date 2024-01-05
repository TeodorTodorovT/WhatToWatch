import { Box, keyframes } from "@chakra-ui/react"

const Curtains = () => {
    const openRight = keyframes`
    from {right: 0 }
    to {right: -100% }
    `
    const openLeft = keyframes`
    from {left: 0 }
    to {left: -100% }
    `
    const openRightAnimation = `${openRight} 1 2s forwards 1s`
    const openLeftAnimation = `${openLeft} 1 2s forwards 1s`

    return (
        <Box>
            <Box    
                    position='absolute'
                    right='0'
                    width='100%'
                    height='200%'
                    animation={openRightAnimation}
            >
                <Box
                    position='absolute'
                    top='-30%'
                    right='-10%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='990'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-20%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='991'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-30%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='992'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-40%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='993'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-50%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='994'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-60%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='995'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-70%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='996'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-80%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='997'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-90%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='998'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    right='-100%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 0% 100% / 0% 0% 0% 100% '
                    width='100%'
                    height='100%'
                    zIndex='999'
                />
            </Box>

            <Box  position='absolute'
                    left='0'
                    width='100%'
                    height='200%'
                    animation={openLeftAnimation}
                    
                >
                <Box
                    position='absolute'
                    top='-30%'
                    left='-10%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='990'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-20%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='991'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-30%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='992'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-40%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='993'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-50%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='994'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-60%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='995'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-70%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='996'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-80%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='997'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-90%'
                    backgroundColor='main.200'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='998'
                />
                <Box
                    position='absolute'
                    top='-30%'
                    left='-100%'
                    backgroundColor='main.100'
                    borderRadius='50% 0% 100% 0% / 0% 0% 100% 100%  '
                    width='100%'
                    height='100%'
                    zIndex='999'
                />
            </Box>
        </Box>
    )
}

export default Curtains