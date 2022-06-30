import GalleryItem from '../../../components/Gallery-item/GalleryItem';
import GalleryWrapper from '../../../components/Gallery-wrapper/GalleryWrapper';
import { frameDoors } from '../../../data/frame-doors';

const FrameDoors = () => {
	return (
		<>
			<GalleryWrapper title={'Frame Doors'}>
				<div className="intro-wrapper">
					<div className="title-row">
						<h2 className="section-title">
							Door Types | Frame Doors
						</h2>
						<p>
							The Frame Door is our most versatile. It can be made
							with a subtle, thin frame or a thicker, more
							pronounced style. It is the most fusing traditional
							kitchen style with the most modern technology
							available. Frame doors are available in different
							finishes, like lacquer, wood veneer and laminate
							with our shaker-door style.
						</p>
						<p style={{ marginBottom: '70px' }}>
							Constructed with an 8mm center panel and 18mm rails,
							the frame door is offered in LUXUS, SETOSA SUPER
							MATT and TEXTURA finishes, with a variety of
							formats.
						</p>
					</div>
				</div>
			</GalleryWrapper>
			<div
				className="container"
				style={{
					marginTop: '5rem',
					marginBottom: '6rem',
				}}
			>
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
					{frameDoors.map((door) => (
						<GalleryItem
							key={door.url}
							imageUlr={door.url}
							name={door.name}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default FrameDoors;
