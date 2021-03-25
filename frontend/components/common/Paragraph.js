import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import youtube from '../../public/assets/images/icon/youtube.png';
import photo1 from '../../public/assets/images/photos/photo1.png';
import photo2 from '../../public/assets/images/photos/photo2.png';
import photo3 from '../../public/assets/images/photos/photo3.png';
import photo4 from '../../public/assets/images/photos/photo4.png';
import photo5 from '../../public/assets/images/photos/photo5.png';
import photo6 from '../../public/assets/images/photos/photo6.png';

const Paragraph = ({title, inner, line ,hrClass, bgTitle, showTitle, description, strongText, images}) => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
    return (
        <>
            <div className={title}>
                <h4>{bgTitle}</h4>
                <h2 className={inner}>{showTitle}</h2>
                {/* {
                    line ?
                        <div className="line"></div> : 
                    hrClass ?
                        <hr role="tournament6"></hr>
                    : ''
                } */}
            </div>
            <Container>
                <Row>
                    <Col lg="6" className="m-auto">
                        <div className="product-para">
                            <p className="text-center"><strong>{strongText}</strong>&nbsp;{description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            { images ? 
                <Container>
                    <Row>
                        <Col md="4" className="d-flex justify-content-between flex-column">
                            <div><Media className="w-100 p-2" src={photo1}/></div>
                            <div><Media className="w-100 p-2" src={photo2}/></div>
                        </Col>
                        <Col md="4" className="d-flex justify-content-between flex-column">
                            <div><Media className="w-100 p-2" src={photo3}/></div>
                            <div><Media className="w-100 p-2" src={photo4}/></div>
                        </Col>
                        <Col md="4" className="d-flex justify-content-between flex-column">
                            <div><Media className="w-100 p-2" src={photo5}/></div>
                            <div><Media className="w-100 p-2" src={photo6}/></div>
                        </Col>
                    </Row>
                </Container>
                : 
                <Media alt="youtube" src={youtube} className="image-fluid m-auto pt-4 mw-100" />
            }
        </>
    )
}

export default Paragraph;