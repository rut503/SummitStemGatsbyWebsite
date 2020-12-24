import React from "react"

import NavBar from "../components/navbar"
import Footer from "../components/footer"
import MoveToTopBtn from "../components/moveToTopBtn"

const BlogPage = () => {
	return(
		<div style={{
			display: "flex",
			flexDirection: "column",
			height: "100vh"
		}}>
			<MoveToTopBtn moveTo="Blog"/>

			<NavBar />
		
			<h1 id="Blog" style={{ color: "#D31F39", margin: "auto" }}>Blog is comming soon...</h1>

			<Footer />
		</div>
	)
}

export default BlogPage