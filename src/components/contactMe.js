import React, { useState } from "react"

import contactMeStyles from "./contactMe.module.scss"

const ContactMe = () => {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleInputChange = (e) => {
		const value = e.target.value
		const name = e.target.name

		if(name === "name") setName(value)
		else if(name === "email") setEmail(value)
		else if(name === "message") setMessage(value)
		else console.log("Problem with contact form...")
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(`Name: ${name} \nEmail: ${email}\nMessage: ${message}`)
	}

	return(
		<div id="ContactMe" className={contactMeStyles.container}>
			
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

				<form onSubmit={handleSubmit}>
					<label>
					<span className={contactMeStyles.customLabel}>Name</span>
						<br/>
						<input
							type="text"
							name="name"
							required
							className={contactMeStyles.name}
							value={name}
							onChange={handleInputChange}
						/>
					</label>
					<br/>
					<label>
					<span className={contactMeStyles.customLabel}>Email</span>
						<br/>
						<input
							type="email"
							name="email"
							required
							className={contactMeStyles.email}
							value={email}
							onChange={handleInputChange}
						/>
					</label>
					<br/>
					<label>
						<span className={contactMeStyles.customLabel}>Message</span>
						<br/>
						<textarea
							type="text"
							name="message"
							rows={5}
							// cols={16}
							required
							className={contactMeStyles.message}
							value={message}
							onChange={handleInputChange}
						/>
					</label>
					<br/>
					<button className={contactMeStyles.submitBtn} type="submit">Send Message</button>
				</form>
			</div>

			<div className={contactMeStyles.right}></div>
			
		</div>
	)
}

export default ContactMe