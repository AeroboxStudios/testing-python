
$(document).ready(function(){
	var imgs = document.querySelectorAll("div img");

	$('#header').load('component/navbar.html')

	
	for(var i = 0; i < imgs.length; i++){
		imgs[i].src = "images/" + (i+1) +".png";
	}
	
});

/*

$(document).ready(function(){
	$('#header').load('/components/navbar.html')
});

*/