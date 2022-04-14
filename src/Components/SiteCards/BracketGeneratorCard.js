import React from 'react';
import pic1 from './img/bracket-site1.png';

class BracketGenerator extends React.Component {
  
    render() {
      return (
        <div className="project0 flex-item">
          <h2>Bracket Generator</h2>
          <div className="btn-container">
            <input className='disabled-button' type="button" value="Website"></input>
            <a href='https://github.com/natecarlson29/BracketGenerator' target='_blank'><input type="button" value="Code"></input></a>
          </div>
          <hr></hr>
          <p className="languages">PHP / MySQL / HTML / CSS / JavaScript / JQuery </p><hr></hr>
          <img className="siteCardPic" src={pic1} alt='website screenshot'></img>
          <p>Web app which can create and run a double elimination style brackets based on the seeding provided. Records bracket results and game or event that the bracket was ran for. Stores the results in a MySQL database. You can search for any player who has participated in any event on the website and view their results every tournament that they have participated. I created this site originally for Super Smash Bros Melee and other fighting game tournaments but it can be used for any type of competition such as darts, ping pong, tennis, anything that runs using a double elimination bracket.</p>
        </div>
      );
    }
  }

  export default BracketGenerator;