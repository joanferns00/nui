import React, {Component} from 'react';
import {render} from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/img1.jpg'

export default class Hello extends Component{


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
        {this.setState({ configurations: data.configurations })
          console.log(data);}

        );
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
      <div><p>Hello from React!</p>
      <img src={keenImage} alt="Commander Keen"/>
      {this.renderList()}
      </div>

      )
  }
}

render(<Hello/>, document.getElementById('app'));