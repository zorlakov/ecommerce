import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h1 className='subtitle'>SHOP NOW</h1>
    </div>
  </div>
);

// withRouter will return a menu item component with acces to location, match, history props
export default withRouter(MenuItem);
