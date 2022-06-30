import './GalleryWrapper.scss';

const GalleryWrapper = ({ children, topUrl, title }) => {
	return (
		<main class="main-wrapper">
			<div class="content-wrapper content-wrapper--boxed oh">
				<section
					class="page-title bg-dark-overlay text-center"
					style={{
						backgroundImage: `url(require(${topUrl}))`,
					}}
				>
					<div class="page-title-local">
						<h1 class="page-title__title">{title}</h1>
						{/* <p class="page-title__subtitle">
									For each project we establish relationships with
									partners
								</p> */}
					</div>
				</section>

				<section class="section-wrap">
					<div class="container-fluid container-semi-fluid">
						<div class="row masonry-grid">{children}</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default GalleryWrapper;
