import React, { Component } from 'react';
import'../App.css';

class Rooms extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        
        return (
            <div class="roomBG">
                <button onClick={this.props.handleDisplay.bind(this, "room1")} class="btn">Room1</button>
                <button onClick={this.props.handleDisplay.bind(this, "room2")} class="btn">Room2</button>
                <button onClick={this.props.handleDisplay.bind(this, "room3")} class="btn">Room3</button>
                <button onClick={this.props.handleDisplay.bind(this, "room4")} class="btn">Room4</button>
                <button onClick={this.props.handleDisplay.bind(this, "room5")} class="btn">Room5</button>
            </div>
        )
    }
}

export default Rooms;