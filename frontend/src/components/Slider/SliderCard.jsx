import { Box } from '@chakra-ui/react'
import React from 'react'
import "../../styles/Slider.css"

function SliderCard() {
  return (
    <Box className='slider_card_container'>
      <Box className='slider_card_parent'>
        <Box>
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487386_sd.jpg;maxHeight=272;maxWidth=400" alt="iphone" />
        </Box>
        <Box>
            <p>Apple467-876nnsh h jh k ahbubnasn</p>
        </Box>
        <Box>
            <p>⭐⭐⭐⭐</p>
            <p>₹ 1,20,000</p>
        </Box>
      </Box>
    </Box>
  )
}

export default SliderCard
