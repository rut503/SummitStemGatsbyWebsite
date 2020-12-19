import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import navbarStyles from "./navbar.module.scss"

const NavBar = () => {

	// const [activeLink, setActiveLink] = useState("");
	// const [activeLink, setActiveLink] = useState("Home");

	// const onLinkClick = (to) => {
	// 	setActiveLink(to)
	// }
	
	return(
		<Navbar id="Top" collapseOnSelect expand="md" variant="light">
			<Navbar.Brand>
				<div className={navbarStyles.logoDiv}>
					<img src={"../../images/otherImages/SummitSTEMLogo.png"}
						alt="Summit Stem Logo"
						width="70px"
					/>
					<p>Educational Consulting & Success Coaching</p>
				</div>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto"></Nav>
				<Nav>
					{/* <Nav.Link> */}
						{/* <button onClick={() => onLinkClick("Home")}> */}
						<AnchorLink to="/#Top" title="Welcome to my site" className={navbarStyles.links}>
							{/* <span className={activeLink === "Home" ? navbarStyles.active : navbarStyles.notActive}> */}
								Home
							{/* </span> */}
						</AnchorLink>
						{/* </button> */}
					{/* </Nav.Link> */}
					{/* <Nav.Link> */}
						{/* <button onClick={() => onLinkClick("Services")}> */}
						<AnchorLink to="/#Services" title="Services I Offer" className={navbarStyles.links}>
							{/* <span className={activeLink === "Services" ? navbarStyles.active : navbarStyles.notActive}> */}
								Services
							{/* </span> */}
						</AnchorLink>
						{/* </button> */}
					{/* </Nav.Link> */}
					{/* <Nav.Link> */}
						{/* <button onClick={() => onLinkClick("AboutMe")}> */}
						<AnchorLink to="/#AboutMe" title="About myself" className={navbarStyles.links}>
							{/* <span className={activeLink === "AboutMe" ? navbarStyles.active : navbarStyles.notActive} > */}
								About Me
							{/* </span> */}
						</AnchorLink>
						{/* </button> */}
					{/* </Nav.Link> */}
					{/* <Nav.Link> */}
						{/* <button onClick={() => onLinkClick("ContactMe")}> */}
						<AnchorLink to="/#ContactMe" title="Come talk with me" className={navbarStyles.links}>
							{/* <span className={activeLink === "ContactMe" ? navbarStyles.active : navbarStyles.notActive}> */}
								Contact Me
							{/* </span> */}
						</AnchorLink>
						{/* </button> */}
					{/* </Nav.Link> */}
					{/* <Nav.Link eventKey={2}> */}
						{/* <button onClick={() => onLinkClick("")}> */}
						<Link to="/blog" activeClassName={navbarStyles.active} className={navbarStyles.links}>Blog</Link>
						{/* </button> */}
					{/* </Nav.Link> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar