
import { Container, Row, Col } from "react-bootstrap"
import contactImg from "../assets/img/mecontact.png"

export const Contact = () => {
    
    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Entre em contato"/>
                    </Col>
                    <Col md={6}>
                        <h2>Entre em contato!</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Nome" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Sobrenome" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="E-mail" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Telefone" />
                                </Col>
                                <Col>
                                    <textarea row="6" placeholder="Digite uma mensagem..." ></textarea>
                                    <button type="submit"><span>Enviar</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}