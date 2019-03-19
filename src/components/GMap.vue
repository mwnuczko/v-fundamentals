<template>
<div ref="mapContainer" class="g-map"></div>
</template>

<script>
  import GMapSimpleMap from './GMapSimpleMap';
  
  // TODO 1: init simple gmap:
// const map = new GMapSimpleMap(el)
// TODO 2: render markers:
// const marker = gmap.createMarker(objWithLatLng)
// TODO 3: handle marker click using marker.on('click', funListener) method
// TODO 4: handle 'selected' prop change, and toggle highlight on marker related to selected geoObject

export default {
  name: 'GMap',
	props: {
    geoObjects: Array,
    selected: Object
	},
	data() {
    return {
      markers: []
    }
	},
	watch: {
    geoObjects(newMarkersArray) {
      this.markers = [];
      newMarkersArray.forEach( geoObject => {
        const marker = this.map.createMarker(geoObject);
				marker.on('click', this.mapClick);
        this.markers.push(marker);
				// this.markers.push(this.map.createMarker(geoObject).on('click', this.mapClick));
				});
		},
    selected(newCity) {
			this.markers.forEach(marker => {
					marker.toggleHighlight(marker.matches(newCity));
			});
		}
	},
	methods: {
		mapClick(city) {
      this.$emit('marker-click', city);
      return city;
		},
  },
	mounted() {
    this.map = new GMapSimpleMap(this.$refs.mapContainer);
  }
};
</script>

<style scoped>
.g-map {
  height: 460px;
  background-color: aqua;
  border: 1px solid #777;
  margin: 10px;
}
</style>
