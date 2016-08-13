/* 
// ZipWatch
// Written by: Aanandita Pujji

CURR_LOCATION.JS
Uses HTML5 Geocode and Google Maps API to retrieve current location for button on landing page
*/

function curr_location() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                console.log('pos', pos);
                var point = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                new google.maps.Geocoder().geocode({'latLng': point}, function (res, status) {
                    if(status == google.maps.GeocoderStatus.OK && typeof res[0] !== 'undefined') {
                        var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                        if(zip) {
                            var curr_zip = '/search?zipcode=' + zip[1];
                            document.location.href=curr_zip;

                        }
                    }
                });
            }, function(err) {
                fail(err.message);
            }
        );
    }

    function fail(err) {
        console.log('err', err);
    };
};