import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project.png";





import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  const projects = [
    {
      title: <a href="https://classy-hotteok-52ccd4.netlify.app" target="_blank">"Business" </a>,
      description:"Design & Development" ,
      imgUrl: projImg1,
     
    },
    {
      title:  <a href="https://aquamarine-madeleine-9f04a6.netlify.app" target="_blank">"Business" </a>,
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title:<a href="https://www.linkedin.com/in/noemi-vargas-a32751253" target="_blank">"Business" </a>,
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: <a href="https://effervescent-sherbet-c1606c.netlify.app/" target="_blank">"Blog" </a>,
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: <a href="https://joyful-pasca-fa9159.netlify.app" target="_blank">"Education" </a>,
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title:<a href="" target="_blank">"Business Startup"</a>,
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

 

    

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These projects were designed and developed with specific customer requirements. You can also recognize the use of the main tools. I'm always willing to apply new styles in each project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I'ts all for today,tomorrow there's more! ☺</p> 
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>



 

  )
}

