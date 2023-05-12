import React from 'react'
import truck from '../images/truck.png'
import rectangle from '../images/Rectangle 400.png'
import vector from '../images/Vector 1vector.png'
import getInTouch from '../images/Group 318.png'
import explore from '../images/Explore.png'
import { Box, Text, chakra } from '@chakra-ui/react'
import '../index.css'

function Dashboard() {
  return (
    <div>
        <Box display='flex' w={1440} h={804}>
            <div>
                <Box ml={100} mt={33}>
                    <img src={truck} alt="truck"  />
                </Box>
                <Box w={345} h={207} mt={111} ml={100} position='absolute'>
                    <Text fontFamily='Source Sans Pro'  fontStyle='normal' lineHeight='111%' fontWeight={700}  fontSize={62} color='#0E2368'>
                        Discover the <chakra.span color='#E23744'>Best</chakra.span> Food and Drinks
                    </Text>
                </Box>
                <Box w={345} h={55} mt={344} ml={100} position='absolute'>
                    <Text fontFamily='open sans' lineHeight='167%' fontWeight={400} fontSize={16.44} color='#444957'>
                    Naturally made Healthcare Products for the better care & support of your body.
                    </Text>
                </Box>
                <Box w={190} h={63} mt={440} ml={97} position='absolute' >
                    <img src={explore} alt="explore button" />
                </Box>
            </div>
            <div>
                <Box ml={705} w={735} h={804} mt={5} position='absolute'>
                    <img src={rectangle} alt="pizza" />
                </Box>
                <Box w={752} h={839} ml={688} position='absolute'>
                    <img src={vector} alt="vector" />
                </Box>
                <Box h={36} w={99} mt={3} ml={1288.5} position='absolute'>
                    <img src={getInTouch} alt="button" />
                </Box>
            </div>
        </Box>
    </div>
  )
}

export default Dashboard