import React from 'react'

const FeatureItem = ({ img, text }) => (
  <div className='kiosks_info_features_item'>
    <img src={img} alt='icon' />
    <p className='kiosks_info_features_text'>{text}</p>
  </div>
)

export default FeatureItem;