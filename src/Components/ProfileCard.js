import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profPic from './SiteCards/img/calfbearerlol.png';
import { faMapPin, faGraduationCap, faBriefcase, faCheckCircle, faCheckSquare, faCheck, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

class ProfileCard extends React.Component {
  
    render() {
      return (
            <div>
                <div className="profileCard">
                <h2 className='freq-header'>About</h2>
                <div className='about-top-half'>
                    <div>
                        <img id='prof-pic' src={profPic} ></img>
                    </div>
                    <div>
                        <p className="text-indent">Hi I'm Nate, I am a full stack software engineer creating web apps. I am employed as a software developer where I write and maintain software that is used to track, map, and display data for several different software products. </p>
                        <div className="flexbox">
                            <div className="flex-col">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>UI / UX</div> 
                            </div>
                            <div className="flex-col">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>Backend Dev</div>
                            </div>
                            <div className="flex-col">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>API Integrations</div>
                            </div>
                        </div>
                        <p className='about-grey'><FontAwesomeIcon className ='detail-icon' icon={faMapPin} /> Lincoln NE, USA</p>
                        <p className='about-grey'><FontAwesomeIcon className ='detail-icon' icon={faBriefcase} /> Full Stack Web Developer </p>
                        <p className='about-grey'><FontAwesomeIcon className ='detail-icon' icon={faGraduationCap} /> AAS in CIT from Southeast Community College,<br />&nbsp;&nbsp;Software Engineering at University of Nebraska - Lincoln</p>
                    </div>
                </div>

                <div className='bottom-content'>
                    <h4 className='freq-header2'>Frequenty used tools in my development</h4>
                    <table id='about-table'>
                        <tr>
                            <td>JavaScript</td>
                            <td>SQL</td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td>NoSQL (MongoDB)</td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td>C#</td>
                        </tr>
                        <tr>
                            <td>HTML / CSS</td>
                            <td>AWS / Microsoft Azure</td>
                        </tr>
                        <tr>
                            <td>JQuery</td>
                            <td>PHP</td>
                        </tr>
                    </table>
                </div>
                <p className='freq-header'>I am always looking to learn new frameworks and tools that improve my projects, products, and my development process.</p>
            </div>
            </div>

      );
    }
  }

  export default ProfileCard;