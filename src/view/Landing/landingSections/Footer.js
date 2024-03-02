import React from "react";
import { Row, Container, Col } from "react-bootstrap"; // Import Col

export default function Footer() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6" className="text-center">
                        <i className="fa fa-envelope" />
                        <a href="https://www.creative-tim.com/license?ref=pkr-footer" target="_blank">
                            Gmail : <span>asha.agritech24@gmail.com</span>
                        </a>
                    </Col>
                    <Col md="6" className="text-center">
                        <i className="fas fa-phone"></i>
                        <a href="https://www.creative-tim.com/license?ref=pkr-footer" target="_blank">
                            Phone : <span> +20 10 1702 0846 - +20 10 9172 8114</span>
                        </a>
                    </Col>
                    <Col md="6" className="text-center">
                        <i className="fa fa-whatsapp" />
                        <a href="https://api.whatsapp.com/send/?phone=%2B201017020846&text&type=phone_number&app_absent=0" target="_blank">
                            Whatsapp
                        </a>
                    </Col>
                    <Col md="6" className="text-center">
                        <i className="fa fa-facebook-square" />
                        <a href="https://www.facebook.com/people/Asha/61556755342128/" target="_blank">
                            Facebook
                        </a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}
