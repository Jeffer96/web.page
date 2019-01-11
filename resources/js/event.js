
var menuItemSelected;

function onLoad(){
	menuItemSelected = "Inicio";
	loadLink("inicio.html");
}

function goTo(id, urlPage){
	if (menuItemSelected!=id){
		document.getElementById(menuItemSelected).classList.remove("selected");
		document.getElementById(menuItemSelected).classList.add("unSelected");
		menuItemSelected = id.toString();
		document.getElementById(menuItemSelected).classList.remove("unSelected");
		document.getElementById(menuItemSelected).classList.add("selected");
		loadLink(urlPage);
	}
}

function loadLink(urlPage){
	var innerContent = '<object id="content" type="text/html" data="'+urlPage+'" ></object>';
    document.getElementById("dynamicContent").innerHTML=innerContent;
	//document.getElementById("dynamicContent").style.height = document.getElementById("content").scrollHeight;
	alert(document.getElementById("dynamicContent").scrollHeight);
}