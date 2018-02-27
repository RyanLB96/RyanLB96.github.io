      function initMap() {
        var 153R = {lat: 52.948574, lng: -1.169075};
        var uluru2 = {lat: 52.948674, lng: -1.169075};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: 153R
        });
        var marker = new google.maps.Marker({
          position: 153R,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: uluru2,
          map: map
        });
var image = 'Capture4.jpg'
var AbsMarker = new google.maps.Marker({
  position: {lat: 52.9513289 , lng: -1.1750136000000566},
  map: map,
  icon: image
});
var image = 'Capture3.jpg'
var AbsMarker2 = new google.maps.Marker({
  position: {lat: 52.9558919, lng: -1.153685600000017},
  map: map,
  icon: image
});
      }

