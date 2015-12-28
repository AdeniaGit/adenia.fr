(function ($) {
    "use strict";

    $(document).ready(function () {

        //init map

        $(".ct-js-googleMap--waypoints").ShopLocator({
            map: {
                center: [45.7807205, 3.0513796000000184],
                zoom: 15,
                allMarkersInViewport: false,
                scrollwheel: false,
                mapStyle: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
            },
            markersIcon: "../resources/markerWaypoints.png",
            waypoints: {
              enable: true
            },
            infoBubble:{
              visible: false
            },
            marker: {
                latlng: [45.7807205, 3.0513796000000184]
            }
        });

        $(".ct-js-googleMap--contact").ShopLocator({
            map: {
                center: [45.7807205, 3.0513796000000184],
                zoom: 15,
                allMarkersInViewport: false,
                scrollwheel: false,
                mapStyle: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
            },
            markersIcon: "../resources/markerWaypoints.png",
            waypoints: {
                enable: false
            },
            marker: {
                latlng: [45.7807205, 3.0513796000000184]
            }
        });

    });
})(jQuery);