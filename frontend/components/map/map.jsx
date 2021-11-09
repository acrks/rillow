import React from 'react'
import MarkerManager from '../../utils/marker_manager';

class BenchMap extends React.Component {
  constructor(props){
    super(props)
    // this.map = google.maps.Map;
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
    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.geoCoder = google.maps.Geocoder.geocode()
    this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers()
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.listings !== prevProps.listings) {
      // this.MarkerManager.updateMarkers()
    }
  }

  render() {
    if(!this.props.listings) {
      return null
    }

    this.props.listings.map((listing, i) => {
      new google.maps.Marker({
        position: {lat: listing.latitude, lng: listing.longitude},
        map: this.map,
        title: `${listing.street_number} ${listing.street_name}`,
        animation: google.maps.Animation.DROP,
      });  
    })

    return (
      // ...
      <div ref={ map => this.mapNode = map } className = "index-map"/> // this ref gives us access to the map dom node
    )
  }

  //...
}

export default BenchMap