import React, {Component} from 'react';
import {render} from 'react-dom';

import '../css/style.css';
import '../css/style.scss';
import keenImage from '../assets/img1.jpg'

export default class ServerList extends Component{

  constructor(props) {
    super(props);

    this.state = {
      configurations: [],
    };
  }  

  componentDidMount() {
    fetch("http://localhost:3000/download/request?host=2")
      .then(response => response.json())
      .then(data => 
        this.setState({ configurations: data.configurations }));
  }

  renderPara(items){
    let paraItems = [];
    for (const key of Object.keys(items)) {
      paraItems.push(<p>{key + " : " + items[key]}</p>)
    }   
    return paraItems;
  }

  renderList(){
    const listItems = this.state.configurations.map((item, index, arr) => 
      <li key={index}>{this.renderPara(item)}</li>);    
    return(<ul className="ul-style">{listItems}</ul>);
  }

  render(){
    return (
      <div>
     
          {this.renderList()}
      </div>

      )
  }
}

render(<ServerList/>, document.getElementById('app'));