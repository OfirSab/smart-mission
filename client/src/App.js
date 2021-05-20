
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Users from './components/Users'
import Login from './components/Login'
import NavBar from './components/NavBar'

function App() {
  return (
      <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() =>(
            <div>
            <h2>Wellcome to User List Mission</h2>
            <h4>Choose one user from the list and Login to the system.</h4>
            <h4>The <b>First name</b> is the <b>Username</b> and the <b>Last name</b> is the <b>Password</b>.</h4>
            </div>
            )}/>
            <Route path="/Users" component={Users}/>
            <Route path="/Login" component={Login}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
