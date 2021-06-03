import React from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//React icons
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa'
// logo
import logo from './logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="bg-light">
        <Container className="py-5">
          <Row className="py-4">
            <Col className="lg-4 md-6 mb-4 mg-lg-0">
              <img src={logo} alt="" width="180" className="mb-3"/>
              <p className="font-italic text-muted">Your next perfect pair, at the perfect price</p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><FaTwitter size="2em" color="gray"/></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"><FaFacebook size="2em" color="gray"/></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"><FaInstagram size="2em" color="gray"/></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"><FaPinterest size="2em" color="gray"/></i></a></li>
              </ul>
            </Col>
            <Col className="lg-2 md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted">By Style</a></li>
                <li className="mb-2"><a href="#" className="text-muted">By Price</a></li>
                <li className="mb-2"><a href="#" className="text-muted">By Region</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Our Blog</a></li>
              </ul>
            </Col>
            <Col className="lg-2 md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Join Us</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Wishlist</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Discounts</a></li>
              </ul>
            </Col>
            <Col className="lg-2 md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p className="text-muted mb-4">Sign up for our newsletter and get weekly updates on the latest trends, promotions and specials!</p>
              <section className="p-1 rounded border">
                <div className="input-group">
                  <input type="email" placeholder="Email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
                  <div className="input-group-append">
                    <button id="button-addon1" type="submit" className="btn btn-link">
                    <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
        <section className="bg-light py-4">
          <Container className="text-center">
            <p className="text-muted mb-0 py-2">
              ©  2021 Shoe-La-La All rights reserved
            </p>
          </Container>
        </section>
      </footer>
    </div>
  )
}

export default Footer