import GalleryItem from '../../../components/Gallery-item/GalleryItem';
import GalleryWrapper from '../../../components/Gallery-wrapper/GalleryWrapper';
import { flatDoors } from '../../../data/flat-doors';

import './SlabDoors.scss';

const SlabDoors = () => {
	return (
		<>
			<GalleryWrapper title={'Slag Doors'}>
				<div className="intro-wrapper">
					<div className="title-row">
						<h2 className="section-title">
							Door Types | Slab Doors
						</h2>
						<p>
							The slab door provides a clean and minimal look to
							an interior. It’s available in any lacquer finish
							from our LUXUS, Wood Veneer or TEXTURA lines.
							Additionally, the slab door can be made in a
							laminate finish, edge-banded on four sides with
							matching edge tape. We offer it in all finishes:
							LUXUS HG, SETOSA SUPER MATTE and TEXTURA, with 18mm
							or 22mm thickness, depending on the finish.
						</p>
						<p style={{ marginBottom: '70px' }}>
							Optionally, the slab door can be edge banded with
							unicolor or dual-color edge tape, depending on the
							design. You can also upgrade the overall look with
							sequence grain match for finishes with grain.
						</p>

						<div className="intro-image-wrapper">
							<img
								src="assets/Door Types Flat Door/slabdoor.jpg"
								alt=""
								height={700}
								width={700}
							/>
						</div>
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
					{flatDoors.map((door) => (
						<GalleryItem
							key={door.url}
							imageUlr={door.url}
							name={door.name}
							withPadding
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default SlabDoors;
