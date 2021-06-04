import { createContext, useState } from 'react';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path='/' exact>
            <UserProfile/>
          </PrivateRoute>
          <Route path='/login' exact>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
