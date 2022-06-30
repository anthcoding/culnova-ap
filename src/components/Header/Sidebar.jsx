import React, { useEffect, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarRoute,
	SideBtnWrap,
} from './SidebarElements';
import './Sidebar.scss';

const doorTypesLinks = () => (
	<div className="links-container">
		<Link className="links" to="/flat-doors">
			Slab Doors
		</Link>
		<Link className="links" to="/handle-doors">
			Handle Doors
		</Link>
		<Link className="links" to="/frame-doors">
			Frame Doors
		</Link>
		<Link className="links" to="/glass-doors">
			Glass Doors
		</Link>
	</div>
);
const doorFinishesLinks = () => (
	<div className="links-container">
		<Link className="links" to="/flat-doors">
			LUXUS HG
		</Link>
		<Link className="links" to="/handle-doors">
			SETOSA
		</Link>
		<Link className="links" to="/frame-doors">
			TEXTURA
		</Link>
		<Link className="links" to="/glass-doors">
			VETRO
		</Link>
		<Link className="links" to="/glass-doors">
			eCUBED
		</Link>
	</div>
);
const inspiration = () => (
	<div className="links-container">
		<Link className="links" to="/flat-doors">
			Kitchen
		</Link>
		<Link className="links" to="/handle-doors">
			Bath
		</Link>
		<Link className="links" to="/frame-doors">
			Living
		</Link>
	</div>
);
const dealerLinks = () => (
	<div className="links-container">
		<Link className="links" to="/flat-doors">
			Find a Dealer
		</Link>
		<Link className="links" to="/handle-doors">
			Become a Dealer
		</Link>
	</div>
);

const data = [
	{
		question: 'Door Types',
		answer: doorTypesLinks(),
	},
	{
		question: 'Door Finishes',
		answer: doorFinishesLinks(),
	},
	{
		question: 'Inspiration',
		answer: inspiration(),
	},
	{
		question: 'Dealers',
		answer: dealerLinks(),
	},
];

const Accordion = ({ toggleSidebar }) => {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	const linkToggle = () => {
		setSelected(null);
		toggleSidebar();
	};

	return (
		<div className="accordion">
			{data.map((item, i) => (
				<div className="item">
					<div className="title" onClick={() => toggle(i)}>
						<h2>{item.question}</h2>
						<span className="span">
							{selected === i ? '-' : '+'}
						</span>
					</div>
					<div
						className={selected === i ? 'content-show' : 'content'}
						onClick={linkToggle}
					>
						{item.answer}
					</div>
				</div>
			))}
		</div>
	);
};

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu className="d-flex flex-column">
					<Accordion toggleSidebar={toggle} />
					<div className="social-media-icons-wrapper ml-0">
						<FaFacebookF className="social-icons-navbar" />
						<FaInstagram className="social-icons-navbar" />
					</div>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
