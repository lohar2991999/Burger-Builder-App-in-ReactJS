import React, { Component } from 'react';
import Auxilari from '../../hoc/Auxilari';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
       this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
        return  {showSideDrawer: !prevState.showSideDrawer}
        });
    }


render() {
    return(
        <Auxilari>
        <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
            {this.props.children}
        </main>
        
            </Auxilari>
    )
}

} 
export default Layout; 
