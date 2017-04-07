!function(window) {
	var ele = window.document,
		target = ele.documentElement,
		defWidth = 640,
		defRem = defWidth / 100,
		orient = "orientationchange" in window ? "orientationchange" : "resize",
		adapt = function() {
			var newWidth = target.clientWidth || 320;
			newWidth > 640 && (newWidth = 640), target.style.fontSize = newWidth / defRem + "px"
		};
		
	ele.addEventListener && (window.addEventListener(orient, adapt, !1), ele.addEventListener("DOMContentLoaded", adapt, !1));
}(window);