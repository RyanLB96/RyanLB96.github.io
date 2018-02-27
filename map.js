function initMap() {
        var onefivethree = {lat: 52.948574, lng: -1.169075};
        var onefiveone = {lat: 52.948674, lng: -1.169075};
        var Abs1 =   {lat: 52.9513289,  lng: -1.1750136000000566};
        var Abs2 =   {lat: 52.9558919,  lng: -1.153685600000017};

        var Absimage1 = 'https://drive.google.com/open?id=17NxxtaNZwNtl87yANRRTBMEoXjZiMkOF';
        var Absimage2 = 'https://drive.google.com/open?id=1YtVQYXvFwA4C76WawNBRy2bdKK_KdrkU';


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
        var marker3 = new google.maps.Marker({
          position: Abs1,
          map: map,
          //icon: Absimage1
        });
        var marker4 = new google.maps.Marker({
          position: Abs2,
          map: map,
          icon: Absimage2
        });
        var image = 'Capture4.jpg';
  var beachMarker = new google.maps.Marker({
    position: {lat: -33.890, lng: 151.274},
    map: map,
    icon: image
  });
      }

