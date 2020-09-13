import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
	return(
		<div id="Top" className={navbarStyles.container}>
			<nav className={navbarStyles.navbar}>
				<h1>Summit STEM</h1>
				<ul>
					<li>
						<AnchorLink to="/#Top" title="Services I Offer">
							Home
						</AnchorLink>
					</li>
					<li>
						<AnchorLink to="/#Services" title="Services I Offer">
							Services
						</AnchorLink>
					</li>
					<li>
						<AnchorLink to="/#AboutMe" title="Services I Offer">
							About Me
						</AnchorLink>
					</li>
					<li>
						<AnchorLink to="/#ContactMe" title="Services I Offer">
							Contact Me
						</AnchorLink>
					</li>
					
					<li>|</li>

					<li>
						<Link to="/blog">Blog</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar