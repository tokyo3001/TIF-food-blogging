import React from 'react'
import fb from '../images/Path 1fb.png'
import insta from '../images/Path 3insta.png'
import truck from '../images/truck.png'
import twitter from '../images/Path 2twitter.png'
import { Box, Flex, Text } from '@chakra-ui/react'
import '../index.css'

function Footer() {
  return (
    <div>
        <Box display='flex' w={1440} h={362} mt={65} bgColor='#F8F8F8' position='absolute'>
            <div>
                <Box w={161} h={125} ml={104} mt={123}>
                    <img src={truck} alt='truck' />
                </Box>
            </div>
            <div>
                <Box>
                    <Text position='absolute' fontFamily='Source Sans Pro' mt={84} ml={210} fontStyle='normal' fontWeight={600} fontSize={18.84} lineHeight='144%'letterSpacing='0.03em' color='#0E2368'>Contact Us</Text>
                    <Text position='absolute' w={217} h={69} ml={211} mt={125} fontFamily='Source Sans Pro' fontSize={14.65} fontStyle='normal' fontWeight={400} lineHeight='157%' color='#646874'>
                    <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                    Market, XYZ-343434</p>
                    </Text>
                    <Text position='absolute' w={217} h={69} ml={211} mt={209} fontFamily='Source Sans Pro' fontSize={14.65} fontStyle='normal' fontWeight={400} lineHeight='157%' color='#646874'>
                        example2020@gmail.com
                    </Text>
                    <Text position='absolute' w={217} h={69} ml={211} mt={247} fontFamily='Source Sans Pro' fontSize={14.65} fontStyle='normal' fontWeight={400} lineHeight='157%' color='#646874'>
                        (904) 443-0343
                    </Text>
                </Box>
            </div>
            <div>
                <Box ml={634} fontFamily='Source Sans Pro' fontStyle='normal' fontSize={14.65} color='#646874'>
                    <Text w={43} h={27} color='#0E2368' mt={84} fontWeight={600} fontSize={18.84} lineHeight='144%' letterSpacing='0.03em'>More</Text >
                    <Text w={75} h={26} mt={2}  fontWeight={400} lineHeight='186%' >About Us</Text>
                    <Text w={153} h={26} lineHeight='186%'>Products</Text>
                    <Text h={26} w={86} lineHeight='186%'>Career</Text>
                    <Text h={26} w={94} lineHeight='186%'>Contact Us</Text>
                </Box>
            </div>
            <div>
                <Box>
                  <Text mt={84} position='absolute' w={129} h={27} ml={156} fontFamily='Source Sans Pro' fontSize={19} fontStyle='normal' fontWeight={600} lineHeight='142%' letterSpacing='0.03em' color='#0E2368'>
                    Social Links
                  </Text>
                  <Box display='flex'>
                    <div>
                        <Box position='absolute' left='83.89%' right='14.65%' top='122' bottom='26.45%'>
                        <img alt='' src={insta}/>
                        </Box>
                    </div>
                    <div>
                        <Box position='absolute' left='87.89%' right='10.64%' top='122' bottom='26.48%'>
                            <img alt='' src={twitter}/>
                        </Box>
                    </div>
                    <div>
                        <Box position='absolute' left='91.82%' right='7.42%' top='122' bottom='26.45%'>
                            <img alt='' src={fb}/>
                        </Box>    
                    </div>
                  </Box>
                  <Text position='absolute' w={197} h={25} ml={147} mt={245} fontFamily='Robot' fontStyle='normal' fontWeight={400} fontSize={14.65} lineHeight='171%' textAlign='center' color='#828B9C'>
                    © 2022 Food Truck Example</Text>
                </Box>
            </div>
        </Box>
    </div>
  )
}

export default Footer