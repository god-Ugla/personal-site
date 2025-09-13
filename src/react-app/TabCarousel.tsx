import React, { useState } from 'react';
import "./TabCarousel.css"

interface TabCarouselProps {
  sectionTitle: string;
  tabs: {tabName: string, title: string, description: string, carouselImg: string, descImg: string, linkMore: string}[] 
}

const TabCarousel: React.FC<TabCarouselProps> = ( {sectionTitle, tabs} ) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [allShown, setAllShown] = useState(false);

  const nextSlide = () => {
    setCurrentTab((currentTab + 1) % tabs.length);
  };

  const prevSlide = () => {
    setCurrentTab((tabs.length + currentTab - 1) % tabs.length);
  };

  const toggleAll = () => {setAllShown(!allShown)};

  return (
    <div className="tab-carousel">
      <div className="tab-carousel-title">
        {sectionTitle}
        {!allShown ? <button className="tab-carousel-toggle-all" onClick={toggleAll}>See All</button> : <></>}
        <div style={{"clear": "both"}}></div>
      </div>

      {!allShown ? 
      <>
        <div className="tab-carousel-carousel" >
          <div className="tab-carousel-side-slide">
            <img src={tabs[(currentTab - 1 + tabs.length) % tabs.length].carouselImg} onClick={prevSlide} />
            {tabs[(currentTab - 1 + tabs.length) % tabs.length].tabName}
          </div>
          <div className="tab-carousel-center-slide">
            <img src={tabs[currentTab].carouselImg} />
            {tabs[currentTab].tabName}
          </div>
          <div className="tab-carousel-side-slide">
            <img src={tabs[(currentTab + 1) % tabs.length].carouselImg} onClick={nextSlide} />
            {tabs[(currentTab + 1) % tabs.length].tabName}
          </div>
          <button className="tab-carousel-button" onClick={prevSlide} style={{left: 0}}> ‹ </button>
          <button className="tab-carousel-button" onClick={nextSlide} style={{right: 0}}> › </button>
        </div>
        <div className="tab-carousel-slide-selector">
          {tabs.map((_, index) => (
            <button onClick={() => setCurrentTab(index)} name="slide-selector">{(currentTab === index) ? '●' : '○'}</button>))
          }
        </div>
        <div className="tab-carousel-content">
          <div className="tab-carousel-subtitle">
            {tabs[currentTab].title}
          </div>
          <div className="tab-carousel-desc">
            <div>
              {tabs[currentTab].description} <br /><br />
              {tabs[currentTab].linkMore ? <a href={tabs[currentTab].linkMore} target="_blank" rel="noopener noreferrer">Learn More</a> : null}
            </div>
            {tabs[currentTab].descImg ? <img src={tabs[currentTab].descImg} /> : null}
          </div>
        </div>
      </> : 
      <>
        <div style={{textAlign: "center", fontWeight: "bold", textDecoration: "underline", fontSize: "18px"}}>
          Choose a Project Below:
        </div>
        <div className="tab-carousel-container-all">
          {tabs.map((t, index) => (
            <div className="tab-carousel-slide-all" onClick={() => {setCurrentTab(index); setAllShown(false)}}> 
              <img src={t.carouselImg} onClick={nextSlide} />
              {t.tabName}
            </div>
          ))}
        </div>
      </>
      }

    </div>
  );
};

export default TabCarousel;
