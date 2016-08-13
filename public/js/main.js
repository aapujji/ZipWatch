// ZipWatch
// Written by: Aanandita Pujji

// Stores all JSON objects in variables
var majcrimeCurr = '../JSON/majorcrimeCurr.json';
var majcrimePred = '../JSON/majorcrimePred.json';
var mincrimeCurr = '../JSON/minorcrimeCurr.json';
var mincrimePred = '../JSON/minorcrimePred.json';
var rate = '../JSON/rate.json';
var cityname = '../JSON/cityname.json';
var recommend = '../JSON/recommend.json';

// Defines necessary variables
var zip = getVal('zipcode');
var curr;
var pred;
var zipRate;
var r1 = ''; var r2 = ''; var r3 = '';
var c1 = ''; var c2 = ''; var c3 = '';


// Retrieves the zipcode entered into the form input on the home page
$(document).ready(function() {
	var zip = getVal('zipcode');
	document.getElementById('zipcode').innerHTML = zip;
});

function getVal(name, url) {
	if (!url) url = window.location.href;
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
};


// Adds smooth scrolling to sub-navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
    	e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html,body').stop().animate({
         	'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
        	window.location.has = target;
        });
    });

    $(window).scroll(function() {
    	console.log($(window).scrollTop());
        if ($(window).scrollTop() > 50) {
        	$('#sub-nav').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 51) {
        	$('#sub-nav').removeClass('navbar-fixed');
        }
    })
});


// Populates the rating gauge using the rating JSON object
$(document).ready(function() {
	$.getJSON(rate, function(data) {
        $.each(data,function() {
            if (this.zipcode == zip) {
            	zipRate = this.rate;
            };
        });

        var r = new JustGage({
            id: "rating",
            value: zipRate,
            min: 0,
            max: 5,    						
            relativeGaugeSize: true,
            customSectors: [{
            	color: "#F27399",
            	lo: 0,
            	hi: 5
        	}]
    	});
    });
});

// Populates the major crime bar graph using the majorCrimeCurr and majorCrimePred JSON objects
$(document).ready(function() {
	$.getJSON(majcrimeCurr, function(data) {
		$.each(data,function() {
			if (this.zipcode == zip) {
				curr = Math.round(this.current);
			};
		});

		$.getJSON(majcrimePred, function(data) {
			$.each(data,function() {
				if (this.zipcode == zip) {
				pred = Math.round(this.predict);
			};
		});

		var data = {
			"labels": ["2016", "2020"],
			"datasets": [{
				label: "Major Crime",
				fillColor: "rgba(242,115,153,1.0)",
				strokeColor: "rgba(242,115,153,0.8)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [curr, pred]
			}
		]
	}

	if (curr > pred) {
		var start = Math.round((pred - 500)/10)*10;
	}
	else {
		start = Math.round((curr - 500)/10)*10;
	}

	var options = {
		scaleOverride: true,
	        scaleSteps: 10,
	        scaleStartValue: 0,
		    scaleStepWidth: 200,
		    tooltipTemplate: "<%%=value%>",
		    responsive: true,
		    maintainAspectRatio: true,
	    scales: {
	        yAxes: [{
	            scaleLabel: {
	                labelString: 'Number of Crimes'
	            }
	        }]
	    }
	}

	var myBar = new Chart(document.getElementById("maj-chart").getContext("2d")).Bar(data,options);
		});
	});
});


// Populates the minor crime bar graph using the minorCrimeCurr and minorCrimePred JSON objects
$(document).ready(function() {
	$.getJSON(mincrimeCurr, function(data) {
		$.each(data,function() {
			if (this.zipcode == zip) {
				curr = Math.round(this.current);
			};
		});

		$.getJSON(mincrimePred, function(data) {
			$.each(data,function() {
				if (this.zipcode == zip) {
					pred = Math.round(this.predict);
				};
			});

			var data = {
			"labels": ["2016", "2020"],
			"datasets": [{
				label: "Minor Crime",
				fillColor: "rgba(242,115,153,1.0)",
				strokeColor: "rgba(242,115,153,0.8)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [curr, pred]
				}
			]
		}

		if (curr > pred) {
			var start = Math.round((pred - 500)/10)*10;
		}
		else {
			start = Math.round((curr - 500)/10)*10;
		}

		var options = {
			scaleOverride: true,
	    	    scaleSteps: 10,
	    	    scaleStartValue: 0,
			    scaleStepWidth: 200,
			    tooltipTemplate: "<%%=value%>",
			    responsive: true,
		  	 	maintainAspectRatio: true
		}

		var myBar = new Chart(document.getElementById("min-chart").getContext("2d")).Bar(data,options);
		});
	});
});


// Populates the recommendations using the recommend JSON object
$(document).ready(function() {
    var r1 = ''; var r2 = ''; var r3 = '';
    var c1 = ''; var c2 = ''; var c3 = '';

    $.getJSON(recommend, function(data) {
        $.each(data,function() {
            if (this.zipcode == zip) {
                r1 = this.rec1;
                r2 = this.rec2;
                r3 = this.rec3;
            };
        });

        $.getJSON(cityname, function(data) {
            $.each(data,function() {
                if (this.zipcode == r1) {
                    c1 += this.city;
                }
                if (this.zipcode == r2) {
                    c2 += this.city;
                }
                if (this.zipcode == r3) {
                    c3 += this.city;
                }
            });
            
            var link1 = '<a href="http://www.zipwatch.net/search?zipcode=' + r1 + '"><h2>' + c1 + '</h2><h3>' + r1 + '</h3></a>';
            var link2 = '<a href="http://www.zipwatch.net/search?zipcode=' + r2 + '"><h2>' + c2 + '</h2><h3>' + r2 + '</h3></a>';
            var link3 = '<a href="http://www.zipwatch.net/search?zipcode=' + r3 + '"><h2>' + c3 + '</h2><h3>' + r3 + '</h3></a>';

            $('#recs-container #recs').append(link1);
            $('#recs-container #recs').append(link2);
            $('#recs-container #recs').append(link3);

        });
    });
});


// Populates the major crime info block - displays the values in the bar graph and determines if crime increases or decreases
$(document).ready(function() {
	$.getJSON(majcrimeCurr, function(data) {
        $.each(data,function() {
            if (this.zipcode == zip) {
                curr = Math.round(this.current);
            };
        });

        $('#maj-container #maj-info #curr').append(curr);

        $.getJSON(majcrimePred, function(data) {
            $.each(data,function() {
                if (this.zipcode == zip) {
                    pred = Math.round(this.predict);
                };
            });

            $('#maj-container #maj-info #pred').append(pred);

            var change = '';
            if (curr > pred)
                change += 'decrease';
            else if (curr < pred) {
                change += 'increase';
            }

            $('#maj-container #maj-info #change').append(change);

        });
    });
});


// Populates the minor crime info block - displays the values in the bar graph and determines if crime increases or decreases
$(document).ready(function() {
    $.getJSON(mincrimeCurr, function(data) {
	    $.each(data,function() {
	        if (this.zipcode == zip) {
	            curr = Math.round(this.current);
	        };
	    });

	    $('#min-container #min-info #curr').append(curr);

	    $.getJSON(mincrimePred, function(data) {
	        $.each(data,function() {
	            if (this.zipcode == zip) {
	                pred = Math.round(this.predict);
	            };
	        });

	        $('#min-container #min-info #pred').append(pred);

	        var change = '';
	        if (curr > pred)
	            change += 'decrease';
	        else if (curr < pred) {
	            change += 'increase';
	        }

	        $('#min-container #min-info #change').append(change);

	    });
	});
});