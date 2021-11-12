import React from 'react'
import { withRouter } from 'react-router-dom';


class BenchMap extends React.Component {
  constructor(props){
    super(props)
    // this.map = google.maps.Map;
    this.state = {
      listings: this.props.listings
    }
    // this.createAddress = this.createAddress.bind(this)
    this.bindInfoWindow = this.bindInfoWindow.bind(this)
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
  }

  bindInfoWindow(marker, map, infowindow, html, listingId) { 
    google.maps.event.addListener(marker, 'mouseover', function() { 
      infowindow.setContent(html); 
      infowindow.open(map, marker); 
    }); 

    google.maps.event.addListener(marker, 'click', function() { 
      window.location.href = this.url;
    }); 
  } 

  render() {
    if(!this.props.listings) {
      return null
    }

    var infowindow =  new google.maps.InfoWindow({
      content: ''
    });

    this.props.listings.map((listing, i) => {
      var marker = new google.maps.Marker({
        position: {lat: listing.latitude, lng: listing.longitude},
        map: this.map,
        title: `${listing.street_number} ${listing.street_name}`,
        animation: google.maps.Animation.DROP,
        // TODO: CHANGE THIS ONE DEPLOYED TO HEROKU
        url: `http://localhost:3000/#/listings/${listing.id}`,
        icon: {
          url: 'https://raw.githubusercontent.com/acrks/rillow/map/app/assets/images/marker2.png',
          scaledSize: new google.maps.Size(20, 20),
        }
      });  
      this.bindInfoWindow(marker, this.map, infowindow, "<div className = `info-window`>" + `${listing.street_number} ${listing.street_name}` + "</div>", listing.id);  
    })


    return (
      // ...
      <div ref={ map => this.mapNode = map } className = "index-map"/> // this ref gives us access to the map dom node
    )
  }

  //...
}

export default withRouter(BenchMap)