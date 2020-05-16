import React, {Component} from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots'; 
import './App.css';
import Scrolling from '../components/Scroll.js' 

class App extends Component {
constructor() {
    super();
    this.state= {
        robots: [],
        searchfield: ''    
    };
} 

componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}) );
    
}

onSearchChange = (event) => {
    this.setState ({searchfield: event.target.value})
    
  }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        if (this.state.robots.length === 0) {
           return <h1>Loading</h1>;
        } else {
        return (
        <div className='tc'> 
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchchange={this.onSearchChange} />
            <Scrolling>
                <CardList robots={filteredRobots} />
            </Scrolling>   
        </div>
        ); 
       }
 }

}


export default App;