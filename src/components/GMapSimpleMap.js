import GMapMarker from './GMapMarker';

const google = window.google;
const debug = process.env.NODE_ENV !== 'production';
if (!debug && !google) {
  throw new Error('Google Maps not available');
}

export default class GMapSimpleMap {
  constructor(element) {
    const center = new google.maps.LatLng(52.14, 21.0);
    this.map = new google.maps.Map(element, {
      center,
      zoom: 6,
    });
    this.markers = [];
    this.latLngs = [];
  }

  createMarker(object) {
    const latLng = new google.maps.LatLng(object.lat, object.lng);
    this.latLngs.push(latLng);
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: object.title,
    });
    this.markers.push(marker);
    return new GMapMarker(marker, object);
  }
}
