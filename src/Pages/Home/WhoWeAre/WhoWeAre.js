import React from 'react';
import "./WhoWeAre.css"
import { Button, Col, Container, Row } from 'react-bootstrap';

const WhoWeAre = () => {
    return (
      <div className="whoWeAre_bg">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div>
                <h4 className="text-secondary">Who we are</h4>
                <h1 className="text-warning">Sense the Guitar</h1>
                <p className="text-secondary">
                  Etiam dignissim diam quis enim lobortis scelerisque fermentum.
                  Nec nam aliquam sem et tortor consequat id. Id eu nisl nunc mi
                  ipsum faucibus vitae. Risus nullam eget felis eget nunc
                  lobortis mattis aliquam. Sagittis nisl rhoncus mattis rhoncus
                  urna neque viverra justo nec. Vulputate odio ut enim blandit
                  volutpat maecenas volutpat blandit. Id diam vel quam
                  elementum. Pulvinar elementum integer enim neque. Elementum
                  tempus egestas sed sed risus. Neque ornare aenean euismod
                  elementum nisi quis eleifend quam.
                </p>
                <Button variant="outline-warning">Read More </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default WhoWeAre;