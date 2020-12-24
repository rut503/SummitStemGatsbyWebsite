import React from "react"

import NavBar from "../components/navbar"
import Footer from "../components/footer"
import MoveToTopBtn from "../components/moveToTopBtn"

import Home from "../components/home"
import Services from "../components/Services"
import AboutMe from "../components/aboutMe"
import ContactMe from "../components/contactMe"

const MainPage = ({ location }) => {

	return (
		<>
			<MoveToTopBtn moveTo="Top"/>

			<NavBar />

			<Home />

			<Services />

			<AboutMe />
			
			<ContactMe />

			<Footer />
		</>
	);
}

export default MainPage