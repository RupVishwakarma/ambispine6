import React, { useState } from "react";
import spreadproduct from "./../../images/spreadproduct.png";
import spreadhero from "./../../images/spreadhero.png";
import "./SpreadUpdate.css";
import SpreadSecondSection from './SpreadSecondSection';
import SecondSection from '../MobileDevelopment/SecondSection'
import SpreadFourthSection from './SpreadFourthSection';

export default function SpreadUpdate() {
  const data=["Explore what's possible with","Explore what's possible with","Explore what's possible with","Explore what's possible with",]
  
  const handleScrollClick = (id) =>{
    console.log(id)
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
 
  return (
    <div className="spread-pages">
      <div className="spread-hero-section">
        <div className="container-img">
          <img src={spreadhero} className="spread-img" alt="spread" />
        </div>
      </div>
      <div className="spread-button-container">
        {["For You", "Talent Solution", "For Creator", "Ai"].map(
          (data, index) => {
            return <button className="spread-button" onClick={() => handleScrollClick(data.replace(/\s+/g,""))} key={index}>{data}</button>;
          }
        )}
      </div>
      <div  id="ForYou" >
      <SpreadSecondSection />
        </div>
      <div className="talent-section" id="TalentSolution" >
        <h3 className="talent-section-top-header">Talent Solution</h3>
        <div className="talent-section-card-contianer">
          {
            data.map((data, index) => {
              return(
                <div key={index} className="talent-section-card">
                <h1 className="talent-header">{data}<span className="spread-text">Spreads</span> Ads</h1>
                </div>
              )
            })
          }
        </div>
      </div>
      
      <div id="ForCreator">
      <SecondSection heading="Creater"
          subtitle="At Ambispine Technologies, we specialize in customizing your website to boost business growth, enhance online visibility, and help you stand out in a competitive global market. Let's unlock your business potential with expert digital marketing strategies."
          className=" "
          classNameheader='goal-obj-header'
          heroimg={spreadproduct}
          imagclasName="imagclasName"
         
      />
        <SpreadFourthSection 
      heading="Explore what's possible with "
      title='he cost to advertise is up to you. Select a budget that fits your business goals and update it at any time'
      img1={spreadproduct}
      img2={spreadhero}
      maintext="Spreads"
      order1="order1"
      order2="order2"
      />

      <SpreadFourthSection 
      heading="Explore what's possible with "
      title='he cost to advertise is up to you. Select a budget that fits your business goals and update it at any time'
      img1={spreadproduct}
      img2={spreadhero}
      maintext="Spreads"
      
      />
     </div>

    </div>
  );
}
