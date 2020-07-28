//Designed by Mr. Keshar Limbu

/*	
This is a Parent View. Your View should call this Parent View 
to inject its methods and properties.

!! Warning: All the methods and properties of this Parent View can be 
overridden by the methods and properties in your View. !!

View should not be able to contact Model directly for security reasons.
Controller acts as a central control unit directing the flow between 
Events, Model and View.
*/


"use strict";

//var ParentView = function(){
function ParentView(){//class
};

ParentView.prototype.constructor = ParentView;


ParentView.prototype.showProcessbox = function(message){
	if (message != ""){
		$("#processing").text(message);
	}
	$("#processing").css({
		"display":"block",
		"top":"0px",
	});
	$("body").css({
		"opacity":"0.3",
	});
	this.obj_model.animateShowHide("#processing");
};

ParentView.prototype.hideProcessbox = function(){
	$("#processing").css("display", "none");
	$("body").css({
		"opacity":"1",
	});
};


