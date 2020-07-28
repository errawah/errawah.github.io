"use strict";

//var Model = function(){
function Model() { //class
}
Model.prototype = Object.create(ParentModel.prototype);
Model.prototype.constructor = Model;

Model.prototype.showCard = function (cards, the_element) {
	var the_card = cards[parseInt($(the_element).attr("index"))];
	$(the_element).css("background-image", "url(" + the_card.front() + ")");
	$(the_element).attr("draggable", "true");
	$(the_element).attr("folded", "false");
}

Model.prototype.foldCard = function (cards, the_element) {
	var the_card = cards[parseInt($(the_element).attr("index"))];
	$(the_element).css("background-image", "url(" + the_card.back + ")");
	$(the_element).attr("draggable", "false");
	$(the_element).attr("folded", "true");
}

Model.prototype.gkMoveAndAppend = function (source_path, gk_DropZone, speed, callback1) {
	var gk_DropZonePath = gk_DropZone.path_id;
	$(source_path).animate({
		left: "-10px",
		top: "10px",
	}, speed).animate({
		left: ($(gk_DropZonePath).offset().left - $(source_path).offset().left),
		top: ($(gk_DropZonePath).offset().top - $(source_path).offset().top),
	}, function () {
		$(source_path).detach().appendTo(gk_DropZonePath);
		$($(gk_DropZonePath).children()[0]).css({
			left: "0px",
			top: "0px",
		});

		callback1();

	});
};

Model.prototype.gkMoveAndReplace = function (source_path, gk_DropZone, speed, callback1) {
	var gk_DropZonePath = gk_DropZone.path_id;
	$(source_path).animate({
		"left": "-10px",
		"top": "10px",
	}, speed).animate({
		"left": ($(gk_DropZonePath).offset().left - $(source_path).offset().left),
		"top": ($(gk_DropZonePath).offset().top - $(source_path).offset().top),
	}, function () {
		$(source_path).css({
			"left": "0px",
			"top": "0px",
		});
		$(source_path).replaceWith($gk_DropZonePath);

		callback1();
	});
};

Model.prototype.traverseElement = function (the_element) {
	var target = $(the_element).children();
	while (target.length) {
		target = target.children();
	}
	return target;
};


