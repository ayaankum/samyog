import React from 'react';
import './Gallery.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Gallery() {
  return (
    <div className="gallery-container">
        <Navbar/>
      <h1 id= "hero" className="gallery-header">GALLERY</h1>
      <div className="image-grid">
        <div className="image">
          <img src="1G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div className="image">
          <img src="2G.webp" alt="Image 2"  loading="lazy"/>
        </div>
        <div class="image">
          <img src="3G.webp" alt="Image 1"  loading="lazy"/>
        </div>
        <div class="image">
          <img src="4G.webp" alt="Image 2"  loading="lazy"/>
        </div>
        <div class="image">
          <img src="5G.webp" alt="Image 1"  loading="lazy"/>
        </div>
        <div class="image">
          <img src="6G.webp" alt="Image 2"  loading="lazy"/>
        </div>
        <div class="image">
          <img src="7G.webp" alt="Image 1"  loading="lazy"/>
        </div>
        <div  id="g1" class="image">
          <img src="8G1.webp" alt="Image 2" loading="lazy" />
        </div>
        <div class="image">
          <img src="9G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div class="image">
          <img src="20G.webp" alt="Image 2" loading="lazy"/>
        </div>
        <div class="image">
          <img src="9G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div class="image">
          <img src="8G.webp" alt="Image 2" loading="lazy"/>
        </div>
        <div class="image">
          <img src="11G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div id="g" class="image">
          <img src="12G.webp" alt="Image 2" loading="lazy"/>
        </div>
        <div class="image">
          <img src="13G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div class="image">
          <img src="14G.webp" alt="Image 2" loading="lazy"/>
        </div>
        <div class="image">
          <img src="15G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div class="image">
          <img src="16G.webp" alt="Image 2" loading="lazy"/>
        </div>
        <div class="image">
          <img src="18G.webp" alt="Image 1" loading="lazy"/>
        </div>
        <div class="image">
          <img src="19G.webp" alt="Image 2" loading="lazy"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery
