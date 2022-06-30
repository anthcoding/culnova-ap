import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const dropdownData1 = [
	{ name: 'Slab Doors', path: '/flat-doors' },
	{ name: 'Integrated Handle Doors', path: '/handle-doors' },
	{ name: 'Frame Doors', path: '/frame-doors' },
	{ name: 'Glass Doors', path: '/glass-doors' },
];
const dropdownData2 = [
	{ name: 'LUXUS HG', path: '/luxus-hg' },
	{ name: 'SETOSA', path: '/setosa' },
	{ name: 'TEXTURA', path: 'textura' },
	{ name: 'VETRO', path: 'vetro' },
	{ name: 'eCubed', path: 'ecubed' },
];
const dropdownData3 = [
	{ name: 'Kitchen', path: '/kitchen' },
	{ name: 'Bath', path: '/bath' },
	{ name: 'Living', path: '/living' },
];
const dropdownData4 = [
	{ name: 'Find a Dealer', path: 'find-dealer' },
	{ name: 'Become a Dealer', path: 'become-dealer' },
];

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);
	const [fix, setFix] = useState(true);
	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const setFixed = () => {
		if (window.innerWidth >= 932) {
			setFix(true);
		} else {
			setFix(false);
		}
	};
	window.addEventListener('resize', setFixed);

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>
							<img
								src="assets/eCUBED/Artboard2.png"
								alt=""
								height={200}
								width={150}
							/>
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							{fix && (
								<>
									<Dropdown
										links={dropdownData1}
										title="Door Types"
									/>
									<Dropdown
										links={dropdownData2}
										title="Door Finishes"
									/>
									<Dropdown
										links={dropdownData3}
										title="Inspiration"
									/>
									<Dropdown
										links={dropdownData4}
										title="Dealers"
									/>
									<Link
										className="about-item"
										to="/about"
										title="About us"
									>
										About
									</Link>
									<div className="social-media-icons-wrapper">
										<FaFacebookF className="social-icons-navbar" />
										<FaInstagram className="social-icons-navbar" />
									</div>
								</>
							)}
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
