import React from "react";

const Footer = () => (
	<footer className="bg-gray-900 text-white py-8 mt-10">
		<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
			{/* Company Info */}
			<div>
				<h3 className="text-lg font-bold mb-2">
					Technology Hill Company Limited
				</h3>
				<p>
					Driving digital transformation through innovation and technology.
					Based in Nigeria, serving clients worldwide.
				</p>
			</div>

			{/* Quick Links */}
			<div>
				<h4 className="font-semibold mb-2">Quick Links</h4>
				<ul className="space-y-1">
					<li>
						<a href="#about" className="hover:text-blue-400">
							About Us
						</a>
					</li>
					<li>
						<a href="#services" className="hover:text-blue-400">
							Services
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:text-blue-400">
							Contact
						</a>
					</li>
				</ul>
			</div>

			{/* Contact Info */}
			<div>
				<h4 className="font-semibold mb-2">Contact</h4>
				<p>
					Email:{" "}
					<a href="mailto:info@technologyhill.com" className="text-blue-400">
						info@technologyhill.ng
					</a>
				</p>
				<p>Phone: +234 803 514 0979</p>
				<p>Address: BB3 Off Uganda Street, Barnawa New Extension Kaduna</p>
			</div>
		</div>

		<div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
			&copy; {new Date().getFullYear()} Technology Hill Company Limited. All
			rights reserved.
		</div>
	</footer>
);

export default Footer;
