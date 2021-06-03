import React from 'react';
//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
// images
import converse from '../images/converse.jpg';
import heelsJeans from '../images/heelsJeans.jpg';
import wedges from '../images/wedges.jpg';



const Products = () => {
    return ( 

        <Container className="pt-5 pb-5">
      <Row className="justify-content-center text-center">
        <Col className="md-10 lg-8">
          <h1 className="niceFont1">  New Season. Fab Arrivals.</h1>
          
        </Col>
      </Row>
        <Row className="align-items-center text-center">
          
            <Carousel className="pt-5">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={converse}
      alt="First slide"
    />
    <Carousel.Caption className="carousel-cap">
      <h2 className="text-white niceFont1">Designer Sneakers</h2>
      <p>Glam up even the most mundane errands and casual days</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wedges}
      alt="Second slide"
    />

    <Carousel.Caption className="carousel-cap">
      <h2 className="text-white niceFont1">Wedges</h2>
      <p>Gipsy-chic is making a comeback. Rock a pair like you never left. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={heelsJeans}
      alt="Third slide"
    />

    <Carousel.Caption className="carousel-cap">
      <h2 className="text-white niceFont1">The Classic Black Heel</h2>
      <p >The heel that elevates any outfit. Whatever the occasion. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
        </Row>
      </Container>

     );
}
 
export default Products;