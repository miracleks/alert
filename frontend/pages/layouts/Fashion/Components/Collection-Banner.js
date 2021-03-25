import React, { Fragment } from 'react';
import Link from 'next/link'
import { Container, Row, Col , Media} from 'reactstrap';
import letter from '../../../../public/assets/images/icon/letter.png';
import clock from '../../../../public/assets/images/icon/Clock.png';
import users from '../../../../public/assets/images/icon/Users.png';

const CollectionBanner = () => {
    return (
        <Fragment>

            {/*collection banner*/}
            <section className="pb-0 pt-0">
                <Container className="mw-100 p-0">
                    <Row className="partition2 m-0">
                        <Col className="p-0 bg-default-theme" md='4'>
                            <div className="collection-banner p-right d-flex align-items-center">
                                <Media src={letter} className="" alt="" />
                                <div className="contain-banner">
                                    <div>
                                        <h4><strong>Email Us</strong></h4>
                                        <h4>Calert@email.com</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-0 bg-secondary-theme" md='4'>
                            <div className="collection-banner p-right">
                                <Media src={clock} className="img-fluid" alt="" />
                                <div className="contain-banner">
                                    <div>
                                        <h4><strong>Access to your Information</strong></h4>
                                        <h4>24/7 Available to you</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                        <Col className="p-0 bg-default-theme" md='4'>
                            <div className="collection-banner p-right">
                                <Media src={users} className="img-fluid" alt="" />
                                <div className="contain-banner">
                                    <div>
                                        <h4><strong>Becaome a Member</strong></h4>
                                        <h4>It's so Fast & Easy</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*collection banner end*/}
        </Fragment>
    );
}

export default CollectionBanner;