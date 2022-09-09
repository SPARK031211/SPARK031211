var start = new Date().getTime() / 1000;
	var length = 1;

	window.requestAnimFrame = (function(){
			return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
		function( callback,  element){
			window.setTimeout(callback, 120);
		};
	})();


	function go(){
		var dif = (new Date().getTime() / 1000) - start; 
		var minutes = dif / 1.2;
		var percentage = (minutes/length) * 500;

		if(percentage > 500){ percentage = 500; }
		
		if( percentage != 500 ){
			document.getElementById('wel-msg-box').style.width = percentage+'px';
		} else if (percentage == 500 ){
			document.getElementById('wel-msg-box').style.width = percentage+'px';
		}
	}


	function Update(){	
		go();
		requestAnimFrame( Update );	
	}

	Update();