import React from 'react';
import './AboutPage.css'

/* This page is an info page for the app 

  Shows what technologies that I used and a short description of the app
*/

function AboutPage() {
  return (
    <div className="container">
      <div className="technologies">
          <h4>Technologies Used</h4>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>React</li>
              <li>Redux</li>
              <li>Saga</li>
              <li>PostgesSQL</li>
              <li>Material-UI</li>
              <li>Sweet Alerts</li>
            </ul>
      </div>

      <div className='about'>
        <p>The Medication Tracker is for anyone that struggles to remember when to give medication to their kids.</p>
        <p>Medication Tracker allows people to enter
          the name of the individual, the medication, any comments or instructions about the medication, the dosage, and how often the medication needs to
          be given.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
