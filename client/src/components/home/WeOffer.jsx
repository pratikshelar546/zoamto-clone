import React from 'react'
import "./style.css"

const weOffer = () => {
  return (
 <>
 <section className="container_we_offer">
    <div className="we_offer_card">
      <img className="we_offer_img" src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*' alt="item 1"/>
      <div className="we_offer_card_title">
        <h2>Order online </h2>
        <p>Stay home and order to your door</p>
      </div>
    </div>
    <div className="we_offer_card">
      <img className="we_offer_img" src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="item 3"/>
      <div className="we_offer_card_title">
        <h2>Dining </h2>
        <p>View the city's favourite dining venue</p>
      </div>
    </div>
    <div className="we_offer_card">
      <img className="we_offer_img" src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="item 3"/>
      <div className="we_offer_card_title">
        <h2>Nightlife and clubs </h2>
        <p>explore the citys's nightlight outlight</p>
      </div>
    </div>
  </section>
  </>
  )
}

export default weOffer