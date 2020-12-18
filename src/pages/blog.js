import React from "react"

import NavBar from "../components/navbar"
import Footer from "../components/footer"
import MoveToTopBtn from "../components/moveToTopBtn"

const BlogPage = () => {
	return(
		<div id="Blog">
			<MoveToTopBtn moveTo="Blog"/>

			<NavBar />
		
			<h1 style={{ color: "white" }}>Blog is comming soon...</h1>

			<Footer />
		</div>
	)
}

export default BlogPage