import React, {Component} from 'react';
import {render} from 'react-dom';

import Content from './Content';
import Header from './Header';
import Footer from './Footer';

import '../css/style.css';
import '../css/style.scss';

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
      paraItems.push(<Content key={key} keyValue={key} value={items[key]} />)
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
      <Header/>
          {this.renderList()}
      <Footer size={this.state.configurations.length}/>
      </div>

      )
  }
}

render(<ServerList/>, document.getElementById('app'));