"use strict";

//var Controller = function(obj_model){
function Controller(){ //class
	ParentController.call(this);
	this.filter_course_counter = 0;
	
	this.words_typed = 0;
	this.correct_typed_words = 0; //to count the words typed correctly
	this.correct_typed_letters = 0; //to count the letters typed correctly

	this.words_of_source_array =  new Array(); //capture words_of_source permanently in an array 
	this.words_of_source_array.length=0;
	
	this.word_typed = ""; //a word typed
	this.sentence_typed = ""; // a sentence typed

	this.obj_model.showContainer("#id_screen1");
    this.obj_model.hideContainer("#id_screen2");
	
	if(this.obj_model.isMobile.any()){
		this.obj_model.hideContainer("#id_screen1");
		this.obj_model.hideContainer("#id_screen2");
		$("#myModal").show({show:true});
		$(".modal-title").text("Warning");
		$(".modal-body").text("This site is not suitable for Smart Phones or Tablets.");
	}else{
		console.log("This site is only suitable of PCs with Keyboard as this is website is designed to train you to improve your typing.");
	}
};

Controller.prototype = Object.create(ParentController.prototype);
Controller.prototype.constructor = Controller;


Controller.prototype.gk_MouseClicked = function(e, the_element) {
	var that = this;
};

Controller.prototype.gk_MouseUp = function(e, the_element, move_element) {
	var that = this;
	var id = $(the_element).attr("id");

	if (String(id).includes("id_lesson")){
		var lesson_name = String(id).substring(3,11);
		var lesson_file = lesson_name + ".txt";
		$("#id_title").text(lesson_name);
		$.ajax({
			url: "Lessons/" + lesson_file,
			type: "GET",
			contentType: "plain/text",
			success: function(response) { //returned data from server if successful
				response = response.replace(/[\r\n]/g, "<p></p>");
				response = response.replace(/(<p><\/p>){2,}/g, "\$1");
				$("#id_selection_display").html(response);
				$("#id_startbtn").attr("disabled", false);
			},
			error: function(error) {
				console.log(error);
			},
		});
	}
	
	switch (id){
		case "id_startbtn":
			$("#id_type").html("");
			if ($("#id_title").html() == ""){
				$("#myModal").show({show:true});
					$(".modal-title").text("Warning");
					$(".modal-body").html("Please select a Typing Lesson first from the dropdown menu on the topleft of the screen. Then click on Start button.");
			}else{
				console.log("Program Started");
				var word_counter = 0;

				this.obj_model.showContainer("#id_screen2");
				this.obj_model.hideContainer("#id_screen1");
				
				this.obj_model.startTimer(0,0, "#id_timestamp");
				
				var words_of_source = ""; // capture individual words of source temporarily;
				var source_text = $("#id_selection_display").html(); 
				this.words_of_source_array.length = 0;
				//=====  break Source into array
				for(var i=0; i<source_text.length; i++){
					if(source_text.charCodeAt(i) == 32){
						this.words_of_source_array[word_counter] = words_of_source;
						words_of_source="";
						word_counter++;
					}else{
						words_of_source = words_of_source + source_text.charAt(i);
					}
				}
				this.obj_model.updateSource("id_source", this.filter_course_counter, this.words_of_source_array, this.words_typed);
			}
			break;
		case "id_endbtn":
			this.obj_model.endTimer();
			this.obj_model.summaryReport("myModal", "modal-title", "modal-body", this.words_typed, this.correct_typed_words, this.correct_typed_letters);
			this.obj_model.showContainer("#id_screen1");
			this.obj_model.hideContainer("#id_screen2");
			break;
		case "id_close_myModal":
			$("#id_endbtn").click();
			location.reload();
			break;
		case "id_exit_myModal":
			$("#id_endbtn").click();
			location.reload();
			break;	
		default:
			//default code
	};
};

Controller.prototype.gk_KeyUp = function(event){
	var key_code=event.keyCode | event.Which;
    
    //if backspace
    if(key_code == 8 && this.word_typed.length > 0) {
      this.word_typed = this.word_typed.substring(0, this.word_typed.length-1); //Delete the last character of the this.word_typed
      this.sentence_typed = this.sentence_typed.substring(0, this.sentence_typed.length-1); //Delete the last character of the this.sentence_typed
      id_type.innerHTML=this.sentence_typed; //copy the value of this.sentence_typed to id_type
    }else //if spacebar
    if(key_code == 32 && this.word_typed.length > 0) { 
      //display summary report after the end of lesson
      if (this.words_typed < this.words_of_source_array.length) {
		var temp = this.words_of_source_array[this.words_typed];
		console.log(temp + " = " + this.word_typed);
        if (temp == this.word_typed){
          this.words_of_source_array[this.words_typed] = "<font color='lime'>" + temp +"</font>";
		  this.correct_typed_words++;
		  this.correct_typed_letters += this.word_typed.length;
        }else {
          this.words_of_source_array[this.words_typed] = "<font color='red'>" + temp +"</font>"; 	
        }
        
        if (this.words_typed % 20 == 0 && this.words_typed > 0){
          this.filter_course_counter += 20;  
          this.sentence_typed = "";
        }
        this.sentence_typed += " "; //add space to this.sentence_typed
        this.word_typed = ""; //cancel the previous word to create new word
        id_type.innerHTML = this.sentence_typed; //copy the value of this.sentence_typed to id_type
        this.words_typed++;
		this.obj_model.updateSource("id_source", this.filter_course_counter, this.words_of_source_array, this.words_typed);
      }
      if (this.words_typed == this.words_of_source_array.length) {
        this.obj_model.endTimer();
		this.obj_model.summaryReport("myModal", "modal-title", "modal-body", this.words_typed, this.correct_typed_words, this.correct_typed_letters);
      }	
	}	
};

Controller.prototype.gk_KeyPress = function(event){
	//console.log("keypress");
    var key_code = event.keyCode | event.which;	
    if(key_code >= 33 && key_code <= 151){
      var Keys = String.fromCharCode(key_code);
      this.word_typed += Keys; //separate word
      this.sentence_typed += Keys; //separate sentence
      id_type.innerHTML += Keys; //append the keys value to the typed_id
    }else if (key_code == 13){
      this.word_typed += "<p></p>"; //separate word
      this.sentence_typed += "<p></p>"; //separate sentence
      id_type.innerHTML += "<p></p>";
    }
};