import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					
					<h1>The Fitness World</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto inventore eligendi mollitia deleniti id vero optio suscipit tempora molestias esse accusantium odit laborum, temporibus voluptatum maxime assumenda. Debitis nobis quos atque laudantium, sapiente in.
					</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
