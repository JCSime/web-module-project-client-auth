import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/friendsList'>Friends List</Link>
          </li>
        </ul>
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path='/friendsList' component={FriendsList} />
          <Route path={'/login'} component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
