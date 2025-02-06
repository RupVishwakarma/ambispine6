import React from 'react';
import './Boxe.css'; // We'll create this CSS file next
import { FaCreativeCommonsBy } from "react-icons/fa6";

const Boxes = () => {
  return (
    <div className='box-main-container'>
      <div className="box-container">
      <div className="box-content box-left box1">
        {/* <FaCreativeCommonsBy className='icon-cms'/> */}
      <h4 className='box-content-cms'>content1</h4>
       
      </div>
      <div className="box-content box-right box2">
      <h4>content2</h4>
      </div>
      <div className="box-content box-left box3">
      <h4>conten3</h4>
      </div>
      <div className="box-content box-right box4">
      <h4>content4</h4>
      </div>
      {/* <div className="mid-line"></div> */}
    </div>
    </div>
  );
};

export default Boxes;