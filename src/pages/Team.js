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
          description1="His ninja skills aren't just for show – he can stealthily vanquish bugs from code like a true martial artist, making sure every line stays as sharp as a samurai sword. "
          designation="Founder & Rectifier Ninja
          "
        />
        <MovieCard
          posterImage="ayaan.jpg"
          title="AYAAN"
          description1="Weaves code like a magician, transforming mere syntax into mesmerizing digital tapestries.
          "
          designation="Captain of Code"
        />
        <MovieCard
          posterImage="Nandan.jpg"
          title="NANDAN"
          description1="
          His mind is a treasure trove of design brilliance, and his leadership guides his team through the maze of creativity like a seasoned explorer.
          "
          designation="Captain of Creative Curiosities"
        />
      </div>
      <div>
        
        <MovieCard
          posterImage="bhumika.jpg"
          title="BHUMIKA"
          description1="
          Her magical touch turns mundane user experiences into ethereal journeys, sprinkling her designs with the kind of UX pixie dust that even Tinker Bell would envy.
          "
          designation="Co-Founder & UX Wizard"
        />
        <MovieCard
          posterImage="sahil.jpg"
          title="SAHIL"
          description1="
          Sculpts code with the finesse of an artist, creating pixel masterpieces that deserve their own gallery.
          "
          designation="Front-End Artisan"
        />
        <MovieCard
          posterImage="praniti.jpg"
          title="PRANATHI"
          description1="
          Mixes colors like a sorceress concocting potions, turning hex codes into visual elixirs that evoke emotion.
          "
          designation="Color Alchemist"
          
        />
      </div>
      <div>
        <MovieCard
          posterImage="arpitha.jpg"
          title="ARPITHA"
          description1="
          Navigates the operational whirlwind like a seasoned captain, ensuring that projects sail smoothly through stormy seas of deadlines.
          "
          designation="Chief Chaos Coordinator"
        />
        <MovieCard
          posterImage="shreya.jpg"
          title="SHREYA"
          description1="
          Orchestrates symphonies of code that turn static designs into interactive concertos, leaving users applauding for more.
          "
          designation="Front-End Composer"
        />
        <div class="last2">
        <MovieCard
          posterImage="uttam.jpg"
          title="UTTAM"
          description1="
          Choreographs design ballets that captivate users, transforming pixels into pirouettes that dance across screens.
          "
          designation="UI Virtuoso"
        />
        </div> 
      </div>
      <MovieCard
          posterImage="lalitha.jpg"
          title="LALITHA"
          description1="Constructs layouts that are as solid as a castle's foundation and as visually pleasing as a medieval feast."
          designation="Design Architect"
          
        />
        <MovieCard
          posterImage="vivek.jpeg"
          title="VIVEK"
          description1="
          His eagle eyes spot unwanted images like a hawk on a mission.
          "
          designation="Image Inspector"
          />
    </div>
    <Footer/>
    </>
  );
};

export default Team;
