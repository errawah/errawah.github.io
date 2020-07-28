"use strict";

//var Model = function(){
function Model() { //class
};
Model.prototype = Object.create(ParentModel.prototype);
Model.prototype.constructor = Model;

//Model.prototype.functionName = function(){} - sample

Model.prototype.viewFullscreen = function () {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
};


