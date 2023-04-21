function hg() {
var x = document.getElementById("read").getElementsByClassName("gallery-item");

	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementById("read").getElementsByClassName("gallery-item hg");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

function hp() {
	var x = document.getElementById("read").getElementsByClassName("gallery-item");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementById("read").getElementsByClassName("gallery-item hp");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

function rp() {
	var x = document.getElementById("read").getElementsByClassName("gallery-item");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementById("read").getElementsByClassName("gallery-item rp");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

function mc() {
	var x = document.getElementById("read").getElementsByClassName("gallery-item");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x = document.getElementById("read").getElementsByClassName("gallery-item mc");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

/* reset all styles */
function everything() {
    var x = document.getElementById("read").getElementsByClassName("gallery-item");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}

