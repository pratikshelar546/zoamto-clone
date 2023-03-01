import React from 'react'
import mobileLogo from "../../images/mobileBanner.png"
import appleLogo from "../../images/appleStore.png"
import androidLogo from "../../images/playStore.png"
const DownloadApp = () => {
  return (
  <>
    <section className="download">
    <div className="download_container">
      <div className="left">
        <img src={mobileLogo }alt="mobile"/>
      </div>
      <div className="right">
        <h1>Get zomato app</h1>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div className="radio_button_container">
          <div>
            <input type="radio" id="email" name="radio"/>
            <label htmlFor="email" >email</label>
          </div>
          <div>
            <input type="radio" id="phone" name="radio"/>
            <label htmlFor="phone">phone</label>
          </div>
        </div>
        <div className="input_container">
          <input type="text" placeholder="Email"/>
          <button> Share app link</button>
        </div>
        <div className="download_app_container">
          <h5>download app from</h5>
          <div>
            <img src={appleLogo} alt="Apple store"/>
            <img src={androidLogo} alt="Play store"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="expolre">
    <div className="expolre_container">
      <h1>Explore options near me</h1>
      <div className="expolre_all">
        <h4>Popular cuisines near me</h4>
        <h4>Popular restaurant near me</h4>
        <h4>Top restaurant Chains</h4>
        <h4>Cities We Deliver To</h4>
      </div>
    </div> 
  </section>
  </>
  )
}

export default DownloadApp