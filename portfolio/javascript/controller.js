//var Controller = function(obj_model){
function Controller() { //class
	ParentController.call(this);
	if (this.obj_model.isMobile.any()) {

	} else {

	}

	$('[data-toggle="popover"]').popover({
		placement : 'top',
		trigger : 'hover',
		html : true,
	});

};

Controller.prototype = Object.create(ParentController.prototype);
Controller.prototype.constructor = Controller;

Controller.prototype.gk_MouseClicked = function (e, the_element, move_element) {
	var that = this;
	var id = $(the_element).attr("id");

	switch (id) {
		case "menu_home":
			$("#home .myFade").hide(0, function () {
				$(this).show(0);
			});
			break;
		case "menu_aboutme":
			$("#aboutme .myFade").hide(0, function () {
				$(this).show(0);
			});
			break;
		case "menu_technicalskills":
			$("#technicalskills .myFade").hide(0, function () {
				$(this).show(0);
			});
			break;
		case "menu_workhistory":
			$("#workhistory .myFade").hide(0, function () {
				$(this).show(0);
			});
			break;
		case "menu_projects":
			$("#projects .myFade").hide(0, function () {
				$(this).show(0);
			});
			break;
		case "menu_contact":
			$("#contact .myFade").hide(0, function () {
				$(this).show(0);
			});
			
			

			
			break;
		case "id_solitaire_icon":
			$("#id_dialogbox").show({ show: true });
			$("#id_dialogbox_btn1").show();
			$("#id_dialogbox_btn2").show();

			$("#id_dialogbox_btn1").text("Demo");
			$("#id_dialogbox_btn2").text("Source Code");

			$(".modal-title").text("Solitaire");
			$(".modal-body").html('<p style="text-align:center"><img src="image/solitaire.png" width="300px" alt="Solitaire" align="middle" /></p><p>This is a card game named Solitaire. This game consists of a deck of card. As you start the game, the deck of card gets shuffled. Arrange the cards by dragging from the deck of cards to respective place sequentially but with alternate colours.<br><br>I have used <em>HTML5</em>, <em>CSS3</em>, <em>JavaScript</em>, <em>jQuery</em> and <em>Bootstrap 4</em> to build this game.</p>');
			break;
		case "id_chat_icon":
			$("#id_dialogbox").show({ show: true });
			$("#id_dialogbox_btn1").show();
			$("#id_dialogbox_btn2").show();

			$("#id_dialogbox_btn1").text("Demo");
			$("#id_dialogbox_btn2").text("Source Code");

			$(".modal-title").text("Chat Application");
			$(".modal-body").html('<p style="text-align:center"><img src="image/chat.png" width="300px" alt="Solitaire" align="middle" /></p><p>This is a chat application designed to chat between a group of registered members. You must first register yourself to be able to chat with other registered members.  <br><br>I have used <em>HTML5</em>, <em>Bootstrap 4</em>, <em>CSS3</em>, <em>JavaScript</em>, <em>jQuery</em> as client-side programming to design the layout and <em>PHP</em> for server-side programming to connect to <em>MySQL</em> database server. <br><br>I have used <em>Ajax</em> to communicate between client-side and server-side. I have used <em>JSON</em> format to transfer data from server to client and vice versa.</p> ');
			break;
		case "id_eng_dev_icon":
			$("#id_dialogbox").show({ show: true });
			$("#id_dialogbox_btn1").show();
			$("#id_dialogbox_btn2").show();

			$("#id_dialogbox_btn1").text("Demo");
			$("#id_dialogbox_btn2").text("Source Code");

			$(".modal-title").text("English Devnagari Translator");
			$(".modal-body").html('<p style="text-align:center"><img src="image/engtonepali.png" width="300px" alt="Solitaire" align="middle" /></p><p>This is a software that helps to convert English script to Devanagari script. Type English letters in the first box and you will see translated letters in the second box. A helping translation table is displayed at the bottom box. <br><br>I have used <em>HTML5</em>, <em>CSS3</em>, <em>JavaScript</em>, <em>jQuery</em> and <em>Bootstrap 4</em> to build this software.</p>');
			break;
		case "id_typing_tutor_icon":
			$("#id_dialogbox").show({ show: true });
			$("#id_dialogbox_btn1").show();
			$("#id_dialogbox_btn2").show();

			$("#id_dialogbox_btn1").text("Demo");
			$("#id_dialogbox_btn2").text("Source Code");

			$(".modal-title").text("Typing Tutor");
			$(".modal-body").html('<p style="text-align:center"><img src="image/typingexercise.png" width="300px" alt="Solitaire" align="middle" /></p><p>This is a software that helps improve typing skills. This consists of Lessons that are specially designed to improve your typing skills.<br><br>I have used <em>HTML5</em>, <em>CSS3</em>, <em>JavaScript</em>, <em>jQuery</em> and <em>Bootstrap 4</em> to build this software.</p>');
			break;
		case "id_btn_contact_submit":
			var valid_name, valid_email, valid_msg;
			var name = $("#id_name").val();
			var email = $("#id_email").val();
			var msg = $("#id_msg").val();
			if (name.length > 0) {
				$("#id_name").css("border", "2px inset gray");
				valid_name = true;
			} else {
				$("#id_name").css("border", "2px inset red");
				valid_name = false;
			}

			var email_pattern = new RegExp(/^[a-z0-9_\.]+[@][a-z0-9_]+([\.][a-z0-9_]+){1,2}$/);
			var valid_email = email_pattern.test(email);
			if (valid_email) {
				$("#id_email").css("border", "2px inset gray");
			} else {
				$("#id_email").css("border", "2px inset red");
			}

			if (msg.length > 0) {
				$("#id_msg").css("border", "2px inset gray");
				valid_msg = true;
			} else {
				$("#id_msg").css("border", "2px inset red");
				valid_msg = false;
			}


			if (valid_name && valid_email && valid_msg) {
				this.obj_model.showWaitingScreen('body');
				that.obj_model.sendEmail("errawah@yahoo.com", "Ahrewah: " + name + "(" + email + ")", msg, function (response) {
					that.obj_model.hideWaitingScreen();
					console.log(response);
					$("#id_dialogbox").show({ show: true });
					$(".modal-title").text("Information");
					$(".modal-body").html('Your contact information has been submitted. We will contact you shortly.');
				});
			} else {
				$("#id_dialogbox").show({ show: true });
				$("#id_dialogbox_btn1").show();
				$("#id_dialogbox_btn2").hide();

				$("#id_dialogbox_btn1").text("OK");

				$(".modal-title").text("Incomplete Form");
				$(".modal-body").html('<p>Some of the fields in the form are not filled. Can you please fill them before submitting the form.</p>');
			}

			break;
		case "id_dialogbox_btn1":
			$("#id_dialogbox").hide();
			if ($(".modal-title").text() == "Solitaire") {
				window.open("../solitaire/index.html", "_blank");
			} else if ($(".modal-title").text() == "Chat Application") {
				window.open("../chat/index.html", "_blank");
			} else if ($(".modal-title").text() == "Typing Tutor") {
				window.open("../typing_tutor/index.html", "_blank");
			} else if ($(".modal-title").text() == "English Devnagari Translator") {
				window.open("../eng_dev/index.html", "_blank");
			}
			break;
		case "id_dialogbox_btn2":
			$("#id_dialogbox").hide();
			if ($(".modal-title").text() == "Solitaire") {
				window.open("https://github.com/errawah/errawah.github.io/tree/master/solitaire", "_blank");
			} else if ($(".modal-title").text() == "Chat Application") {
				window.open("https://github.com/errawah/errawah.github.io/tree/master/chat", "_blank");
			} else if ($(".modal-title").text() == "Typing Tutor") {
				window.open("https://github.com/errawah/errawah.github.io/tree/master/typing_tutor", "_blank");
			} else if ($(".modal-title").text() == "English Devnagari Translator") {
				window.open("https://github.com/errawah/errawah.github.io/tree/master/eng_dev", "_blank");
			}
			break;
		case "id_dialogbox_exit":
			$("#id_dialogbox").hide();

	};
};

Controller.prototype.gk_MouseUp = function (e, the_element) {

}

Controller.prototype.gk_MouseOver = function (e, the_element) {
	var element_id = $(the_element).attr("id");
	if (element_id){
		if (element_id == "id_solitaire_icon" || element_id == "id_chat_icon" || element_id == "id_eng_dev_icon" || element_id == "id_typing_tutor_icon" || element_id == "id_folktales_icon") {
			$(the_element).css({
				"border": "2px outset brown",
				"cursor": "pointer",
			});
		}
		if (element_id.includes("logo")){
			$(the_element).hide(0, function(){
				$(this).show(0);
			});
		}
	}
};

Controller.prototype.gk_MouseOut = function (e, the_element) {
	var element_id = $(the_element).attr("id");
	if (element_id == "id_solitaire_icon" || element_id == "id_chat_icon" || element_id == "id_eng_dev_icon" || element_id == "id_typing_tutor_icon" || element_id == "id_folktales_icon") {
		$(the_element).css({
			"border": "none",
		});
		

	}
};