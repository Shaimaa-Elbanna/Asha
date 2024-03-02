import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function AboutUsSection() {
  return (
    <div id='aboutUs'> <div className="section text-center my-5">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h2 className="title">Let's talk About Us
            </h2>
            <h5 className="description">
              Founded with a vision to revolutionize the agricultural landscape, "Asha Innovation" stands at the forefront of technological innovation in the field of sustainable farming. Our expertise lies in crafting state-of-the-art agricultural devices, from soil moisture and nutrient monitors to comprehensive environmental condition trackers, all powered by clean, solar energy. Dedicated to the principles of sustainability and eco-friendly practices, we strive to reduce carbon emissions and promote the efficient use of resources. At Asha Innovation , we are not just investing in agriculture; we are nurturing the future of our planet, ensuring that we pave the way for a sustainable and technologically advanced agricultural industry. Join us as we contribute to a greener world, one innovation at a time.


            </h5>
            <br />
            {/* <Button
              className="btn-round"
              color="info"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              See Details
            </Button> */}
          </Col>
        </Row>
        <br />
        <br />
        {/* <Row>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-album-2" />
              </div>
              <div className="description">
                <h4 className="info-title">Beautiful Gallery</h4>
                <p className="description">
                  Spend your time generating new ideas. You don't have to
                  think of implementing.
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-bulb-63" />
              </div>
              <div className="description">
                <h4 className="info-title">New Ideas</h4>
                <p>
                  Larger, yet dramatically thinner. More powerful, but
                  remarkably power efficient.
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-chart-bar-32" />
              </div>
              <div className="description">
                <h4 className="info-title">Statistics</h4>
                <p>
                  Choose from a veriety of many colors resembling sugar
                  paper pastels.
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-sun-fog-29" />
              </div>
              <div className="description">
                <h4 className="info-title">Delightful design</h4>
                <p>
                  Find unique and handmade delightful designs related items
                  directly from our sellers.
                </p>
                <Button className="btn-link" color="info" href="#pablo">
                  See more
                </Button>
              </div>
            </div>
          </Col>
        </Row> */}
        <hr />
      </Container>
    </div></div>
  )
}
