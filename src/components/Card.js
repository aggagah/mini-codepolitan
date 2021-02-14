import React from "react";
import "../App.css";

const Card = (props) => (
	<div className="col-md-6">
		<div className="card text-center">
			<img src={props.imageURl} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p>{props.subtitle}</p>
				<a href="#" className="btn buttonAction">
					Mulai Belajar
				</a>
			</div>
		</div>
	</div>
);

export default Card;
