import React, { Component } from 'react';
import '../App.css';
import mySocket from 'socket.io-client';
import closeicon from '../assets/go-back.svg';

class App extends Component {
    
  
    componentDidMount(){
        //this.socket = mySocket("http://localhost:10001");
    }
    
    goHome=()=>{
        this.props.changePage(0);
    }
    
    render() {
        
        return (
        <div className="container">
            
            <img src={closeicon} className="close" alt="go back" onClick={this.goHome}/>
            
            <div className="homeheader">
            <p className="heading1">CHESS</p>
            <p className="heading2">Play with your friends</p>
            </div>
            
            
         
        </div>
        );
       
    }
}

export default App;
