import React from "react"

import homeStyles from "./home.module.scss"

const Home = () => {
	return(
		<div className={homeStyles.container}>
			
			<p className={homeStyles.heading}>
				Providing comprehensive, personalized strategies to 
				reach your goals
			</p>

			<div className={homeStyles.philosophy}>
				<h1>Philosophy</h1>
				<h4>
					Summit STEM is committed to clearing barriers and providing 
					support to anyone interested in pursuing a scientific path, 
					striving for a more equitable, diverse, and supportive 
					community in STEM.
				</h4>
				<h4>
					“When you follow the strange trails, they will take you who knows where” 
					– Lord Huron, Way Out There
				</h4>
				<button>REACH YOUR SUMMIT NOW</button>
			</div>

		</div>
	)
}

export default Home