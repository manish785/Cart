import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
  // through the Constructor, we define the state of the component
  render (){
      return (
        <div className='cart'>
               {/* // we can render multiple same Component multiple times */}
               {/* // here, we are rendering the Component */}
               <CartItem/>
               <CartItem/>
               <CartItem/>
        </div>
      )
  }
}

export default Cart;