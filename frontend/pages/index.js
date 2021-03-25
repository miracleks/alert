import React from 'react';
import Banner from './layouts/Fashion/Components/Banner'
import CollectionBanner from './layouts/Fashion/Components/Collection-Banner';
import FooterOne from '../components/footers/footer-one';
import HeaderOne from '../components/headers/header-one';
import { withApollo } from '../helpers/apollo/apollo';
import Paragraph from '../components/common/Paragraph';
import Helmet from 'react-helmet';
import favicon from '../public/assets/images/favicon/1.png'
import { Media } from 'reactstrap';
import roadmap from '../public/assets/images/roadmap.png';
import ContactUs from '../components/common/ContactUs';

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
      </Helmet>
      {/* <ModalComponent /> */}
      <HeaderOne logoName={'logo.png'} topClass="top-header" noTopBar={true}/>
      <Banner /> 
      <CollectionBanner />
      <Paragraph title="title1 section-t-space" inner="title-inner" hrClass={false} bgTitle="Medical" showTitle="How C-Alert works" strongText="C-Alert" description="can be accessed by any smart phone when needed." images={false}/>
      <Media src={roadmap} alt="roadmap" className="image-fluid m-auto lazyload w-100 blur-up pt-5" />
      <Paragraph title="title1 section-t-space" inner="title-inner" hrClass={false} bgTitle="Gallery" showTitle="Photo Showcase" strongText="" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.." images={true}/>

      {/* <TopCollection noTitle="null" backImage={true} type="fashion" title="top collection" subtitle="special offer"  productSlider={Product4} designClass="section-b-space p-t-0 ratio_asos" noSlider="false" cartClass="cart-info cart-wrap" /> */}
      {/* <Parallax /> */}
      {/* <SpecialProducts type="fashion" backImage={true} productSlider={Product4} line={true} title="title1 section-t-space" inner="title-inner1"  designClass="section-b-space p-t-0 ratio_asos" noSlider="true" cartClass="cart-info cart-wrap" />  */}
      {/* <ServiceLayout sectionClass="border-section small-section" /> */}
      {/* <Blog type="fashion" title="title1" inner="title-inner1" /> */}
      {/* <Instagram type="fashion"/> */}
      {/* <div className="section-b-space">
      <LogoBlock />
      </div> */}
      <ContactUs />
      <FooterOne logoName={'logo.png'} />
    </>
  )
}

export default withApollo(Fashion);