import './App.css';
import ContactCard from './Components/ContactCard';
import ProfileCard from './Components/ProfileCard';
import ResumeCard from './Components/SiteCards/ResumeCard';
import ProjectsCard from './Components/SiteCards/ProjectsCard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Header} from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <ProfileCard />} />
          <Route path="/about" exact component={() => <ProfileCard />} />
          <Route path="/projects" exact component={() => <ProjectsCard />} />
          <Route path="/resume" exact component={() => <ResumeCard />} />
          <Route path="/contact" exact component={() => <ContactCard />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
