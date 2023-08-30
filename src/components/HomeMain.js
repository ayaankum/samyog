import Carousel from './Carousel';
import Home from './Home';
import Navbar from './Navbar';
import TextBlock from './textBlock';
import Events from './Event';
import Club from './Club';
import React from 'react'
import Footer from './Footer';
function HomeMain(){
 
  return (
    <div class="App">
      <div className='naviga'>
        <Navbar/>
      </div>
      <section id="hero">
      <Home/>
      </section>
       <div class="inner">
       <TextBlock/>
       <br/><br/><br/>
       <hr></hr>
       <Carousel/>
       <hr></hr>
       {/* <Events/> */}
       {/* <hr></hr> */}
       <Club/>
       <Footer/>
       </div>
 </div>
   );
}
export default HomeMain;
