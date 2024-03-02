// // import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import brandLogo from "../assets/mainImg/logo-removebg-preview.png";
// import { Container, NavItem, NavLink } from "react-bootstrap";

// function NavBar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home" className="bg-danger ">
//           <img src={brandLogo} className="w-25" style={{ width: "100px" }} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav navbar className="">
//             <NavItem>
//               <a href="#bussiness" className="nav-link">
//                 <i className="nc-icon nc-layout-11" /> Our Bussiness
//               </a>
//             </NavItem>
//             <NavItem>
//               <a href="#products" className="nav-link">
//                 <i className="nc-icon nc-layout-11" /> Products
//               </a>
//             </NavItem>
//             <NavItem>
//               <a href="#aboutUs" className="nav-link">
//                 <i className="nc-icon nc-layout-11" />
//                 About Us
//               </a>
//             </NavItem>
//             <NavItem>
//               <a href="#contactUs" className="nav-link">
//                 <i className="nc-icon nc-layout-11" /> Contact Us
//               </a>
//             </NavItem>

//             <NavItem>
//               <NavLink
//                 data-placement="bottom"
//                 href="https://www.facebook.com/people/Asha/61556755342128/"
//                 target="_blank"
//                 title="Like us on Facebook"
//               >
//                 <i className="fa fa-facebook-square" />
//                 <p className="d-lg-none">Facebook</p>
//               </NavLink>
//             </NavItem>
//             {/* <NavItem>
//               <NavLink
//                 data-placement="bottom"
//                 href="asha.agritech24@gmail.com"
//                 target="_blank"
//                 title="Follow us on Twitter"
//               >
//                 <i className="fa fa-envelope" />
//                 <p className="d-lg-none">Gmail</p>
//               </NavLink>
//             </NavItem> */}

//             <NavItem>
//               <NavLink
//                 data-placement="bottom"
//                 href="https://api.whatsapp.com/send/?phone=%2B201017020846&text&type=phone_number&app_absent=0"
//                 target="_blank"
//                 title="Follow us on Instagram"
//               >
//                 <i className="fa fa-whatsapp" />
//                 <p className="d-lg-none">Instagram</p>
//               </NavLink>
//             </NavItem>
//             {/* <NavItem>
//               <NavLink
//                 data-placement="bottom"
//                 href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
//                 target="_blank"
//                 title="Star on GitHub"
//               >
//                 <i className="fa fa-github" />
//                 <p className="d-lg-none">GitHub</p>
//               </NavLink>
//               </NavItem> */}
//             <NavItem></NavItem>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React from "react";
import classnames from "classnames";
import brandLogo from "../assets/mainImg/logo-removebg-preview.png";
import "./navbar.css";
import { Collapse, Navbar, NavItem, NavLink, Nav } from "react-bootstrap";

function NavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      {/* <Container> */}
      <div className=" container">
        <div className="navbar-translate w-25">
          <div data-placement="bottom" to="/index">
            <img src={brandLogo} alt="Your Logo" className="w-50 h-50" />
          </div>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav>
            <Nav.Link to="#bussiness" className="bg-danger">
              Our Business
            </Nav.Link>
            <Nav.Link to="#products">Products</Nav.Link>
            <Nav.Link to="#aboutUs">About Us</Nav.Link>
            <Nav.Link to="#contactUs">Contact Us</Nav.Link>
            {/* Additional links */}
          </Nav>
        </Collapse>
        {/* </Container> */}
      </div>
    </Navbar>
  );
}

export default NavBar;
