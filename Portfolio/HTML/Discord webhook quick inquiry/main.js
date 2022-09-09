jQuery(function($) {
	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#scrollToTop').fadeIn();
	  		$('#chatBot').css({
				bottom: "70px"
			});
			$('#chatBot_message').css({
				bottom: "70px"
			});
		} else {
			$('#scrollToTop').fadeOut();
			$('#chatBot').css({
				bottom: "10px"
			});
			$('#chatBot_message').css({
				bottom: "10px"
			});
		}
	});
	/* Click event to scroll to top */
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	$('#chatBot').click(function(){
		$('#chatBot').css({
			backgroundColor: "blueviolet",
			border: "none",
			backgroundImage: "none",
			borderRadius: "50px",
			width: "300px"
		});
		$('#chatBot_message').css({
			display: "block",
			right: "10px",
			width: "300px"
		});
	});

	$('#contact_box_main_close').click(function(){
		$('.contact-box-main').css({
			display: "none"
		});
	});
	
	$('#contact-submit').click(function(){
		$('.contact-box-main').css({
			display: "none"
		});
		$('.not-send').css({
			display: "block"
		});
	
		$('.success-send').css({
			display: "none"
		});

		document.getElementById('webhook_discord_name').value = "";
		document.getElementById('webhook_title').value = "";
		document.getElementById('webhook_image_or_video_url').value = "";
		document.getElementById('webhook_message').value = "";
	});

	$('#chatBot_message').click(function(){
		$('.contact-box-main').css({
			display: "block"
		});

		$('#chatBot').css({
			backgroundColor: "Black",
			backgroundImage: "url('.images/all-photo/White-Logo50x50.png')",
			backgroundAttachment: "center",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			border: "2px white solid",
			borderRadius: "50%",
			width: "50px"
		});

		$('#chatBot_message').css({
			display: "none"
		});
	});
});

function sendMessage() {
	const request = new XMLHttpRequest();
	request.open("POST", "Your webhook url");

	request.setRequestHeader('Content-type', 'application/json');
	const webhook_discord_name = document.getElementById("webhook_discord_name").value;
	const webhook_title = document.getElementById("webhook_title").value;
	const webhook_image_or_video_url = document.getElementById("webhook_image_or_video_url").value;
	const webhook_message = document.getElementById("webhook_message").value;

	const params = {
	  	username: "Discord webhook quick contact",
	  	content: `이름: ${webhook_discord_name}\n제목: ${webhook_title}\n내용: ${webhook_message}\n자료: ${webhook_image_or_video_url}`
	}

	request.send(JSON.stringify(params));

	$('.not-send').css({
		display: "none"
	});

	$('.success-send').css({
		display: "block"
	});

	auto_close();
	$("#auto_close_count").html(`이 화면은 5 초뒤 자동으로 닫힙니다.`);
}

function auto_close() {
	let currentSecond = 5;
    //타이머 변수
    var playTimer;
    //타이머 실행시 반복 실행 되는 콜백 함수
    const playHandler = () => {
      currentSecond = currentSecond - 1;
      if(currentSecond === 0){
		$("#auto_close_count").html(`이 화면은 ${currentSecond} 초뒤 자동으로 닫힙니다.`);
        clearInterval(playTimer);
      }
	  $("#auto_close_count").html(`이 화면은 ${currentSecond} 초뒤 자동으로 닫힙니다.`);
    };
    
	playTimer = setInterval(playHandler,1000);

	setTimeout(function () {
		$('.contact-box-main').css({
			display: "none"
		});
		$('.not-send').css({
			display: "block"
		});

		$('.success-send').css({
			display: "none"
		});
		document.getElementById('webhook_discord_name').value = "";
		document.getElementById('webhook_title').value = "";
		document.getElementById('webhook_image_or_video_url').value = "";
		document.getElementById('webhook_message').value = "";
	}, 6000);
}