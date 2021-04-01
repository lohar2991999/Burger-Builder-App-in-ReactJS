import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {Lable: 'Salad', type: 'salad' },
    {Lable: 'Bacon', type: 'bacon' },
    {Lable: 'Cheese', type: 'cheese' },
    {Lable: 'Meat', type: 'meat'  },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong>  </p>
 
   { controls.map(ctrl => (
    <BuildControl
     key={ctrl.Lable} 
     Lable={ctrl.Lable}
     added={() => props.ingredientAdded(ctrl.type) } 
      removed={() => props.ingredientRemoved(ctrl.type)}
      disabled={props.disabled[ctrl.type]} />       

))}
<button className={classes.OrderButton}
disabled={!props.purchasable}
onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;
