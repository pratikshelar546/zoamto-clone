import React from 'react'

const Collections = () => {
  return (
    <section className="collection">
    <div className="container_collection">
      <h1>collections</h1>
      <div className="conatiner_collection_subtitle">
        <span>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends </span>
        <span>All collections in Mumbai</span>
      </div>
      <div className="collections_card_container">
        <div className="card card1">
          <div className="overlay"></div>
          <div className="content">
            <h4>Live cricket screening</h4>
            <span>50 places</span>
          </div>
        </div>


        <div className="card card2">
          <div className="overlay"></div>
          <div className="content">
            <h4>Some Special Sweets</h4>
            <span>60 places</span>
          </div>

        </div>

        <div className="card card3">
          <div className="overlay"></div>
          <div className="content">
            <h4>Newly Opened resturants</h4>
            <span>60 places</span>
          </div>

        </div>

        <div className="card card4">
          <div className="overlay"></div>
          <div className="content">
            <h4>Great Cafes, near me</h4>
            <span>60 places</span>
          </div>
        </div>
</div>
      </div>
  </section>
  )
}

export default Collections