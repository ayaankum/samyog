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
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        <MovieCard
          posterImage="ayaan.jpg"
          title="AYAAN"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        <MovieCard
          posterImage="1.jpeg"
          title="NANDAN"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
      </div>
      <div>
        
        <MovieCard
          posterImage="1.jpeg"
          title="BHUMIKA"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        <MovieCard
          posterImage="sahil.jpg"
          title="SAHIL"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        <MovieCard
          posterImage="1.jpeg"
          title="PRANITHI"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
      </div>
      <div>
        <MovieCard
          posterImage="1.jpeg"
          title="ARPITHA"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        <MovieCard
          posterImage="1.jpeg"
          title="SHERYA"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        <div class="last2">
        <MovieCard
          posterImage="uttam.jpg"
          title="UTTAM"
          description="Kyouko Hori is a bright and popular high school student, in contrast to her classmate Izumi Miyamura, a gloomy and seemingly nerdy, glasses-wearing boy. At home, Hori is a homebody who dresses down and looks after her younger brother, Souta. She takes every attempt to hide this from her classmates, as to not disrupt her social status and cause others to worry."
        />
        </div> 
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Team;
