$('.ui.checkbox').checkbox();
console.log("If you're reading this I hope you have a wonderful day");
var tortilla = {
    'white tortilla': true,
    'wheat tortilla': false,
    'spinach tortilla': false,
    'corn tortilla': false
};
var meat = {
    'carnitas': false,
    'chicken': false,
    'sofritas': false
};
var standards = {
    'beans': true,
    'cheese': true,
    'salsa': true,
    'sour cream': true
};
var extras = {
    'guacamole': false,
    'scrambled-egg': false,
    'potatoes': false,
    'sun-dried-tomatoes': false,
    'olives': false,
    'sauteed-mushrooms': false,
    'sauteed-onions': false,
    'jalapenos': false
};
var details = {
    'name': '',
    'credit-card': 0000000000000000,
    'cvv': 123,
    'zip': 12345,
    'delivery': false,
    'terms': false,
    'total': 6.00,
    'fail': true
};
var burrito = {};
var orderList = [];
/* This function will listen to the check boxes and various text
 * input on the page and update the burrito order as changes are made. */
$(document).ready(function () {

    $('input[type=radio][name=tortilla]').on('change', function (event) {
        var select;
        select = $(this).attr('value');
        event.preventDefault();
        Object.keys(tortilla).forEach(function (currentKey) {
            tortilla[currentKey] = false;
        });
        tortilla[select] = !tortilla[select];
        console.log(tortilla);
		// updating the Order Total in window
		orderSummary(tortilla);
    });
});


/* This function monitors meat for the burrito and makes changes
 * as checkboxes are selected and unselected. */
$(document).ready(function () {
    $('input[type=checkbox][name=meat]').on('change', function (event) {
        var select;
        select = $(this).attr('value');
        meat[select] = !meat[select];
        console.log(meat);
		// updating the Order Total in window
		orderSummary(meat);
    });
});


/* This function monitors selections for standard toppings/ingredients
 * and makes changes as checkboxes are selected/deselected. */
$(document).ready(function () {
    $('input[type=checkbox][name=included-ingredients]').on('change', function (event) {
        var select;
        select = $(this).attr('value');
        standards[select] = !standards[select];
        console.log(standards);
		// updating the order total in window
		orderSummary(standards);
    });
});

/* This function monitos selections for extra toppings and modifies
 * the extra dictionary as checkboxes are selected/deselected. */
$(document).ready(function () {
    $('input[type=checkbox][name=extra-ingredients]').on('change', function (event) {
        var select;
        select = $(this).attr('value');
        extras[select] = !extras[select];
        console.log(extras);
		// updating the order total in window
		orderSummary(extras);
    });
});

$(document).ready(function () {
    $('button[type=submit]').hover(function (event) {
        event.preventDefault();
        if ($.inArray(false, proceed) >= 0) {
            $('button[type=submit]').attr("disabled", true);
            console.log("this should only fire once");
        }
        else if ($.inArray(false, proceed) == -1) {
            $('button[type=submit]').removeAttr("disabled");
            console.log("button on conditional firing.");
        }
    })
});
/* This function makes a burrito object and adds it to our order list
 */
$(document).ready(function () {

    $('button[type=submit]').on('click', function (event) {
        event.preventDefault();
        var burrito = {
            'tortilla': tortilla,
            'meat': meat,
            'standards': standards,
            'extras': extras,
            'details': details
        };
        summation(extras, details);
        console.log(burrito);
    });
    console.log(proceed);
    console.log(!proceed.includes(false));

});

/* This function will add up the total cost of the burrito plus extra
 * ingredients and delivery */
function summation(extras, details) {
    var sum = 6.00;
    Object.keys(extras).forEach(function (currentKey) {
        if (extras[currentKey] === true) {
            sum += 0.50;
        }
    });
    if (details['delivery'] === true) {
        sum += 5.00;
    }
    details['total'] = sum;
}
/* Delivery monitor */
$(document).ready(function () {
    $('input[type=radio][name=delivery]').on('change', function () {
        details['delivery'] = !details['delivery'];
        console.log(details);
    });
});

/* Agreement terms monitor */
$(document).ready(function () {
    $('input[type=checkbox][name=terms]').on('change', function () {
        details['terms'] = !details['terms'];
        console.log(details);
    });
});


/* Name, credit card number, cvv, and zip code monitor. */
var proceed = [false, false, false, false];
/* proceed will increment to 4 once all field entries
 have been verified */
$(document).ready(function () {
    var whichField;
    $('input[type=text]').on('change', function () {
        whichField = $(this).attr('name');
        if (whichField === 'zip') {
            var contains5D = $(this).val().replace(/\D/g, '');
            if (/^\d{5}$/.test($(this).val())) {
                console.log($(this).val());
                details['zip'] = contains5D;
                proceed[0] = true;
                $(this).siblings().removeClass('error');
            } else {
                $(this).siblings().addClass('error');
                console.log('you fail zip');
                console.log($(this).siblings()[0]);
                proceed[0] = false;
            }
        }
        if (whichField === 'name') {
            if (/^[\D\s]+$/.test($(this).val())) {
                var containsName = $(this).val();
                console.log($(this).val());
                details['name'] = containsName;
                proceed[1] = true;
                $(this).siblings().removeClass('error');
            } else {
                $(this).siblings().addClass('error');
                console.log('you fail name');
                proceed[1] = false;
            }
        }
        if (whichField === 'credit-card') {
            var containsFD = $(this).val().replace(/\D/g, '');
            if (/^\d{16}$/.test(containsFD)) {
                console.log($(this).val());
				console.log(containsFD);
                details['credit-card'] = containsFD;
                proceed[2] = true;
                $(this).siblings().removeClass('error');
            } else {
                $(this).siblings().addClass('error');
                console.log('you fail credit-card');
                proceed[2] = false;
            }
        }
        else {

        }
        if (whichField === 'cvv') {
            var contains3D = $(this).val().replace(/\D/g, '');
            console.log(contains3D);
            if (/^\d{3}$/.test(contains3D)) {
                console.log(contains3D);
                details['cvv'] = contains3D;
                proceed[3] = true;
                $(this).siblings().removeClass('error');
            } else {
                $(this).siblings().addClass('error');
                console.log('you fail cvv');
                proceed[3] = false;
            }

        } else {
            console.log('oh noes');
        }
        console.log(proceed);
        if ($.inArray(false, proceed) == -1) {
            $('button[type=submit]').removeAttr("disabled");
        }
    });
        });

/* This function adds the current contents of the burrito to the
 abbreviated menu on the top right of the page. It simply reads
 through the tortilla, meat, standards, and extras dictionaries
 and then if those elements are true adds them to the html. */
function orderSummary(burritoSubset) {
	var values = $.map(burritoSubset, function(value, key) {

	 
		return key;					 
	});
	console.log(values);
}
