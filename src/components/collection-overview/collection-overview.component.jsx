import React from 'react';

import PreviewCollection from '../preview-collection/preview-collection.component';

import SHOP_DATA from '../../pages/shop/shop.data';

const CollectionOverview = () => (
  <div className='shop-page/'>
    {
      SHOP_DATA.map(({ id, ...otherProps }) => (
        <PreviewCollection idx={ 4 } key={ id } { ...otherProps } />
      ))
    }
  </div>
);

export default CollectionOverview;