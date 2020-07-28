"use strict";

//var Model = function(){
function Model(){ //class
};
Model.prototype = Object.create(ParentModel.prototype);
Model.prototype.constructor = Model;

Model.prototype.showContainer = function(){
	for (var i=0; i<arguments.length; i++){
		$(arguments[i]).show();
		$(arguments[i]).children().show();
    }
};

Model.prototype.hideContainer = function(){
	for (var i=0; i<arguments.length; i++){
		$(arguments[i]).hide();
		$(arguments[i]).children().hide();
    }
};

//limit to number of words per display
Model.prototype.updateSource = function(id, filter_course_counter, words_of_source_array, words_typed){
    var source_id = document.getElementById(id);
    var temp = "";
    for(var i = filter_course_counter; i<words_of_source_array.length; i++){
      if (i == words_typed){
        temp += "<font color='gray'><b>" + words_of_source_array[i] + "</b></font> ";
      }else{
        temp += words_of_source_array[i] + " ";
      }
    }
    temp = temp.replace(/<p><\/p>/g, "\n\u00B6")
    source_id.innerHTML = temp;
     
};

Model.prototype.startTimer = function(counter_sec, counter_min, id){
    var that = this;
    this.timer = setInterval(function(){
      counter_sec++;
      if (counter_sec == 60){
        counter_min++;
        counter_sec = 0;
      }

      $(id).text(counter_min + ":" + counter_sec);
      that.counter_min = counter_min;
      that.counter_sec = counter_sec;
    }, 1000);
};

Model.prototype.endTimer = function(){ 
    clearInterval(this.timer);
};

Model.prototype.summaryReport = function(id, title, body, words_typed, correct_typed_words, correct_typed_letters){
    this.endTimer();
    var gross_min = this.counter_min + this.counter_sec/60;
    var gross_speed = Math.round(correct_typed_letters/5/gross_min);

    var accuracy = Math.round(correct_typed_words/words_typed * 100);
    $("#" + id).show({show:true});
    $("." + title).html("Typing Summary");
    $("." + body).html("Accuracy: " + accuracy + "<br>Speed: " + gross_speed + " per min");
};



