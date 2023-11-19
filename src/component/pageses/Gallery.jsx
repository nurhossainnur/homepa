import React, { useState } from 'react'

import Api from '../Gallery/Api'
import GalleryPhoto from '../Gallery/GalleryPhoto'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'
// import Modal from '../Gallery/Modal'
const Gallery = () => {

  return (
    <div className='gallery-container'>
         <p className="menu-slider-page"></p>
      <GalleryPhoto />
    <Api />
    <SliderText />
    <MainFooter />
    {/* <Modal /> */}
    {/* <ApiLight /> */}
    </div>
  )
}
export default Gallery









