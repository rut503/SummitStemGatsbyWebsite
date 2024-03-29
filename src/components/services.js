import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel'

import servicesStyles from "./services.module.scss"

import CustomHR from "../components/customHR"

const Services = () => {
	
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
	  setIndex(selectedIndex);
	};

	return(
		<div id="Services" className={servicesStyles.container}>
			<CustomHR styles={{marginBottom: 15}}/>
			
			<h1>Services</h1>

			<h4>
				During your consultation we will discuss your goals, then 
				develope a customized strategy to get you there. What do you 
				have to lose?
			</h4>

			<h4>
				<span>Discounted rates offered for students!</span>
			</h4>

			<Carousel activeIndex={index} 
				onSelect={handleSelect}
				className={servicesStyles.serviceCardBox}
			>
				<Carousel.Item className={servicesStyles.serviceCard}>
					<div className={servicesStyles.serviceCardContent}>
						<div className={servicesStyles.highSchoolSVG}></div>
						{/* <Carousel.Caption> */}
							<h3>High school students & Parents</h3>
							<ul>
								<li>College Selection & Admission Advice</li>
								<li>Application Assistance</li>
								<li>Personal Statement and Resume</li>
								<li>Major Selection</li>
								<li>Career Planning</li>
								<li>Preparation for College Visits</li>
								<li>Scholarship Searches & Application Assistance</li>
							</ul>
							<CustomHR styles={{height: 5}}/>
							<h6>
								Personalized, Private Tutoring in Biology, Chemistry, 
								and the Geosciences
							</h6>
						{/* </Carousel.Caption> */}
					</div>
				</Carousel.Item>
				<Carousel.Item className={servicesStyles.serviceCard}>
					<div className={servicesStyles.serviceCardContent}>
						<div className={servicesStyles.collegeSVG}></div>
						{/* <Carousel.Caption> */}
							<h3>College students & Professionals</h3>
							<ul>
								<li>Post College Career Advice</li>
								<li>Graduate School Selection & Application Assistance</li>
								<li>Preparation for Graduate School Visits</li>
								<li>Resume / CV / Cover Letter Assistance</li>
								<li>Mock interviews</li>
								<li>Scholarship Searches & Application Assistance</li>
							</ul>
							<CustomHR styles={{height: 5}}/>
							<h6>
								Personalized, Private Tutoring in Biology, Chemistry, 
								and the Geosciences
							</h6>
						{/* </Carousel.Caption> */}
					</div>
				</Carousel.Item>

				<Carousel.Item className={servicesStyles.serviceCard}>
					<div className={servicesStyles.serviceCardContent}>
						<div className={servicesStyles.graduateSVG}></div>
						{/* <Carousel.Caption> */}
							<h3>Graduate Student</h3>
							<ul>
								<li>Post Graduate School Advice</li>
								<li>Preparation for Job Interviews and Mock Interviews</li>
								<li>Resume / CV / Cover Letter Assistance</li>
							</ul>
							<CustomHR styles={{height: 5}}/>
						{/* </Carousel.Caption> */}
					</div>
				</Carousel.Item>

				<Carousel.Item className={servicesStyles.serviceCard}>
					<div className={servicesStyles.serviceCardContent}>
						<div className={servicesStyles.educatorsSVG}></div>
						{/* <Carousel.Caption> */}
							<h3>Educators & Leaders</h3>
							<ul>
								<li>Team building and social support resources</li>
								<li>Diversity and inclusion training and resources</li>
								<li>
									High school and college-level content consulting for 
									biology, chemistry, and the geosciences
								</li>
							</ul>
							<CustomHR styles={{height: 5}}/>
						{/* </Carousel.Caption> */}
					</div>
				</Carousel.Item>
			</Carousel>

			<br/>
			
			{/* <div  className={servicesStyles.serviceCarousel}>
				<div className={servicesStyles.serviceCard}>
					<div className={servicesStyles.highSchoolSVG}></div>
					<h3>High school students & Parents</h3>
					<ul>
						<li>College Selection & Admission Advice</li>
						<li>Application Assistance</li>
						<li>Personal Statement and Resume</li>
						<li>Major Selection</li>
						<li>Career Planning</li>
						<li>Preparation for College Visits</li>
						<li>Scholarship Searches & Application Assistance</li>
					</ul>
					<CustomHR />
					<h6>
						Personalized, Private Tutoring in Biology, Chemistry, 
						and the Geosciences
					</h6>
				</div>

				<div className={servicesStyles.serviceCard}>
					<div className={servicesStyles.collegeSVG}></div>
					<h3>College students & Professionals</h3>
					<ul>
						<li>Post College Career Advice</li>
						<li>Graduate School Selection & Application Assistance</li>
						<li>Preparation for Graduate School Visits</li>
						<li>Resume / CV / Cover Letter Assistance</li>
						<li>Mock interviews</li>
						<li>Scholarship Searches & Application Assistance</li>
						
						<CustomHR />
						
						<li>
							Personalized, Private Tutoring in Biology, Chemistry, 
							and the Geosciences
						</li>
					</ul>
					
				</div>

				<div className={servicesStyles.serviceCard}>
					<div className={servicesStyles.graduateSVG}></div>
					<h3>Graduate Student</h3>
					<ul>
						<li>Post Graduate School Advice</li>
						<li>Preparation for Job Interviews and Mock Interviews</li>
						<li>Resume / CV / Cover Letter Assistance</li>
					</ul>
					<CustomHR />
				</div>

				<div className={servicesStyles.serviceCard}>
					<div className={servicesStyles.educatorsSVG}></div>
					<h3>Educators & Leaders</h3>
					<ul>
						<li>Team building and social support resources</li>
						<li>Diversity and inclusion training and resources</li>
						<li>
							High school and college-level content consulting for 
							biology, chemistry, and the geosciences
						</li>
					</ul>
					<CustomHR />
				</div>
			</div> */}
		</div>
	)
}

export default Services