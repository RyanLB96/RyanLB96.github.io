      function initMap() {
        var uluru = {lat: 52.948574, lng: -1.169075};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

document.head.innerHTML += async defer '<link href="https://maps.googleapis.com/maps/api/js?key=AIzaSyCWurdmH8IloD1ZURsrIIx1F02nKLx2Th0&callback=initMap">';


