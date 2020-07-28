//Designed by Mr. Keshar Limbu
/*	
This is a Parent Controller. You Controller should call this Parent Controller 
to inject its methods and properties.
!! Warning: All the methods and properties of this Parent Controller can be 
overridden by the methods and properties in your controller. !!

Create objects for Error, View and Model here.
*/

"use strict";
//var ParentController = function(obj_model){
function ParentController() { //class
	this.obj_error = new Error();
	this.obj_view = new View();
	this.obj_model = new Model();
	this.gk_Element = document.getElementById("gk_Body");

	this.gk_FooterHeight = $(".footer").height();
	$(".gk_BottomSpace").css({ height: (this.gk_FooterHeight + 10) + "px" });
}
ParentController.prototype.constructor = ParentController;

ParentController.prototype.gk_LoadWindow = function (e) {
};

ParentController.prototype.gk_ResizeWindow = function (e) {
};

ParentController.prototype.gk_MouseOver = function (e, the_element) {
	var element_fullid = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_MouseOut = function (e, the_element) {
	var element_fullid = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_MouseDown = function (e, the_element) {
	//********** Parent Setting **********
	if ($(the_element).attr("draggable") == "true") { //dragable looks like reserved so use draggable
		$("BODY").append("<div id='gk_DragID'></div>");
		$("#gk_DragID").css("display", "none");

		$(the_element).clone().appendTo($("#gk_DragID"));

	}
	//********** End of Parent Setting **********

};

ParentController.prototype.gk_MouseUp = function (e, the_element, move_element) {
	//********** Parent Setting **********
	var element_fullid = this.obj_model.getFullId(the_element);
	$("#gk_DragID").remove();
	$(parent.document.body).find("#gk_DragID").remove();

	//********** End of Parent Setting **********
};

ParentController.prototype.gk_MouseMove = function (e, the_element, move_element, cur_pos, gk_PreventPullToRefresh, gk_DeltaTouchPosY) {
	//********** Parent Setting **********
	if (move_element.mousedown) {
		if ($(move_element.start.the_element).attr("draggable") == "true") {
			$("#gk_DragID").css({
				"position": "absolute",
				"top": (cur_pos.Y + 0),
				"left": (cur_pos.X + 0),
				"display": "block",
			});
		}
	}
	//======== Touch Scroll Settings ============
	if (gk_PreventPullToRefresh) {
		gk_PreventPullToRefresh = false;
		if (gk_DeltaTouchPosY > 0) {
			e.preventDefault(); //Prevent Auto Refresh when pulled down
		}
	}

	//e.preventDefault(); // Prevent Scrolling

	if (window.pageYOffset == 0 && gk_DeltaTouchPosY > 0) {
		//	e.preventDefault(); //Prevent Over Scroll Glow
	}
	//==============================================

	//********** End of Parent Setting **********
};

ParentController.prototype.gk_MouseClicked = function (e, the_element) {
	var element_fullid = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_MouseDblClicked = function (e, the_element) {
	var element_fullid = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_Scroll = function (event) {

};


ParentController.prototype.gk_KeyUp = function (event) {

};

ParentController.prototype.gk_KeyDown = function (event) {

};

ParentController.prototype.gk_KeyPress = function (event) {

};