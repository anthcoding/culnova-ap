import './Gallery-item.scss';

const GalleryItem = ({ imageUlr, name, withPadding }) => {
	return (
		<div className="col mt-1">
			<img
				src={imageUlr}
				alt=""
				className={`img-fluid ${
					withPadding ? 'img-fluid-with-padding' : ''
				} `}
			/>
			<h3 class="door-name">{name}</h3>
		</div>
	);
};

export default GalleryItem;
