import React, { Component } from "react";
import { robots } from "./robots";
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll.js';



const state = { robots, searchfield:''}
class App extends Component {
 constructor() {
  super()
    this.state = {
     robots: robots, searchfield:''
    }
 }
 
 onSearchChange = (event) => {
  this.setState({searchfield: event.target.value})
  console.log(event.target.value);
 }
 render() {
  const filteredRobots = this.state.robots.filter(robots =>{ return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  return (
    <div className='tc'>
      <h1 className="f1">robofriends</h1>
      <Searchbox searchChange={this.onSearchChange}/>
      <Scroll> 
        <Cardlist robots={filteredRobots}/>
      </Scroll>
    </div>
  );
 } 
}

export default App;