      function initMap() {
        var uluru = {lat: 52.948574, lng: -1.169075};
        var uluru2 = {lat: 53.948574, lng: -1.169075};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: uluru2,
          map: map
        });
        var myLatlng2 = new google.maps.LatLng(45.9,-85.6);

var marker3 = new google.maps.Marker({
    position: myLatlng2,
    map: map
});
      }



