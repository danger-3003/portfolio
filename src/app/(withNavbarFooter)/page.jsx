import React from 'react'
import Home from '@/web-pages/Home';
import About from '@/components/About';
import Projects from '@/components/FeatureProjects';

function page() {
  return (
    <>
      <Home />
      <About />
      <Projects />
    </>
  )
}

export default page;