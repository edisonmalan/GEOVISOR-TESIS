// geoserver-layers.js

// CAPAS GEOSERVER DE PROVINCIAS
var chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Provincias/wms", {
    layers: 'Provincias:Chimborazo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Provincias/wms", {
    layers: 'Provincias:Tungurahua',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Provincias/wms", {
    layers: 'Provincias:Bolivar',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
// CAPAS GEOSERVER DE CANTONES CHIMBORAZO

var canton1chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Alausi',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton2chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Chambo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton3chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Chunchi',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton4chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Colta',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton5chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Cumanda',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton6chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Guamote',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton7chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Guano',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton8chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms?", {
    layers: 'Cantones:Pallatanga',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton9chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Penipe',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton10chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Riobamba',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

// CAPAS GEOSERVER DE CANTONES TUNGURAHUA

var canton1tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Ambato',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton2tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Banos de Agua Santa',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton3tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Cevallos',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton4tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Mocha',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton5tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Patate',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton6tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Quero',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton7tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:San Pedro de Pelileo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton8tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Santiago de Pillaro',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton9tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Tisaleo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

// CAPAS GEOSERVER DE CANTONES BOLIVAR

var canton1bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Caluma',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton2bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Chillanes',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton3bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Chimbo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton4bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Echeandia',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton5bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Guaranda',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton6bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:Las Naves',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var canton7bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Cantones/wms", {
    layers: 'Cantones:San Miguel',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

// CAPAS GEOSERVER DE PARROQUIAS CHIMBORAZO
var parroquia1chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Achupallas',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia2chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Alausi',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia3chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Bilbao',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia4chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cacha',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia5chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Calpi',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia6chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Capzol',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia7chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cebadas',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia8chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Chambo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia9chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Chunchi',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia10chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Columbe',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia11chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Compud',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia12chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cubijies',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia13chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cumanda',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia14chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:El Altar',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia15chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Flores',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia16chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Gonzol',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia17chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Guamote',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia18chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Guanando',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia19chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Guano',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia20chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Guasuntos',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia21chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Huigra',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia22chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Ilapo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia23chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Juan de Velasco Pangor',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia24chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:La Candelaria',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia25chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:La providencia',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia26chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Lican',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia27chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Licto',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia28chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Llagos',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia29chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Matus',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia30chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Multitud',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia31chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pallatanga',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia32chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Palmira',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia33chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Penipe',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia34chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pistishi',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia35chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Puela',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia36chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pumallacta',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia37chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pungala',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia38chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Punin',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia39chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Quimiag',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia40chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Riobamba',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia41chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Andres 1',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia42chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Antonio de Bayushig',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia43chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Gerardo de Pacaicaguan',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia44chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Isidro de Patulus',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia45chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Jose del Chazo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia46chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Juan',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia47chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Luis',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia48chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Santa Fe de Galan',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia49chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Santiago de Quito',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia50chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Sevilla',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia51chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Sibambe',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia52chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Tixan',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia53chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Valparaiso',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia54chimborazoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Villa La Union (Cajabamba)',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

// CAPAS GEOSERVER DE PARROQUIAS TUNGURAHUA
var parroquia1tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Ambatillo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia2tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Ambato',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia3tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Augusto Martinez Mundugleo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia4tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Baquerizo Moreno',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia5tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Baños de Agua Santa ',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia6tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Benitez',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia7tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Bolivar',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia8tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cevallos',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia9tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Chiquicha',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia10tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Chisalata',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia11tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Chumaqui',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia12tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Constatino Fernandez',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia13tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cotalo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia14tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Cunchibamba',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia15tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:El triunfo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia16tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Emilio Maria Teran (Rumipamba)',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia17tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Guambalo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia18tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Huachi Grande',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia19tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Izamba ',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia20tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Juan Benigno Vela',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia21tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:LLigua',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia22tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Los Andes',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia23tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Marcos Espinel Chacata',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia24tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Mocha ',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia25tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Montalvo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia26tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pasa',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia27tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Patate ',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia28tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pelileo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia29tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Picaigua',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia30tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pilaguin',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia31tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pillaro',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia32tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Pinguili',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia33tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Presidente Urbina',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia34tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Quero',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia35tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Quinchicoto',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia36tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Quisapincha',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia37tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Rio Negro',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia38tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Rio Verde',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia39tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Rumichaca',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia40tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Rumipamba',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia41tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Salasaca',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia42tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Andres 2',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia43tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Bartolome de Pinllog',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia44tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San fernando',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia45tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Jose de Poalo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia46tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Miguelito',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia47tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Santa Rosa',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia48tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Sucre',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia49tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Tisaleo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia50tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Totoras',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia51tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Ulba',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia52tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Unamuncho',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia53tungurahuaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Yanayacu',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});


// CAPAS GEOSERVER DE PARROQUIAS BOLIVAR
var parroquia1bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Las Naves',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia2bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Luis de Pambil',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia3bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Facunda Vela',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia4bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Simiatug',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia5bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Salinas',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia6bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Echeandia',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia7bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Guaranda',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia8bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Julio E Moreno',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia9bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Caluma ',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia10bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Santa Fe',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia11bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Asuncion',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia12bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Magdalena ',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia13bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Jose de Chimbo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia14bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Sebastian',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia15bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Telimbela',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia16bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Simon',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia17bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Lorenzo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia18bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Santiago',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia19bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Vicente',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia20bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Miguel',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia21bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Pablo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia22bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Balsapamba',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia23bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Bilovan',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia24bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Regulo de Mora',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia25bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:Chillanes',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var parroquia26bolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Parroquias/wms", {
    layers: 'Parroquias:San Jose del Tambo',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});


// CAPAS GEOSERVER DE UNIDADES HIDROGRAFICAS
var unidad3Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N3',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var unidad3sLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N3_Santiago',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var unidad4Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N4',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var unidad5Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N5',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var unidad6Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N6',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var unidad7Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N7_tungurahua',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var unidad8Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N8_tungurahua',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var unidad9Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Unidades_Hidrigraficas/wms", {
    layers: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N9_tungurahua',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var chimbon5Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Chimbo_N5',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var chimbon6Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Chimbo_N6',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var piñanaton5Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Piñanato_N5',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var piñanaton6Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Piñanato_N6',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var suquibin5Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Suquibi_N5',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var suquibin6Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Suquibi_N6',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});


// CAPAS GEOSERVER DE ESTUDIO MULTITEMPORAL
var gualcangaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Cobertura_y_Uso_Gualcanga',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var jatuchimbanaLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Cobertura_y_Uso_Jatuchimbana',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var gualcanga2000Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Gualcanga_2000',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var gualcanga2010Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Gualcanga_2010',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var gualcanga2020Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Gualcanga_2020',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var jatuchimbana2000Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Jatuchimbana_2000',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});
var jatuchimbana2010Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Jatuchimbana_2010',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var jatuchimbana2020Layer = L.tileLayer.wms("http://localhost:8080/geoserver/Estudio_Multitemporal/wms", {
    layers: 'Estudio_Multitemporal:Jatuchimbana 2020',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});


// CAPAS GEOSERVER DE BOLIVAR ACUS CUENCAS
var piezometricosLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:niveles_piezometricos',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

var acusbolivarLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Bolivar_Acus_Cuencas/wms", {
    layers: 'Bolivar_Acus_Cuencas:Acus_Bolivar',
    format: 'image/png',
    transparent: true,
    attribution: "&copy; GeoServer",
    crs: L.CRS.EPSG3857,
    zIndex: 1000
});

