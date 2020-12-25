import React from "react"

import NavBar from "../components/navbar"
import Footer from "../components/footer"
import MoveToTopBtn from "../components/moveToTopBtn"

const Layout = (props) => {
	return(
		<div style={props.styles}>
			<MoveToTopBtn moveTo="Top"/>
			<NavBar />

			{props.children}

			<Footer />
		</div>
	)
}

export default Layout