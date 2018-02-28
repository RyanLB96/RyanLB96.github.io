function initMap() {
        var onefivethree = {lat: 52.948574, lng: -1.169075};
        var onefiveone = {lat: 52.948674, lng: -1.169075};
        var Abs1 =   {lat: 52.9513289,  lng: -1.1750136000000566};
        var Abs2 =   {lat: 52.9558919,  lng: -1.153685600000017};

        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var label1 = 'The start of the night';
        var label2 = 'CRISIS';
        var labelIndex = 0;

        var Absimage1 = {
            url: 'Capture4.JPG',
            scaledSize: new google.maps.Size(100, 100)};
        var Absimage2 = {
            url: 'Capture3.JPG',
            scaledSize: new google.maps.Size(100, 100)};         


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
          label: label1,
          map: map,
          icon: Absimage1
        });
        var marker4 = new google.maps.Marker({
          position: Abs2,
          label: label2[labelIndex++ % label2.length],
          map: map,
          icon: Absimage2
        });
      
      }

