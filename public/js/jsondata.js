var ziplistData = [];

$(document).ready(function() {
	populateTable();
});

function populateTable() {
	var zip = getVal('zipcode');
	var cityname = '../JSON/cityname.json';

	var c = '';
	var z = '';

	$.getJSON(cityname, function(data) {
		$.each(data,function() {
			if (this.zipcode == zip) {
				c += this.city + ', NY';
				z += this.zipcode;
			}

		});

		$('#page-info #city-name').html(c);
		$('#page-info #zipcode').html(z);
	});
	
};