import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { SiAltiumdesigner } from 'react-icons/si';
import { MdArchitecture, MdConstruction } from 'react-icons/md';

import FindADealer from '../../components/Find-a-dealer/FindADealer';
import GetInspired from '../../components/Get-inspired/GetInspired';

import './Home.styles.scss';

const Home = () => {
	const slider = (
		<AwesomeSlider className="aws-btn">
			<div data-src="assets/home/Ha3xK4.jpg" />
			<div data-src="assets/home/4zYz0.jpg" />
			{/* <div data-src="assets/img/intro/1.jpg" /> */}
		</AwesomeSlider>
	);

	return (
		<>
			<main className="main-wrapper">
				<div className="content-wrapper content-wrapper--boxed oh">
					{slider}
					<section className="section-wrap intro pb-40">
						<div className="container">
							<div className="row">
								<div className="col-lg-7">
									<h2 className="intro__title">
										Crafted in Connecticut Refined by
										Culnova
									</h2>
									<p>
										Culnova creates premium,
										European-crafted kitchens, baths and
										closets with cutting-edge technology—all
										finished in the US. As a vertically
										integrated manufacturer, we import our
										finishes from Italy and Spain, while our
										doors and panels are customized in our
										Connecticut factory.
									</p>
									<p>
										With this best-of-both-worlds approach,
										we can offer significantly shorter lead
										times and deliver a made-to-order suite
										of new designs in only five to six
										weeks.
									</p>
									<div className="row mb-lg-48">
										<div className="col-sm-4">
											<div className="feature">
												<SiAltiumdesigner className="home-icon" />
												<h4 className="feature__title">
													Architecture
												</h4>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="feature">
												<MdArchitecture className="home-icon" />
												<h4 className="feature__title">
													Interior Design
												</h4>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="feature">
												<MdConstruction className="home-icon" />
												<h4 className="feature__title">
													Construction
												</h4>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-5">
									<img
										src="assets/img/intro/1.jpg"
										className="img-full-width"
										alt=""
									/>
								</div>
							</div>
						</div>
					</section>

					<section className="section-wrap second-section pt-72 pb-72 pb-lg-40 mt-5">
						<div className="container">
							<div className="title-row">
								<h2 className="section-title">
									The Culnova Product Promise
								</h2>
								<p style={{ marginBottom: '70px' }}>
									Culnova creates premium, European-crafted
									kitchens, baths and closets with
									cutting-edge technology—all finished in the
									US. As a vertically integrated manufacturer,
									we import our finishes from Italy and Spain,
									while our doors and panels are customized in
									our Connecticut factory.
								</p>
							</div>

							<div className="row masonry-grid">
								<div className="masonry-item col-lg-3 project hover-trigger residential">
									<div className="project__container">
										<div className="project__img-holder">
											<a href="portfolio-single.html">
												<img
													src="assets/img/LUXUS+HG-v.2-02.jpg"
													alt=""
													className="project__img"
												/>
											</a>
										</div>
									</div>
								</div>

								<div className="masonry-item col-lg-3 project hover-trigger commercial">
									<div className="project__container">
										<div className="project__img-holder">
											<a href="portfolio-single.html">
												<img
													src="assets/img/SETOSA-v.2-02.jpg"
													alt=""
													className="project__img"
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="masonry-item col-lg-3 project hover-trigger commercial">
									<div className="project__container">
										<div className="project__img-holder">
											<a href="portfolio-single.html">
												<img
													src="assets/img/vetro-v.2-02.jpg TEXTURA-v.2-02-01.jpg SETOSA-v.2-02.jpg LUXUS+HG-v.2-02.jpg.jpg"
													alt=""
													className="project__img"
												/>
											</a>
										</div>
									</div>
								</div>
								<div className="masonry-item col-lg-3 project hover-trigger commercial">
									<div className="project__container">
										<div className="project__img-holder">
											<a href="portfolio-single.html">
												<img
													src="assets/img/vetro-v.2-02.jpg"
													alt=""
													className="project__img"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<FindADealer />
					<GetInspired />
				</div>
			</main>
		</>
	);
};

export default Home;
