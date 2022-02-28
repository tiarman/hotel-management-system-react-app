import React, { createContext, lazy, Suspense, useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Home from './Pages/Home/Home';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import ScrollToTop from "react-scroll-to-top";
import { getDecodedUser } from './Components/LoginAuth/LoginManager';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { toast, Toaster } from 'react-hot-toast';
const Dashboard = lazy(() => import ('./Pages/Dashboard'));
const Login = lazy(() => import ('./Pages/Login.js'));


export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedRoom, setSelectedRoom] = useState([]);
  const [adminLoading, setAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/isAdmin?email=${loggedInUser?.email}`)
      .then(res => {
        setIsAdmin(res.data);
        setAdminLoading(false);
      })
      .catch(error => toast.error(error.message))
  }, [loggedInUser?.email]);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isAdmin, selectedRoom, setSelectedRoom }}>
      <ScrollToTop smooth />
    <Router>
    <Toaster />
    <Suspense fallback={<Spinner />}>
        <Switch>
        <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/dashboard/:panel'>
            <Dashboard adminLoading={adminLoading} />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        </Suspense>
    </Router>
    </UserContext.Provider>
  );
};

export default App;