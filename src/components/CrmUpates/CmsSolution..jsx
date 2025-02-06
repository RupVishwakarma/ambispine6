import React from "react";
import { FaArrowDown } from "react-icons/fa";
// import PropTypes from "prop-types";  
import cmssolutionsection from './CmsSolution.module.css';
import iosservicesection from '../../images/iosservicesection.png'
import {Button} from '../button/Button';
import { FaArrowRight } from "react-icons/fa6";

const CmsSolution = ({ data, name, subtitle, className,heroId, heroimg }) => {
  return (
    <div className={`${cmssolutionsection['cms-solution-feature-container']} ${className || ""}`} 
    id={heroId} >
  <div className={cmssolutionsection['cms-solution-feature-main']}>
  <div className={cmssolutionsection['cms-solution-feature-main-left']}>
      <div className={cmssolutionsection['cms-solution-feature-left-content']}> 
        <h1  className={cmssolutionsection['cms-solution-feature-heading']}>CMS Solution</h1>  
      <h3 className={cmssolutionsection['cms-solution-feature-sub-heading']}>{name}</h3>
      <p className={cmssolutionsection['cms-solution-feature-subtitle']}>{subtitle}</p>
      <div className={cmssolutionsection['why-choose-explore']}>
      <Button name='Explore Solution' redirect='explore-solution' icon={<FaArrowRight />} /> 
      </div>
      </div>
    </div>
  <div className={cmssolutionsection['cms-solution-feature-main-right']}>
      <div className={cmssolutionsection['cms-solution-feature-why-chooses-container']}>
      <div className={cmssolutionsection['cms-solution-feature-card-container']}>

        {
          data.map((data) => {
            return(
              <div className={`${cmssolutionsection['cms-feaure-second-card']} ${data.className}`}>
                <h3 className={cmssolutionsection['cms-solution-feature-card-header']}>{data.heading}</h3>
                <p className={cmssolutionsection['cms-solution-feature-card-subtitle']}>{data.description}</p>
              </div>
            )
          })
        }
     </div>
         
      </div>
    </div>
   
   

  </div>
</div>
  );
};

export default CmsSolution;
