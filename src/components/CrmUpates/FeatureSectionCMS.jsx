import React from 'react'
import './FeaturSectionCMS.css';

// import PropTypes from "prop-types"

const FeatureSectionCMS = ({ data, name, subtitle, className }) => {
  return (

  <div className={`cms-feature-main ${className || ''}`}>
  
    <div className='cms-feature-main-left'>
      <div className='cms-feature-left-content'>
        
      <h1 className='cms-feature-heading'>{name}</h1>
      <p className='cms-feature-subtitle'>{subtitle}</p>
      </div>
    </div>
    <div className='cms-feature-main-right'>
      <div className='cms-feature-services-container'>
      <div className='cms-feature-card-container'>

        {
          data.map((data) => {
            return(
              <div className={`cms-feature-card ${data.className}`}>
                <h3 className='cms-feature-card-header'>{data.heading}</h3>
                <p className='cms-feature-card-subtitle'>{data.description}</p>
              </div>
            )
          })
        }
     </div>
         
      </div>
    </div>

  </div>

  );
};

export default FeatureSectionCMS;
