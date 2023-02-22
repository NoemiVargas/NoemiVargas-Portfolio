import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/White_2023_NVlogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/gitHub.png";
import navIcon3 from '../assets/img/email.png';
import navIcon4 from '../assets/img/nav-icon3.svg';
import navIcon5 from '../assets/img/nav-icon2.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/noemi-vargas-a32751253" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/NoemiVargas"  target="_blank" ><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:vargasj.noemi@gmail.com"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.instagram.com/noemiv_2323/" target="_blank"><img src={navIcon4} alt="" /></a>
              <a href="https://www.facebook.com/profile.php?id=100090698910484"  target="_blank"><img src={navIcon5} alt="" /></a>
            </div>
            <p> 2023 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}


/*------------------------------------ */

const Constact = () =>{
  return (
    <section>
      <div className="container">
        <h2 className="">Contact Me</h2>
        <form>
          <input type="text" placeholder='Full Name' name='user_name' required/>
          <input type="email" placeholder='Email' name='user_email' required/>
          <input type="text" placeholder='subject' name='subject' required/>
          <textarea name="message"></textarea>
          <button className="">Send Message</button>

          
        </form>
      </div>


    </section>
  )
}
export default Constact