(function()
 var headerChange = function(){
	var header = $('site-header'),
				doc  = $(document),
		position = doc.scrollTop();

		change(position);

		$(window).scroll(function(){
				position = doc.scrollTop();
				change(position);
		});

		function change(position){
			if(position > 0){
				header.addClass('has_scrolled');
			} else {
				header.removeClass('has_scrolled')
			}
		}
}

