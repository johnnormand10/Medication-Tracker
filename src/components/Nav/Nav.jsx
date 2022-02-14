import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');



function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav flex primary-header">
      <Link to="/home">
        <h2 className="nav-title">Medication Tracker</h2>
      </Link>


      <div id="primary-navigation" className='primary-navigation'>


        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
          <Link className="navLink flex" to="/login">
            Login / Register
          </Link>

          <Link className="navLink flex" to="/about">
          About
          </Link>
          </>
        )}


        {/* if the user has the correct auth_level */}
        { user.auth_level === 'Parent' &&
          <><Link className='navLink flex' to='/user'>
              Home
            </Link>

            <Link className='navLink flex' to='/api/user/invite'>
              Invite Others
            </Link>

            <Link className='navLink flex' to='/name'>
              Child Name 
            </Link>

            <Link className='navLink flex' to='/api/user/medication'>
              Add Medication
            </Link>

            <Link className='navLink flex' to='/api/user/table'>
              Table View
            </Link>

            <LogOutButton className='navLink flex' />
            </>
        }
            
        {user.auth_level === 'Helper' && 
          <>
          <Link className='navLink flex' to='/user'>
            Home 
          </Link>

          <Link className='navLink flex' to='/api/user/table'>
            Table View
          </Link>

          <LogOutButton className='navLink flex' />
          </>
        }

        <Link className="navLink flex" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
