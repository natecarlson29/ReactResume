import React from 'react'
import char1 from './img/char1.webp'

function CharacterSelector(props) {

    //setting up list for drink recipe
    /*var recipeArray = Array();
    props.recipe.forEach(function(step){
        recipeArray.push(<li>{step}</li>);
    })*/

	return <div className="characterSelectionFull">
                <h3>Or</h3>
                <p>Select a character and view the highest ranked players</p>
                <div className="characterSelectorContainer">
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                    <img src={char1} height="55px" width="55px" alt={char1}></img>
                </div>
           </div>
}

export default CharacterSelector;