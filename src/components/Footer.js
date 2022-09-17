import { Container, Col, Row } from "react-bootstrap"
import logo from "../assets/img/MyPortfolioLOGO.png"
import navIcon1 from '../assets/img/github.png'
import navIcon2 from '../assets/img/linkedin.png'
import navIcon3 from '../assets/img/gmail.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" className="logof"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="SocialIcon"/></a>
                            <a href=""><img src={navIcon2} alt="SocialIcon"/></a>
                            <a href=""><img src={navIcon3} alt="SocialIcon"/></a>
                        </div>
                    </Col>
                </Row>
                <p>&copy; Amanda Ramos</p>
            </Container>
        </footer>
    )
}