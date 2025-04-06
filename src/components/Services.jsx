import React from "react";

const services = [
	"Custom Software Development",
	"IT Infrastructure Setup & Management",
	"Cloud Solutions (AWS, Azure)",
	"Cybersecurity & Risk Management",
	"Web & Mobile App Development",
];

const Services = () => (
	<section className="py-10" id="services">
		<h2 className="text-2xl font-bold mb-4">Our Services</h2>
		<ul className="list-disc pl-5 space-y-2">
			{services.map((service, index) => (
				<li key={index}>{service}</li>
			))}
		</ul>
	</section>
);

export default Services;
