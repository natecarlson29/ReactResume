import React from 'react';
import pic1 from './img/food-tracker.png';

class OSRSTrackerCard extends React.Component {
  
    render() {
      return (
        <div className="project0 flex-item">
          <h2>Calories / Protein Tracker</h2>
          <div className="btn-container">
            <input className='disabled-button' type="button" value="Website"></input>
            <a href='https://github.com/natecarlson29/FoodTracker' target='_blank'><input type="button" value="Code"></input></a>
          </div>
          <hr></hr>
          <p className="languages">PHP / MySQL / HTML / CSS</p><hr></hr>
          <img className="siteCardPic" src={pic1} alt='website screenshot'></img>
          <p>Web app made to track protein and calorie consumption. To use it you create an account and then enter in food entries for each meal you eat, meals that you frequently eat can be added to the list of preset options. The data is stored in a database and diplayed to you in your food log.</p>
        </div>
      );
    }
  }

  export default OSRSTrackerCard;