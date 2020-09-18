document.addEventListener("DOMContentLoaded", function(event) {    
    //Comportamiento de imagenes individual
    /*var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click",function() {
	if(thumbnailElement.className == "web-image")
	    thumbnailElement.className += " small";
	else
	    thumbnailElement.className = "web-image";
    });*/

    /*Comportamiento de imagenes en grupo*/
    var thumbnail = document.getElementsByClassName("web-image");
    for (var i=0; i < thumbnail.length; i++) {
	thumbnail[i].addEventListener("click",function(event) {
	    if(event.target.className == "web-image") {
		event.target.className += " small";
	    }
	    else {
		event.target.className = "web-image";
	    }  
	});
    }

    /*Imagenes modales*/
    var modal = document.getElementsByClassName("modal-content")[0];
    var wonders = document.getElementsByClassName("wonder");
    var modalImg = document.getElementsByClassName("modal-image")[0];
    var modalWdr = document.getElementsByClassName("wonder-name")[0];
    var modalUbc = document.getElementsByClassName("wonder-ubication")[0];

    for (i=0; i < wonders.length; i++) {
	var wonder = wonders[i].getElementsByTagName("img")[0];
	wonder.onclick = function() {
	    modal.style.display = "flex";
	    modalImg.src = this.src;
	    modalWdr.innerHTML = this.parentElement.getElementsByTagName("h3")[0].innerHTML;
	    modalUbc.innerHTML = this.parentElement.getElementsByTagName("h4")[0].innerHTML;
	}
    }

    var closeBtn = document.getElementsByClassName("close-button")[0];
    closeBtn.onclick = function() {
	modal.style.display = "none";
    }
    //for (i = 0; i < wonders.length; i++) {
	//wonders[i].addEventListener("click",function(event) {
	    
    //}
    
    
});
				     
//Función para menú responsive
function myFunction() {
    var x = document.getElementById("navigation");
    var y = document.getElementsByClassName("right");
    if (x.className === "navbar") {
	x.className += " responsive";
	y[0].style.display = "none";
    } else {
	x.className = "navbar";
	y[0].style.display = "flex";
    }
}




				  
				    
