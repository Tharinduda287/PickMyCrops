import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { 
    // navigator.geolocation.getCurrentPosition(function(position) {
    //     this.lat=position.coords.latitude;
    //     this.lng=position.coords.longitude;
    //   })
    var origin1 = {lat: 51.373858, lng: 7.215982};
    // var origin2 = 'Greenwich, England';
    var destinationA = { lat: 51.723858, lng: 7.895982 };
    var destinationB = {lat: 51.38693575008736, lng: 7.504503391776552};
    
    this.service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationA,destinationB],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, callback);
    
    function callback(response, status) {
      // See Parsing the Results for
      // the basics of a callback function.  
      var minVal=Math.min.apply(null,response.rows[0].elements.map(o => o.distance.value))
      console.log(response.rows[0].elements.filter(o => o.distance.value==minVal))   
    }
  }
  lat:number=7.250937;
  lng:number=80.592800;
  curLat:number;
  curLng:number;
  service = new google.maps.DistanceMatrixService();
  ngOnInit() {
    // var myLatlng = new google.maps.LatLng(, );
    var myLatlng = new google.maps.LatLng(this.lat, this.lng);
    
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    navigator.geolocation.getCurrentPosition(function(position) {
        var curLat=position.coords.latitude;
        var curLng=position.coords.longitude;
        var curMarker = new google.maps.Marker({
            position: new google.maps.LatLng(curLat,curLng),
            title: "Hello World!"
        });
        curMarker.setMap(map);
      })
    

    // To add the marker to the map, call setMap();
    let numbers = [1, 2, 3];
    
    for (let num of numbers) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.lat, this.lng),
            title: "Hello World!",
            icon:"/assets/img/tomato.png"
        });
        this.lat-=0.5;
        this.lng+=0.5;
        marker.setMap(map);
    }
    
  }

}
