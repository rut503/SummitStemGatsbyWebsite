import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagramSquare, faFacebookSquare, faLinkedinIn  } from "@fortawesome/free-brands-svg-icons"

import footerStyles from "./footer.module.scss"

const Footer = () => {
	return(
		<div className={footerStyles.container}>
			<p>Contact, follow and share us, anywhere.</p>
			<div>
				<button>
					<FontAwesomeIcon icon={faLinkedinIn}/>
				</button>
				<button>
					<FontAwesomeIcon icon={faFacebookSquare}/>
				</button>
				<button>
					<FontAwesomeIcon icon={faInstagramSquare}/>
				</button>
			</div>
			<p>Copyright © | All rights reserved | 2020 Summit STEM | Created by Rutvik Patel </p>
		</div>
	)
}

export default Footer