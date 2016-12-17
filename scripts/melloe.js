$(document).ready(function () {

	var addToCartButtons = $('.add-to-cart-button');
	if (addToCartButtons.length > 0) {

		var cartCounter = $('#cart-counter');
		addToCartButtons.on('click', function () {
			var currentCount = cartCounter.text();
			var updatedCartCount = parseInt(currentCount) + 1;
			cartCounter.text(updatedCartCount);

			// Sending the data to the server
			var productId = $(this).data('product-id');
			var currentCartCount = parseInt(currentCount) + 1;

			var request = $.ajax({
				url: "http://localhost/cart.php",
				type: "POST",
				data: { productId: productId, cartCount: updatedCartCount },
				dataType: "html"
			});

			request.done(function (msg) {
				console.log('The request to the server was successful!');
			});

			request.fail(function (jqXHR, textStatus) {
				console.log('The request to the server failed!');
			});
		})
	}

	if(window.screen.width > 991){
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
	}
});