import { Box, Text } from '@chakra-ui/react'
import aboutImage from '../images/about.png'
import readMore from '../images/Group 297-3.png'
import React from 'react'

function About() {
  return (
    <div>
        <Box display='flex' bgGradient='linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);' mt={186} h={467}>
            <div>
                <Box w={384} h={468} ml={205} position='absolute'>
                    <img src={aboutImage} alt="about" />
                </Box>
            </div>
            <div>
                <Box ml={789}>
                    <Text mt={104} fontFamily='Poppins' fontWeight={600} fontStyle='normal' fontSize={45} lineHeight='60%' color='#0E2368'>About Us</Text>
                    <Text mt={24.51} w={447} h={138} fontFamily='open sans' fontStyle='normal' fontWeight='400' fontSize={15} lineHeight='180%' color='#444957'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                    </Text>
                    <Box w={132} h={42} mt={21.59}>
                        <img src={readMore} alt="read more" />
                    </Box>
                </Box>
            </div>
        </Box>
    </div>
  )
}

export default About