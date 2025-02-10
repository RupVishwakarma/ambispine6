import React from "react";
import ImgContentRight from "./ImgContRightHeroSection.module.css";
import { Button } from "../button/Button";
import { FaArrowRight } from "react-icons/fa6";
export default function ImgContRightHeroSection({
  leftImg,
  rheading,
  rsubtitle,
  className,
}) {
  return (
    <div>
      <section className={ImgContentRight.imgRLcontentContainer}>
        <div className={ImgContentRight.imgRLcontenMainContainer}>
          {/* Text Content */}

          <div className={ImgContentRight.imgRLImgContainer}>
            <div className={ImgContentRight.ImgWrapperConainer}>
              <img
                src={leftImg}
                alt="Cloud Services"
                className={ImgContentRight.Imgleft}
              />
            </div>
          </div>

          <div className={ImgContentRight.imgLContContainer}>
            <h1 className={ImgContentRight.imgCheader}>{rheading}</h1>
            <p className={ImgContentRight.imgCsubtitle}>{rsubtitle}</p>
            <Button name="Explore Solution" icon={<FaArrowRight />} />
          </div>
          {/* Image Content */}
        </div>
      </section>
    </div>
  );
}
