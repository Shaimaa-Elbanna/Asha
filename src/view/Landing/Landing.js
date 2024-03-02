import React from 'react';
import NavBar from '../../component/NavBar';
import LandingHeader from './landingSections/LandingHeader';
import ProductSection from './landingSections/ProductSection';
import AboutUsSection from './landingSections/AboutUsSection';
import {
    Button,
    Form,
    FormControl,
    InputGroup,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import BussinessSection from './landingSections/BussinessSection';
import Footer from './landingSections/Footer';

export default function Landing() {
    return (
        <>
            <NavBar />
            <LandingHeader />
            <BussinessSection />
            <ProductSection />
            <AboutUsSection />

            <div id="contactUs" className="section landing-section my-5">
                <Container>
                    <Row>
                        <Col className=" m-auto" md={8}>
                            <h2 className="text-center">Keep in touch?</h2>
                            <Form className="contact-form">
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <i className="nc-icon nc-single-02" />
                                                </InputGroup.Text>
                                                <FormControl placeholder="Name" type="text" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text>
                                                    <i className="nc-icon nc-email-85" />
                                                </InputGroup.Text>
                                                <FormControl placeholder="Email" type="text" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <FormControl
                                        placeholder="Tell us your thoughts and feelings..."
                                        as="textarea"
                                        rows={4}
                                    />
                                </Form.Group>
                                <Row>
                                    <Col className="ml-auto mr-auto" md={4}>
                                        <Button variant="danger" size="lg">
                                            Send Message
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}
