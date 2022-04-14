import React from 'react';
import pic1 from './img/ladyluckbanner.png';

class OSRSTrackerCard extends React.Component {
  
    render() {
      return (
        <div className="project0 flex-item">
          <h2>Lady Luck Lounge Website</h2>
          <div className="btn-container">
            <input className='disabled-button' type="button" value="Website"></input>
            <input className='disabled-button' type="button" value="Code"></input>
          </div>
          <hr></hr>
          <p className="languages">HTML / CSS / JavaScript</p><hr></hr>
          <img className="siteCardPic" src={pic1} alt='website screenshot'></img>
          <p>I wrote and published a landing page for the bar that I used to bartend at.</p>
        </div>
      );
    }
  }

  export default OSRSTrackerCard;