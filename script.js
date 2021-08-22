var menuButton = document.getElementById("menuButton")
		var navigation = document.getElementById("navigation")
		var menu = document.getElementById("menu")
		navigation.style.right = "-250px"
		menuButton.onclick = function(){
			if(navigation.style.right == "-250px"){
				navigation.style.right = "0";
				menu.src = "images/exit.png";
			}
			else {
				navigation.style.right = "-250px";
				menu.src ="images/menu.png";
			}
			// body...
		}
		var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

			var i=0;
				function read(){
					if(!i){
						document.getElementById("more").style.display = "inline";
						document.getElementById("dots").style.display = "none";
						document.getElementById("read").innerHTML="Скрий";
						i=1;

					}
					else {
						document.getElementById("more").style.display = "none";
						document.getElementById("dots").style.display = "inline";
						document.getElementById("read").innerHTML="Прочети Още";
						i=0;


					}
				}

		