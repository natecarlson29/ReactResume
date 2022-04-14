import React from 'react'
import resume from './img/resume1.pdf';

class ResumeCard extends React.Component {
  
    render() {
      return (
        <div className="resumeCard">
            <iframe title='Resume' src={resume} width="100%" height="750px" style={{ margin: "auto" }}>
            </iframe>
        </div>
      );
    }
  }

  export default ResumeCard;