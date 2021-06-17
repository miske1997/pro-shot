import './nav-bar.css'
import { Link } from "react-scroll";
const NavBar = (props) => {
    return ( 
        <div className='nav-bar'>
            <div className="btn">
                <Link to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
            </div>
            <div className="btn">
                <Link to="service" spy={true} smooth={true} offset={-80} duration={700}>The Shoot</Link>
            </div>
            <div className="btn">
                <Link to="about-me" spy={true} smooth={true} offset={-70} duration={1000}>About Me</Link>
            </div>
        </div>
      );
}
 
export default NavBar;