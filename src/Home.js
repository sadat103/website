import React from 'react'
import web from "../src/Images/1.jpeg"
import Common from './Common';
const Home = () =>
{
   return(
     <>
        
      <Common 
      name='Grow your business' 
      imgsrc={web} 
      visit="/service" 
      btname="Get started"/>
     </>


   );


};

export default Home;