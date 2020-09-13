import React from "react"

import Layout from "../components/layout";

import Home from "../components/home"
import Services from "../components/Services"
import AboutMe from "../components/aboutMe"
import ContactMe from "../components/contactMe"

const MainPage = () => {
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