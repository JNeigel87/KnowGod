import Form from './components/Form';
import Abilities from './views/abilities';
import Advice from './views/advice';
import Angels from './views/angels';
import Anger from './views/anger';
import Appearance from './views/appearance';
import Approval from './views/approval';
import Attitudes from './views/attitudes';
import Authority from './views/authority';
import Believing from './views/believing';
import Potential from './views/potential';
// import Abilities from './views/abilities';
import {navigate} from '@reach/router';
import {Router, Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Quick Answers</h1>
          <Link to="/" className="link">Home</Link> | <nbsp></nbsp>
          <Link to="/abilities" className="link">Abilities</Link> | <nbsp></nbsp>
          <Link to="/advice" className="link">Advice</Link> | <nbsp></nbsp>
          <Link to="/angels" className="link">Angels</Link> | <nbsp></nbsp>
          <Link to="/anger" className="link">Anger</Link> | <nbsp></nbsp>
          <Link to="/appearance" className="link">Appearance</Link> | <nbsp></nbsp>
          <Link to="/approval" className="link">Approval</Link> | <nbsp></nbsp>
          <Link to="/attitudes" className="link">Attitudes</Link> | <nbsp></nbsp>
          <Link to="/authority" className="link">Authority</Link> | <nbsp></nbsp>
          <Link to="/believing" className="link">Believing In God</Link> | <nbsp></nbsp>
      </div>
      <br></br>
      
      <Router>
        
        <Abilities path="/abilities"/>
        <Advice path="/advice"/>
        <Angels path="/angels"/>
        <Anger path="/anger"/>
        <Appearance path="/appearance"/>
        <Approval path="/approval"/>
        <Attitudes path="/attitudes"/>
        <Authority path="/authority"/>
        <Believing path="/believing"/>
        <Potential path="/potential"/>
        {/* <AddPirate path="/new"/>
        <Errors path="/errors"/> */}
      </Router>
      {/* <div className="home">
        <h1>Welcome to the homepage</h1>
      </div> */}
    </div>
  );


}

export default App;

