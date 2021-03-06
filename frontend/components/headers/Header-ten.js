import React, { useState, useEffect } from 'react';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Currency from './common/currency';
import CartContainer from '../containers/CartContainer';
import TopBar from "./common/topbar";
import { Media, Container, Row, Col, Input, Button, Form } from 'reactstrap';
import LogoImage from './common/logo';
import search from '../../public/assets/images/icon/search.png';
import settings from '../../public/assets/images/icon/setting.png';
import cart from '../../public/assets/images/icon/layout4/cart.png'

const HeaderTen = ({ logoName ,topClass ,headerClass }) => {

    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line
    const [open, setOpen] = useState(false);

    /*=====================
         Pre loader
		 ==========================*/
    useEffect(() => {
        setTimeout(function () {
            document.querySelectorAll(".loader-wrapper").style = 'display:none';
        }, 2000);

        setOpen(true)
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    const handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            } else
                document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    }

    const openNav = () => {
        var openmyslide = document.getElementById("mySidenav");
        if (openmyslide) {
            openmyslide.classList.add('open-side')
        }
    }
    const openSearch = () => {
        document.getElementById("search-overlay").style.display = "block";
    }

    const closeSearch = () => {
        document.getElementById("search-overlay").style.display = "none";
    }

    // eslint-disable-next-line
    const load = () => {
        setIsLoading(true)
        fetch().then(() => {
            // deal with data fetched
            setIsLoading(false)
        })
    };

    return (
        <div>
            <header id="sticky" className={headerClass}>
                <div className="mobile-fix-option"></div>
                {/*Top Header Component*/}
                <TopBar topClass={topClass} />
                <div className="metro">
                    <Container className="layout3-menu">
                        <Row>
                            <Col sm="12">
                                <Row className="main-menu">
                                    <Col>
                                        <div className="menu-left around-border">
                                            <div className="navbar">
                                                <a href="!#" onClick={openNav}>
                                                    <div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
                                                </a>
                                                {/*SideBar Navigation Component*/}
                                                <SideBar />
                                            </div>
                                            <div className="menu-right pull-right">
                                                <NavBar />
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="absolute-logo">
                                        <div className="brand-logo">
                                            <LogoImage logo={logoName} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="menu-right pull-right">
                                            <div>
                                                <div className="icon-nav">
                                                    <ul>
                                                        <li className="onhover-div mobile-search">
                                                            <div><Media src={search} onClick={openSearch} className="img-fluid" alt="" />
                                                                <i className="fa fa-search" onClick={openSearch}></i></div>
                                                        </li>
                                                        <Currency icon={settings} />
                                                        {/*Header Cart Component */}
                                                        <CartContainer icon={cart} />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </header>

            <div id="search-overlay" className="search-overlay">
                <div>
                    <span className="closebtn" onClick={closeSearch} title="Close Overlay">??</span>
                    <div className="overlay-content">
                        <Container>
                            <Row>
                                <Col>
                                    <Form>
                                        <div className="form-group">
                                            <Input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                        </div>
                                        <Button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTen;