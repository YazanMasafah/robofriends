import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots'; 
import './App.css';
import Scrolling from '../components/Scroll.js';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () =>  dispatch(requestRobots())
    }
}

class App extends Component {
componentDidMount () {
    this.props.onRequestRobots();
    
}

    render() {
        const {searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })
        if (isPending) {
           return <h1>Loading</h1>;
        } else {
        return (
        <div className='tc'> 
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchchange={onSearchChange} />
            <Scrolling>
                <CardList robots={filteredRobots} />
            </Scrolling>   
        </div>
        ); 
       }
 }

}


export default connect(mapStateToProps, mapDispatchToProps)(App);