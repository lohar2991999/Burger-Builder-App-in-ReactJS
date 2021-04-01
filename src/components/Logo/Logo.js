import React from 'react';
import classes from './Logo.css';

import burgerLogo from '../../assets/image/burger-logo.jpeg'; 

const logo = (props) => (

    <div className={classes.Logo} style={{height: props.height}} >
<img src={burgerLogo}  alt="MyBurger" />

    </div>

 
);

export default logo;
