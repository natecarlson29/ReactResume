import React from 'react';
import pic1 from './img/nates-cocktails.png';

class NateCocktailsCard extends React.Component {
  
    render() {
      return (
        <div className="project0 flex-item">
          <h2>Nate's Cocktail HQ</h2>
          <div className="btn-container">
            <input className='disabled-button' type="button" value="Website"></input>
            <input className='disabled-button' type="button" value="Code"></input>
          </div>
          <hr></hr>
          <p className="languages"> ReactJS / CSS </p><hr></hr>
          <img className="siteCardPic" src={pic1} alt='website screenshot'></img>
          <p>I built this site using ReactJS to host a list of all of the good cocktails that I've tried/created at my job as a bartender, it takes the list of drinks in as JSON and outputs cards for each drink which I use to search through by ingredient or drink name to find the recipe.</p>
        </div>
      );
    }
  }

  export default NateCocktailsCard;