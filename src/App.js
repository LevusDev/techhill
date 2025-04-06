import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="font-sans text-gray-800">
			<Header />
			<main className="px-4 md:px-16 bg-gray-50">
				<About />
				<Services />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}

export default App;
