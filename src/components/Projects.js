import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import project1 from "../assets/img/project1.png"
import project2 from "../assets/img/project2.png"
import project3 from "../assets/img/project3.png"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {

    const projects = [
        {
          title: "TechType",
          description: "Adobe",
          imgUrl: project1,
        },
        {
          title: "NikeBox",
          description: "3D box",
          imgUrl: project2,
        },
        {
          title: "Sideface",
          description: "Adobe",
          imgUrl: project3,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Aqui você pode ver alguns de nossos projetos finalizados.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justfy-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second"><p>Em breve!</p></Tab.Pane>
                                <Tab.Pane eventKey="third"><p>Em breve!</p></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Fundo2"></img>
        </section>
    )
}