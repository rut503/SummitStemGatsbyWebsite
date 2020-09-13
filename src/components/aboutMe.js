import React from "react"

import aboutMeStyles from "./aboutMe.module.scss"

const AboutMe = () => {
	return(
		<div id="AboutMe" className={aboutMeStyles.container}>

			<h1>About Me</h1>

			<div className={aboutMeStyles.page1}>
				<h1>Image</h1>
				<h1>I’m Erika Zocher, M.S.</h1>

				<h3>Education</h3>

				<h1>Image of NC</h1>
				<h2>Northland College</h2>
				<ul>
					<li>Aug 20__ - May 20__</li>
					<li>Degree: B.S.</li>
					<li>Major: Environmental Geosciences – Geology Emphasis</li>
					<li>Minor: Biology</li>
				</ul>

				<h1>Image of NIU</h1>
				<h2>Northern Illinois University</h2>
				<ul>
					<li>Aug 20__ - May 2020</li>
					<li>Degree: M.S.</li>
					<li>Major: Geology & Environmental Geosciences</li>
				</ul>
			</div>

			<div className={aboutMeStyles.page2}>
				<h3>Presentations & Publications</h3>

				<h4>Master’s Thesis, 2020</h4>
				<h6>Qualitative Perspectives on the Strange Trails of Persistence in STEM</h6>
				<h6>Northern Illinois University</h6>

				<h4>Virtual Oral Presentation, 2020</h4>
				<h6>Qualitative Perspectives on the Strange Trails of Persistence in STEM </h6>
				<h6>Geological Society of America North Central Sectional Meeting, Duluth, MN</h6>

				<h4>Oral Presentation, 2019</h4>
				<h6>Demystifying Theoretical Frameworks for a Study of Persistence in STEM</h6>
				<h6>Geological Society of America Annual Meeting, Phoenix, AZ</h6>

				<h4>Poster, 2019</h4>
				<h6>A Pilot Study to Assess Chemistry Education in the Geosciences</h6>
				<h6>Earth Educators’ Rendezvous, Nashville, TN</h6>

				<h4>Poster, 2019</h4>
				<h6>A Pilot Study to Assess Chemistry Education in the Geosciences</h6>
				<h6>Chicago Symposium, Naperville, IL</h6>

				<h4>Poster, 2019</h4>
				<h6>Metals in the Mud: Changes in Surface Sediments Contamination in Long Island Sound</h6>
				<h6>Geological Society of America North Central Sectional Meeting, Lincoln, NE, 2014: Geological 
					Society of America Abstracts with Programs. Vol. 46, No. 4, p.10</h6>
			</div>

			<div className={aboutMeStyles.page3}>
				<h3>My Rocky Journey</h3>

				<h6>
					I understand firsthand that there is not always a linear 
					path in STEM.

					I graduated with a geology degree from a small liberal arts 
					college, a first-generation and low income student. I had 
					great interest for my field, but also deficits and barriers 
					that made it difficult to persist. In spite of the 
					obstacles, I succeeded in achieving my degree and 
					immediately began graduate school at a prestigious 
					university to pursue geochemistry. Ultimately it was clear 
					that it was not a good fit, and I left the program without 
					my degree. However, this unexpected turn charted me on a 
					course for the better.

					The break from academia afforded me an opportunity to teach 
					science to the public in various roles outside of what I 
					had originally planned: as a museum facilitator, a 
					nonprofit worker, and a high school educator. I later 
					re-entered graduate school, this time joining a geoscience 
					education research lab. Here, I 
				</h6>
			</div>

			<div className={aboutMeStyles.page4}>
				<h3>My Goal</h3>

				<h6>
					My goal is to inspire others to see that even their 
					steepest goals are attainable with the right supports. 
					STEM students and workers, especially those from 
					underrepresented backgrounds, are all too often met with 
					discouragement and feel a lack of a sense of belonging in 
					their communities. Our current and future generations of 
					scientists deserve an educational infrastructure that is 
					designed for collaboration and one that celebrates a 
					diversity of people and ideas.

					My expertise in mentoring and student support can be widely 
					applied to meet your academic or professional needs.
				</h6>

				<h6><span>Let me help you Summit STEM!</span></h6>
			</div>
		</div>
	)
}

export default AboutMe