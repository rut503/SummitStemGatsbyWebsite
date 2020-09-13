import React from "react"

import footerStyles from "./footer.module.scss"

const Footer = () => {
	return(
		<div className={footerStyles.container}>
			<p>Contact, follow and share us, anywhere.</p>
			<p>LinkedIn | Facebook | Insta</p>
			<p>Copyright © | All rights reserved | 2020 Summit STEM | Created by Rutvik Patel </p>
		</div>
	)
}

export default Footer