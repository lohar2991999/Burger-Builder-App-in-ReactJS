import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

import Auxilari from '../../../hoc/Auxilari';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
        if (props.open) {

    attachedClasses = [classes.SideDrawer, classes.Open];
        
        }
    return (
          <Auxilari>
        <Backdrop  show={props.open } clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
      
      <div className={classes.Logo}>
          <Logo />
      </div>
      <nav>
         <NavigationItems />

      </nav>

        </div>
        </Auxilari>
    );
    }

export default sideDrawer;