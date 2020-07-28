//Designed by Mr. Keshar Limbu
/*	
This is a Parent Model. You Model should call this Parent Model 
to inject its methods and properties.
!! Warning: All the methods and properties of this Parent Model can be 
overridden by the methods and properties in your Model. !!

This is a collection of my standard methods and can only be called by Controller.
Controller can inject inputs in the form of methods' arguments when making a call.
All the methods have return type which are returned to the Controller as output.

This part should not contain any Elements/Tags or Attributes of HTML. They should be passed 
as arguments through Controller. Hence, it is independent of HTML Elements/Tags and 
Attributes.

*/



"use strict";
//var ParentModel = function(){}
function ParentModel(){//class
	//console.log("ParentModel initialized");
}
ParentModel.prototype.constructor = ParentModel;

ParentModel.prototype.popChar = function(input){
	var output;
	if(input.length>0){
		output = input.substring(0, input.length-1);
	}
	return output;
};

ParentModel.prototype.useHTTPData = function(url_address, method, callback1){
	var xhttp = new XMLHttpRequest();
	xhttp.open(method, filename + "?t=" + Math.random(), true);
	xhttp.send();
	
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			callback1(xhttp);
		}
	};
};

ParentModel.prototype.useAJAX = function(url_address, datatosend, method, callback_success, callback_error){
	$.ajax({
		url: url_address,
		type: method,
		data: datatosend, //send data object to server
		success: function(response) { //returned data from server if successful
			callback_success(response);
		},
		error: function(error) {
			callback_error(error);
		},
	});
};

ParentModel.prototype.getFullId = function(the_element){
	var ancestors = $(the_element).parentsUntil("html");
	var absolute_element_id = "";
	if (ancestors != undefined) {
		for (var i=(ancestors.length-1); i>=0; i--){
			if (ancestors[i].id == ""){
				absolute_element_id = (i == (ancestors.length-1)) ? absolute_element_id + ancestors[i].tagName : absolute_element_id + ">" + ancestors[i].tagName;
			}else{
				absolute_element_id = (i == (ancestors.length-1)) ? absolute_element_id + "#" + ancestors[i].id : absolute_element_id + ">#" + ancestors[i].id;
			}
		}
	}
	if ($(the_element).attr("id") != ""){
		absolute_element_id = absolute_element_id + ">#" + $(the_element).attr("id");
	}
	return absolute_element_id;
};

ParentModel.prototype.filterMessage = function(message){
	message = message.replace(/\\/gim, "\\\\"); //backslash
	message = message.replace(/([\'])/gim, "\\'"); //hyphen
	return message;
};

ParentModel.prototype.cypherText = function(myText){
	var encrypted_text = "";
	for (var i=0; i<myText.length; i++){
		var myTemp = myText.charCodeAt(i);
		if (myTemp < 10){
			myTemp = "0000" + myText.charCodeAt(i);
		}else if (myTemp <100){
			myTemp = "000" + myText.charCodeAt(i);
		}else if (myTemp <1000){
			myTemp = "00" + myText.charCodeAt(i);
		}else if (myTemp <10000){
			myTemp = "0" + myText.charCodeAt(i);
		}
		encrypted_text = encrypted_text + myTemp;
	}
	return encrypted_text;
};

ParentModel.prototype.decypherText = function(encrypted_text){
	var decrypted_text ="";
	for (var i=0; i<encrypted_text.length; i+=5){
		var myTemp = encrypted_text.charAt(i) + encrypted_text.charAt(i+1) + encrypted_text.charAt(i+2) + encrypted_text.charAt(i+3)+ encrypted_text.charAt(i+4);
		decrypted_text = decrypted_text + String.fromCharCode(myTemp);
	}
	return decrypted_text;
};

ParentModel.prototype.adjustTextForDatabase = function(text){
	text = text.replace(/\\/g, "\\\\\\\\");
	text = text.replace(/'/g, "\\\\'");
	return text;
};


ParentModel.prototype.swapArrayElement = function(array, position1, position2){
	let temp = array[position1];
	array[position1] = array[position2];
	array[position2] = temp;
	return array;
};

ParentModel.prototype.suffleArray = function(arr) {
	for (var i = (arr.length-1); i>0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
};

ParentModel.prototype.setSession = function(items, callback1){
	//items = [{"name": "value",}] //Array of objects
	//return = returned_obj
	var datatosend = {
		task : "SET_SESSION",
		items : items,	
	};
	$.ajax({
		url:"php/controller.php",
		data: datatosend,
		type: "POST",
		success: function(response){
			var returned_obj = JSON.parse(response);
			callback1(returned_obj);
		},
		error: function(error){
			console.log(error);
		}
	});
};

ParentModel.prototype.getSession = function(items, callback1){
	//items = [item1, item2,] = Array
	//return = session items
	var that = this;
	var datatosend = {
		task: "GET_SESSION",
		items: items,
	};
	$.ajax({
		url: "php/controller.php", 
		data: datatosend, 
		type: "POST", 
		success: function(response){
			var returned_obj = JSON.parse(response);
			callback1(returned_obj);
		}, 
		error: function(e){
			console.log(e);
		}
	});
};

ParentModel.prototype.clearSession = function(){
	var that = this;
	var datatosend = {
		task : "CLEAR_SESSION",
	};
	$.ajax({
		url: "php/controller.php",
		data: datatosend,
		type: "POST",
		success: function(response){
			console.log(response);
		}
	});
}

ParentModel.prototype.getServerTime = function(successCallback){
	var datatosend = {
		task: "GET_SERVER_TIME",
	};
	$.ajax({
		url: "php/controller.php", 
		data: datatosend, 
		type: "POST", 
		success: function(response){
			var returned_obj = JSON.parse(response);
			successCallback(returned_obj);
		},
		error: function(error){
			that.obj_model.hideProcessbox();
			console.log(error);
		}
	});
};

ParentModel.prototype.sendEmail = function(to, subject, msg, successCallback){
	var datatosend = {
		task: "SEND_EMAIL",
		to: to,
		subject: subject,
		msg: msg,
	};
	$.ajax({
		url: "php/controller.php",
		data: datatosend,
		type: "POST",
		success: function(response){
			successCallback(response);
		},
		error: function(error){
			console.log(error);
		}
	});
}

ParentModel.prototype.sqlExtract = function(sql_stmt, successCallback){
	var that = this;
	$.ajax({
		url: "php/controller.php", 
		data: {
			task: "SQL_EXTRACT",
			sql_stmt: sql_stmt,
		}, 
		type: "POST", 
		success: function(response){
			var returned_obj = JSON.parse(response);
			successCallback(returned_obj);
		},
		error: function(error){
			console.log(error);
		}
	});
};


ParentModel.prototype.sqlUpdate = function(sql_stmt, successCallback){
	$.ajax({
		url: "php/controller.php", 
		data: {
			task: "SQL_UPDATE",
			sql_stmt: sql_stmt,
		}, 
		type: "POST", 
		success: function(response){
			var returned_obj = JSON.parse(response);
			successCallback(returned_obj);
		},
		error: function(error){
			console.log(error);
		}
	});
};



//=================================================================

ParentModel.prototype.displayBlock = function(id, src){
	try{
		this.renderHTML(id, '<iframe src="' + src + '" width="100%" height="100%"></iframe>');
	}catch(e){
		console.log(e);
	}	
};

ParentModel.prototype.renderSize = function(id, times){
	var txt = $(id).text();
	txt = txt.replace(/(\r\n|\n|\r)/gm,"");
	txt = txt.replace(/(\s)/g,"");
	var txt_len = txt.length;
	$(id).css({"width":(parseInt(times) * txt_len) + "px", "height": (parseInt(times) * txt_len) + "px"});
};

ParentModel.prototype.renderWidth = function(id, times){
	var txt = $(id).html();
	txt = txt.replace(/(\r\n|\n|\r)/gm,"");
	txt = txt.replace(/(\s)/g,"");
	var txt_len = txt.length;
	$(id).css({"width":(parseInt(times) * txt_len) + "px"});
};

ParentModel.prototype.superScript = function(id){ //can support for max 4 digit
	var txt = $(id).text();
	txt = txt.replace(/(\r\n|\n|\r)/gm,"");
	txt = txt.replace(/(\s)/g,"");
	if (txt.length == 0){
		$(id).css("display", "none");
	}else{
		$(id).css({"display":"inline-block",
				"font-family":"Arial",
				"font-size":"10px",
				"text-align":"center",
				"vertical-align":"middle",
				"border-radius":"50%",
		});
		if(txt.length == 1){
			$(id).css({"width":"14px", 
					"height":"14px",
					"padding-top":"0px",
			});
		}else if (txt.length == 2) {
			$(id).css({"width":"15px", 
					"height":"15px",
					"padding-top":"0px",
			});
		}else if (txt.length == 3){
			$(id).css({"width":"21px", 
					"height":"20px",
					"padding-top":"3px",
			});
		}else if (txt.length == 4){
			$(id).css({"width":"28px", 
					"height":"22px",
					"padding-top":"5px",
			});
		}
	}
}

ParentModel.prototype.animateShowHide = function(id){
	$(id).css("opacity", "0.9");
	var interval = setInterval( function(){
		if (Math.round($(id).css("opacity")*10)/10 == "0.1"){
			$(id).animate({
				opacity: "0.9",
			},500);
		}else{
			$(id).animate({
				opacity: "0.1",
			},500);
		}
	}, 800 );
}


ParentModel.prototype.isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
};

ParentModel.prototype.showWaitingScreen = function(where){
    $(where).append('<img id="id_waiting_screen" class="blink_me" src="../picture/hourglass.png" alt="" z-index="9999" style="width:10vw; position:fixed; top:30vh; left:45vw">');
}

ParentModel.prototype.hideWaitingScreen = function(){
    $("#id_waiting_screen").remove();
}

ParentModel.prototype.isElementOverflowing = function(element) {
    var overflowX = element.offsetWidth < element.scrollWidth;
    var overflowY = element.offsetHeight < element.scrollHeight;
    return (overflowX || overflowY);
}


ParentModel.prototype.valid_email = function(email){
	let email_pattern = new RegExp(/^[a-z0-9_\.]+[@][a-z0-9_]+([\.][a-z0-9_]+){1,2}$/);
	let validate_email = email_pattern.test(email);
	return validate_email;
}
ParentModel.prototype.validPassword = function(password){
	let password_pattern = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/);
	let validate_password = password_pattern.test(password);
	return validate_password;
};