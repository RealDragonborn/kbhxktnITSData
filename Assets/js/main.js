window.onload = init;
function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [5600960.388625313, 7024314.791191011],
      zoom: 8,
      minZoom: 7
    }),
    layers: [
      new ol.layer.Tile({
      source: new ol.source.OSM({

      })
    }),
  ],
  target: 'OSM',
  })

const fillStyle = new ol.style.Fill({
  color: [10, 30, 20, 0,5]

})
const strokeStyle = new ol.style.Stroke({
  color:  [0, 0, 0, 1]
})
const railway = new ol.layer.VectorImage({
  source: new ol.source.Vector({
    url: './assets/libs/GeoJSON/map1.geojson',
    format: new ol.format.GeoJSON()
  }),
  visible: true,
  title: 'railway',
  style: new ol.style.Style({
    fill: fillStyle,
    stroke: strokeStyle,
  })
})

 map.addLayer(railway)

 map.on('click', function(e){
   map.forEachFeatureAtPixel(e.pixel, function(feature, railway1){
      window.location.href = "http://www.example.com";

   })
 })
}
