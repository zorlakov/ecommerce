import React from 'react';
import CustomButton from '../custom-botton/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

export default CartDropdown;
