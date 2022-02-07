import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

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
