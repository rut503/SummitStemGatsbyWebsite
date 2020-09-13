import React from "react"

import servicesStyles from "./services.module.scss"

const Services = () => {
	return(
		<div id="Services" className={servicesStyles.container}>
			
			<h1>Services</h1>
			<h4>
				During your consultation we will discuss your goals, then 
				develope a customized strategy to get you there. What do you 
				have to lose?
			</h4>
			<h4><span>Discounted rates offered for students!</span></h4>
			
			<div>
				<h4>High school students & Parents</h4>
				<ul>
					<li>College Selection & Admission Advice</li>
					<li>Application Assistance</li>
					<li>Personal Statement and Resume</li>
					<li>Major Selection</li>
					<li>Career Planning</li>
					<li>Preparation for College Visits</li>
					<li>Scholarship Searches & Application Assistance</li>
				</ul>
				<hr/>
				<h6>
					Personalized, Private Tutoring in Biology, Chemistry, 
					and the Geosciences
				</h6>
			</div>

			<div>
				<h4>College students & Professionals</h4>
				<ul>
					<li>Post College Career Advice</li>
					<li>Graduate School Selection & Application Assistance</li>
					<li>Preparation for Graduate School Visits</li>
					<li>Resume / CV / Cover Letter Assistance</li>
					<li>Mock interviews</li>
					<li>Scholarship Searches & Application Assistance</li>
				</ul>
				<hr/>
				<h6>
					Personalized, Private Tutoring in Biology, Chemistry, 
					and the Geosciences
				</h6>
			</div>

			<div>
				<h4>Graduate Student</h4>
				<ul>
					<li>Post Graduate School Advice</li>
					<li>Preparation for Job Interviews and Mock Interviews</li>
					<li>Resume / CV / Cover Letter Assistance</li>
				</ul>
				<hr/>
			</div>

			<div>
				<h4>Educators & Leaders</h4>
				<ul>
					<li>Team building and social support resources</li>
					<li>Diversity and inclusion training and resources</li>
					<li>
						High school and college-level content consulting for 
						biology, chemistry, and the geosciences
					</li>
				</ul>
				<hr/>
			</div>
		</div>
	)
}

export default Services