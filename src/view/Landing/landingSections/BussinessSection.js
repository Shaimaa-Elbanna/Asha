import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function BussinessSection() {
  return (
    <div id='bussiness'>
      <div className="section text-left my-5 ">
        <Container >
          <h2 className="title mb-5 text-center">Let's talk about Our Bussiness</h2>
          <Row>

            <Col className="text-left" md="12" lg='6'>
              <h5 className="description text-left">
                At Asha Innovation, we're pioneering the future of agriculture with state-of-the-art technology, designed to both nurture and protect our planet. Our core mission is to revolutionize the field of agriculture by developing cutting-edge devices capable of comprehensive monitoring and management of essential parameters such as soil moisture, NPK (Nitrogen, Phosphorus, Potassium) levels, temperature, humidity, and pH. By leveraging AI and our proprietary AI Model Asha, we offer farmers and agricultural professionals precise, real-time data enabling informed decisions, resource optimization, and significant crop yield enhancements. This initiative not only aims at improving agricultural productivity but also at making farming practices more efficient and data-driven.
              </h5>
              <br />

            </Col>
            <Col className="ml-auto mr-auto text-left" md="12" lg='6'>
              <h5 className="description">
                Our commitment to sustainability and environmental preservation underpins every innovation at Asha Innovation. Integrating solar technology, our devices utilize renewable energy, significantly cutting down the carbon footprint and endorsing eco-friendly farming practices. This endeavor is in line with our vision to foster sustainable agriculture and herald Industry 4.0 – a new era characterized by automation and intelligent data exchange. We are dedicated to developing agricultural innovations that promote a sustainable coexistence with the natural world. Our goal is a future where agriculture contributes to the health of our planet, fostering a greener, more sustainable world for generations to come. Join us as we move towards this future, one innovative step at a time.
              </h5>
              <br />

            </Col>
          </Row>
          <br />
          <br />
          <hr />
        </Container>
      </div></div>
  )
}
