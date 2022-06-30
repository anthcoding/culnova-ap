import './Footer.scss';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<footer
				className="footer bg-dark"
				style={{
					backgroundImage: `url(require("assets/img/footer/1.jpg"))`,
				}}
			>
				<div className="container-fluid">
					<div className="footer__widgets">
						<div className="row">
							<div className="col-lg-3 col-md-3">
								<div className="widget widget-about-us">
									<a
										href="index.html"
										className="logo-container flex-child"
									>
										<img
											className="logo"
											src="assets/home/Artboard2.png"
											alt="logo"
											height={200}
											width={200}
										/>
									</a>
								</div>
							</div>

							<div className="col-lg-2 col-md-3">
								<div className="widget widget_nav_menu">
									<ul>
										<li className="footer-headers">
											Quick Links
										</li>
										<li>
											<a href="#">Home</a>
										</li>
										<li>
											<a href="#">About</a>
										</li>
										<li>
											<a href="#">Dealers</a>
										</li>
										<li>
											<a href="#">Contact</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-2 col-md-3">
								<div className="widget widget_nav_menu">
									<ul>
										<li className="footer-headers">
											Door Types
										</li>
										<li>
											<a href="#">Slab Doors</a>
										</li>
										<li>
											<a href="#">
												Integrated Handle Doors
											</a>
										</li>
										<li>
											<a href="#">Frame Doors</a>
										</li>
										<li>
											<a href="#">Glass Doors</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-3">
								<div className="widget widget_nav_menu">
									<ul>
										<li className="footer-headers">
											Door Finishes
										</li>
										<li>
											<a href="#">Luxus HG</a>
										</li>
										<li>
											<a href="#">Setosa</a>
										</li>
										<li>
											<a href="#">Textura</a>
										</li>
										<li>
											<a href="#">Vetra</a>
										</li>
										<li>
											<a href="#">eCubed</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-3">
								<div className="footer-media-container">
									<FaFacebookF className="footer-media-icons" />
									<FaInstagram className="footer-media-icons" />
								</div>
								<div className="footer-media-container">
									©{year} CULNOVA KITCHEN BATH LIVING
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
