import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const PreviewCollection = ({ type, title, items, idx }) => {
  const filtered = idx ? items.filter((item, index) => index < idx) : items;

  return (
    <div className='preview-collection'>
      <h1 className={ `${type ? 'full' : ''} title` }>{ title.toUpperCase() }</h1>
      <div className='preview'>
        {
          filtered.map(({ id, ...otherProps }) => (
            <CollectionItem key={ id } { ...otherProps } />
          ))
        }
      </div>
    </div>
  )
};

export default PreviewCollection;