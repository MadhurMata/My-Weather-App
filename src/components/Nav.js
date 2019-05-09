import React, { Component } from 'react'

import Select from 'react-select';
import Date from './Date';

import customStyles from '../javaScript/selectStyle'


export default class Nav extends Component {
  state = {
    city: ""
  }

  render() {
    return (
      <div className="nav-container">
        <Date></Date>
        <Select styles={customStyles}></Select>
        <div>
          <p>12:22</p>
        </div>
      </div>
    )
  }
}

  