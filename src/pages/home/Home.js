import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import Background from '../../resources/images/index_hero.jpg'
import InfoBox from './components/InfoBox/InfoBox'
import InfoForm from './components/InfoForm/InfoForm'
import IconBox from './components/IconBox/IconBox'
import Slide from './components/Slide/Slide'

class Home extends Component {
    render() {

        const background_image_style = {
            backgroundImage: `url(${Background})`
        }

        return <div className="super_container">
            <div className="menu trans_500">
                <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="menu_close_container"><div className="menu_close"></div></div>
                    <form action="#" className="menu_search_form">
                        <input type="text" className="menu_search_input" placeholder="Search" required="required" />
                        <button className="menu_search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    <ul>
                        <li className="menu_item"><a href="index.html">Home</a></li>
                        <li className="menu_item"><a href="index.html" >About us</a></li>
                        <li className="menu_item"><a href="index.html">Services</a></li>
                        <li className="menu_item"><a href="news.html">News</a></li>
                        <li className="menu_item"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="menu_social">
			<ul>
				<li><a href="index.html"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
				<li><a href="index.html"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
				<li><a href="index.html"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
				<li><a href="index.html"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
				<li><a href="index.html"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
				<li><a href="index.html"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
			</ul>
		</div>
            </div>

            {/* Home */}
            <div className="home">
                <div className="background_image" style={background_image_style}></div>
                <Header />
                <div className="home_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content">
                                    <div className="home_title">Medical Services that you can trust</div>
                                    <div className="home_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</div>
                                    <div className="button home_button"><a href="#"><span>read more</span><span>read more</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Boxes*/}
            <div className="info">
                <div className="container">
                    <div className="row row-eq-height">
                        <InfoBox title="Free Consultations" />
                        <InfoBox title="Emergency Care" />
                        <InfoForm />
                    </div>
                </div>
            </div>

            {/* <!-- CTA --> */}

            <div className="cta">
                <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src={require('../../resources/images/cta_1.jpg')} data-speed="0.8"></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cta_container d-flex flex-xl-row flex-column align-items-xl-start align-items-center justify-content-xl-start justify-content-center">
                                <div className="cta_content text-xl-left text-center">
                                    <div className="cta_title">Make an appointment with one of our professional Doctors.</div>
                                    <div className="cta_subtitle">Morbi arcu neque, scelerisque eget ligula ac, congue tempor felis. Integer tempor, eros a egestas.</div>
                                </div>
                                <div className="button cta_button ml-xl-auto"><a href="#"><span>call now</span><span>call now</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services*/}
            <div class="services">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <div class="section_title">Our Services</div>
                            <div class="section_subtitle">to choose from</div>
                        </div>
                    </div>

                    <div class="row icon_boxes_row">
                        <IconBox />
                        <IconBox />
                        <IconBox />
                        <IconBox />
                        <IconBox />
                        <IconBox />
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="button services_button ml-auto mr-auto"><a href="#"><span>read more</span><span>read more</span></a></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Departments   */}
            <div class="departments">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <div class="section_title">Our Departments</div>
                            <div class="section_subtitle">to choose from</div>
                        </div>
                    </div>

                    <div class="row dept_row">
                        <div class="col">
                            <div class="dept_slider_container_outer">
                                <div class="dept_slider_container">

                                    {/*  Slider */}
                                    <div class="owl-carousel owl-theme dept_slider">
                                        <Slide />
                                        <Slide />
                                        <Slide />
                                        <Slide />
                                    </div>
                                </div>

                                {/*<!-- Dept Slider Nav -->*/}
                                <div class="dept_slider_nav"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>;
    }
}

export default Home