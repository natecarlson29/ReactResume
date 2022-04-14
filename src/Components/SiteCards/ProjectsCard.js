import React from 'react';
import LoLProBuildCard from './LoLProBuildCard';
import NateCocktailsCard from './NateCocktailsCard';
import BracketGenerator from './BracketGeneratorCard';
import OSRSTrackerCard from './OSRSTrackerCard';
import LadyLuckCard from './LadyLuckCard';
import CalorieTrackerCard from './CalorieTrackerCard';

class ProjectsCard extends React.Component {
  
    render() {
      return (
        <div className="flex-container projectsCard">
            <LoLProBuildCard />
            <OSRSTrackerCard />
            <LadyLuckCard />
            <NateCocktailsCard />
            <BracketGenerator />
            <CalorieTrackerCard />
        </div>
      );
    }
  }

  export default ProjectsCard;