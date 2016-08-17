"use strict";

$(function () {

  function initMap() {

    var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#eae8e2'},
          {visibility: 'simplified'},
          {saturation: -200},
          {gamma: 3},
          {weight: 0}
        ]
      },
      {
        featureType: 'water',
        stylers: [{color: '#4369aa'}]
      }
    ], {
      name: 'Custom Style'
    });

    var customMapTypeId = 'custom_style';

    var myLatLng = {lat: 55.606226, lng: 37.531561};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      scrollwheel: false,
      //disableDefaultUI: true,
      zoom: 12,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
      }
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);

    // Create a marker and set its position.
    var image = '../img/svg/map_marker.svg';
    var marker = new google.maps.Marker({
      icon: image,
      map: map,
      position: myLatLng
    });
  }


  if ($('#map').length) {

    initMap();

  }

});