import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Content extends Component{
  constructor(props){
    super(props);
  }



  render(){
    ////<p>{key + " : " + items[key]}</p>

   return (
    this.props.keyValue === 'name' 
    ? (<h1> <span className="content">{this.props.keyValue}</span> : {this.props.value}</h1>) 
    : (<p><span className="content">{this.props.keyValue}</span> : {this.props.value}</p>));
  }

}