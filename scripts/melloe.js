$(document).ready(function () {
	var products = $('.full-product-wrapper');
	var zoomIcon = $('<i class="fa fa-search zoom-hover-icon"></i>');

	products.on('mouseenter', function () {
		var theProduct = $(this);
		theProduct.prepend(zoomIcon[0]);
		zoomIcon.on('click', function () {
			$(this).parent().find('a.thumbnail-link')[0].click();
		});
		zoomIcon.animate({
			opacity: 0.55,
			top: "+=20",
		}, 300, function () {
			// Animation complete.
		});
	});
	products.on('mouseleave', function () {
		var theProduct = $(this);
		var foundIcon = theProduct.find('i.fa-search');
		foundIcon.offset({ top: theProduct.offset().top + theProduct.width() / 2.9, left: theProduct.offset().left + theProduct.height() / 3.15 });
		foundIcon.css('opacity', '0');
		foundIcon.remove();
	});
});