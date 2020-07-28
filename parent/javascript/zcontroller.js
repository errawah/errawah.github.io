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
function ParentController(){ //class
	this.obj_error = new Error();
	this.obj_view = new View();
	this.obj_model = new Model();
}
ParentController.prototype.constructor = ParentController;

ParentController.prototype.gk_LoadWindow = function(e){
};

ParentController.prototype.gk_ResizeWindow = function(e){
};

ParentController.prototype.gk_MouseOver = function(e, the_element) {
	this.gk_Id = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_MouseOut = function(e, the_element) {
	this.gk_Id = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_MouseDown = function(e, the_element) {
	
};

ParentController.prototype.gk_MouseUp = function(e, the_element, move_element) {
	
};

ParentController.prototype.gk_MouseMove = function(e, the_element, move_element, cur_pos, gk_PreventPullToRefresh, gk_DeltaTouchPosY){
	
	//======== Touch Scroll Settings ============
	if (gk_PreventPullToRefresh){
		gk_PreventPullToRefresh = false;
		if (gk_DeltaTouchPosY > 0){
			e.preventDefault(); //Prevent Auto Refresh when pulled down
		}
	}
	
	//e.preventDefault(); // Prevent Scrolling
	
	if (window.pageYOffset == 0 && gk_DeltaTouchPosY > 0){
	//	e.preventDefault(); //Prevent Over Scroll Glow
	}
	//==============================================
	
	//********** End of Parent Setting **********
};

ParentController.prototype.gk_MouseClicked = function(e, the_element) {
	this.gk_Id = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_MouseDblClicked = function(e, the_element) {
	this.gk_Id = this.obj_model.getFullId(the_element);
};

ParentController.prototype.gk_Scroll = function(event){
	
};


ParentController.prototype.gk_KeyUp = function(event){
	
};

ParentController.prototype.gk_KeyDown = function(event){

};

ParentController.prototype.gk_KeyPress = function(event){

};