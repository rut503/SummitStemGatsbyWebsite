import React, { useState } from "react"

import CustomHR from "./customHR"
import contactMeStyles from "./contactMe.module.scss"

const ContactMe = () => {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	})

	const handleInputChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		console.log(`Name: ${formData.name} \nEmail: ${formData.email}\nMessage: ${formData.message}`)

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formData })
		})
		.then(() => alert("Message Sent"))
		.catch(error => {
			alert("Message Sent")
			console.log(error)
		});

		e.preventDefault();
		setFormData({ name: "", email: "", message: "" })
	}

	const encode = (data) => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	}

	return(
		<div id="ContactMe" className={contactMeStyles.container}>
			<CustomHR styles={{marginBottom: 15}}/>
			
			<h1>Contact Me</h1>
			
			<div className={contactMeStyles.left}>
				
				{/* <form onSubmit={handleSubmit}>
					<label for="name" >Name</label><br/>
					<input id="name" type="text" placeholder="Name" autocomplete="name" required className={contactMeStyles.name}/>
					<br/>
					<label for="email" >Email</label><br/>
					<input id="email" type="email" autocomplete="email" required className={contactMeStyles.email}/>
					<br/>
					<label for="message" >Message</label><br/>
					<textarea id="message" rows="1" required className={contactMeStyles.message}/>
					<br/>
					<input type="submit" name="submit" value="Send Message" className={contactMeStyles.submitBtn}/>
				</form> */}

				<form onSubmit={handleSubmit} name="contact" method="post" 
				data-netlify="true" data-netlify-honeypot="bot-field">

					<input type="hidden" name="form-name" value="contact" />
					
					<label>
						<span>Name</span>
						<br/>
						<input
							type="text"
							name="name"
							required
							className={contactMeStyles.name}
							value={formData.name}
							onChange={handleInputChange}
						/>
					</label>

					<label>
						<span>Email</span>
						<br/>
						<input
							type="email"
							name="email"
							required
							className={contactMeStyles.email}
							value={formData.email}
							onChange={handleInputChange}
						/>
					</label>

					<label>
						<span>Message</span>
						<br/>
						<textarea
							type="text"
							name="message"
							rows={5}
							required
							className={contactMeStyles.message}
							value={formData.message}
							onChange={handleInputChange}
						/>
					</label>

					<button className={contactMeStyles.submitBtn} type="submit" value="Submit">
						Send Message
					</button>
				</form>
			</div>

			<div className={contactMeStyles.right}></div>
			
		</div>
	)
}

export default ContactMe