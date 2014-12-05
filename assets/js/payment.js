$(function () {

	$(".number").on("input", function() {
		var creditCardNumber = $(this).val();
		creditCardNumber = creditCardNumber.replace(/[^\d]+/g, "");
		creditCardNumber = creditCardNumber.match(/.{1,4}/g);
		creditCardNumber = creditCardNumber ? creditCardNumber.join(" - ") : "";
		$(this).val(creditCardNumber);
	});

	$(".expires").on("input", function() {
		var expires = $(this).val();
		expires = expires.replace(/[^\d]+/g, "");
		expires = expires.match(/.{1,2}/g);
		expires = expires ? expires.join(" / ") : "";
		$(this).val(expires);
	});

	$(".company").on("input", function() {
		var expires = $(this).val();
		if (expires.length > 0)
			$(".hidden").show();
		else
			$(".hidden").hide();
	});
	
});