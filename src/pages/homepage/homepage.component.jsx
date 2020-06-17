import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1 className='title'>Welcome to fitflex, enjoy your stay</h1>
    <hr />
    <Directory />
  </div>
);

export default HomePage;