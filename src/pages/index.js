import React from "react"

import NavBar from "../components/navbar"
import Footer from "../components/footer"
import MoveToTopBtn from "../components/moveToTopBtn"

import Home from "../components/home"
import Services from "../components/Services"
import AboutMe from "../components/aboutMe"
import ContactMe from "../components/contactMe"

import CustomHR from "../components/customHR"

const MainPage = ({ location }) => {

	return (
		<>
			<MoveToTopBtn moveTo="Top"/>

			<NavBar />

			<Home />

			<CustomHR/>

			<Services />
			
			<CustomHR/>

			<AboutMe />
			
			<ContactMe />

			<Footer />
		</>
	);
}

export default MainPage