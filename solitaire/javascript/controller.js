"use strict";

//var Controller = function(obj_model){
function Controller() { //class
	ParentController.call(this);
	var that = this;

	var border_radius = "5px";
	$("*").css("border-radius", border_radius);


	that.cards = [{
		number: "1",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif";
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "2",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif";
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "3",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "4",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "5",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "6",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "7",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "8",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "9",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "10",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "11",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "12",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "13",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "spade",
		colour: "black",
	}, {
		number: "1",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "2",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "3",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "4",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "5",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "6",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "7",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "8",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "9",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "10",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "11",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "12",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "13",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "club",
		colour: "black",
	}, {
		number: "1",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "2",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "3",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "4",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "5",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "6",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "7",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "8",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "9",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "10",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "11",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "12",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "13",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "diamond",
		colour: "red",
	}, {
		number: "1",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "2",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "3",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "4",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "5",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "6",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "7",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "8",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "9",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "10",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "11",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "12",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}, {
		number: "13",
		id: function () {
			return this.category + "_" + this.number;
		},
		front: function () {
			return "picture/regular//" + this.category + "_" + this.number + ".gif"
		},
		back: "picture/regular//back.gif",
		category: "heart",
		colour: "red",
	}];
	this.cards = this.obj_model.suffleArray(this.cards);
	for (var i = 0; i < this.cards.length; i++) {
		// for (var i = 0; i < 30; i++) { //testing purpose
		$("#gk_DeckID").append('<div id="' + this.cards[i].id() + '" index="' + i + '" category="' + this.cards[i].category + '" number="' + this.cards[i].number + '" colour="' + this.cards[i].colour + '" class="cls_card" selectable="true" folded="true" draggable="false">&nbsp;</div>');

		$("#" + this.cards[i].id()).css({
			"position": "absolute",
			"background-image": "url(" + this.cards[i].back + ")",
			"background-repeat": "no-repeat",
			"background-size": "contain",
			"background-position": "top left",
		});
	}

	this.busy = true;
	that.speed = 150;
	var gk_Pos = new Array();
	var gk_Offset = new Array();
	for (i = 0; i < 7; i++) {
		gk_Pos[i] = $("#id_col" + (i + 1)).position();
		gk_Offset[i] = $("#id_col" + (i + 1)).offset();
	}
	gk_Pos[7] = $("#gk_DealID").position();
	gk_Offset[7] = $("#gk_DealID").offset();
	$("#gk_DeckID").children().last().animate({//1
		"margin-top": (gk_Offset[0].top) + "px",
		"margin-left": (gk_Offset[0].left) + "px",
	}, that.speed, function () {
		$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
		$("#id_col1").append($("#gk_DeckID").children().last());
		that.obj_model.showCard(that.cards, $("#id_col1").children().last());
		$("#gk_DeckID").children().last().animate({//2
			"margin-top": (gk_Offset[1].top) + "px",
			"margin-left": (gk_Offset[1].left) + "px",
		}, that.speed, function () {
			$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
			$("#id_col2").append($("#gk_DeckID").children().last());
			$("#gk_DeckID").children().last().animate({
				"margin-top": (gk_Offset[1].top) + "px",
				"margin-left": (gk_Offset[1].left) + "px",
			}, that.speed, function () {
				$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
				$($("#id_col2").children()[0]).append($("#gk_DeckID").children().last());
				//$("#gk_DeckID").children().last().animate({
				//	"margin-top": (gk_Pos[1] + gk_Offset[1]) + "px",
				//},that.speed, function(){
				//$("#gk_DeckID").children().last().css({"margin-top":"0", "margin-left":"0"});
				//$($($("#id_col2").children()[0]).children()[0]).append( $("#gk_DeckID").children().last() );
				that.obj_model.showCard(that.cards, $("#id_col2").children().last().children().last());
				$("#gk_DeckID").children().last().animate({//3
					"margin-top": (gk_Offset[2].top) + "px",
					"margin-left": (gk_Offset[2].left) + "px",
				}, that.speed, function () {
					$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
					$("#id_col3").append($("#gk_DeckID").children().last());
					$("#gk_DeckID").children().last().animate({
						"margin-top": (gk_Offset[2].top) + "px",
						"margin-left": (gk_Offset[2].left) + "px",
					}, that.speed, function () {
						$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
						$($("#id_col3").children()[0]).append($("#gk_DeckID").children().last());
						$("#gk_DeckID").children().last().animate({
							"margin-top": (gk_Offset[2].top) + "px",
							"margin-left": (gk_Offset[2].left) + "px",
						}, that.speed, function () {
							$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
							$($($("#id_col3").children()[0]).children()[0]).append($("#gk_DeckID").children().last());
							//$("#gk_DeckID").children().last().animate({
							//	"margin-top":"300px",
							//},that.speed, function(){
							//$("#gk_DeckID").children().last().css({"margin-top":"0", "margin-left":"0"});
							//$($($($("#id_col3").children()[0]).children()[0]).children()[0]).append( $("#gk_DeckID").children().last() );
							that.obj_model.showCard(that.cards, $("#id_col3").children().last().children().last().children().last());
							$("#gk_DeckID").children().last().animate({//4
								"margin-top": (gk_Offset[3].top) + "px",
								"margin-left": (gk_Offset[3].left) + "px",
							}, that.speed, function () {
								$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
								$("#id_col4").append($("#gk_DeckID").children().last());
								$("#gk_DeckID").children().last().animate({
									"margin-top": (gk_Offset[3].top) + "px",
									"margin-left": (gk_Offset[3].left) + "px",
								}, that.speed, function () {
									$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
									$($("#id_col4").children()[0]).append($("#gk_DeckID").children().last());
									$("#gk_DeckID").children().last().animate({
										"margin-top": (gk_Offset[3].top) + "px",
										"margin-left": (gk_Offset[3].left) + "px",
									}, that.speed, function () {
										$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
										$($($("#id_col4").children()[0]).children()[0]).append($("#gk_DeckID").children().last());
										$("#gk_DeckID").children().last().animate({
											"margin-top": (gk_Offset[3].top) + "px",
											"margin-left": (gk_Offset[3].left) + "px",
										}, that.speed, function () {
											$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
											$($($($("#id_col4").children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
											//$("#gk_DeckID").children().last().animate({
											//	"margin-top":"300px",
											//},that.speed, function(){
											//	$("#gk_DeckID").children().last().css({"margin-top":"0", "margin-left":"0"});
											//	$($($($($("#id_col4").children()[0]).children()[0]).children()[0]).children()[0]).append( $("#gk_DeckID").children().last() );
											that.obj_model.showCard(that.cards, $("#id_col4").children().last().children().last().children().last().children().last());
											$("#gk_DeckID").children().last().animate({//5
												"margin-top": (gk_Offset[4].top) + "px",
												"margin-left": (gk_Offset[4].left) + "px",
											}, that.speed, function () {
												$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
												$("#id_col5").append($("#gk_DeckID").children().last());
												$("#gk_DeckID").children().last().animate({
													"margin-top": (gk_Offset[4].top) + "px",
													"margin-left": (gk_Offset[4].left) + "px",
												}, that.speed, function () {
													$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
													$($("#id_col5").children()[0]).append($("#gk_DeckID").children().last());
													$("#gk_DeckID").children().last().animate({
														"margin-top": (gk_Offset[4].top) + "px",
														"margin-left": (gk_Offset[4].left) + "px",
													}, that.speed, function () {
														$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
														$($($("#id_col5").children()[0]).children()[0]).append($("#gk_DeckID").children().last());
														$("#gk_DeckID").children().last().animate({
															"margin-top": (gk_Offset[4].top) + "px",
															"margin-left": (gk_Offset[4].left) + "px",
														}, that.speed, function () {
															$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
															$($($($("#id_col5").children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
															$("#gk_DeckID").children().last().animate({
																"margin-top": (gk_Offset[4].top) + "px",
																"margin-left": (gk_Offset[4].left) + "px",
															}, that.speed, function () {
																$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																$($($($($("#id_col5").children()[0]).children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																//$("#gk_DeckID").children().last().animate({
																//	"margin-top": (gk_Offset[4].top) + "px",
																//	"margin-left": (gk_Offset[4].left) + "px",
																//},that.speed, function(){
																//	$("#gk_DeckID").children().last().css({"margin-top":"0", "margin-left":"0"});
																//	$($($($($($("#id_col5").children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).append( $("#gk_DeckID").children().last() );
																that.obj_model.showCard(that.cards, $("#id_col5").children().last().children().last().children().last().children().last().children().last());
																$("#gk_DeckID").children().last().animate({//6
																	"margin-top": (gk_Offset[5].top) + "px",
																	"margin-left": (gk_Offset[5].left) + "px",
																}, that.speed, function () {
																	$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																	$("#id_col6").append($("#gk_DeckID").children().last());
																	$("#gk_DeckID").children().last().animate({
																		"margin-top": (gk_Offset[5].top) + "px",
																		"margin-left": (gk_Offset[5].left) + "px",
																	}, that.speed, function () {
																		$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																		$($("#id_col6").children()[0]).append($("#gk_DeckID").children().last());
																		$("#gk_DeckID").children().last().animate({
																			"margin-top": (gk_Offset[5].top) + "px",
																			"margin-left": (gk_Offset[5].left) + "px",
																		}, that.speed, function () {
																			$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																			$($($("#id_col6").children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																			$("#gk_DeckID").children().last().animate({
																				"margin-top": (gk_Offset[5].top) + "px",
																				"margin-left": (gk_Offset[5].left) + "px",
																			}, that.speed, function () {
																				$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																				$($($($("#id_col6").children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																				$("#gk_DeckID").children().last().animate({
																					"margin-top": (gk_Offset[5].top) + "px",
																					"margin-left": (gk_Offset[5].left) + "px",
																				}, that.speed, function () {
																					$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																					$($($($($("#id_col6").children()[0]).children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																					$("#gk_DeckID").children().last().animate({
																						"margin-top": (gk_Offset[5].top) + "px",
																						"margin-left": (gk_Offset[5].left) + "px",
																					}, that.speed, function () {
																						$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																						$($($($($($("#id_col6").children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																						//$("#gk_DeckID").children().last().animate({
																						//	"margin-top":"300px",
																						//},that.speed, function(){
																						//	$("#gk_DeckID").children().last().css({"margin-top":"0", "margin-left":"0"});
																						//	$($($($($($($("#id_col6").children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).append( $("#gk_DeckID").children().last() );
																						that.obj_model.showCard(that.cards, $("#id_col6").children().last().children().last().children().last().children().last().children().last().children().last());
																						$("#gk_DeckID").children().last().animate({//7
																							"margin-top": (gk_Offset[6].top) + "px",
																							"margin-left": (gk_Offset[6].left) + "px",
																						}, that.speed, function () {
																							$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																							$("#id_col7").append($("#gk_DeckID").children().last());
																							$("#gk_DeckID").children().last().animate({
																								"margin-top": (gk_Offset[6].top) + "px",
																								"margin-left": (gk_Offset[6].left) + "px",
																							}, that.speed, function () {
																								$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																								$($("#id_col7").children()[0]).append($("#gk_DeckID").children().last());
																								$("#gk_DeckID").children().last().animate({
																									"margin-top": (gk_Offset[6].top) + "px",
																									"margin-left": (gk_Offset[6].left) + "px",
																								}, that.speed, function () {
																									$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																									$($($("#id_col7").children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																									$("#gk_DeckID").children().last().animate({
																										"margin-top": (gk_Offset[6].top) + "px",
																										"margin-left": (gk_Offset[6].left) + "px",
																									}, that.speed, function () {
																										$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																										$($($($("#id_col7").children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																										$("#gk_DeckID").children().last().animate({
																											"margin-top": (gk_Offset[6].top) + "px",
																											"margin-left": (gk_Offset[6].left) + "px",
																										}, that.speed, function () {
																											$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																											$($($($($("#id_col7").children()[0]).children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																											$("#gk_DeckID").children().last().animate({
																												"margin-top": (gk_Offset[6].top) + "px",
																												"margin-left": (gk_Offset[6].left) + "px",
																											}, that.speed, function () {
																												$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																												$($($($($($("#id_col7").children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																												$("#gk_DeckID").children().last().animate({
																													"margin-top": (gk_Offset[6].top) + "px",
																													"margin-left": (gk_Offset[6].left) + "px",
																												}, that.speed, function () {
																													$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																													$($($($($($($("#id_col7").children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).children()[0]).append($("#gk_DeckID").children().last());
																													that.obj_model.showCard(that.cards, $("#id_col7").children().last().children().last().children().last().children().last().children().last().children().last().children().last());

																													$("#gk_DeckID").children().last().animate({//last card
																														"margin-top": (gk_Offset[7].top) + "px",
																														"margin-left": (gk_Offset[7].left) + "px",
																													}, that.speed, function () {
																														$("#gk_DeckID").children().last().css({ "margin-top": "0", "margin-left": "0" });
																														$("#gk_DealID").append($("#gk_DeckID").children().last());
																														that.obj_model.showCard(that.cards, $("#gk_DealID").children().last());
																														that.busy = false;

																													});

																												});
																											});
																										});
																									});
																								});
																							});
																						});
																						//});
																					});
																				});
																			});
																		});
																	});
																});
																//});
															});
														});
													});
												});
											});
											//});
										});
									});
								});
							});
							//});
						});
					});
				});
				//});
			});
		});
	});
}

Controller.prototype = Object.create(ParentController.prototype);
Controller.prototype.constructor = Controller;


Controller.prototype.gk_MouseClicked = function (e, the_element) {
	var that = this;
	if (!that.busy) {
		var speed = 150;
		var id = $(the_element).attr("id");
		var parent_element = $(the_element).parent()[0];
		var parent_id = $(parent_element).attr("id");
		if (id == "gk_Suffle") {
			location.reload();
		} else if (id == "gk_Help") {
			window.open("help.html", "_blank");
		} else if (id == "gk_Test") {
			$("#gk_Slot1ID").append();
		}

		if (parent_id == "gk_DeckID") {
			that.busy = true;
			var gk_Deal_Id = "#gk_DealID";
			var gk_Deck_Element = the_element;
			var gk_Deal_Element = $(gk_Deal_Id);
			that.obj_model.foldCard(that.cards, $(gk_Deal_Element).children()[0]);
			var deck_offset = $(gk_Deck_Element).offset().left;
			var deal_offset = $(gk_Deal_Element).children().offset().left;
			$($(gk_Deal_Element).children()).animate({
				left: deck_offset - deal_offset,
			}, function () {
				$($(gk_Deal_Element).children()[0]).detach().prependTo($(parent_element)).css({ "left": "0px" });
				$(gk_Deck_Element).animate({
					right: deck_offset - deal_offset,
				}, function () {
					$(gk_Deck_Element).detach().appendTo($(gk_Deal_Element)).css({ "left": "0px" });
					that.obj_model.showCard(that.cards, $(gk_Deal_Element).children().last());
					that.busy = false;
				});
			});
		}
	}
};

Controller.prototype.gk_MouseDown = function (e, the_element) {
	var that = this;
	if (!that.busy) {
		//********** Parent Setting **********
		if ($(the_element).attr("draggable") == "true") { //dragable looks like reserved so use draggable
			$("BODY").append("<div id='gk_DragID'></div>");
			$("#gk_DragID").css("display", "none");

			$(the_element).clone().appendTo($("#gk_DragID"));

		}
		//********** End of Parent Setting **********
	}

};
Controller.prototype.gk_MouseUp = function (e, the_element, move_element) {
	var that = this;
	if (!that.busy) {
		//********** Parent Setting **********
		this.gk_Id = this.obj_model.getFullId(the_element);
		$("#gk_DragID").remove();
		$(parent.document.body).find("#gk_DragID").remove();


		//********** End of Parent Setting **********

		var drag = {
			the_element: move_element.start.the_element,
			id: move_element.start.the_element.id,
			path_id: this.obj_model.getFullId(move_element.start.the_element),
			parent_id: $($(move_element.start.the_element).parent()).attr("id"),
			category: $(move_element.start.the_element).attr("category"),
			colour: $(move_element.start.the_element).attr("colour"),
			number: $(move_element.start.the_element).attr("number"),
		};
		var drop = {
			the_element: move_element.end.the_element,
			id: move_element.end.the_element.id,
			path_id: this.obj_model.getFullId(move_element.end.the_element),
			parent_id: $($(move_element.end.the_element).parent()).attr("id"),
			category: $(move_element.end.the_element).attr("category"),
			colour: $(move_element.end.the_element).attr("colour"),
			number: $(move_element.end.the_element).attr("number"),
		};
		if (drag.id == "" || drop.id == "") {
			console.log(drag.id);
			console.log(drop.id);
			// console.log("Drag or Drop undefined");
		} else {
			if (drag.id != drop.id) {
				let valid_drop_number = parseInt(drop.number) + 1;
				let valid_drag_number = parseInt(drag.number);
				let valid_colors = ["red", "black"];
				let valid_types = ["spade", "club", "heart", "diamond"];

				if ($(drop.the_element).parents("#id_block3").length > 0) {
					if (drop.id == "id_col1" || drop.id == "id_col2" || drop.id == "id_col3" || drop.id == "id_col4" || drop.id == "id_col5" || drop.id == "id_col6" || drop.id == "id_col7") {
						if (drag.number == "13") {
							if ($(drag.the_element).parents("#id_block3").length > 0) {
								if (drag.parent_id != "id_col1" && drag.parent_id != "id_col2" && drag.parent_id != "id_col3" && drag.parent_id != "id_col4" && drag.parent_id != "id_col5" && drag.parent_id != "id_col6" && drag.parent_id != "id_col7") {
									var temp = $(drag.the_element).parent();
									this.obj_model.showCard(this.cards, temp);
								}
							} else {
								this.obj_model.showCard(this.cards, $("#gk_DeckID").children().last());
								$("#gk_DealID").append($("#gk_DeckID").children().last());
							}
							$(drag.the_element).appendTo($(drop.path_id));
						}
					}
					if (drop.colour != drag.colour) {
						// console.log(drop.number + " = " + drag.number);
						if (drop.number == undefined) {
							if (drop.id == "id_col1" || drop.id == "id_col2" || drop.id == "id_col3" || drop.id == "id_col4" || drop.id == "id_col5" || drop.id == "id_col6" || drop.id == "id_col7") {
								if (drag.number == 13) {

								} else {
									alert("Invalid move. You are only allowed to move King Card here.");
								}
							}
						} else {
							if (parseInt(drag.number) == (parseInt(drop.number) - 1)) {
								if ($(drag.the_element).parents("#id_block3").length > 0) {
									if (drag.parent_id != "id_col1" && drag.parent_id != "id_col2" && drag.parent_id != "id_col3" && drag.parent_id != "id_col4" && drag.parent_id != "id_col5" && drag.parent_id != "id_col6" && drag.parent_id != "id_col7") {
										var temp = $(drag.the_element).parent();
										this.obj_model.showCard(this.cards, temp);
									}
								} else if ($(drag.the_element).parents("#id_block1").length > 0) {
									this.obj_model.showCard(this.cards, $("#gk_DeckID").children().last());
									$("#gk_DealID").append($("#gk_DeckID").children().last());
								}
								$(drag.the_element).appendTo($(drop.path_id));
								$($(drop.path_id).children()[0]).css({ "top": "25px" });
							} else {
								let invalidCardColor = card_color => card_color != drop.colour;
								let filteredCardColor = valid_colors.filter(invalidCardColor);
								alert("Invalid move. You are only allowed to move card " + (valid_drop_number - 2) + " of " + filteredCardColor + " colour here. Please the game rules properly.");
							}
						}
					} else {
						let invalidCardColor = card_color => card_color != drop.colour;
						let filteredCardColor = valid_colors.filter(invalidCardColor);
						alert("Invalid move. You are only allowed to move card " + (valid_drop_number - 2) + " of " + filteredCardColor + " colour here. Please the game rules properly.");
					}
				} else if (drop.parent_id == "gk_DeckID") {
					alert("Invalid move. You are not allowed to drop cards here. You can click here to deal a new card.");
				} else if (drop.parent_id == "gk_DealID") {
					alert("Invalid move. You are not allowed to drop cards here.");
				} else {
					if (drop.category == drag.category) {
						if (valid_drag_number == valid_drop_number) {
							if (drag.parent_id != "id_col1" && drag.parent_id != "id_col2" && drag.parent_id != "id_col3" && drag.parent_id != "id_col4" && drag.parent_id != "id_col5" && drag.parent_id != "id_col6" && drag.parent_id != "id_col7" && drag.parent_id != "gk_DealID") {
								var temp = $(drag.the_element).parent();
								this.obj_model.showCard(this.cards, temp);
							} else {
								if ($("#gk_DeckID").is(':empty')) {
									this.Winner();
								} else {
									this.obj_model.showCard(this.cards, $("#gk_DeckID").children().last());
									$("#gk_DealID").append($("#gk_DeckID").children().last());
								}
							}
							$(drag.the_element).attr("draggable", "false");
							$(drag.the_element).appendTo(drop.path_id);
							$($(drop.path_id).children()[0]).css({ "top": "0px" });
						} else {
							alert("Invalid card. You are only allowed to drop \"" + drop.category + valid_drop_number + "\" card here.")
						}
					} else {
						// Move not allowed and message hidden
						// alert("Invalid category. You are only allowed to drop \"" + drag.id + "\" cards here.");
					}
				}
			}
		}
	}
};


Controller.prototype.gk_MouseDblClicked = function (e, the_element) {
	var that = this;
	if (!that.busy) {
		var gk_SourceZone = {
			id: the_element.id,
			parent_element: $(the_element).parent(),
			path_id: this.obj_model.getFullId(the_element),
			parent_id: $($(the_element).parent()).attr("id"),
			category: $(the_element).attr("category"),
			colour: $(the_element).attr("colour"),
			number: $(the_element).attr("number"),

		};

		if ($(the_element).parents("#id_block3").length > 0 || $(the_element).parents("#gk_DealID").length > 0) {
			var gk_DropZone1 = {
				the_element: $("#gk_Slot1ID *:not(:has('*'))"),
				id: $("#gk_Slot1ID *:not(:has('*'))").attr("id"),
				category: $("#gk_Slot1ID *:not(:has('*'))").attr("category"),
				number: $("#gk_Slot1ID *:not(:has('*'))").attr("number"),
				path_id: that.obj_model.getFullId($("#gk_Slot1ID *:not(:has('*'))")),
			};
			var gk_DropZone2 = {
				the_element: $("#gk_Slot2ID *:not(:has('*'))"),
				id: $("#gk_Slot2ID *:not(:has('*'))").attr("id"),
				category: $("#gk_Slot2ID *:not(:has('*'))").attr("category"),
				number: $("#gk_Slot2ID *:not(:has('*'))").attr("number"),
				path_id: that.obj_model.getFullId($("#gk_Slot2ID *:not(:has('*'))")),
			};
			var gk_DropZone3 = {
				the_element: $("#gk_Slot3ID *:not(:has('*'))"),
				id: $("#gk_Slot3ID *:not(:has('*'))").attr("id"),
				category: $("#gk_Slot3ID *:not(:has('*'))").attr("category"),
				number: $("#gk_Slot3ID *:not(:has('*'))").attr("number"),
				path_id: that.obj_model.getFullId($("#gk_Slot3ID *:not(:has('*'))")),
			};
			var gk_DropZone4 = {
				the_element: $("#gk_Slot4ID *:not(:has('*'))"),
				id: $("#gk_Slot4ID *:not(:has('*'))").attr("id"),
				category: $("#gk_Slot4ID *:not(:has('*'))").attr("category"),
				number: $("#gk_Slot4ID *:not(:has('*'))").attr("number"),
				path_id: that.obj_model.getFullId("#gk_Slot4ID *:not(:has('*'))"),
			};

			var block1 = false;
			if ($(the_element).parents("#id_block1").length > 0) {
				block1 = true;
			}

			if (gk_SourceZone.category == gk_DropZone1.category && (gk_SourceZone.number == (parseInt(gk_DropZone1.number) + 1))) {
				$(gk_SourceZone.path_id).attr("draggable", "false");
				that.obj_model.gkMoveAndAppend(gk_SourceZone.path_id, gk_DropZone1, 50, callback1);
			} else if (gk_SourceZone.category == gk_DropZone2.category && (gk_SourceZone.number == (parseInt(gk_DropZone2.number) + 1))) {
				$(gk_SourceZone.path_id).attr("draggable", "false");
				that.obj_model.gkMoveAndAppend(gk_SourceZone.path_id, gk_DropZone2, 50, callback1);
			} else if (gk_SourceZone.category == gk_DropZone3.category && (gk_SourceZone.number == (parseInt(gk_DropZone3.number) + 1))) {
				$(gk_SourceZone.path_id).attr("draggable", "false");
				that.obj_model.gkMoveAndAppend(gk_SourceZone.path_id, gk_DropZone3, 50, callback1);
			} else if (gk_SourceZone.category == gk_DropZone4.category && (gk_SourceZone.number == (parseInt(gk_DropZone4.number) + 1))) {
				$(gk_SourceZone.path_id).attr("draggable", "false");
				that.obj_model.gkMoveAndAppend(gk_SourceZone.path_id, gk_DropZone4, 50, callback1);
			}
		}

		function callback1() {
			if ($("#gk_DeckID").is(':empty')) {
				that.Winner();
			} else {
				if (gk_SourceZone.parent_id != "id_col1" && gk_SourceZone.parent_id != "id_col2" && gk_SourceZone.parent_id != "id_col3" && gk_SourceZone.parent_id != "id_col4" && gk_SourceZone.parent_id != "id_col5" && gk_SourceZone.parent_id != "id_col6" && gk_SourceZone.parent_id != "id_col7" && gk_SourceZone.parent_id != "gk_DealID") {
					that.obj_model.showCard(that.cards, gk_SourceZone.parent_element);
				}
				if (block1) {
					that.obj_model.showCard(that.cards, $("#gk_DeckID").children().last());
					$("#gk_DealID").append($("#gk_DeckID").children().last());
				}
			}
		}
	}
};


Controller.prototype.Winner = function () {
	alert("Congratulation. You are a Winner");
};

Controller.prototype.gk_MouseMove = function (e, the_element, move_element, cur_pos, gk_PreventPullToRefresh, gk_DeltaTouchPosY) {
	var that = this;
	if (!that.busy) {
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

		if ($(the_element).attr("class") == "cls_card") {
			e.preventDefault();
		}
	}

};
