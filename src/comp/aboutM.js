import React, { Component } from 'react';
import '../Miria.css';
import Header from '../assets/miriaheader.svg';
import Arrow from "../assets/arrow.png";


class AboutM extends Component {
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
        
        <img src={Header} className="miriaProfile" />
        <img src={Arrow} className="arrow" onClick={this.goHome} />
        
        <div className="userInfo">
        
        <h2 className="header">Overview</h2>
        <br />
        
        <p className="content">
        I'm an User Interface and User Experience Designer based in Vancouver.
        <br /><br />
        
        With a background in Industrial Design (bachelor) and Psychology (unfinished bachelor), I have been working in the digital area since 2010, and since when I had the opportunity to work with user interface design (2 years), digital strategy & web content management (3 years), user experience and information architecture (2 years). 
        <br /><br />
    
    
        All those years handling all sort of digital projects and going from strategic planning, designing, implementing and ROI evaluations, gave me a valuable experience that helps me do the best for every project I work on.
        </p> 
        <br />
        
        <h2 className="header">Experience</h2>
        <br />
        
        <p className="content">
            <p className="contentTitle">Rogers Communications</p> 
            UX/UI Designer <br />
            July 2017 - Present <br />
            Help Cityfone to structure the project of building four websites, from UX strategy to visual design and assets delivery, taking into account stakeholders, business, and user’s needs.  <br />
        
            The project resulted in satisfied customers giving voluntary feedbacks on the NPS score research about how easy is to use the website, and find the information they need, compared to other websites. The first online sale of the company came just a couple of hours after the launching and it follows growing.
        </p>
        <br />
        <p className="content">
            <p className="contentTitle">Beavver</p>
            Co-founder <br />
            September 2017 - Present <br />
            Designed, marketed and worked with other 4 partners on creating a resume and career web application in the span of 4 months. Currently learning a ton, working hard on the business strategy, and having a lot of fun. 
        </p>
        <br />
        
        <h2 className="header">Education</h2>
        <br />
        
        <p className="content">
            <p className="contentTitle">British Columbia Institute of Technology</p> 
            Digital Design and Development, Diploma <br />
            September 2016 - Present
        </p>
        <br />
        <p className="content">
            <p className="contentTitle">Anhanguera Educadional</p>
            Bachelor of Design <br />
            September 2008 - April 2012
        </p>
          <br />  <br />
        </div>
        
          
      </div>
    );
  }
}

export default AboutM;
