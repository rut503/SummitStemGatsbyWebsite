import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons"

import moveToTopBtnStyles from "./moveToTopBtn.module.scss"

const MoveToTopBtn = ({ moveTo }) => {
	return(
		<AnchorLink to={`/#${moveTo}`}>
			<button className={moveToTopBtnStyles.btn}>
				<FontAwesomeIcon icon={faLongArrowAltUp}/>
			</button>
		</AnchorLink>
	)
}

export default MoveToTopBtn