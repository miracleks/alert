import React from 'react';
import HeaderOne from '../headers/header-one';
import FooterOne from '../footers/footer-one';
import Helmet from 'react-helmet';
import favicon from '../../public/assets/images/favicon/1.png'

const CommonLayout = ({ children, title, parent ,subTitle }) => {
    return (
        <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        </Helmet>
            <HeaderOne topClass="top-header" logoName="logo.png" noTopBar={true}/>
                
                <>{children}</>
            <FooterOne />
        </>
    )
}

export default CommonLayout;