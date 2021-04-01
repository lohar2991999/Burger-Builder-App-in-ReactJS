Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@lohar2991999 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


lohar2991999
/
Burger-Builder-App-in-ReactJS
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Burger-Builder-App-in-ReactJS/components/Burger/Burger.js /
@lohar2991999
lohar2991999 Create Burger.js
Latest commit 70f7a13 2 minutes ago
 History
 1 contributor
33 lines (26 sloc)  913 Bytes
  
import React from  'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const  burger = (props) => {
    console.log(props);
      let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
          return [...Array(props.ingredients[igKey])].map((_, i) => {
           return   <BurgerIngredient key={igKey + i} type={igKey} />;
          });
      })
      .reduce((arr, el) => {
          return arr.concat(el)

      }, []);
      if (transformedIngredients.length === 0) {
          transformedIngredients = <p>please start adding ingredients!</p>;
      }
        

    return (
        <div className={classes.Burger}>
            
            <BurgerIngredient type="bread-top" />
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default burger; 
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
