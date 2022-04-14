import React from 'react'
import ptero from './SiteCards/img/dino-bird.jpg'

function ResumeHeader(props) {

    //setting up list for drink recipe
    /*var recipeArray = Array();
    props.recipe.forEach(function(step){
        recipeArray.push(<li>{step}</li>);
    })*/

	return <div>
                        <h1>Nate Carlson</h1>
                <h3>Software Engineer / Full Stack Developer</h3>
                <img className='dino-bird' src={ptero} alt='pteorodactyl logo'></img>

           </div>
}

export default ResumeHeader;