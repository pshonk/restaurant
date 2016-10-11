$("#content").append('<nav>' 
						+ '<button id="contact">Contact</button>'
						+ '<button id="menu">Menu</button>'
						+ '<button>Jobs</button>'
						+ '</nav>');


$("#content").append("<img src=images/700-03075757em-Mexican-Restaurant-Albuquerque-New-Mexico-USA.jpg>");
$("#content").append("<h1>Welcome to Casa Grande Resturant</h1>");
$("#content").append("<h1>Home to the monster Green Chile Burrito</h1>");

function addMenu(){
	$("#content").append("<h1>Hello</h1>");
}
function addContact(){
	$("#content").append("<h1>Casa Grande</h1>");
	$("#content").append("<h3>Telephone 555-321-0099");
}

$("#menu").click(addMenu);
$("#contact").click(addContact);
