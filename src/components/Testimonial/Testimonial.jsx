import Carousel from 'react-bootstrap/Carousel';

import './Testimonial.scss';

function CarouselFadeExample() {
	return (
		<Carousel fade className="carousel-section">
			<Carousel.Item className="c-item">
				<div className="titleContainer">
					<div class="title-row title-testimonials text-center">
						<p class="subtitle">Testimonials</p>
						<h2 class="section-title">What clients say about us</h2>
						<i class="quote">“</i>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(require(assets/img/testimonials/bg.jpg))`,
					}}
					className="img-wrapper"
				>
					<img
						className="d-block w-100 c-img"
						src="assets/img/testimonials/bg.jpg"
						alt="First slide"
					/>
				</div>
				<Carousel.Caption className="caption">
					<h3 className="quote-text">
						“Every detail has been taken care these team are realy
						amazing and talented! I will work only to help your
						sales goals.”
					</h3>
					<div class="testimonial__info">
						<span class="testimonial__author">
							Alexander Samokhin
						</span>
						<span class="testimonial__company">DeoThemes</span>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="c-item">
				<div className="titleContainer">
					<div class="title-row title-testimonials text-center">
						<p class="subtitle">Testimonials</p>
						<h2 class="section-title">What clients say about us</h2>
						<i class="quote">“</i>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(require(assets/img/testimonials/bg.jpg))`,
					}}
					className="img-wrapper"
				>
					<img
						className="d-block w-100 c-img"
						src="assets/img/testimonials/bg.jpg"
						alt="Second slide"
					/>
				</div>

				<Carousel.Caption className="caption">
					<h3 className="quote-text">
						“I have witnessed and admired the work for years. I
						highly recommend this work for anyone seeking to
						increase.”
					</h3>
					<div class="testimonial__info">
						<span class="testimonial__author">Joeby Ragpa</span>
						<span class="testimonial__company">DeoThemes</span>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="c-item">
				<div className="titleContainer">
					<div class="title-row title-testimonials text-center">
						<p class="subtitle">Testimonials</p>
						<h2 class="section-title">What clients say about us</h2>
						<i class="quote">“</i>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(require(assets/img/testimonials/bg.jpg))`,
					}}
					className="img-wrapper"
				>
					<img
						className="d-block w-100 c-img"
						src="assets/img/testimonials/bg.jpg"
						alt="Third slide"
					/>
				</div>

				<Carousel.Caption className="caption">
					<h3 className="quote-text">
						“Every detail has been taken care these team are realy
						amazing and talented! I will work only to help your
						sales goals.”
					</h3>
					<div class="testimonial__info">
						<span class="testimonial__author">
							Alexander Samokhin
						</span>
						<span class="testimonial__company">DeoThemes</span>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;
