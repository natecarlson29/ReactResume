import React from 'react'
import logo from './img/char1.webp'

function HeaderAndLogo(props) {

    //setting up list for drink recipe
    /*var recipeArray = Array();
    props.recipe.forEach(function(step){
        recipeArray.push(<li>{step}</li>);
    })*/

	return <div className="headerAndLogo">
                <h1>
                    <img src={logo} height="55px" width="55px" alt={logo}></img>&#9;Slippi Stats&#9;<img src={logo} height="55px" width="55px" alt={logo}></img>
                </h1>
           </div>
}

export default HeaderAndLogo;