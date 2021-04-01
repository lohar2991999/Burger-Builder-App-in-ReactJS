import React, { Component } from 'react';

import Auxilari from '../../../hoc/Auxilari';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
   componentWillUpdate() {
       console.log('[OrderSummary] WillUpdates')
   }


render () {

    const ingredientSummary = Object.keys( this.props.ingredients )
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{ textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
       </li>);
    });

    return (
        <Auxilari>
        <h3>Your Order</h3>
        <h4>A delicious burger with the following ingredients:</h4>
         <ul><h4>{ingredientSummary}</h4> </ul>
         <p><strong>Total Price: {this.props.price}</strong></p>
      <p>Continue to checkout !</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Auxilari>
    );
}

}


export default OrderSummary;
