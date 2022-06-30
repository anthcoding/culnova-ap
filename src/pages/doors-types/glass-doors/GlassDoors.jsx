import GalleryItem from '../../../components/Gallery-item/GalleryItem';
import GalleryWrapper from '../../../components/Gallery-wrapper/GalleryWrapper';
import { glassDoors1 } from '../../../data/glass-doors1';
import { glassDoors2 } from '../../../data/glass-doors2';
import { glassDoors3 } from '../../../data/glass-doors3';

const GlassDoors = () => {
	return (
		<>
			<GalleryWrapper title={'Glass Doors'}>
				<div className="intro-wrapper">
					<div className="title-row">
						<h2 className="section-title">
							Door Types | Glass Doors
						</h2>
						<p>
							Our glass cabinet doors offer a clean, minimal
							design with contemporary aluminum frames.
							Well-suited for kitchens, office furniture doors,
							closet storage or furniture accents, they are
							customizable and include functional and decorative
							hardware. The aluminum frames, which come in a
							variety of finishes, provide endless design
							possibilities when combined with our glass, 3form
							and custom-insert options.
						</p>
						<p style={{ marginBottom: '70px' }}>
							The traditional European hinges and are easily
							integrated into any casework applications. Our new
							integrated hinge doors utilize specially engineered
							AIR hinges to create a sleek look without visible
							functional hardware.
						</p>
					</div>
				</div>
			</GalleryWrapper>
			<div className="container">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
					{glassDoors1.map((door) => (
						<GalleryItem
							key={door.url}
							imageUlr={door.url}
							name={door.name}
						/>
					))}
				</div>
			</div>

			<div className="intro-wrapper mt-5 pt-5">
				<div className="title-row">
					<h2 className="section-title text-center">
						Aluminum Color Options
					</h2>
					<p className="text-center">
						Our aluminum frames come a variety of color options.
					</p>
				</div>
			</div>

			<div className="container">
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
					{glassDoors2.map((door) => (
						<GalleryItem
							key={door.url}
							imageUlr={door.url}
							name={door.name}
							withPadding
						/>
					))}
				</div>
			</div>

			<div
				className="container"
				style={{
					marginTop: '5rem',
					marginBottom: '6rem',
				}}
			>
				<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-md-4">
					{glassDoors3.map((door) => (
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

export default GlassDoors;
