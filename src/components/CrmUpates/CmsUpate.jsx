import React from 'react'
import HeroSection from '../card/Hero/HeroSections' ;
import cmsmanage1 from './../../images/cms-manage1.png';
import cmsupates2 from './../../images/cmsupates2.png';
import Boxes from './Boxe';
import FeatureSectionCMS from './FeatureSectionCMS';
import SecondSection from '../MobileDevelopment/SecondSection';
import './CmsUpadates.css'
import CmsSolution from './CmsSolution.';
import ImgContRightHeroSection from './ImgContRightHeroSection';
import cmsimg from './../../images/cmsimg.png';
import  OurCustomersSection from '../card/OurCustomersSection';
import FaqSection from '../card/FaqsSection';

export default function CmsUpate() {
  const comprehensivedata = [
    {
      id:1,
      heading:"Custom iPhone App Development",
      description:"We craft tailored iOS apps that align with your unique business goals and objectives.",
      // className:"custom-iphone-services",
    },
    {
      id:2,
      heading:"App Consulting",
      description:"ur expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
      // className:"aap-consulting",
    
    },
    {
      id:3,
      heading:"App Design",
      description:"Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
      // className:"aap-designe",
      
    },
    {
      id:4,
      heading:"App Testing and Quality Assurance",
      description:"Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
      // className:"aap-testing",
    }
  ]
  const whychoose = [
    {
      id:1,
      heading:"Devlopment",
      description:"Streamline your content management process with our customizable and scalable CMS solutions",
      className:"Devlopment",
    },
    {
      id:2,
      heading:"Integration",
      description:"Streamline your content management process with our customizable and scalable CMS solutions",
      className:"integration",
    
    },
    {
      id:3,
      heading:"Customer-Centric Approach",
      description:"Our flexible approach adapts to changing requirements, ensuring efficient, timely, and hassle-free project delivery",
      className:"migration",
      
    },
    {
      id:4,
      heading:"maintenation",
      description:"We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
      className:"maintenation",
    }
  ]
  const faqs = [
    {
      question: "Does your Android app development company sign an NDA to secure my app idea?",
      answer: "Ans : Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your iOS app development ideas will be completely safe. So, Get the desirable app with our top iOS app development company.",
    },
    {
      question: "How long does it take to develop an Android app",
      answer: "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
    },
    {
      question: "Do you provide support after the Android app is launched?",
      answer: "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
    },
  ]; 

  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className='CmsUpate-page'>
        <HeroSection
        title="Effortlessly Manage Your Content with Our CMS Solutions"
        subtitle="Streamline your content management process with our customizable and scalable CMS solutions"
        onScrollDown={handleScrollDown}
        heroId="custom-hero"
        backgroundImage={cmsmanage1}
        className="gradient-background" 
      />

        <div className='content-writing-services-second'>
          <h1 className='cmsupdate-second-part-heading'>Comtent Writing Service</h1>
          {/* <p className='hybrid-second-part-subtitle'>Our developers are industry-leading experts in hybrid mobile apps development, bringing their expertise and years of experience to help you create powerful applications optimized for all screen sizes</p> */}
          <SecondSection heading="Effortlessly Manage Your Content with Our CMS Solutions"
          subtitle="Streamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutions"
          className=" "
          heroimg={cmsupates2}
      />
      </div>

      <div className='content-we-offer'>
        <h1 className='content-we-offer-heading'>Types Of content We Offer</h1>
        <Boxes />
      </div>
      <div>
        
      <FeatureSectionCMS data={comprehensivedata} 
      name="Features" 
      subtitle="Streamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutions."
      className=''/>
      </div>

      <div>
        
       <CmsSolution data={whychoose} 
        name="Feature" 
        subtitle="Streamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutions"
        className='' 
      />
      </div>

      <div>
      <ImgContRightHeroSection 
      leftImg={cmsimg} 
      rheading="Effortlessly Manage Your Content with Our CMS Solutions"
      rsubtitle="Streamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with customizable and scalable CMS solutionsStreamline your content management process with our customizable an scalable CMS solutions"
      className="img-right-content"
      />
      </div>
      <FaqSection faqs={faqs} />
      <OurCustomersSection />

      </div>
      
  
  )
}
   