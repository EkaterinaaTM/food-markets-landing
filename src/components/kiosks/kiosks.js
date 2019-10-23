import React, { useState } from "react"

import Container from '../container/container';
import Tab from '../tab/tab';
import FeatureItem from './featureItem';
import data from '../../data';

const Kiosks = () => {
  const [ activeTab, setActiveTab ] = useState(0);

  const togglActiveTab = index => {
    setActiveTab(index)
  };

  return (
  <Container>
    <section className='kiosks' id='kiosks'>
      <h2 className='title_h2 title_h2--white'>{data.kiosks.title}</h2>

      {/* tabs */}
      <div className='kiosks_tabs'>
        {data.kiosks.tabs.map((tab, index) => (
          <Tab
            text={tab}
            key={index}
            className={index === activeTab ? 'tab--active' : ''}
            onClick={() => togglActiveTab(index)} 
          />
        ))}
      </div>

      <div className='kiosks_wrapper'>
        {/* block with IMG */}
        <div className='kiosks_img'>
          <img src={data.kiosks.kiosksTypes[activeTab].img} alt='киоск'/>
        </div>
        
        {/* block with info about kiosk */}
        <div className='kiosks_info'>
          <h3 className='title_h3' dangerouslySetInnerHTML={{ __html: data.kiosks.kiosksTypes[activeTab].title }}/>
          <p className='text mb-56'>{data.kiosks.kiosksTypes[activeTab].desc}</p>

          <div className='kiosks_info_features'>
            {data.kiosks.kiosksTypes[activeTab].features.map((item, index) => (
              <FeatureItem img={item.img} text={item.text} alt='icon' key={index} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  </Container>
  )
};

export default Kiosks;