import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import homeStyles from "./home.module.scss"
import CustomHR from "./customHR"

const Home = () => {
	return(
		<div id="Home" className={homeStyles.container}>
			
			<div className={homeStyles.bg}></div>

			<p className={homeStyles.heading}>
				Providing comprehensive, personalized strategies to 
				reach your goals
			</p>

			<CustomHR styles={{marginTop : -5}}/>

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
				<AnchorLink to="/#ContactMe" title="Come talk with me">
					<button>
						<div className={homeStyles.icon}>
							<FontAwesomeIcon icon={faPaperPlane}/>	
						</div>
						<div className={homeStyles.text}>
							<p>Reach Your Summit Now</p>
						</div>
					</button>
				</AnchorLink>
			</div>

		</div>
	)
}

export default Home