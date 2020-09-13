import React from "react"

import contactMeStyles from "./contactMe.module.scss"

const ContactMe = () => {
	return(
		<div id="ContactMe" className={contactMeStyles.container}>
			<h1>Contact Me</h1>
			<form action="">
				<input type="text" placeholder="Name"/>
				<input type="email" placeholder="Email"/>
				<input type="text" placeholder="Message"/>
				<button>Send Message</button>
			</form>
		</div>
	)
}

export default ContactMe