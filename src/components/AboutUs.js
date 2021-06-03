import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AboutUs = () => {
    return ( 
      <section id="sec-about" className="sec-about pt-5 pb-5 bg-warning">
      
      
    <Container>
      <Row className="justify-content-center text-center">
        <Col className="md-10 lg-8">
          <h1 className="h2 niceFont1">Shoe-La-La By Numbers</h1>
          <p className="mt-4 mb-4">Discover your next perfect pair from our selection of the world's top brands at the best prices.</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="sm-4">
          <h4>+200</h4>

          <hr />

          <h5>
            Countries we currently ship to</h5>
        </Col>

        <Col className="sm-4">
          <h4>+500</h4>

          <hr />

          <h5> Shoe brands to choose from </h5>
        </Col>

        <Col className="sm-4">
          <h4>1000s</h4>

          <hr />

          <h5>Of happy customers across the globe</h5>
        </Col>
      </Row>
    </Container>
  </section>
        
     );
}
 
export default AboutUs;