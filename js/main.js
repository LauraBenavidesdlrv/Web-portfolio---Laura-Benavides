(function($) {
	// For .art
		var $art = $('.art > article');

		$art.each(function() {

			var $this = $(this),
				$image = $this.find('.image'), $img = $image.find('img'),
				$link = $this.find('.link');

			// For .image (articles)
				$this.css('background-image', 'url(' + $img.attr('src') + ')');
				// Hide 
					$image.hide();

			//For .Link
				if ($link.length > 0) {
					$x = $link.clone()
						.text('')
						.appendTo($this);
					$link = $link.add($x);
				}
		});
})(jQuery);