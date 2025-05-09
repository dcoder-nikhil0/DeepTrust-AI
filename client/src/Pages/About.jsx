import { Box } from '@mui/material'
import React from 'react'
import AbHero from '../Components/About/AbHero'
import Features from '../Components/About/Features'
import Team from '../Components/About/Team'
import FAQ from '../Components/About/FAQ'

const About = () => {
  return (
    <Box>
        <AbHero />
        <Features />
        <Team/>
        <FAQ />
    </Box>
  )
}

export default About