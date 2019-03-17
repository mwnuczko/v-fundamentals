const HIGHLIGHTED_ICON = '/static/img/marker-icon-2x.png';

export default class GMapMarker {
  constructor(googleMarker, object) {
    this.marker = googleMarker;
    this.object = object;
  }

  on(eventName, listenerFn) {
    this.marker.addListener(eventName, () => {
      listenerFn.call(this.marker, this.object, this);
    });
  }

  toggleHighlight(isHighlighted) {
    this.marker.setIcon(isHighlighted ? HIGHLIGHTED_ICON : null);
  }

  matches(object) {
    return this.object === object;
  }
}
