import React from 'react';

import SHOP_DATA from '../../pages/shop/shop.data';
import PreviewCollection from '../preview-collection/preview-collection.component';

const Collection = ({ match }) => {

  const list = SHOP_DATA.find(item => item.routeName === match.path);

  return (
    <div className='collection'>
      {
        <PreviewCollection type={ "full" } key={ list.id } title={ list.title } items={ list.items } />
      }
    </div>
  )
};

export default Collection;