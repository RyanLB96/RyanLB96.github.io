var map, popup, Popup, Popup2;

function initMap() {
          definePopupClass();
           definePopupClass2();
//Markers variables
        var onefivethree = {lat: 52.948574, lng: -1.169075};
        var onefiveone = {lat: 52.948674, lng: -1.169075};
        var onefivethree = {lat: 53.948574, lng: -1.169075};
        var onefiveone = {lat: 51.948674, lng: -1.169075};
        var Abs1 =   {lat: 52.9529005730305,  lng: -1.1777065378510088};
        var Abs2 =   {lat: 52.952510320732365,  lng: -1.1586306673370927};

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
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat:52.95328086218663, lng:-1.1690483671509355}
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
          title: 'When the drinks hit', 
          map: map,
          icon: Absimage2
        });
      //Line
      var line = new google.maps.Polyline({
          path: [{lat: 52.9529005730305, lng: -1.1777065378510088}, {lat: 52.951322191092046, lng: -1.1751208883606523}],
          icons: [{
            icon: lineSymbol,
            offset: '100%'
          }],
          map: map
        });
      var line2 = new google.maps.Polyline({
        path: [{lat: 52.952510320732365, lng: -1.1586306673370927 }, {lat:52.956145287006045, lng: -1.1537383180939287 }],
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
        map:map
      });

      //Popups
      popup = new Popup(
      new google.maps.LatLng(52.951322191092046, -1.1751208883606523),
      document.getElementById('contentpopup1'));
      popup.setMap(map);

      popup2 = new Popup2(
      new google.maps.LatLng(52.956145287006045, -1.1537383180939287),
      document.getElementById('contentpopup2'));
      popup2.setMap(map);

}

/** Defines the Popup class. */
function definePopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup = function(position, content) {
    this.position = position;

    contentpopup1.classList.add('popup-bubble-content');
    // contentpopup2.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    pixelOffset.appendChild(contentpopup1);
  //pixelOffset.appendChild(contentpopup2);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px';
      this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
     'pointerdown']
        .forEach(function(event) {
          anchor.addEventListener(event, function(e) {
            e.stopPropagation();
          });
        });
  };
      
}
function definePopupClass2() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup2 = function(position, content) {
    this.position = position;

   // contentpopup1.classList.add('popup-bubble-content');
     contentpopup2.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    //pixelOffset.appendChild(contentpopup1);
  pixelOffset.appendChild(contentpopup2);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup2.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup2.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup2.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup2.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px';
      this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup2.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
     'pointerdown']
        .forEach(function(event) {
          anchor.addEventListener(event, function(e) {
            e.stopPropagation();
          });
        });
  };
      
}


