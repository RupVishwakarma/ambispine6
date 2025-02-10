import React from "react";
import spreadproduct from "./../../images/spreadproduct.png";
import './SpreadSecondSection.css';
export default function SpreadSecondSection() {
  return (
          <div>
    <div className="spread-second-section">
      <div className="spread-second-section-left">
          <h1 className="spread-second-section-hader">Explore what's possible with <span className="spread-text">Spreads</span> ads</h1>
          <p className="spread-second-section-subtitle">The cost to advertise is up to you. Select a budget that fits your business goals and update it at any time</p>
          <div className="second-second-button-container">
          <button className="second-section-button">button</button>
          </div>
      </div>
      <div className="spread-second-section-right">
          <div className="spread-second-right-img-container">
          <img src={spreadproduct} className="spread-second-second-righit-img" />  
          </div>
      </div>
    </div>
      <div className="spread-third-section">
      <div className="spread-third-section-left">
          <h1 className="spread-second-section-hader">Explore what's possible with <span className="spread-text">Spreads</span> ads</h1>
          <p className="spread-second-section-subtitle">The cost to advertise is up to you. Select a budget that fits your business goals and update it at any time</p>
      </div>
      <div className="spread-third-section-right">
          <div>
          <img src={spreadproduct} className="spread-third-section-righit-1" />
          <img src={spreadproduct} className="spread-third-section-righit-2" />
          </div>
         
      </div>
      </div>
      </div>
  )
}
