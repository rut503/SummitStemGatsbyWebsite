import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import navbarStyles from "./navbar.module.scss"

const Navbar = () => {

	// const [activeLink, setActiveLink] = useState("");
	// const [activeLink, setActiveLink] = useState("Home");

	// const onLinkClick = (to) => {
	// 	setActiveLink(to)
	// }
	
	return(
		<div id="Top" className={navbarStyles.container}>
			<nav className={navbarStyles.navbar}>
				<div className={navbarStyles.logoDiv}>
					<div></div>
					<p>Educational Consulting & Success Coaching</p>
				</div>
				<ul>
					<li>
						{/* <button onClick={() => onLinkClick("Home")}> */}
							<AnchorLink to="/#Top" title="Welcome to my site">
								{/* <span className={activeLink === "Home" ? navbarStyles.active : navbarStyles.notActive}> */}
									Home
								{/* </span> */}
							</AnchorLink>
						{/* </button> */}
					</li>
					<li>
						{/* <button onClick={() => onLinkClick("Services")}> */}
							<AnchorLink to="/#Services" title="Services I Offer">
								{/* <span className={activeLink === "Services" ? navbarStyles.active : navbarStyles.notActive}> */}
									Services
								{/* </span> */}
							</AnchorLink>
						{/* </button> */}
					</li>
					<li>
						{/* <button onClick={() => onLinkClick("AboutMe")}> */}
							<AnchorLink to="/#AboutMe" title="About myself">
								{/* <span className={activeLink === "AboutMe" ? navbarStyles.active : navbarStyles.notActive} > */}
									About Me
								{/* </span> */}
							</AnchorLink>
						{/* </button> */}
					</li>
					<li>
						{/* <button onClick={() => onLinkClick("ContactMe")}> */}
							<AnchorLink to="/#ContactMe" title="Come talk with me">
								{/* <span className={activeLink === "ContactMe" ? navbarStyles.active : navbarStyles.notActive}> */}
									Contact Me
								{/* </span> */}
							</AnchorLink>
						{/* </button> */}
					</li>
					
					<li>|</li>

					<li>
						{/* <button onClick={() => onLinkClick("")}> */}
							<Link to="/blog" activeClassName={navbarStyles.active}>Blog</Link>
						{/* </button> */}
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar