import React, { useState } from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

const Dropdown = ({ title, links }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick((prev) => !prev);
	};

	return (
		<>
			<div class="dropdown">
				<button class="dropbtn">{title}</button>
				<div class="dropdown-content">
					{links.map((link) => (
						<Link className="link" to={link.path} key={link.name}>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Dropdown;
