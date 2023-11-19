import React from 'react'
import footer_img from './img/footer.png'
import './Footer.css'

const product = {
    image: 'https://cdn.doordash.com/media/button/button_red_l.svg',
}


const FooterTwo = () => {
  return (
    <div className="main-peren">
        <div className='footer-two-perent'>
      <img src={footer_img} alt="" />
      <p>Copyright © 2007-2019 Guru Palace Restaurants. All Rights Reserved.</p>
      <p>Website designed by <a href="https://indemandsoftech.com/"target='_black'>INDEMAND SOFTECH SOLUTIONS</a></p>
      <div><img src={product.image} alt="" /></div>
      {/* <div>Order Food Delivery with DoorDash</div> */}
      {/* style=" background-image: url('https://cdn.doordash.com/media/button/button_red_l.svg')" position: relative; width: 289px; height: 59px; margin: 0px auto; color: transparent;*/}
    </div>
    </div>
  )
}

export default FooterTwo
