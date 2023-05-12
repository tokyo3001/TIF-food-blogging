import { Box, Flex, Text } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import tomatoes from '../images/grilled-tomatoes.png'
import meal from '../images/meal-prep.png'
import meal2 from '../images/meal-prep2.png'
import corn from '../images/grill corn.png'
import supreme from '../images/supreme.png'
import soup from '../images/soup.png'
import arrow1 from '../images/image 1 (Traced)arrow (1).png'
import arrow2 from '../images/image 1 (Traced).svg'
import readMore from '../images/readmore.png'
import '../index.css'

function Articles() {
    const data = [
        {
          image: `${tomatoes}`,
          heading: 'Grilled  Tomatoes at Home',
          description:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          image: `${meal}`,
          heading: 'Snacks for Travel',
          description:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          image: `${meal2}`,
          heading: 'Post-workout Recipes',
          description:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          image: `${corn}`,
          heading: 'How To Grill Corn',
          description:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          image: `${supreme}`,
          heading: 'Crunchwrap Supreme',
          description:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
          image: `${soup}`,
          heading: 'Broccoli Cheese Soup',
          description:
            "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
      ];
    const [currentPage, setCurrentPage] = useState(1)
    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const [isNextDisabled, setIsNextDisabled] = useState(false)
    
    const articlesPerPage = 3

    const indexOfLastArticle = currentPage * articlesPerPage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
    // Adjusting the data based on the current page
    const currentArticles = data.slice(indexOfFirstArticle, indexOfLastArticle)

    // Moving to the next page
    const paginateNext = () => setCurrentPage(currentPage + 1)
    // Moving to the previous page
    const paginatePrev = () => setCurrentPage(currentPage - 1)

    useEffect(() => {
        // Disabling the previous button if user is at the first page
        if(indexOfFirstArticle > 0) {
            setIsPrevDisabled(false)
        } else {
            setIsPrevDisabled(true)
        }

        // Disabling the next button if user is at the last page
        if(indexOfLastArticle === data.length) {
            setIsNextDisabled(true)
        } else {
            setIsNextDisabled(false)
        }
    }, [indexOfFirstArticle, indexOfLastArticle])


  return (
    <div>
        <Box w={1225} h={679} mt={158} ml={108} mb={158} >
            <div>
                <Box w={461} h={84}>
                    <Text fontFamily='Source Sans Pro' fontStyle='normal' fontWeight={600} fontSize={56} lineHeight='75%' letterSpacing='0.04em' color='#0E2368'>Latest Articles</Text>
                </Box>
            </div>
            <Box display='flex'>
                {currentArticles.map(item => {
                    return (
                        <Flex>
                            <div>
                                <Box w={381} h={554} mt={41} ml={108} border={1.37} pt={27} pl={27} pr={28} borderColor='rgba(147, 162, 211, 0.38)' borderStyle='solid' borderRadius={20.93}>
                                    <Box position='absolute' w={326} h={257} borderRadius={21}>
                                        <img src={item.image} alt='img'/>
                                    </Box>
                                    <Box >
                                        <Text w={285} h={27} mt={319.51} fontFamily='Poppins' fontStyle='normal' fontWeight={700} fontSize={21} lineHeight='129%' color='#0E2368'>
                                            {item.heading}
                                        </Text>
                                        <Text w={295} h={81} fontFamily='Open Sans' fontStyle='normal' fontWeight={400} fontSize={15} lineHeight='180%' letterSpacing='-0.02em' color='#444957'>
                                            {item.description}
                                        </Text>
                                        <Box h={36} w={79} mt={30.55}>
                                        <img alt='Read more' src={readMore}/>
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        </Flex>
                    )
                })}
            </Box>
            <div>
               <Flex >
                <Box w={8} pl={2} pt={1} mt={10} justify='center' h={29} ml={663} boxSizing='border-box' position='absolute' border='1px solid #AFAFAF' borderRadius={5}>
                    <button onClick={paginatePrev} disabled={isPrevDisabled}><img src={arrow1} alt='arrow'/></button>
                </Box>
                <Box w={30} h={28} ml={705} mt={10} position='absolute' fontFamily='Source Sans Pro' fontStyle='normal' fontWeight='400' fontSize={22} lineHeight='124%' color='#424961'>
                    <p>{currentPage}/2</p>
                </Box>
                <Box w={8} pl={2} pt={1} mt={10} justify='center' h={29} ml={749} boxSizing='border-box' position='absolute' border='1px solid #AFAFAF' borderRadius={5}>
                    <button onClick={paginateNext} disabled={isNextDisabled}><img src={arrow2} alt='arrow'/></button>
                </Box>
               </Flex>
            </div>
        </Box>
    </div>
  )
}

export default Articles