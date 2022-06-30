import GalleryItem from '../../../components/Gallery-item/GalleryItem';
import GalleryWrapper from '../../../components/Gallery-wrapper/GalleryWrapper';
import { handleDoors } from '../../../data/handle-doors';

const HandleDoors = () => {
	return (
		<>
			<GalleryWrapper title={'Integrated Handle Doors'}>
				<div className="intro-wrapper">
					<div className="title-row">
						<h2 className="section-title">
							Door Types | Integrated Handle Doors
						</h2>
						<p>
							The Integrated Handle door design gives an elegant,
							clean look to kitchen, wardrobe or vanity designs.
							Every integrated handle can be made with
							color-matching and soft-forming techniques for each
							door to create a seamless look. Additionally, some
							integrated handles can be made in different finishes
							than the door to provide a stylish contrast. Doors
							come in 18mm or 22mm, depending on the finish.
						</p>
						<p style={{ marginBottom: '70px' }}>
							The Integrated Handle door collection is available
							in a curated selection of designs, available in
							laminate, wood veneer and lacquer in our LUXUS HG,
							SETOSA SUPER MATT and TEXTURA finish lines.
						</p>
					</div>
				</div>
			</GalleryWrapper>
			<div
				className="container"
				style={{
					marginBottom: '6rem',
				}}
			>
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
					{handleDoors.map((door) => (
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

export default HandleDoors;
