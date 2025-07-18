import React from 'react'
import HomeBanner from './HomeBanner'
import HomeContent from './HomeContent'
import HomeSector from './HomeSector'
import Footer from './Footer'


function Home() {
    // {document.title = "Home | Swikar Charitable"}
  return (
    <div>
        <HomeBanner/>
        <HomeContent/>
        <HomeSector/>
        <Footer/>
      
    </div>
  )
}

export default Home