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
        <img src='https://images-na.ssl-images-amazon.com/images/I/51YhJru89KL.png'></img>
        <h2 className="nav-title">Medication Tracker</h2>
      </Link>


      <div id="primary-navigation" className='primary-navigation'>


        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            {/* links to the register and login page */}
          <Link className="navLink flex" to="/login">
            Login / Register
          </Link>
            {/* link for the about page */}
          <Link className="navLink flex" to="/about">
          About
          </Link>
          </>
        )}


        {/* if the user has the correct auth_level */}
        {/* these links only show if the user has the correct auth_level */}
        { user.auth_level === 'Parent' &&
              /* links to the home page */
          <>{/* <Link className='navLink flex' to='/user'>
              Home
            </Link> */}
              {/* links to the invite page */}
            <Link className='navLink flex' to='/api/user/invite'>
              Home
            </Link>
              {/* links to the child name input page */}
            <Link className='navLink flex' to='/name'>
              Child Name 
            </Link>
              {/* links to the medication input */}
            <Link className='navLink flex' to='/api/user/medication'>
              Add Medication
            </Link>
              {/* links to the table view */}
            <Link className='navLink flex' to='/api/user/table'>
              Table View
            </Link>
              {/* links the button to log the user out */}
            <LogOutButton className='navLink flex' />
            </>
        }
            
        {user.auth_level === 'Helper' && 
          <>
            {/* shows the link for the home page */}
          <Link className='navLink flex' to='/user'>
            Home 
          </Link>
            {/* links to the table view without the edit and delete buttons */}
          <Link className='navLink flex' to='/api/user/table'>
            Table View
          </Link>
            {/* allows the user to log out  */}
          <LogOutButton className='navLink flex' />
          </>
        }
          {/* always shows the link for the about page */}
        <Link className="navLink flex" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
