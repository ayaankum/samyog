import React from "react";
import MovieCard from "./MovieCard";
import './Team.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Team = () => {
  return (
    <>
    <Navbar/>
    <h1 id="hero" class="h1Team">MEET THE TEAM</h1>
   
    <div className="wrapper">
      <div>
        <MovieCard
          posterImage="satwik.jpg"
          title="SATWIK"
          description1="The founder who has done nothing other than screwing"
          designation=""
          description2=""
        />
        <MovieCard
          posterImage="ayaan.jpg"
          title="AYAAN"
          description1=" Part time "
          designation="Development lead "
          description2="full time procastinator"
        />
        <MovieCard
          posterImage="Nandan.jpg"
          title="NANDAN"
          description1="Design Lead"
          designation=""
          description2=""
        />
      </div>
      <div>
        
        <MovieCard
          posterImage="bhumika.jpg"
          title="BHUMIKA"
          description1="I donno"
          designation=""
          description2=""
        />
        <MovieCard
          posterImage="sahil.jpg"
          title="SAHIL"
          description1="Developer, who mastered chatgpt and Claude by this project."
          designation=""
          description2=""
        />
        <MovieCard
          posterImage="praniti.jpg"
          title="PRANITHI"
          description1="Designer"
          designation=""
          description2=""
        />
      </div>
      <div>
        <MovieCard
          posterImage="arpitha.jpg"
          title="ARPITHA"
          description="HR"
        />
        <MovieCard
          posterImage="shreya.jpg"
          title="SHREYA"
          description="Dev"
        />
        <div class="last2">
        <MovieCard
          posterImage="uttam.jpg"
          title="UTTAM"
          description="Designer"
        />
        </div> 
      </div>
      <MovieCard
          posterImage="lalitha.jpg"
          title="LALITHA"
          description="Designer"
        />
        <MovieCard
          posterImage="vivek.jpeg"
          title="VIVEK"
          description="Designer"
        />
    </div>
    <Footer/>
    </>
  );
};

export default Team;
