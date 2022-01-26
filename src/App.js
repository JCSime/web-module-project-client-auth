import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';
import AddFriend from './components/AddFriends';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Friends Project</h1>
        </header>
        <div className='nav-bar'>
            <Link to='/login'>Login</Link>
            <Link to='/friendsList'>Friends List</Link>
            <Link to='/addFriend'>Add Friend</Link>
            <Link to='/logout'>Logout</Link>
        </div>
        <Switch>
          <Route path='/addFriend' component={AddFriend} />
          <Route path='/friendsList' component={FriendsList} />
          <Route path='/logout' component={Logout} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
