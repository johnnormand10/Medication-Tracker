import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import Invite from '../Invite/Invite';
import ParentTable from '../ParentTable/ParentTable';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';

function UserPage() {
  const history = useHistory();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, { user.username}!</h2>
      {user.auth_level === 'Parent' ? 
        <Invite />
        :
        <ParentTable />
      }
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
