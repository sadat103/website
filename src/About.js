import React from 'react'
import web from "../src/Images/1.jpeg"
import Common from './Common';
const About = () =>
{
   return(
     <>
        
        <Common 
        name='Welcome to About page' 
        imgsrc={web} 
        visit="/contact" 
        btname="Contact Now"/>
     </>


   );


};

export default About;