import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/javaScript.png";
import meter4 from "../assets/img/react.png";
import meter5 from "../assets/img/castellano.png";
import meter6 from "../assets/img/english.png";
import meter7 from "../assets/img/portugues.png";

/*import colorSharp from "../assets/img/Bannner1.jpg";*/

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 400, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min:464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Junior Front-End Developer / Languages</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5> HTML5 </h5>
                                </div>

                                 <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5> CSS3</h5>
                                </div>

                                <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5> JavaScript</h5>
                                </div>

                                <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>React JS</h5>
                                </div>

                                <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Castellano</h5>
                                </div>

                                <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>English</h5>
                                </div>

                                <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Portugues</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

       
        
        </section>
    )
}
