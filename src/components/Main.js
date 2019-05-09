import React, { Component } from 'react';

import Photo from './Photo'
import Date from './Date'
import InfoBox from './InfoBox'
import Carrusel from './Carrusel'
import SecondaryInformation from './SecondaryInformation'

export default class Main extends Component {
  state = {

  }
  render() {
    return (
      <div className="main-container">
        <section>
          <div>
            <Date />
            <Photo image='./sol.jpeg'/>
          </div>
          <div>
            <InfoBox infoBox='Temperature 5ºC' />
            <InfoBox infoBox="Rain 5%" />
            <InfoBox infoBox="Clouds 80%" />
            <InfoBox infoBox="Wind 15 k/h" />
            <InfoBox infoBox="vivibility 90%" />
          </div>
        </section>
        <Carrusel></Carrusel>
        <SecondaryInformation />
      </div>
    );
  }
}
