import React from 'react';

export default function Photo(props) {
  // console.log(props.image);
  return (
    <div>
      <img src={require('../images/download.png')} alt="Weather" />

    </div>
  );
}
