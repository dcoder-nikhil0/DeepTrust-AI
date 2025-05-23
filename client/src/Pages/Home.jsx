import { Box } from "@mui/material";
import React from "react";
import Hero from "../Components/Home/Hero";
import MediaUploadTabs from "../Components/Home/Upload";
import ResultSection from "../Components/Home/Result";
import FAQ from "../Components/About/FAQ";

const Home = () => {
  return (
    <Box>
      <MediaUploadTabs />
      <Hero />
      <FAQ />
    </Box>
  );
};

export default Home;
