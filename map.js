function initMap() {
//Markers variables
        var onefivethree = {lat: 52.948574, lng: -1.169075};
        var onefiveone = {lat: 52.948674, lng: -1.169075};
        var Abs1 =   {lat: 52.9529005730305,  lng: -1.1777065378510088};
        var Abs2 =   {lat: 52.95659290665255,  lng: -1.1524723154388994};

        var Absimage1 = {
            url: 'Capture4.JPG',
            scaledSize: new google.maps.Size(100, 200)};
        var Absimage2 = {
            url: 'Capture3.JPG',
            scaledSize: new google.maps.Size(100, 100)};  
//Line variables
        var lineSymbol = {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        };       

//Map
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat:52.951866350084, lng:-1.1726425272308916}
        });
//4 Markers
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
          title: 'The start of the night',
          map: map,
          icon: Absimage1
        });
        var marker4 = new google.maps.Marker({
          position: Abs2,
          title: 'CRISIS', 
          map: map,
          icon: Absimage2
        });
      //Line
      var line = new google.maps.Polyline({
          path: [{lat: 52.9529005730305, lng: -1.1777065378510088}, {lat: 52.9513289, lng: -1.1750136000000566}],
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
          map: map
        });
      var line2 = new google.maps.Polyline({
        path: [{lat: 52.95659290665255, lng: -1.1524723154388994 }, {lat:52.9558919, lng: -1.153685600000017 }],
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
        map:map
      });
      }

