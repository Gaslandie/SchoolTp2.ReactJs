import React from 'react';
import Image from './components/Image';
import Title from './components/Title';
import Description from './components/Description';

function SimpleCard () {
  return (
    <div>
      <Image image='/image/girl.jpg' />
      <Title titre='ceci est le titre'/>
      <Description description='ceci est la description' />
    </div>
  );
}

export default SimpleCard;
