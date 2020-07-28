"use strict";

	
//var View = function() {}
function View() {
	this.obj_model = new Model();
	ParentView.call(this);
} //class

View.prototype = Object.create(ParentView.prototype);
View.prototype.constructor = View;

