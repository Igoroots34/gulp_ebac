// dropdown menu

function myFunctionDrop() {
	document.getElementById("myDropdown").classList.toggle("show")
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content")
		var i
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i]
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show')
			}
		}
	}
}

function myFunctionDropHeader() {
	document.getElementById("myDropdown2").classList.toggle("show")
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn2')) {
		var dropdowns = document.getElementsByClassName("dropdown-content2")
		var i
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i]
			if (openDropdown.classList.contains('show2')) {
				openDropdown.classList.remove('show2')
			}
		}
	}
}

// carrousel slide

var count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
	nextImage()
}, 4000)

function nextImage(){
	count++
	if(count>3){
		count = 1
	}

	document.getElementById("radio"+count).checked = true
}

// theme dark & light

function myFunction() {
	var element = document.body
	element.classList.toggle("dark-mode")
	element.classList.toggle("dark-txt")
}

