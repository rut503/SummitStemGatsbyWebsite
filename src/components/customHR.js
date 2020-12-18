import React from "react"

import customHRStyle from "./customHR.module.scss"

const CustomHR = ({ styles }) => {
	return <hr className={customHRStyle.hrStyle} style={styles}/>
}

export default CustomHR