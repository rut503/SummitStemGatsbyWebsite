import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../layout/layout"

import Home from "../components/home"
import Services from "../components/services"
import AboutMe from "../components/aboutMe"
import ContactMe from "../components/contactMe"

const MainPage = ({ location }) => {

	return (
		<Layout>
			<Helmet>
				<meta name="ahrefs-site-verification" content="dbeb69b3fb4f7f612c937a4e977e075e8a920677858863eab111fc929b6bd314">
				{/* -> Common Meta Tags (these can be defined in gatsby-config and imported using graphQL) */}
				<title>Summit STEM</title>
				<meta name="description" content="Education consulting for STEM Majors" />
				<meta name="keywords" content="STEM, Education, Resume Help, Consulting, College Applications, Cover Letter Help, Career Planning, Mock Interviews" />

				{/* -> Open Graph Meta Tags for social media */}
				<meta property="og:title" content="Summit STEM" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Education consulting for STEM Majors" />
				<meta property="og:image" content="../static/images/otherImages/EricaDP.png" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:url" content="https://www.summitstem.com" /> 
				<link rel="canonical" href="https://www.summitstem.com" />
			</Helmet>

			<Home />

			<Services />

			<AboutMe />
			
			<ContactMe />
		</Layout>
	);
}

export default MainPage
