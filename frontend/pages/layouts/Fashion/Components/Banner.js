import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home home1 text-center">
              <div className="w-100 h-100 position-absolute bg-dark" style={{opacity: 0.2}}></div>
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div className="m-auto">
                        <h1 className="intro-title"> C-Alert Saves Lives</h1>
                        <h4><b>C-Alert</b> deilvers your vital and secure infoirmation instantly</h4>
                        <Link href={`/login`}> 
                          <a className="btn btn-solid m-1">&nbsp;&nbsp;join now&nbsp;&nbsp;</a>
                        </Link>
                        <Link href={`/login`}> 
                          <a className="btn btn-outline m-1">learn more </a>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  )
}

export default Banner