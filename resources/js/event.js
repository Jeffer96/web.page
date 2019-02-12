var menuSelected;var dc; var bd;var blocked;var links = {'LIDX':"inicio.html",'LSRV':"servicios.html",'LACR':"acerca.html",'LCTO':"contacto.html",'portal':"portal.airefrescodecolombia.com"};

function loaded(){
	dc = document.getElementById("dynamicContent");
	bd = document.getElementById("mainFrame");
	menuSelected = "LIDX";
	blocked=true;
	document.getElementById("loading").style.display="none";
	document.getElementById("content").style.display="inline";
	loadLink(links[menuSelected]);
	//document.getElementById("dynamicContent").onload = animate();
}

function selectedFromIframe(id){
	parent.document.getElementById(id).click();
}

function selected(id){
	if (menuSelected!=id && !blocked){ 
		document.getElementById(menuSelected).setAttribute("class","selected");
		document.getElementById(menuSelected).setAttribute("class","unSelected");
		menuSelected = id;
		document.getElementById(menuSelected).setAttribute("class","unSelected");
		document.getElementById(menuSelected).setAttribute("class","selected");
		loadLink(links[menuSelected]);
	}	
}

function loadLink(url){
	blocked = true;
	dc.style.display = "none";
	dc.setAttribute("src",url);
	dc.onload = function(){
		dc.style.display = "block";
		var hv = dc.contentWindow.document.body.scrollHeight;
		var counter = hv/100;
		var myTimer = setInterval(animate, 20);
		function animate () {
			if (counter <  hv ){
				dc.style.height = counter;
				counter = counter + 10;
			}else {
				clearInterval(myTimer);
				blocked = false;
			}
		}
	};
}

function downTo(id){
	parent.window.scrollTo(0,document.getElementById(id).offsetTop+100);
}




