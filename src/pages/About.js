import React from "react";
import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => (
<div>
<Navbar/>

<div class="mainAbout">
  
    <div className="head">
      <center>
        <h1 id="hero" class="samAbt">SAMYOG CHRONICLES</h1>
      </center>
    </div>
    <center>
      <h2 className="subtitle" style={{ color: "white" }}>
        Immerse yourself in the ethereal tapestry of "Samyog Chronicles,"
        <br /> where extraordinary adventures await.
      </h2>
    </center>
    <div className="wrapper">
    <div className="textboxl">
          <p>
            Samyog, a student forum, was founded by the esteemed Department of
            Information Science and Engineering in 2012. Serving as a vibrant
            medium, it provides students with a platform to express their
            technical and non-technical ideas through open meetings and
            enriching discussions. Initially, it was confined to
            department-level activities, encompassing a few technical talks and
            seminars. However, in 2013, the horizon expanded as a state-level
            conference took place under the illustrious Samyog banner. This
            momentous event allowed students to exchange knowledge and showcase
            their expertise by publishing technical papers in renowned journals.
          </p>
        </div>
        <img  class="cc" src="1.jpeg" alt="Image" />
       
      </div>
      <div className="wrapper">
      <img  class="cc" src="2.jpeg" alt="Image" />
    <div className="textbox">
          <p>
          Building upon the success of previous endeavors, the year 2015
            marked the advent of a remarkable national conference called NCAIT -
            the National Conference for Advancement in Information Technology.
            Organized by the department in collaboration with the influential
            Samyog Student Forum, this two-day conference attracted participants
            from across the nation. It served as a distinguished platform for
            students to publish their technical papers in esteemed journals,
            while also showcasing their innovative projects and posters. At the
            culmination of this intellectually stimulating event, the best
            paper, project, and poster were awarded cash prizes, fostering a
            spirit of recognition and excellence.
          </p>
        </div>
       
       
      </div>
      <div className="wrapper">
    <div className="textboxl">
          <p>
          In the pursuit of continued growth and progress, Samyog has
            successfully organized eight NCAIT conferences until 2020, each
            surpassing expectations and raising the bar higher. However, due to
            the unprecedented circumstances of the COVID-19 pandemic, the 2020
            NCAIT conference ingeniously adapted to the virtual realm, ensuring
            that knowledge sharing and collaboration persevered. Furthermore, in
            the year 2022, an internationally recognized IEEE sponsored
            conference, "Cognitive Computing and Information Processing"
            (CCIP-2022), further solidified Samyog's reputation as a catalyst
            for intellectual discourse and innovation.
          </p>
        </div>
        <img  class="cc" src="3.jpeg" alt="Image" />
       
      </div>
      <div className="wrapper">
      <img  class="cc" src="4.jpeg" alt="Image" />
    <div className="textbox">
          <p>
          Scope & Objectives: The primary purpose of this extraordinary forum
            is to provide students with an avenue to discover their hidden
            talents. By offering a platform for showcasing technical prowess,
            presentation skills, and effective communication, Samyog facilitates
            the organization of various events that empower students in the
            technical domain. Through our extensive Resource Library, this
            remarkable platform continues to embolden students, fostering
            confidence, acquiring new skills, and unlocking opportunities for
            promising placements.
          </p>
        </div>
      </div>
    </div>
  <div class="achievement">
  <center>
        <h1 style={{ color: "beige" }}>ACHIEVEMENT IMAGES</h1>
      </center>
      <center>
        <div className="row-about">
          <div className="images-about">
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
          </div>
        </div>

        <div className="row-about">
          <div className="images-about">
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
          </div>
        </div>

        <div className="row-about">
          <div className="images-about">
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
            <img src="1.jpeg" />
          </div>
        </div>
      </center>
  </div>
  <div className="footRes">
<Footer/>
  </div>
  </div>
);

export default About;
