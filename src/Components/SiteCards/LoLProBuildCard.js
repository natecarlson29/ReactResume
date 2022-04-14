import React from 'react';
import pic1 from './img/lolprobuilds1.png';
import pic2 from './img/lolprobuilds2.png';

class LoLProBuildCard extends React.Component {
  
    render() {
      return (
        <div className="project0 flex-item">
            <h2>League of Legends Pro Builds</h2>
            <div className="btn-container">
              <input className="disabled-button" type="button" value="Website"></input>
              <input className="disabled-button" type="button" value="Code"></input>
            </div>
            <hr></hr>
            <p className="languages">PHP / JS / JQuery / MongoDB / CSS / HTML</p><hr></hr>
            <img className="siteCardPic" src={pic1} alt='website screenshot'></img>
            <p>This is my most recent unfinished project, it is a website which is used by people who play the game League of Legends, and shows the what the best players in the world are currently using as far as item builds, rune pages, summoner spells, and skill order for each of the ~170 champions in the game.</p>
            <img className="siteCardPic" src={pic2} alt="website screenshot"></img>
            <p> This site takes data from the Riot Games API to pull and find the best players on the North American, European, Chinese, and Korean servers, and from that I find the champions that each top players plays the most and my program finds and displays all the information needed for players to try what the pros are doing.</p>
        </div>
      );
    }
  }

  export default LoLProBuildCard;