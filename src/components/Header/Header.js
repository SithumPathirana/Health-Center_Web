import React from 'react'

export default function Header(){
    return <div>
          {/* <!-- Header --> */}

        <header className="header" id="header">
          <div>
				<div className="header_top">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="header_top_content d-flex flex-row align-items-center justify-content-start">
									<div className="logo">
										<a href="#">health<span>+</span></a>	
									</div>
									<div className="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">
										<div className="header_top_nav">
											<ul className="d-flex flex-row align-items-center justify-content-start">
												<li><a href="#">Help Desk</a></li>
												<li><a href="#">Emergency Services</a></li>
												<li><a href="#">Appointment</a></li>
											</ul>
										</div>
										<div className="header_top_phone">
											<i className="fa fa-phone" aria-hidden="true"></i>
											<span>+34 586 778 8892</span>
										</div>
									</div>
									<div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header_nav" id="header_nav_pin">
					<div className="header_nav_inner">
						<div className="header_nav_container">
							<div className="container">
								<div className="row">
									<div className="col">
										<div className="header_nav_content d-flex flex-row align-items-center justify-content-start">
											<nav className="main_nav">
												<ul className="d-flex flex-row align-items-center justify-content-start">
													<li className="active"><a href="index.html">Home</a></li>
													<li><a href="about.html">About Us</a></li>
													<li><a href="services.html">Services</a></li>
													<li><a href="news.html">News</a></li>
													<li><a href="contact.html">Contact</a></li>
												</ul>
											</nav>
											<div className="search_content d-flex flex-row align-items-center justify-content-end ml-auto">
												<form action="#" id="search_container_form" className="search_container_form">
													<input type="text" className="search_container_input" placeholder="Search" required="required"/>
													<button className="search_container_button"><i className="fa fa-search" aria-hidden="true"></i></button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</div>
          </header>
    </div>;
}