import React from 'react';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'collection/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'collection/jackets'
        },
        {
          title: 'best fits',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 3,
          linkUrl: 'collection/bestfits'
        },
        {
          title: 'full collection',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 4,
          linkUrl: 'collection/fullcollections'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...otherProps }) => (
            <MenuItem key={ id }{ ...otherProps } />
          ))
        }
      </div>
    )
  }
}

export default Directory;