// your code here
document.getElementById("form1").addEventListener("submit",function(event){

	event.preventDefault();

	const name = document.getElementById("name").value;
	const year = document.getElementById("year").value;

	const url = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`
	
	 document.getElementById("url").textContent = url;
})
