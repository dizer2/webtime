import React from 'react'

import Home from '../components/Home/Home'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Portfolio from '../components/Portfolio/Portfolio'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'
import { ParallaxText } from '../components/UI/ParallaxProps/ParallaxProps.tsx'



const Index = () => {
  return (
    <div>
        <Home/>
        <About/>
        <section className='text-animation'>
            <ParallaxText baseVelocity={-3}>Website Development • Custom Web Design</ParallaxText>
            <ParallaxText baseVelocity={2}>Posters • Billboards • Mobile Design • Business card • Leaflets </ParallaxText>
        </section>
        <Services/>
        <Portfolio />
        <Contacts/>
        <Footer />
    </div>
  )
}

export default Index