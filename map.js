function initMap() {
        var onefivethree = {lat: 52.948574, lng: -1.169075};
        var onefiveone = {lat: 52.948674, lng: -1.169075};
        //var Abs1 =   {lat: 52.9513289,  lng: -1.1750136000000566};
        //var Abs2 =   {lat: 52.9558919,  lng: -1.153685600000017};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: onefivethree
        });
        var marker = new google.maps.Marker({
          position: onefivethree,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: onefiveone,
          map: map
        });
      }

//var image = 'Capture4.jpg'

//var AbsMarker = new google.maps.Marker({
//  position: Abs1,
//  map: map,
//  icon: image
//});
//var image2 = 'Capture3.jpg'
//var AbsMarker2 = new google.maps.Marker({
//  position: Abs2,
//  map: map,
//  icon: image2
//});
      }

