import React from "react"

import bookSpiralStyles from "./bookSpiral.module.scss"

const BookSpiral = ({ styles }) => {
	return(
		<div className={bookSpiralStyles.container}
			style={styles}
		>
			<div className={bookSpiralStyles.hole1}></div>
			<div className={bookSpiralStyles.hole2}></div>
			<div className={bookSpiralStyles.arch}></div>
		</div>
	)
}

export default BookSpiral