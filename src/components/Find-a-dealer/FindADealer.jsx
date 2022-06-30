import './FindADealer.scss';
import { Link } from 'react-router-dom';

const FindADealer = () => {
	return (
		<>
			<div className="find-a-dealer-wrapper d-flex justify-content-between container">
				<div className="find-a-dealer-wrapper__text-wrapper">
					<h2>Find a Culnova Dealer</h2>
					<p>
						Culnova offers a network of distribution showrooms
						across the US for our clients. Click to locate your
						closest Culnova dealer.
					</p>
				</div>
				<div className="d-flex align-items-center justify-content-center">
					<div class="call-us d-flex align-items-center justify-content-center">
						<Link to="/" className="call-us__phone-number">
							Find a Dealer
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default FindADealer;
