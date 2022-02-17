import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/* importing all the components needed for the app */
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Invite from '../Invite/Invite';
import ChildMedication from '../ChildInput/ChildInput';
import ParentTable from '../ParentTable/ParentTable';
import ChildNameInput from '../ChildNameInput/ChildNameInput';
/* css file(s) */
import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  /* on load FETCH_USER (get the user information) from the user store */
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          <Route
            exact
            path="/name"
          >
            <ChildNameInput />
          </Route>

          <Route
            exact
            path="/api/user/table"
          >
            <ParentTable />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

{/* logged in shows InfoPage else shows LoginPage */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

{/* If the users auth_level is helper don't allow them to see the invite page */}
          <Route
            exact
            path="/api/user/invite"
          >
            {user.auth_level === 'Helper' ?
              <Redirect to="/api/user/invite" />
              :
              <Invite />
            }
          </Route> 

{/* If the users auth_level is helper don't allow them to see the child medication input page */}
          <Route
            exact
            path="/api/user/medication"
          >
            {user.auth_level === 'Helper' ?
              <Redirect to="/user" />
              :
              <ChildMedication />
            }
          </Route> 

{/* If there is a user logged in, go to the home page otherwise go to the login page */}
          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>
 
{/* If there is a user logged in, go to the home page otherwise go to the registration page */}
          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

{/* if there is a logged in user, allow them to see the invite page if the auth_level is correct */}
          <Route
            exact
            path="/api/user/invite"
          >
            {user.id ?
            
            <Redirect to="/api/user/invite" />
            :
            <RegisterPage />
          }
          </Route>

{/* if there is a user logged in, allow them to see the landing page */}
          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

{/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
