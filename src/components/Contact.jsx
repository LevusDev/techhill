import React, { useState } from "react";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Thank you for contacting us!");
		// Here you’d send form data to your backend
	};

	return (
		<section className="py-10" id="contact">
			<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
			<form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
				<input
					name="name"
					placeholder="Your Name"
					className="w-full p-2 border border-gray-300 rounded"
					value={form.name}
					onChange={handleChange}
					required
				/>
				<input
					name="email"
					type="email"
					placeholder="Your Email"
					className="w-full p-2 border border-gray-300 rounded"
					value={form.email}
					onChange={handleChange}
					required
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					className="w-full p-2 border border-gray-300 rounded"
					rows={4}
					value={form.message}
					onChange={handleChange}
					required
				/>
				<button
					type="submit"
					className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contact;
