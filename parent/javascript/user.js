//Designed by Mr. Keshar Limbu
/*	
This is the place for events. Whenever an event is triggered the Controller is called.

Write all the functions for events here and call the Constructor methods with that function scope
so that the methods of the Controller is put into action.

User/Browser =>(triggers) => Events =>(calls)=> Controller =>(send request to)=> 
Model =>(returns output to)=> Controller =>(instructs)=> View =>(display result) => Browser
*/

"use strict";
$(document).on("ready", function(){
	var gk_PreventPullToRefresh = false;
	var gk_LastTouchY = 0;
	
	var obj_controller = new Controller();
	var clicked; //boolean
	var click_timer; //timeout return
	var tap_counter = 0; //to identify single and double tap
	
	var gk_MouseClicked = false;
	var gk_MouseDblClicked = false;
	
	
	var move_element = {
		mousedown: false,
		start: {
			the_element: "",
			X: "",
			Y: "",
		},
		end: {
			the_element: "",
			X: "",
			Y: "",
		},
		delta: {
			the_element: "",
			X: "",
			Y: "",
		}
	};
	
	$(window).on("load", function(e){
		obj_controller.gk_LoadWindow(e);
	});
	$(window).on("resize", function(e){
		obj_controller.gk_ResizeWindow(e);
	});
	
	$(document).scroll(function(e){
		obj_controller.gk_Scroll(e);
	});
	
	//==Mouse Events=======================	
	document.addEventListener("click", function(e){
		clicked = false;
		click_timer = setTimeout(function(){
			if(!clicked){ 
			//================ single click =======================
				var the_element = e.target;
				gk_MouseClicked = true;
				obj_controller.gk_MouseClicked(e, the_element);
			//=====================================================
			}
		},300);
	});
	document.addEventListener("mouseout", function(e){
		var the_element = e.target;
		obj_controller.gk_MouseOut(e, the_element);
	});
	document.addEventListener("mouseover", function(e){
		var the_element = e.target;
		obj_controller.gk_MouseOver(e, the_element);
	});
	
	document.addEventListener("dblclick", function(e){
		clearTimeout(obj_controller.click_timer);
		clicked = true;
		var the_element = e.target;
		gk_MouseDblClicked = true;
		obj_controller.gk_MouseDblClicked(e, the_element);
	});
	document.addEventListener("mouseup", function(e){
		var the_element = e.target;
		move_element.mousedown = false;
		move_element.end.the_element = the_element;
		move_element.end.X = e.clientX;
		move_element.end.Y = e.clientY;
		obj_controller.gk_MouseUp(e, the_element, move_element);
	});
	document.addEventListener("mousedown", function(e){
		var the_element = e.target;
		move_element.mousedown = true;
		move_element.start.the_element = the_element;
		move_element.start.X = e.clientX;
		move_element.start.Y = e.clientY;
		obj_controller.gk_MouseDown(e, the_element);
	});
	document.addEventListener("mousemove", function(e){
		e.preventDefault();
		var the_element = e.target;		
		var mouse_pos = {
			X: e.clientX,
			Y: e.clientY,
		};
		obj_controller.gk_MouseMove(e, the_element, move_element, mouse_pos);
	});
	
	//===Touch Events======================================
	document.addEventListener("touchstart", function(e) {
		var the_element = e.changedTouches[0].target; 
		obj_controller.gk_MouseOver(the_element);
		move_element.mousedown = true;
		move_element.start.the_element = the_element;
		move_element.start.X = e.changedTouches[0].clientX;
		move_element.start.Y = e.changedTouches[0].clientY;
		
		gk_LastTouchY = move_element.start.Y;
		gk_PreventPullToRefresh = window.pageYOffset == 0;
		
		obj_controller.gk_MouseDown(e, the_element);
	}, {passive: false});
	
	document.addEventListener("touchmove", function(e) {
		var the_element = e.changedTouches[0].target;	
		var touch_pos = {
			X: e.changedTouches[0].clientX,
			Y: e.changedTouches[0].clientY,
		};
		
		var gk_DeltaTouchPosY = touch_pos.Y - gk_LastTouchY;
		gk_LastTouchY = touch_pos.Y;
		
		obj_controller.gk_MouseMove(e, the_element, move_element, touch_pos, gk_PreventPullToRefresh, gk_DeltaTouchPosY);
	}, {passive: false});
	
	document.addEventListener("touchend", function(e) {
		
		var the_element = e.changedTouches[0].target; 
		move_element.mousedown = false;
		move_element.end.X = e.changedTouches[0].clientX;
		move_element.end.Y = e.changedTouches[0].clientY;
		move_element.end.the_element = document.elementFromPoint( move_element.end.X, move_element.end.Y );
		obj_controller.gk_MouseUp(e, the_element, move_element);
		if (the_element == move_element.end.the_element){
			tap_counter = tap_counter + 1;
			var tap_timer = setTimeout(function(){
				if (tap_counter>0){
					if(tap_counter == 1){ 
					//======== single tap ==========================
						if (!gk_MouseClicked){
							obj_controller.gk_MouseClicked(e, the_element);
						}
					//==============================================	
					}else if (tap_counter == 2) { 
					//======= double tap ===========================
						if (!gk_MouseDblClicked){
							obj_controller.gk_MouseDblClicked(e, the_element);
						}
					//==============================================
					}
				}				
				tap_counter = 0;
			}, 200);
		}
	},{passive: false});
			
	document.addEventListener("touchcancel", function(e) {
		//e.preventDefault();
		var the_element = e.changedTouches[0].target;
	}, {passive: false});
	document.addEventListener("touchleave", function(e) {
		//e.preventDefault();
		var the_element = e.changedTouches[0].target;
	}, {passive: false});		
	//====Key Events========================================
	document.addEventListener("keyup", function(e){ // returns key codes. can catch keyevent but cannot retrive key character values
		obj_controller.gk_KeyUp(e);
	});
	
	document.addEventListener("keydown", function(e){
		obj_controller.gk_KeyDown(e);
	});
	
	document.addEventListener("keypress", function(e){ //returns actual character codes to retrieve key character values
		obj_controller.gk_KeyPress(e);
	});
});
