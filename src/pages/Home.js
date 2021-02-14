import React from "react";

const Home = () => (
	<div style={styles.container}>
		<img style={styles.imageCover} src="https://lh3.googleusercontent.com/proxy/CyLNK2yjdcJ-LMPZ5F7jLQTEfiaLFS6EcqGclkDAAHqTSvwBK3C4gJtlT7PjVh7opa9w0yn6LrVW9kPeBrVzWwYURJPamZm8fPWyPYhrP3EYwO3-XucJbw" alt="Belajar coding" />
		<div style={styles.blockText}>
			<h1>Belajar Coding Sekarang</h1>
			<h4>Lebih dari 2.000 modul belajar pemrograman dalam beragam formula bisa kamu pelajari di sini.</h4>
		</div>
	</div>
);

const styles = {
	container: {
		position: "relative",
		textAlign: "center",
	},

	imageCover: {
		width: "100%",
	},

	blockText: {
		width: "100%",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		color: "white",
	},
};

export default Home;
