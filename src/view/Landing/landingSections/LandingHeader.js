import React from "react";
import { Container } from "react-bootstrap";
import backgroundImage from "../../../assets/mainImg/a.png";

function LandingHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform = `translate3d(0,${windowScrollTop}px,0)`;
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', // Needed to position the overlay correctly
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.50)', // 75% transparent black
        }}></div>

        {/* Content */}
        <Container style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative', // Ensure it's above the overlay
          zIndex: 1,
        }}>
          <div className="motto text-center text-white">
            <h1>Your journey starts with us</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingHeader;
