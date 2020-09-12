import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className='menu-item'
  >
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <h1 className='subtitle'>SHOP NOW</h1>
    </div>
  </div>
);

export default MenuItem;
