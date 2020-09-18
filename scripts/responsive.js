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
