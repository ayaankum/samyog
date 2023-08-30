import React from "react";
import "./Resource.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resource = () => {
  return (
    <div>
      <Navbar/>
      <h1 id="hero" style={{ color: "white" }}>
        <center>RESOURCES</center>
      </h1>

      <div className="container1">
        <div className="image-grid">
          <div className="image-item">
            <a href="https://www.youtube.com/watch?v=KnvbUiSxvbM&list=PL98qAXLA6aftD9ZlnjpLhdQAOFI8xIB6e">
              <img src="Cprogramming.png" alt="Image 1" />
            </a>
            <div className="image-text">C programming</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/watch?v=xk4_1vDrzzo&pp=ygUWY29tcGxldGUgZ3VpZGUgdG8gamF2YQ%3D%3D">
              <img src="Javares.png" alt="Image 1" />
            </a>
            <div className="image-text">Java programming</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3">
              <img src="pythonres.png" alt="Image 1" />
            </a>{" "}
            <div className="image-text">Python programming</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/watch?v=-TkoO8Z07hI">
              <img src="C++res.png" alt="Image 1" />
            </a>{" "}
            <div className="image-text">C++ programming</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI">
              <img src="aires.png" alt="Image 1" />
            </a>{" "}
            <div className="image-text">ARTIFICIAL INTELLIGENCE</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/watch?v=OGxgnH8y2NM&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v">
              <img src="MLres.png" alt="Image 1" />
            </a>{" "}
            <div className="image-text">MACHINE LEARNING</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/watch?v=h0gWfVCSGQQ&pp=ygUVY29tcGxldGUgZ3VpZGUgdG8gSU9U">
              <img src="IOTres.png" alt="Image 1" />
            </a>{" "}
            <div className="image-text">INTERNET OF THINGS</div>
          </div>
          <div className="image-item">
            <a href="https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_">
              <img src="Cyberres.png" alt="Image 1" />
            </a>{" "}
            <div className="image-text">CYBER SECURITY</div>
          </div>
        </div>
      </div>
     
      <div class="knwYpth">KNOW YOUR PATH</div>
      <div class="roadTopath" style={{ marginTop: "150px", marginBottom: "10px" }}>
      <div className="know" style={{ position: "relative" }}>
        <center>
          <img
            style={{ width: "100%", height: "100%" }}
            src="middle.png"
            alt="roadmap"
          />

          <a className="course"
            href="https://roadmap.sh/sql"
            style={{
              position: "absolute",
              top: 95,
              left: 230,
              fontSize: "1.4rem"
            }}
          >
            SQL
          </a>
          <a className="course"
            href="https://roadmap.sh/golang"
            style={{
              position: "absolute",
              top: 110,
              left: 425,
              fontSize: "1.15rem"
            }}
          >
            GO
            <br />
            DEVELOPER
          </a>
          <a className="course"
            href="https://roadmap.sh/frontend"
            style={{
              position: "absolute",
              top: 260,
              left: 162,
              fontSize: "1.1rem"
            }}
          >
            FRONTEND
            <br />
            DEVELOPER
          </a>
          <a className="course"
            href="https://roadmap.sh/react"
            style={{
              position: "absolute",
              top: 260,
              left: 492,
              fontSize: "1.15rem"
            }}
          >
            REACT
            <br />
            DEVELOPER
          </a>
          <a className="course"
            href="https://roadmap.sh/backend"
            style={{
              position: "absolute",
              top: 434,
              left: 197,
              fontSize: "1.15rem"
            }}
          >
            BACKEND
            <br />
            DEVELOPER
          </a>
          <a className="course"
            href="https://roadmap.sh/blockchain"
            style={{
              position: "absolute",
              top: 400,
              left: 420,
              fontSize: "1rem"
            }}
          >
            BLOCKCHAIN
            <br />
            DEVELOPER
          </a>
        </center>
      </div>
      </div>
     
     {/* notes */}
    <br/><br/><br/><br/><br/><br/>
     <div class="notesmain">
      <h1 class="notes" style={{ color: "aqua" }}>NOTES:</h1>
      <br />
      <br />
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            borderCollapse: "collapse",
            borderSpacing: "0",
            width: "100%",
            border: "1px solid #000"
          }}
        >
          <tr>
            <th className="tablepart" style={{ fontSize: "30px" }}>
              SUBJECT
            </th>
            <th class="credit" style={{ fontSize: "30px" }}>CREDITS</th>
            
          </tr>
          <br />
          <br />
          <tr>
            <td>MATHEMATICAL FOUNDATIONS FOR COMPUTING(21CS41)</td>
            <td>
              <pre> 3</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/10k6I2VJhmJEONhQ92bh4Wu4usg_J4tx6?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>DESIGN AND ANALYSIS OF ALGORITHMS(21CS42)</td>
            <td>
              <pre> 4</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1zexgVA8DbpvLC15Gnrf6s1hHx42O6oIn?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>MICROCONTROLLER AND EMBEDDED SYSTEMS(21CS43)</td>
            <td>
              <pre> 4</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1jZDIBWCX1rUzI7YOLlPGh2XDBbVYE9ob?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>OPERATING SYSTEMS(21CS44)</td>
            <td>
              <pre> 3</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1P0p7BatobJcU7WP5udhfhm0dcYXIvJSP?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>PYTHON PROGRAMMING LABORATORY(21CSL46)</td>
            <td>
              <pre> 1</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/11hmkfTr6IHWTp98u_JthIrIBZVG_FX7v?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>WEB PROGRAMMING(21CSL481)</td>
            <td>
              <pre> 1</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1Hdgfi0Mtrq43qzNoDeVvhVVHqACYd2gN?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>BIOLOGY FOR ENGINEERS(21BE45)</td>
            <td>
              <pre> 2</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1IOP8UKpJiEw0891rJnWso40_TIpzfcFo?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>SAMSKRUTIKA KANNADA(21KSK47)</td>
            <td>
              <pre> 1</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1n7w2VRz6btE5S7iabQVOGeWX2nO1dxmZ?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>BALAKE KANNADA (21KBK47)</td>
            <td>
              <pre> 1</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1-Zk_WPyxe6zM5DiQw_vRttyHNUYQ2UBQ?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>UNIVERSAL HUMAN VALUES(21UHV49)</td>
            <td>
              <pre> 1</pre>
            </td>
            <td>
              <button class="notesBtn">
                <a class="noteslink" href="https://drive.google.com/drive/folders/1XkjkG2cTO4v1j4remfBvkJa3ixpwzaKm?usp=sharing">
                  <b>VIEW</b>
                </a>
              </button>
            </td>
          </tr>
        </table>
        <br/>
      </div>
    </div>
    <br/><br/>
    <Footer/>
    </div>
  );
};

export default Resource;
