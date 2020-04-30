var input = document.getElementById("userinput");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

function createlist()
{
	if(input.value.length > 0)
	{
	var dim = document.createElement("div");
	var m = dim.appendChild(document.createElement("li"));
	var n = dim.appendChild(document.createElement("button"));
	dim.className = "d"; 
	m.appendChild(document.createTextNode(input.value));
	n.appendChild(document.createTextNode("delete"));
	n.className = "bun";
	ul.appendChild(dim);
	input.value = "";
}
}

function atkeypress(event)
{
	if(input.value.length > 0 && event.keyCode === 13){
	var dim = document.createElement("div");
	var m = dim.appendChild(document.createElement("li"));
	var n = dim.appendChild(document.createElement("button"));
	dim.className = "d"; 
	m.appendChild(document.createTextNode(input.value));
	n.appendChild(document.createTextNode("delete"));
	n.className = "bun";
	ul.appendChild(dim);
	input.value = "";	
}
}

button.addEventListener("click", createlist);
input.addEventListener("keypress", atkeypress);



var ul2=document.querySelector("ul");
 function cross(event)
{
	if(event.target.tagName === "LI")
	{
		event.target.classList.toggle("done");
	}
}
ul2.addEventListener("click", cross);  




var ul3 = document.querySelector("ul");
 function del(event)
{
	if(event.target.tagName === "BUTTON")
	{
		event.target.parentNode.style.display = 'none';
	}
}
ul3.addEventListener("click", del);  
