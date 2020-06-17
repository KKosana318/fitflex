import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl }) => (
  <div className='collection-item'>
    <div className='image' style={ { backgroundImage: `url(${imageUrl})` } }></div>
  </div>
)

export default CollectionItem;