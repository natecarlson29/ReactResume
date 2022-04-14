import React from 'react';
import pic1 from './img/osrs-site1.png';
import pic2 from './img/osrs-site2.png';

class OSRSTrackerCard extends React.Component {
  
    render() {
      return (
        <div className="project0 flex-item">
          <h2>Oldschool Runescape Skill Calculator</h2>
          <div className="btn-container">
            <input className='disabled-button' type="button" value="Website"></input>
            <a href='https://github.com/natecarlson29/OldschoolSkillCalc' target='_blank'><input type="button" value="Code"></input></a>
          </div>
          <hr></hr>
          <p className="languages">PHP / MySQL / JQuery / JavaScript / HTML / CSS </p><hr></hr>
          <img className="siteCardPic" src={pic1} alt='website screenshot'></img>
          <p>This is a website that I wrote for the game Old School Runescape. It connects to the game's API to retrieve stats on the players accounts and then will display to you different ways to train your stats based on the skill you chose and what level you have in that skill.</p>
          <img className="siteCardPic" src={pic2} alt='website screenshot'></img>
          <p>Other features such as registering with the site and saving multiple usernames to a list for all of your accounts so that they are more easily accesible. Database work done with PHP and MySQL and the site was made with Jquery/JavaScript/PHP for design and functionality.</p>
        </div>
      );
    }
  }

  export default OSRSTrackerCard;