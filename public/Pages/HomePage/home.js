async function fetchPoppulation(){
	let data = "";

	try {
		const response = await fetch('/poppulation');
		data = await response.text();
		document.querySelector("#population").innerHTML = data;
	} catch (error) {
		console.error('Error:', error);
		document.querySelector("#population").innerHTML = "Sorry... We are facing a problem";
	}
}

(function(){
	fetchPoppulation();
	document.querySelector(".current-year").innerHTML = new Date().getFullYear();
})();