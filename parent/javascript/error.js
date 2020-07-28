"use strict";
//var ParentError = function(){}
function ParentError(){//class
	//console.log("ParentError initialized");
	this.error = {
		D0001: {
			type: "Database Error",
			desc: "Invalid email or password",
		},D0002: {
			type: "Database Error",
			desc: "Cannot Connect to database"
		}
	};
}
ParentError.prototype.constructor = ParentError;

ParentError.prototype.getErrorType = function(error_num){
	return this.error[error_num]["type"];
};

ParentError.prototype.getError = function(error_num){
	return this.error[error_num]["desc"];
};
