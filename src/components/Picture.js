import React from 'react';

const Picture = (props) => (
  <div className='picture'>
    <img 
      alt='placeholder'
      src={props.src}
      className='picture'
    />
    {props.children}
  </div>
)

export default Picture;
