import React from 'react'
import BanquetPhoto from '../BanquetPages/BanquetPhoto'
import Filter from '../BanquetPages/Filter'
import SliderText from '../MenuPage/SliderText'
import MainFooter from '../Footer/MainFooter'
// import Modal from '../BanquetPages/Modal'

const Banquet_Fasility = () => {
  return (
    <div>
      <p className="menu-slider-page"></p>
     <BanquetPhoto />
     <Filter />
    <SliderText />
    <MainFooter />
     {/* <Modal /> */}
    </div>
  )
}



export default Banquet_Fasility
