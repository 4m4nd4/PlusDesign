import { Container, Col, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/merecommend.png"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
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
                            <h2>Design skills</h2>
                            <p>Aqui você pode ver algumas de nossas skills.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Stars" />
                                    <h5>3D Art</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Stars" />
                                    <h5>2D Art</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Stars" />
                                    <h5>Logo</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Fundo" />
        </section>
      )

}