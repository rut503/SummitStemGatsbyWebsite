import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"

import BookSpiral from "./bookSpiral"
import aboutMeStyles from "./aboutMe.module.scss"

const AboutMe = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const [firstTwoPages, setFirstTwoPages] = useState(true)
	const [showPageNumber, setShowPageNumber] = useState({
		from: 1,
		to: 1
	})
	const [classnamesForPages, setClassnamesForPages] = useState({
		page1: undefined,
		page2: undefined,
		page3: undefined,
		page4: undefined
	})
	const [bookButtons, setBookButtons] = useState()

	useEffect(() => {
		if(windowWidth < 768 ){   // screen size less than medium

			// set different types of buttons
			setBookButtons(<div className={aboutMeStyles.bookButtonsDiv}>
				<button 
					onClick={() => setShowPageNumber({
						from: showPageNumber.to, 
						to: showPageNumber.to-1
					})}
					disabled={showPageNumber.to === 1 ? true : false}
					className={aboutMeStyles.bookButton}
				>
					<div>
						<div>
							<FontAwesomeIcon icon={faPencilAlt} style={{transform: "rotate(45deg)"}}/>
						</div>
						<span>PREV</span>
					</div>
				</button>
				<button 
					onClick={() => setShowPageNumber({
						from: showPageNumber.to, 
						to: showPageNumber.to+1
					})}
					disabled={showPageNumber.to === 4 ? true : false}
					className={aboutMeStyles.bookButton}
				>
					<div>
						<span>NEXT</span>
						<div>
							<FontAwesomeIcon icon={faPencilAlt} style={{transform: "rotate(-135deg)"}}/>
						</div>
					</div>
				</button>
			</div>)

			if(showPageNumber.to > showPageNumber.from){ // going forward
				console.log("Going Forward")
				if(showPageNumber.to === 1){ // going to page 1
					console.log("Page 1")
					setClassnamesForPages({
						page1: undefined,
						page2: undefined,
						page3: undefined,
						page4: undefined
					})
				}
				if(showPageNumber.to === 2){ // going to page 2
					console.log("Page 2")
					setClassnamesForPages({
						page1: aboutMeStyles.flipPage,
						page2: undefined,
						page3: undefined,
						page4: undefined,
					})
				}
				else if(showPageNumber.to === 3){ // going to page 3
					console.log("Page 3")
					setClassnamesForPages({
						page1: aboutMeStyles.flipPage,
						page2: aboutMeStyles.flipPage,
						page3: undefined,
						page4: undefined,
					})
				}
				else{ // going to page 4
					console.log("Page 4")
					setClassnamesForPages({
						page1: aboutMeStyles.flipPage,
						page2: aboutMeStyles.flipPage,
						page3: aboutMeStyles.flipPage,
						page4: undefined,
					})
				}
			}
			else{                                        // going backward
				console.log("Going Backward")
				if(showPageNumber.to === 1){ // going to page 1
					console.log("Page 1")
					setClassnamesForPages({
						page1: aboutMeStyles.unflipPage,
						page2: aboutMeStyles.unflipPage,
						page3: aboutMeStyles.unflipPage,
						page4: undefined					})
				}
				else if(showPageNumber.to === 2){ // going to page 2
					console.log("Page 2")
					setClassnamesForPages({
						page1: aboutMeStyles.flipPage,
						page2: aboutMeStyles.unflipPage,
						page3: aboutMeStyles.unflipPage,
						page4: undefined
					})
				}
				else if(showPageNumber.to === 3){ // going to page 3
					console.log("Page 3")
					setClassnamesForPages({
						page1: aboutMeStyles.flipPage,
						page2: aboutMeStyles.flipPage,
						page3: aboutMeStyles.unflipPage,
						page4: undefined
					})
				}
				else{
					setClassnamesForPages({
						page1: aboutMeStyles.flipPage,
						page2: aboutMeStyles.flipPage,
						page3: aboutMeStyles.flipPage,
						page4: undefined
					})
				}
			}
		}
		else{ // screen size more than medium

			setBookButtons(<div className={aboutMeStyles.bookButtonsDiv}>
				<button 
					onClick={() => setFirstTwoPages(true)}
					disabled={firstTwoPages ? true : false}
					className={aboutMeStyles.bookButton}
				>
					<div>
						<div>
							<FontAwesomeIcon icon={faPencilAlt} style={{transform: "rotate(45deg)"}}/>
						</div>
						<span>PREV</span>
					</div>
				</button>
				<button 
					onClick={() => setFirstTwoPages(false)}
					disabled={firstTwoPages ? false : true}
					className={aboutMeStyles.bookButton}
				>
					<div>
						<span>NEXT</span>
						<div>
							<FontAwesomeIcon icon={faPencilAlt} style={{transform: "rotate(-135deg)"}}/>
						</div>
					</div>
				</button>
			</div>)

			if(firstTwoPages){
				setClassnamesForPages({
					page1: undefined,
					page2: aboutMeStyles.showRightSidePage,
					page3: aboutMeStyles.hideLeftSidePage,
					page4: undefined
				})
			}
			else{
				setClassnamesForPages({
					page1: undefined,
					page2: aboutMeStyles.hideRightSidePage,
					page3: aboutMeStyles.showLeftSidePage,
					page4: undefined
				})
			}
		}
	}, [showPageNumber, windowWidth, firstTwoPages])

	useEffect(() => {
		const getWindowWidth = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener("resize", getWindowWidth)
		return () => {
			window.removeEventListener("resize", getWindowWidth)
		}
	}, [])

	return(
		<div id="AboutMe" className={aboutMeStyles.container}>

			<h1 className={aboutMeStyles.heading}>About Me</h1>

			<div className={aboutMeStyles.book}>
				<BookSpiral style={{marginTop: 100}}/>
				<BookSpiral style={{marginTop: 200}}/>
				<BookSpiral style={{marginTop: 300}}/>

				<div className={`${aboutMeStyles.page1} 
								 ${classnamesForPages.page1}`}>
					<div className={aboutMeStyles.imageErika}></div>
					<p className={aboutMeStyles.pageTitle}>I’m Erika Zocher, M.S.</p>

					<div className={aboutMeStyles.scrollableDiv}
						style={{height: "64%"}}>
						<p className={aboutMeStyles.pageSubTitle}>Education</p>
						
						<div className={aboutMeStyles.flexyDiv}>
							<div className={aboutMeStyles.imageNIU}></div>
							<ul className={aboutMeStyles.pageText}>
								<p className={aboutMeStyles.pageSubTitle}>Northern Illinois University</p>
								<li style={{marginTop: 5}}>Aug 20__ - May 2020</li>
								<li>Degree: M.S.</li>
								<li>Major: Geology & Environmental Geosciences</li>
							</ul>
						</div>

						<div className={aboutMeStyles.flexyDiv}>
							<div className={aboutMeStyles.imageNC}></div>
							<ul className={aboutMeStyles.pageText} >
								<p className={aboutMeStyles.pageSubTitle}>Northland College</p>
								<li style={{marginTop: 5}}>Aug 20__ - May 20__</li>
								<li>Degree: B.S.</li>
								<li>Major: Environmental Geosciences</li>
								{/* <li style={{paddingLeft: 50}}>– Geology Emphasis</li> */}
								<li>Minor: Biology</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={`${aboutMeStyles.page2} 
								 ${classnamesForPages.page2}`}>
					<h6 className={aboutMeStyles.pageTitle}>Presentations & Publications</h6>

					<div className={aboutMeStyles.scrollableDiv}>
						<p className={aboutMeStyles.pageSubTitleSmall}
							style={{marginTop: 0}}>Master’s Thesis, 2020</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Qualitative Perspectives on the Strange Trails of Persistence in STEM</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Northern Illinois University</p>
						<hr/>

						<p className={aboutMeStyles.pageSubTitleSmall}>Virtual Oral Presentation, 2020</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Qualitative Perspectives on the Strange Trails of Persistence in STEM </p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Geological Society of America North Central Sectional Meeting, Duluth, MN</p>
						<hr/>

						<p className={aboutMeStyles.pageSubTitleSmall}>Oral Presentation, 2019</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Demystifying Theoretical Frameworks for a Study of Persistence in STEM</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Geological Society of America Annual Meeting, Phoenix, AZ</p>
						<hr/>

						<p className={aboutMeStyles.pageSubTitleSmall}>Poster, 2019</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>A Pilot Study to Assess Chemistry Education in the Geosciences</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Earth Educators’ Rendezvous, Nashville, TN</p>
						<hr/>

						<p className={aboutMeStyles.pageSubTitleSmall}>Poster, 2019</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>A Pilot Study to Assess Chemistry Education in the Geosciences</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Chicago Symposium, Naperville, IL</p>
						<hr/>

						<p className={aboutMeStyles.pageSubTitleSmall}>Poster, 2019</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Metals in the Mud: Changes in Surface Sediments Contamination in Long Island Sound</p>
						<hr/>
						<p className={aboutMeStyles.pageTextSmall}>Geological Society of America North Central Sectional Meeting, Lincoln, NE, 2014: Geological 
							Society of America Abstracts with Programs. Vol. 46, No. 4, p.10</p>
						<hr/>
					</div>
				</div>

				<div className={`${aboutMeStyles.page3} 
								 ${classnamesForPages.page3}`}>
					<p className={aboutMeStyles.pageTitle}>My Rocky Journey</p>

					<div className={aboutMeStyles.scrollableDiv}>
						<p className={aboutMeStyles.pageText}>
							I understand firsthand that there is not always a linear 
							path in STEM.
						</p>
						<p className={aboutMeStyles.pageText}>
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
						</p>
						<p className={aboutMeStyles.pageText}>
							The break from academia afforded me an opportunity to teach 
							science to the public in various roles outside of what I 
							had originally planned: as a museum facilitator, a 
							nonprofit worker, and a high school educator. I later 
							re-entered graduate school, this time joining a geoscience 
							education research lab. Here, I 
						</p>
						<p className={aboutMeStyles.pageText}>
							The break from academia afforded me an opportunity to teach 
							science to the public in various roles outside of what I 
							had originally planned: as a museum facilitator, a 
							nonprofit worker, and a high school educator. I later 
							re-entered graduate school, this time joining a geoscience 
							education research lab. Here, I 
						</p>
						<p className={aboutMeStyles.pageText}>
							The break from academia afforded me an opportunity to teach 
							science to the public in various roles outside of what I 
							had originally planned: as a museum facilitator, a 
							nonprofit worker, and a high school educator. I later 
							re-entered graduate school, this time joining a geoscience 
							education research lab. Here, I 
						</p>
					</div>
				</div>

				<div className={`${aboutMeStyles.page4} 
								 ${classnamesForPages.page4}`}>
					<p className={aboutMeStyles.pageTitle}>My Goal</p>

					<div className={aboutMeStyles.scrollableDiv}>
						<p className={aboutMeStyles.pageText}>
							My goal is to inspire others to see that even their 
							steepest goals are attainable with the right supports. 
							STEM students and workers, especially those from 
							underrepresented backgrounds, are all too often met with 
							discouragement and feel a lack of a sense of belonging in 
							their communities. Our current and future generations of 
							scientists deserve an educational infrastructure that is 
							designed for collaboration and one that celebrates a 
							diversity of people and ideas.
						</p>
						<p className={aboutMeStyles.pageText}>
							My expertise in mentoring and student support can be widely 
							applied to meet your academic or professional needs.
						</p>

						<p className={aboutMeStyles.pageText} style={{textAlign: "center"}}>
							<span>Let me help you Summit STEM!</span>
						</p>
					</div>
				</div>

				{bookButtons}

			</div>
		</div>
	)
}

export default AboutMe