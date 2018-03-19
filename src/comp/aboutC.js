import React, { Component } from 'react';
import '../Camille.css';
import Header from '../assets/camilleheader.svg';
import Arrow from "../assets/arrow.png";


class AboutC extends Component {
    constructor(props){
        super(props);
        
        this.goHome = this.goHome.bind(this);
    }
    
    goHome=()=>{
        this.props.changePage(0);
    }
    
    
    
  render() {
    return (
      <div className="App">
        <img src={Header} className="camProfile" />
        <img src={Arrow} className="arrow" onClick={this.goHome} />
        
        <h2 className="header">Overview</h2>
        
        <p className="content">
        I am an aspiring UX/UI and interaction designer. I am currently enrolled in BCIT’s Digital Design and Development program, where I have developed a strong foundation in creating interactive and dynamic applications and websites. <br /> <br />

        I am fuelled by my curiosity, which is what sparked my interest in UX. I am always eager to learn new things and my curiosity is what drives me to find solutions to everyday problems.<br /> <br />

        I have taken on numerous side projects such as designing and creating websites and posters for startups based in the Philippines. These projects have helped my with my skills in design, HTML, CSS, and WordPress.
        </p> 
        <br />
        
        <h2 className="header">Experience</h2>
        
        <p className="content">
            UX/UI and Web Designer <br />
            Enactus |   December 2017 - Present <br />
            Created and designed both website and the mobile app to help increase the productivity of Enactus team members <br />
        
            Created wireframes, mockups, and prototypes which were used to conduct usability testing to improve the website and the app 
        </p>
        <p className="content">
            Web and Graphic Designer <br />
            BASI |  January 2017 - Present <br />
            Developed a website using a Wordpress theme and customized the theme using HTML, CSS, and basic PHP, which increased sales and resulted in a more user friendly website <br />
        
            Created posters regarding special sales and events and updated social media, which led to an increase in social media interaction and following 
        </p>
        <br />
        
        <h2 className="header">Education</h2>
        
        <p className="content">
            British Columbia Institute of Technology <br />
            Digital Design and Development <br />
            September 2016 - Present
        </p>
          
      </div>
    );
  }
}

export default AboutC;
