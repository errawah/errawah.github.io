"use strict";

//var Error = function(){
function Error(){ //class
	ParentError.call(this);
}
Error.prototype = Object.create(ParentError.prototype);
Error.prototype.constructor = Error;




