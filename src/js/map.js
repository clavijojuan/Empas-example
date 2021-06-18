import {prueba} from '../assets/data/cartografía de prueba/prueba.js'

    const map = L.map('mymap').setView([4.505, -75.09], 6);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
    
    var geojson_tramos = new L.geoJSON(prueba).addTo(map)
    
    map.flyToBounds(geojson_tramos.getBounds())

    
export {map}
