import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
// import Dashboard from './Dashboard/Dashboard';
import Dashboard from './Components/Dashboard/Dashboard';
// import LoginPage from './LoginPage/LoginPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Landing from './Components/landing/Landing';
import Nav from './Components/navbar/Nav';

function App() {
  useEffect(() => {
    connectWithWebSocket();
  }, []);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
