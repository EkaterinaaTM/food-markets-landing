import React from 'react'

import Container from '../container/container'
import ParallaxObject from './parallaxObject'

import data from '../../data'
// import Slider from 'react-slick';

// const settings = {
//   dots: false,
//   arrows: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

const Partners = () => (
    <Container>
      <section className='partners'>
        <ParallaxObject />
        <h2 className='title_h2' dangerouslySetInnerHTML={{ __html: data.partners.title }} />

        {/* <Slider {...settings}> */}
          <div className='partners_items'>
            {data.partners.partnersList.map((benefitItem, index) => (
              <PartnerItem {...benefitItem} key={index} />
            ))}
          </div>
          {/* <div className='partners_items'>
            {data.partners.partnersList.map((benefitItem, index) => (
              <PartnerItem {...benefitItem} key={index} />
            ))}
          </div>
        </Slider> */}

      </section>
    </Container>
);

const PartnerItem = ({ icon, alt}) => (
  <div className='partners_items_item'>
    <img src={icon} alt={alt} />
  </div>
)
export default Partners;