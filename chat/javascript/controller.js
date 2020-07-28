"use strict";
//var Controller = function(obj_model){
function Controller() { //class
	var that = this;
	ParentController.call(this);

	$("#id_frame_signin").hide();
	$("#id_frame_register").hide();
	$("#id_frame_memberlists").hide();
	$("#id_frame_chat").hide();

	$("#id_register_name").css("border", "2px inset red");
	$("#id_register_email").css("border", "2px inset red");
	$("#id_register_password").css("border", "2px inset red");
	$("#id_register_confirm").css("border", "2px inset red");

	this.register_name = false;
	this.register_email = false;
	this.register_password = false;
	this.register_confirm = false;

	this.chat = {
		user_id: "",
		client_id: "",
		msg: "",
		time: "",
		viewed: 0,
	};

	that.obj_model.getSession(["email", "password"], function (response) {
		if (response.error) {
			// console.log(response);
		} else {
			$("#id_frame1").hide();
			that.chat.user_id = response.result[0];
			that.chat.password = response.result[1];
			that.obj_model.showMembersListFrame(that.chat.user_id, that.chat.password);
		}
	});
};

Controller.prototype = Object.create(ParentController.prototype);
Controller.prototype.constructor = Controller;

Controller.prototype.gk_MouseUp = function (e, the_element, move_element) {
	var that = this;
	var element_id = $(the_element).attr("id");

	switch (element_id) {
		case "id_btn_signin":
			$("#id_frame1").hide();
			$("#id_frame_signin").show();
			break;
		case "id_btn_register":
			$("#id_frame1").hide();
			$("#id_frame_register").show();
			break;
		case "id_signin_back":
			$("#id_frame1").show();
			$("#id_frame_signin").hide();
			$("#id_frame_register").hide();
			break;
		case "id_register_back":
			$("#id_frame1").show();
			$("#id_frame_signin").hide();
			$("#id_frame_register").hide();
			break;
		case "id_register_submit":
			let error_msg = "";
			if (!this.register_name || !this.register_email || !this.register_password || !this.register_confirm) {
				if (!this.register_name) {
					error_msg += "Name Validation Failed<br>";
				}
				if (!this.register_email) {
					error_msg += "Email Validation Failed<br>";
				}
				if (!this.register_password) {
					error_msg += "Password Validation Failed<br>";
				}
				if (!this.register_confirm) {
					error_msg += "Confirm Password Validation Failed<br>";
				}
				$("#myModal").show({ show: true });
				$(".modal-title").text("Validation Error");
				$(".modal-body").html(error_msg);

			} else {
				console.log("Validation Successful");
				var name = $("#id_register_name").val();
				var gender = $("#id_register_gender").val();
				var email = $("#id_register_email").val().toLowerCase();
				var password = $("#id_register_password").val();

				var cypher = {
					name: that.obj_model.cypherText(name),
					gender: that.obj_model.cypherText(gender),
					email: that.obj_model.cypherText(email),
					password: that.obj_model.cypherText(password)
				};

				var sql_statement = "insert into members values('" + cypher.name + "', '" + cypher.email + "', '" + cypher.gender + "', '" + cypher.password + "')";
				this.obj_model.sqlUpdate(sql_statement, function (response) {
					if (response.error) {
						console.log(response);
					} else {
						that.chat.user_id = email;
						that.chat.password = password;
						that.obj_model.showMembersListFrame(that.chat.user_id, that.chat.password);
					}
				});

			}
			break;
		case "id_signin_submit":
			var email = $("#id_signin_email").val();
			var password = $("#id_signin_password").val();

			that.chat.user_id = email;
			that.chat.password = password;

			that.obj_model.showMembersListFrame(that.chat.user_id, that.chat.password);
			break;
		case "id_myModal_exit":
			$("#myModal").hide();
			break;
		case "id_myModal_btn":
			$("#myModal").hide();
			break;

		case "id_signout":
			console.log("signout");
			that.obj_model.clearSession();
			location.reload();
			break;

		case "id_btn_send":
			if ($("#id_reply_div").text() == "") {
				console.log("Invalid reply");
			} else {
				var firstload = true;
				that.chat.msg = $("#id_reply_div").html();
				$("#id_reply_div").text("");
				var system_date = new Date();
				// var current_time = system_date.getTime();
				that.cypher = {
					chat: {
						user_id: that.obj_model.cypherText(that.chat.user_id),
						client_id: that.obj_model.cypherText(that.chat.client_id),
						msg: that.obj_model.cypherText(that.chat.msg),
						time: system_date,
					},
				};

				// console.log(that.chat.user_id + " = " + that.chat.client_id);
				var sql_statement = "insert into chat values('" + that.cypher.chat.user_id + "', '" + that.cypher.chat.client_id + "', '" + that.cypher.chat.msg + "', '" + that.cypher.chat.time + "', '" + that.chat.viewed + "')";
				that.obj_model.sqlUpdate(sql_statement, function (response) {
					if (response.error) {
						console.log(response);
					} else {
						$("#id_reply_div").attr("contenteditable", false);
						that.obj_model.showWaitingScreen('body');
					}
				});
			}
			break;
		case "id_chatbox_back":
			$("#id_frame_memberlists").show();
			$("#id_frame_chat").hide();
			clearInterval(that.refresh_chat_message);
			$("#id_audio_new_message_alert2").html("");
			that.obj_model.getSession(["email", "password"], function (response) {
				if (response.error) {
					// console.log(response);
				} else {
					$("#id_frame1").hide();
					that.chat.user_id = response.result[0];
					that.chat.password = response.result[1];
					that.obj_model.showMembersListFrame(that.chat.user_id, that.chat.password);
				}
			});
			break;
	}

	//!!!!! !element_id.includes("id_new_message_indicator") to exclude clicking on new notification !!!
	// if (parent.element_id === "id_memberlists" && !element_id.includes("id_new_message_indicator")) {
	if (typeof element_id != "undefined") {
		if (element_id.includes("id_listitem_clients")) {
			clearInterval(that.obj_model.refresh_client_list);
			$("#id_audio_new_message_alert1").html("");
			$("#id_frame_memberlists").hide();
			$("#id_memberlists").html("");
			$("#id_frame_chat").show();

			that.chat.client_id = $(the_element).text();
			$("#id_chatbox_title").text(that.chat.client_id);


			$("#id_chat_textdiv").html("");
			that.cypher = {
				chat: {
					client_id: that.obj_model.cypherText(that.chat.client_id),
					user_id: that.obj_model.cypherText(that.chat.user_id),
				},
			};
			var sql_statement1 = "update chat set viewed = 1 where user_id='" + that.cypher.chat.client_id + "' and client_id='" + that.cypher.chat.user_id + "'";
			that.obj_model.sqlUpdate(sql_statement1, function (response) {
				console.log(response);
			});
			var firstload = true;
			var array_previous_msg = new Array();
			var array_msg = new Array();
			var fetch_success = false;
			$("#id_reply_div").attr("contenteditable", false);
			this.obj_model.showWaitingScreen('body');
			that.refresh_chat_message = setInterval(async function () {
				await showMessages();
				async function showMessages() {
					fetch_success = false;
					var sql_statement = "select * from chat where client_id='" + that.cypher.chat.client_id + "' and user_id='" + that.cypher.chat.user_id + "' union select * from chat where client_id='" + that.cypher.chat.user_id + "' and user_id='" + that.cypher.chat.client_id + "' order by time";
					await that.obj_model.sqlExtract(sql_statement, async function (response) {
						if (response.error) {
						} else {
							for (var i = 0; i < response.result.length; i++) {
								await array_msg.push({
									"user_id": that.obj_model.decypherText("" + response.result[i]['user_id']),
									"date": Date.parse(response.result[i]['time']),
									"msg": that.obj_model.decypherText(response.result[i]['msg']),
								});
							}
							fetch_success = true;

						}
						// });
						await updateMessage();
						async function updateMessage() {
							if ((array_previous_msg.length != array_msg.length && fetch_success)) {
								var prev_fullDate = "";
								await array_msg.sort((a, b) => (a.date > b.date) ? 1 : -1);
								var msg = "";
								for (var i = 0; i < array_msg.length; i++) {
									var dd = new Date(array_msg[i]['date']);
									var mydate = {
										date: dd.getDate(),
										month: dd.getMonth() + 1,
										year: dd.getFullYear(),
										fullDate: function () {
											return this.date + "/" + this.month + "/" + this.year;
										}
									};
									var mytime = {
										hr: dd.getHours(),
										min: dd.getMinutes(),
										sec: dd.getSeconds(),
										fullTime: function () {
											return this.hr + ":" + this.min + ":" + this.sec;
										}
									};

									if (prev_fullDate != mydate.fullDate()) {
										msg += "<p class='cls_msg_date'>" + mydate.fullDate() + "</p>"
									}

									prev_fullDate = mydate.fullDate();

									if (array_msg[i]['user_id'] == that.chat.user_id) {
										msg += "<p class='cls_msg_sent'>" + array_msg[i]['msg'] + " (" + mytime.fullTime() + ") </p>";
									} else {
										msg += "<p class='cls_msg_received'>" + array_msg[i]['msg'] + " (" + mytime.fullTime() + ") </p>";
									}
								}
								that.obj_model.hideWaitingScreen();
								$("#id_reply_div").attr("contenteditable", true);
								await $("#id_chat_textdiv").attr({
									"contenteditable": "true",
								});
								msg = msg.replace(/<div>/g, "<br>");
								msg = msg.replace(/<\/div>/g, "");
								await $("#id_chat_textdiv").html(msg);
								await $("#id_chat_textdiv").scrollTop($("#id_chat_textdiv")[0].scrollHeight - $("#id_chat_textdiv").height());
								if (firstload) {
									firstload = false;
								} else {
									await $("#id_audio_new_message_alert2").html("<audio id='id_notify' autoplay><source src='../audio/notify.wav' type='audio/wav'>Your browser does not support audio element</audio>");
								}
								await $("#id_chat_textdiv").attr({
									"contenteditable": "false",
								});
							} else if (array_msg.length == 0) {
								that.obj_model.hideWaitingScreen();
								$("#id_reply_div").attr("contenteditable", true);
							}
							array_previous_msg = array_msg.slice(0);
							array_msg.length = 0;

						}
					});
				}
			}, 2000);
		}
	}
};

Controller.prototype.gk_MouseClicked = function (e, the_element) {
	// var that = this;
	// var element_fullid = this.obj_model.getFullId(the_element);
	// var element_id = $(the_element).attr("id");
	// var parent = {
	// 	element_id: $("#" + element_id).parent().parent().attr("id"),
	// };

	// switch (element_id) {

	// }
};

Controller.prototype.gk_MouseOver = function (e, the_element) {
	var that = this;
	var element_fullid = this.obj_model.getFullId(the_element);
	var element_id = $(the_element).attr("id");
	var parent = {
		element_id: $("#" + element_id).parent().attr("id"),
	};
	var grandparent = {
		element_id: $("#" + element_id).parent().parent().attr("id"),
	};

	if (grandparent.element_id === "id_memberlists") {
		that.bg_color = $("#" + parent.element_id).css("background-color");
		$("#" + parent.element_id).css({
			"cursor": "pointer",
			"background-color": "lightblue",
		});

	}

};

Controller.prototype.gk_MouseOut = function (e, the_element) {
	var that = this;
	var element_fullid = this.obj_model.getFullId(the_element);
	var element_id = $(the_element).attr("id");
	var parent = {
		element_id: $("#" + element_id).parent().attr("id"),
	};
	var grandparent = {
		element_id: $("#" + element_id).parent().parent().attr("id"),
	};

	if (grandparent.element_id === "id_memberlists") {
		$("#" + parent.element_id).css({
			"background-color": that.bg_color,
		});

	}


};

Controller.prototype.gk_KeyUp = function (e) {
	var that = this;
	var name = $("#id_register_name").val();
	var gender = $("#id_register_gender").val();
	var email = $("#id_register_email").val().toLowerCase();
	var password = $("#id_register_password").val();
	var confirmpassword = $("#id_register_confirm").val();

	if (name.length > 0) {
		$("#id_register_name").css("border", "2px inset gray");
		this.register_name = true;
	} else {
		$("#id_register_name").css("border", "2px inset red");
		this.register_name = false;
	}



	if (that.obj_model.valid_email(email)) {
		$("#id_register_email").css("border", "2px inset gray");
		this.register_email = true;
	} else {
		$("#id_register_email").css("border", "2px inset red");
		this.register_email = false;
	}


	if (that.obj_model.validPassword(password)) {
		$("#id_register_password").css("border", "2px inset gray");
		this.register_password = true;
	} else {
		$("#id_register_password").css("border", "2px inset red");
		this.register_password = false;
	}

	if (confirmpassword.length > 0) {
		if (password == confirmpassword) {
			$("#id_register_confirm").css("border", "2px inset gray");
			this.register_confirm = true;
		} else {
			$("#id_register_confirm").css("border", "2px inset red");
			this.register_confirm = false;
		}
	}
}