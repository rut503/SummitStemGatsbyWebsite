import React from "react"

import Layout from "../layout/layout"

import Home from "../components/home"
import Services from "../components/services"
import AboutMe from "../components/aboutMe"
import ContactMe from "../components/contactMe"

const MainPage = ({ location }) => {

	return (
		<Layout>
			<Home />

			<Services />

			<AboutMe />
			
			<ContactMe />
		</Layout>
	);
}

export default MainPage