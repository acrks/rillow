import React from 'react'
import MarkerManager from '../../utils/marker_manager';

class BenchMap extends React.Component {
  constructor(props){
    super(props)
    this.map = google.maps.Map;
    this.state = {
      listings: this.props.listings
    }
    // this.createAddress = this.createAddress.bind(this)
    
    // geocoder = new google.maps.Geocoder();
}
  //...

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
      disableDefaultUI: true,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{visibility: 'off'}]
                }
            ]
    };
    console.log(this.props.listings)
    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.geoCoder = google.maps.Geocoder.geocode()
    this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers()
    const myLatLng = { lat: 37.7758, lng: -122.435 };
    this.geocoder = new google.maps.Geocoder();
    
    new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: "Hello World!",
      animation: google.maps.Animation.DROP,
    });
    console.log(this.props.listings[0])

  }



  createAddress(listing) {
    const {street_number, street_name, city_name, state, zipcode} = listing
    return street_number + " " + street_name + " " + city_name  + " " + state + " " + zipcode
  }

  // codeAddress() {
  //   var address = document.getElementById('address').value;
  //   geocoder.geocode( { 'address': address}, function(results, status) {
  //     if (status == 'OK') {
  //       map.setCenter(results[0].geometry.location);
  //       var marker = new google.maps.Marker({
  //           map: map,
  //           position: results[0].geometry.location
  //       });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }

  render() {
    if(!this.props.listings) {
      return null
    }

    return (
      // ...
      <div ref={ map => this.mapNode = map } className = "index-map"/> // this ref gives us access to the map dom node
    )
  }

  //...
}

export default BenchMap