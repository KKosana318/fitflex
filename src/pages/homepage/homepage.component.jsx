import React from 'react';

import Directory from '../../components/directory/directory.component';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import SHOP_DATA from '../shop/shop.data';

import './homepage.styles.scss';

const list = SHOP_DATA[3];

const HomePage = () => (
  <div className='homepage'>
    <PreviewCollection className='preview' idx={ 8 } type={ "full" } key={ list.id } title={ 'latest instagram posts' } items={ list.items } />
    <div className='content'>
      <h1 className='title'>BROWSE ALL CATEGORIES</h1>
      <Directory />
    </div>
  </div>
);

export default HomePage;