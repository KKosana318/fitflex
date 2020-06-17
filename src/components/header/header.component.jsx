import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <h1 className='logo'>FitFlex</h1>
    </Link>
    <div className='options'>
      <Link className='option' to='/collection'>
        CATEGORIES
      </Link>
      <Link className='option' to='/collection/hats'>
        HATS
      </Link>
      <Link className='option' to='/collection/jackets'>
        JACKETS
      </Link>
      <Link className='option' to='/collection/bestfits'>
        BEST FITS
      </Link>
      <Link className='option' to='/collection/fullcollection'>
        FULL COLLECTION
      </Link>
    </div>
  </div>
)

export default Header;