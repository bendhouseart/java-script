$('.ui.checkbox').checkbox();
console.log("If you're reading this I hope you have a wonderful day");
var tortilla = {
	'white': true, 
	'wheat': false, 
	'spinach': false, 
	'corn': false};
var meat = {
	'carnitas': false,
	'chicken': false, 
	'sofritas': false};
var standards = {
	'beans': true, 
	'cheese': true, 
	'salsa': true, 
	'sour cream': true};
var extras = {
	'guacamole': false,
   	'scrambled-egg': false, 
	'potatoes': false,
	'sun-dried-tomatoes': false,
	'olives': false,
	'sauteed-mushrooms': false,
	'sauteed-onions': false,
	'jalapenos': false};
var details = {
	'name': '',
	'ccNumber': 0000000000000000,
	'cvv': 123,
	'zip': 12345,
	'delivery': false,
	'terms': false,
	'total': 6.00
};
var burrito = {};
var orderList= [];
/* This function will listen to the check boxes and various text
 * input on the page and update the burrito order as changes are made. */
$(document).ready(function() {
	 
	 $('input[type=radio][name=tortilla]').on('change',function(event) {
		 	var select;
		 	select = $(this).attr('value');				
		 	event.preventDefault();
			Object.keys(tortilla).forEach(function(currentKey) {
				tortilla[currentKey] = false;});
	 		tortilla[select] = !tortilla[select];
			console.log(tortilla);
	});
});

		
/* This function monitors meat for the burrito and makes changes
 * as checkboxes are selected and unselected. */
$(document).ready(function() {
	$('input[type=checkbox][name=meat]').on('change', function(event) {
		var select;
		select = $(this).attr('value');
		meat[select] = !meat[select];
		console.log(meat);
	});
});


/* This function monitors selections for standard toppings/ingredients
 * and makes changes as checkboxes are selected/deselected. */
$(document).ready(function() {
	$('input[type=checkbox][name=included-ingredients]').on('change', function(event) {
		var select;
		select = $(this).attr('value');
		standards[select] = !standards[select];
		console.log(standards);
	});
});

/* This function monitos selections for extra toppings and modifies
 * the extra dictionary as checkboxes are selected/deselected. */
$(document).ready(function() {
	$('input[type=checkbox][name=extra-ingredients]').on('change', function(event) {
			var select;
			select = $(this).attr('value');
			extras[select] = !extras[select];
			console.log(extras);
	});
});

/* This function makes a burrito object and adds it to our order list
 */
$(document).ready(function() {
	$('button[type=submit]').on('click', function(event) {
		event.preventDefault();
		var	burrito = { 
			'tortilla': tortilla, 
			'meat': meat, 
			'standards': standards,
		    'extras' : extras,
			'details': details
		};
		summation(extras, details);	
		console.log(burrito);
	});
});

/* This function will add up the total cost of the burrito plus extra
 * ingredients and delivery */
function summation(extras, details) {
	var sum = 6.00;
	Object.keys(extras).forEach(function(currentKey) {
		if (extras[currentKey] === true) {
			sum += 0.50;
		}
	});
	if (details['delivery'] === true) {
		sum += 5.00;
	}
	details['total'] = sum;
};

/* Delivery monitor */
$(document).ready(function() {
	$('input[type=radio][name=delivery').on('change', function() {
		details['delivery'] = !details['delivery'];
		console.log(details);
		});
});

/* Agreement terms monitor */
$(document).ready(function() {
	$('input[type=checkbox][name=terms]').on('change', function() {
		details['terms'] = !details['terms'];
		console.log(details);
	});
});
	

/* Name, credit card number, cvv, and zip code monitor. */
$(document).ready(function() {
	var whichField;
	$('input[type=text]').on('change', function() {
		whichField = $(this).attr('name');
		console.log(whichField);
		if (whichField === 'zip') {
			console.log('ping');
			console.log($(this).attr('val')); 
		}

	});
	console.log(whichField);
	/* now that we know which field has been entered we 
	 * will apply a filter/validation to the input to each 
	 * field in turn. */
	});
	

/* This function checks the name and credit card info 
 * for our user and is called once the submit button is pressed */


