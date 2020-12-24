import React from "react"

import bookSpiralStyles from "./bookSpiral.module.scss"

const BookSpiral = ({ style }) => {
	return(
		<div className={bookSpiralStyles.container}
			style={style}
		>
			<div className={bookSpiralStyles.hole1}></div>
			<div className={bookSpiralStyles.arch}></div>
			<div className={bookSpiralStyles.hole2}></div>
		</div>
	)
}

export default BookSpiral