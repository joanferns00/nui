import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Footer extends Component{
  constructor(props){
    super(props);
  }

  render(){
   return (<p className='content-center'> Total number of items is, {this.props.size}</p>);
  }

}