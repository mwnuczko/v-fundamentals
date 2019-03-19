<template>
<div class="g-map"></div>
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
