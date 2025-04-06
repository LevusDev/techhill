import React from "react";

const Header = () => (
	<header className="bg-white text-gray-900 py-6 shadow-md">
		<div className="container mx-auto px-4 flex gap-5 items-center">
			<div>
				<img src="./assets/techhilllogo.png" alt="" className="w-[150px]" />
			</div>
			<div>
				<h1 className="text-3xl font-bold">Technology Hill Company Limited</h1>
				<p className="text-sm mt-1">Empowering Innovation with Technology</p>
			</div>
		</div>
	</header>
);

export default Header;
