document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {

    function displayLatLong(position) {
        $('.lat-view').html(position.coords.latitude);
        $('.long-view').html(position.coords.longitude);
    }

    $('#getIt').click(function() {
        navigator.geolocation.getCurrentPosition(displayLatLong);
    });
    
}