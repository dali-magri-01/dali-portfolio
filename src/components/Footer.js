import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/daliL.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon"style={{marginTop:"50px"}}>
              <a href="https://www.linkedin.com/in/mohamed-ali-magri-a1b633227/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/dali.magri.1/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/dali_magri/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <br/><br/>
            <h5>Phone: 94395323</h5>
            
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
