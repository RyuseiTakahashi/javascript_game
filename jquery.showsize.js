;(function($){
	$.fn.showsize=function(options){
		//３つのimg
		//console.log(this);
		var elements = this;
		
		elements.each(function(){
			//console.log(this);	１つのimg
			var opts = $.extend({}, $.fn.showsize.defaults, options, $(this).data());
			$(this).click(function(){
				var msg = $(this).width() + " x " + $(this).height();
				//各要素を構造的に指定HTMLで囲む。
				$(this).wrap("<div style=\"position:relative\"></div>");
				var div = $("<div>")
						.text(msg)
						.css("font-size",opts.size + "px")
						.css({position:"absolute",top:"0",background:"black",color:getRandomColor(),opacity:opts.opacity,padding:"2px"});
						
				$(this).after(div);
			});
		});
		return this;
	};
	function getRandomColor(){
		var colors = ["white", "black", "red", "blue", "green", "yellow"];
		return colors[Math.floor(Math.random() * colors.length)];
	}
	$.fn.showsize.defaults = {
		size:50,
		opacity:1.5
	}
})(jQuery);