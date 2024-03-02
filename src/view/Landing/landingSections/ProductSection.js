import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Container, Row } from 'react-bootstrap'
import './product.css'
export default function ProductSection() {
  const [describtions, setDescribtions] = useState({
    fertilizationDev: `Introducing our cutting-edge soil fertility monitoring device, expertly designed for
    precision agriculture. This advanced tool provides real-time, accurate measurements of
    crucial soil nutrients: Nitrogen, Phosphate, and Potassium (NPK). Seamlessly integrated
    with our state-of-the-art monitoring platform, it enables continuous, second-by-second
    tracking of soil conditions from any device – whether you're on a PC or mobile phone.
    Elevate your farm management with this device's ability to connect directly to NPK
    element tanks, granting unparalleled control over soil composition. This ensures optimal
    fertilization, fostering superior crop health and yield. Experience the convenience of
    remote monitoring and make informed decisions for the best care of your farms,
    anywhere, anytime.
    this device harnesses the power of the sun, eliminating the need for external power
    sources. Simply install it in your soil and let the solar technology take over. This ecofriendly solution not only reduces your carbon footprint but also ensures continuous,
    reliable monitoring without the hassle of power connections. Embrace a greener approach
    to precision agriculture with our self-sufficient, solar-powered device – your hassle-free
    partner in advanced farm management.`,
    waterControl: `Transform your agricultural practices with our revolutionary irrigation management
    device. Designed for convenience and efficiency, this tool is the key to conserving water
    and reducing manual labor. With just a simple click from your location – be it on-site or
    remote – you can effortlessly initiate and control the irrigation of your fields.
    Our device goes beyond mere irrigation control; it allows you to schedule watering
    routines for weeks or even months in advance. This feature ensures your crops receive
    the right amount of water exactly when needed, promoting optimal growth and
    sustainability. All these functionalities are accessible through an intuitive, all-in-one
    platform, enabling you to monitor and adjust water flow seamlessly. Experience the
    future of farming with our smart irrigation solution, where technology meets agronomy.
    this device harnesses the power of the sun, eliminating the need for external power
    sources. Simply install it in your soil and let the solar technology take over. This ecofriendly solution not only reduces your carbon footprint but also ensures continuous,
    reliable monitoring without the hassle of power connections. Embrace a greener approach
    to precision agriculture with our self-sufficient, solar-powered device – your hassle-free
    partner in advanced farm management`,
    soilMontoring: `Introducing our state-of-the-art farm monitoring device, designed to be your virtual eyes
    across the fields. This innovative technology empowers you to monitor a comprehensive
    range of critical farm parameters in real time, all from a single, user-friendly platform.
    Whether you're at home or on the go, stay informed about soil pH, air humidity,
    temperature, moisture levels, and water quality.
    Customizable to your specific needs, our device allows the addition of various
    parameters, ensuring a tailored approach to farm management. This holistic surveillance
    capability aids in making timely, informed decisions about crucial aspects like nutrient
    requirements or irrigation needs. Streamline your farming operations with our advanced
    solution, bringing precision agriculture to your fingertips.
    this device harnesses the power of the sun, eliminating the need for external power
    sources. Simply install it in your soil and let the solar technology take over. This ecofriendly solution not only reduces your carbon footprint but also ensures continuous,
    reliable monitoring without the hassle of power connections. Embrace a greener approach
    to precision agriculture with our self-sufficient, solar-powered device – your hassle-free
    partner in advanced farm management.`,
    powerSubDev: `Discover our innovative Smart Power Supply, a game-changer in sustainable agricultural
    practices. This device is expertly crafted to integrate seamlessly with your existing
    equipment, providing a dependable source of clean power through solar energy. Ideal for
    operating pumps and motors, it not only champions environmental responsibility but also
    significantly reduces operating costs.
    By embracing this solar-powered solution, you contribute to a greener future, minimizing
    your carbon footprint and benefiting from low-cost, renewable energy. Our Smart Power
    Supply represents a commitment to sustainability, offering a practical, cost-effective
    solution to power your agricultural operations, helping you save money while protecting
    the planet.`
  })

  const [showFullText, setShowFullText] = useState({
    fertilizationDev: false,
    waterControl: false,
    soilMontoring: false,
    powerSubDev: false
  })

  function toggleFullText(product) {
    setShowFullText(prev => ({ ...prev, [product]: !prev[product] }))
  }


  function renderDescribtion(product) {
    const words = describtions[product].split(" ")
    if (showFullText[product] || words.length <= 20) {
      return describtions[product]
    }
    else {
      return words.splice(0, 20).join(" ")
    }
  }
  return (
    <div id='products'>
      <div className="section  text-center my-5">
        <Container>
          <h2 className=" text-black">Let's talk about Products</h2>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      className='w-100'
                      alt="..."
                      src={require("../../../assets/mainImg/2.png")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle className=' h4  '>fertilization Unit
                      </CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center text-dark">
                    {
                      renderDescribtion("fertilizationDev")
                    }                    <span className=' text-decoration-underline cursor-pointer text-secondary' onClick={() => toggleFullText('fertilizationDev')}
                    >{!showFullText.fertilizationDev ? "see more..." : "see less..."} </span>

                  </p>
                </CardBody>

              </Card>
            </Col>
            {/* <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("../../../assets/mainImg/3.png")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Water Control Unit
                      </CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Description of Device 2.


                  </p>
                </CardBody>

              </Card>
            </Col> */}
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("../../../assets/mainImg/4.png")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Water Mentor Unit
                      </CardTitle>
                      {/* <h6 className="card-category">Developer</h6> */}
                    </div>
                  </a>
                  <p className="card-description text-center text-dark">
                    {

                      renderDescribtion("waterControl")
                    }                    <span className=' text-decoration-underline cursor-pointer text-secondary' onClick={() => toggleFullText('waterControl')}
                    > {!showFullText.waterControl ? "see more..." : "see less..."}</span>

                  </p>
                </CardBody>

              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("../../../assets/mainImg/5.png")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Soil Mentor Unit

                      </CardTitle>
                      {/* <h6 className="card-category">Developer</h6> */}
                    </div>
                  </a>
                  <p className="card-description text-center text-dark">
                    {

                      renderDescribtion("soilMontoring")
                    }                    <span className=' text-decoration-underline cursor-pointer text-secondary' onClick={() => toggleFullText('soilMontoring')}
                    > {!showFullText.soilMontoring ? "see more..." : "see less..."}</span>

                  </p>
                </CardBody>

              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("../../../assets/mainImg/1.png")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Power Supply Unit

                      </CardTitle>
                      {/* <h6 className="card-category">Developer</h6> */}
                    </div>
                  </a>
                  <p className="card-description text-center text-dark">
                    {

                      renderDescribtion("powerSubDev")
                    }                    <span className=' text-decoration-underline cursor-pointer text-secondary' onClick={() => toggleFullText('powerSubDev')}
                    > {!showFullText.powerSubDev ? "see more..." : "see less..."}</span>

                  </p>
                </CardBody>

              </Card>
            </Col>

          </Row>
          <hr />
          <hr />
        </Container>
      </div>
    </div>)
}
