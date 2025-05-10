import { Box } from '@mui/material'
import React from 'react'
import Hero from '../Components/Home/Hero'
import MediaUploadTabs from '../Components/Home/Upload'
import ResultSection from '../Components/Home/Result'

const Home = () => {
  return (
    <Box>
      <MediaUploadTabs />
      {/* <ResultSection /> */}
      <Hero/>
    </Box>
  )
}

export default Home