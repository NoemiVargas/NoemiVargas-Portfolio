import { useEffect, useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/White_2023_NVlogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/gitHub.png';
import navIcon3 from '../assets/img/email.png';
import navIcon4 from '../assets/img/nav-icon3.svg';
import navIcon5 from '../assets/img/nav-icon2.svg'


//pdf cv
import Documento from '../NoemiVargas_CV.pdf'


export const NavBar = () => {
    const [activeLink, setActiveLink] =useState('home');
    const [scrolled, seScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY >50){
                seScrolled(true);
            } else{
                seScrolled(false);
            }
         }

         window.addEventListener("scroll",onScroll);

         return () => window.removeEventListener("scroll", onScroll);
        
    }, [])

    const onUpdateActiveLinks = (value) => {
        setActiveLink(value);
        
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>

            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className ="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLinks('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLinks('skills')}>Skills</Nav.Link> 
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLinks('projects')}>Projects</Nav.Link>

                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/noemi-vargas-a32751253 " target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/NoemiVargas " target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="mailto:vargasj.noemi@gmail.com"><img src={navIcon3} alt="" /></a>
                            <a href="https://www.instagram.com/noemiv_2323/" target="_blank"><img src={navIcon4} alt="" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100090698910484" target="_blank"><img src={navIcon5} alt="" /></a>
                            
                        </div> 

                        <a href={Documento} download>
                        <button className="vvd" onClick={() => console.log('connect')}><span>My Resume</span></button>
                        </a>


                        
                    </span>

                   
                </Navbar.Collapse>

            </Container>
        
        </Navbar>

    )
}