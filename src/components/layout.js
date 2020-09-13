import React from "react"
// import { Link } from "gatsby"

import layoutStyles from "./layout.module.scss"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
	return (
		<div className={layoutStyles.container}>
			<Navbar />
			
			{children}

			<Footer />
		</div>
	)
}

export default Layout