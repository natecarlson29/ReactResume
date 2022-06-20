import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarAndCrescent, faPenFancy, faScroll, faUser, faUserAstronaut, faUserShield, faPen } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {

  changeStarAbout = () => {
    document.documentElement.style.setProperty('--star1', '#ffff00');
    document.documentElement.style.setProperty('--star2', '#ffea00');
  }
  changeStarProjects = () => {
    document.documentElement.style.setProperty('--star1', '#00ffff');
    document.documentElement.style.setProperty('--star2', '#00ffbf');
  }
  changeStarResume = () => {
    document.documentElement.style.setProperty('--star1', '#bfff00');
    document.documentElement.style.setProperty('--star2', '#7fff00');
  }
  changeStarContact = () => {
    document.documentElement.style.setProperty('--star1', '#ff00ff');
    document.documentElement.style.setProperty('--star2', '#d500ff');
  }

  render(){
    return (
      <div className="navigation">
            <nav>
              <ul class="navbar-nav ml-auto">
                <Link class="nav-link" to="/about" onClick={this.changeStarAbout}>
                  <li id="about-nav"
                    class={`nav-item  ${
                      window.location.href === "/about" ? "active" : ""
                    }`}
                  >
                      <FontAwesomeIcon icon={faUserAstronaut} /> About
                  </li>
                </Link>
                <Link class="nav-link" to="/projects" onClick={this.changeStarProjects}>
                  <li id="projects-nav"
                    class={`nav-item  ${
                      window.location.href === "/projects" ? "active" : ""
                    }`}
                  >
                      <FontAwesomeIcon icon={faStarAndCrescent} /> Projects
                  </li>
                </Link>
                <Link class="nav-link" to="/resume" onClick={this.changeStarResume}>
                  <li id="resume-nav"
                    class={`nav-item  ${
                      window.location.href === "/resume" ? "active" : ""
                    }`}
                  >
                      <FontAwesomeIcon icon={faScroll} /> Resume{/*faBook, faUser, faUserAstronaut, faUserShield*/}
                  </li>
                </Link>
                <Link class="nav-link" to="/contact" onClick={this.changeStarContact}>
                  <li id="contact-nav"
                    class={`nav-item  ${
                      window.location.href === "/contact" ? "active" : ""
                    }`}
                  >
                      <FontAwesomeIcon icon={faPenFancy} /> Contact
                  </li>
                </Link>
              </ul>
            </nav>
      </div>
    );
  }
}

export default withRouter(Navigation);