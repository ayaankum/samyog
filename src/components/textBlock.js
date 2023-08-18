import './textBlock.css';
import RotateLogo from './RotateLogo';
import { Link } from 'react-router-dom';
function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">THE STUDENT CHAPTER OF ISE, JSSATEB</h1>
                <p id="textblock-content">
                Samyog is a vibrant community that serves as a powerful platform for students to connect, collaborate, and <br/>engage
         in thoughtful discussions on a wide range of topics that pique their interest. With an emphasis on<br/> fostering intellectual
          curiosity and promoting the exchange of ideas, Samyog creates a space where students can come together to share their knowledge,
           experiences, and opinions. Whether it's science, technology, arts, culture, or current affairs, Samyog provides a welcoming environment. 
                </p>
                <div id="rotate-logo"><RotateLogo/></div>
                <Link to="/aboutus"id='learn-more'>Learn more </Link>
            </div>
        </div>
    );
}

export default TextBlock;