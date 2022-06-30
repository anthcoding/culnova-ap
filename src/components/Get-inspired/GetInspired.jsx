import { Link } from 'react-router-dom';

import './GetInspired.scss';

const GetInspired = () => {
	return (
		<>
			<div className="get-inspired-wrapper d-flex flex-column justify-content-center align-item-center">
				<div className="get-inspired-wrapper__text-section">
					<h1 className="text-center p-4">Inspiration by Culnova</h1>
					<p className="text-center p-3">
						Envision Culnova for your kitchen, bath and closets
					</p>
					<div className="d-flex align-items-center justify-content-center">
						<div class="get-inspired-wrapper__button mt-auto">
							<Link
								to="/"
								className="get-inspired-wrapper__button__text"
							>
								Get Inspired
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default GetInspired;
