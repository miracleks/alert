import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col, Media} from 'reactstrap';
import { useRouter } from 'next/router';
import mission from '../../public/assets/images/mission.png';

const Mission = () => {

    const router = useRouter();
    
    return (
        <CommonLayout>
            <section className="mission-page">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h2>Our Mission</h2>
                            <p>
                                At <strong>C-Alert</strong>, our sole mission is Savings Lives. Our service is designed to provide the critical 
                                information needed when you are in dustress or incapacitated.
                            </p>
                            <p>
                                When you need a First Responder or just help from a kind soul, scanning the C-Alert tag instantaneously shares all 
                                the information that YOU want and need to get help - SAFELY.
                            </p>
                            <p>
                                After a near-death experience when First Responders did not know about his severe allergy to nitroglycerin during 
                                a heart incident, out founder, Fabio Tagliasacchi, spent months in the hospital recovering.
                            </p>
                            <p>
                                With a lot if time to think, Fabio decided to solve the problem of how to avoid this danger for others and Save Lives. 
                                Fabio was lucky to survive this incident without his vital information available, but many people do not. When you need 
                                a first responder, every second counts.
                            </p>
                            <br />
                            <h3>Lack of Vital Information is Deadly!</h3>
                            <p>
                                Fabio spent months after getting out of the hospital interviewing medical professionals, special interest groups, 
                                and First Responders to understand what they needed when confronted with someone in distress and not having any of their 
                                medical or personal history.
                            </p>
                            <p>
                                <strong>C-Alert</strong> is the easiest, quiickest, and the most secure way to provide that vital information needed 
                                to reduce the danger in those life threatening situations.
                            </p>
                            <p>
                                <strong>C-Alert</strong> is <strong>Saving Lives</strong> and for less that 10 Cents perday!!
                            </p>
                        </Col>
                        <Col lg="6" className="right-login">
                            <Media className="w-100" src={mission}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Mission;