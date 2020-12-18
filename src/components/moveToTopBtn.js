import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons"



const MoveToTopBtn = ({ moveTo }) => {
	return(
		<AnchorLink to={`/#${moveTo}`}>
			<button style={{ 
				zIndex: 1000,
				position: "fixed",
				bottom: 100,
				right: 100,
				width: 50,
				height: 50,
				border: "none",
				borderRadius:"100px",
				outline: "none", 
				backgroundColor : "white",
				color: "red",
				fontSize: "2rem",
				boxShadow: "0px 7px 32px rgba(0, 0, 0, 0.3)"
			}}>
				<FontAwesomeIcon icon={faLongArrowAltUp}/>
			</button>
		</AnchorLink>
	)
}

export default MoveToTopBtn