import React from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import contactgirl from '../../public/assets/images/contactus/contactgirl.png'

const ContactUs = () => {
    return (
        <Fragment>
            <div className="contactus-border-top text-center w-100">
                <h4>Any Question?</h4>
            </div>
            <Container className="contactus">
                <Row>
                    <Col className="text-center">
                    <h1>Contact Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <form className="text-center">
                            <h3>Let us Know</h3>
                            <h3>How can we help you!</h3>
                            <br />
                            <div className="form-group pt-3">
                                <input required="" name="contact[name]" type="text" className="form-control" placeholder="Name *" />
                            </div>
                            <div className="form-group pt-3">
                                <input required="" name="contact[email]" type="email" className="form-control" placeholder="Email Address *" />
                            </div>
                            <div className="form-group pt-3">
                                <input required="" name="contact[Subject]" type="text" className="form-control" placeholder="Subject *" />
                            </div>
                            <div className="form-group pt-3">
                                <textarea rows="5" name="contact[message]" className="form-control" placeholder="Message..." />
                            </div>
                            <div className="form-group pt-3 text-center">
                                <button type="submit" className="btn btn-rounded btn-light">Contact Us</button>
                            </div>
                        </form>
                    </Col>
                    <Col md="6" className="d-flex align-items-center flex-column contact-info">
                        <Media src={contactgirl} className="m-auto"/>
                        <div>
                            <h1>+1 (345) 093-8273</h1>
                            <h1>calert@email.com</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="contactus-border-bottom w-100 "></div>
        </Fragment>
    )
}

export default ContactUs;