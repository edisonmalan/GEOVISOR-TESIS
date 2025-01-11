// descargar-shapes.js

// Función para descargar las capas geográficas en formato Shapefile
function descargarCapaGeografica(layerName, geoserverUrl) {
    // Construir la URL de descarga para GeoServer
    const urlDescarga = `${geoserverUrl}/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${layerName}&outputFormat=shape-zip`;

    // Crear un elemento <a> para la descarga
    const link = document.createElement('a');
    link.href = urlDescarga;
    link.download = `${layerName}.zip`; // Nombre del archivo descargado
    link.style.display = 'none';

    // Agregar el enlace al DOM y simular un clic
    document.body.appendChild(link);
    link.click();

    // Eliminar el enlace después de la descarga
    document.body.removeChild(link);
}

// Función para manejar la descarga desde el popup
function downloadShape() {
    const capaSeleccionada = obtenerCapaSeleccionada();
    if (capaSeleccionada) {
        const { layerName, geoserverUrl } = capaSeleccionada;
        descargarCapaGeografica(layerName, geoserverUrl);
    } else {
        alert('Por favor, selecciona una capa para descargar.');
    }
}

// Función para obtener la capa seleccionada del control de opciones
function obtenerCapaSeleccionada() {
    // Definición de todas las capas geográficas
    const capas = {
        // PROVINCIAS
        chimborazo: { layerName: 'Provincias:Chimborazo', geoserverUrl: 'http://localhost:8080/geoserver/Provincias' },
        tungurahua: { layerName: 'Provincias:Tungurahua', geoserverUrl: 'http://localhost:8080/geoserver/Provincias' },
        bolivar: { layerName: 'Provincias:Bolivar', geoserverUrl: 'http://localhost:8080/geoserver/Provincias' },

        // CANTONES

        // CANTONES CHIMBORAZO
    canton1chimborazo: { 
        layerName: 'Cantones:Alausi', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton2chimborazo: { 
        layerName: 'Cantones:Chambo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton3chimborazo: { 
        layerName: 'Cantones:Chunchi', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton4chimborazo: { 
        layerName: 'Cantones:Colta', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton5chimborazo: { 
        layerName: 'Cantones:Cumanda', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton6chimborazo: { 
        layerName: 'Cantones:Guamote', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton7chimborazo: { 
        layerName: 'Cantones:Guano', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton8chimborazo: { 
        layerName: 'Cantones:Pallatanga', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton9chimborazo: { 
        layerName: 'Cantones:Penipe', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton10chimborazo: { 
        layerName: 'Cantones:Riobamba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },

    // CANTONES TUNGURAHUA
    canton1tungurahua: { 
        layerName: 'Cantones:Ambato', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton2tungurahua: { 
        layerName: 'Cantones:Banos de Agua Santa', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton3tungurahua: { 
        layerName: 'Cantones:Cevallos', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton4tungurahua: { 
        layerName: 'Cantones:Mocha', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton5tungurahua: { 
        layerName: 'Cantones:Patate', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton6tungurahua: { 
        layerName: 'Cantones:Quero', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton7tungurahua: { 
        layerName: 'Cantones:San Pedro de Pelileo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton8tungurahua: { 
        layerName: 'Cantones:Santiago de Pillaro', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton9tungurahua: { 
        layerName: 'Cantones:Tisaleo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },

    // CANTONES BOLIVAR
    canton1bolivar: { 
        layerName: 'Cantones:Caluma', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton2bolivar: { 
        layerName: 'Cantones:Chillanes', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton3bolivar: { 
        layerName: 'Cantones:Chimbo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton4bolivar: { 
        layerName: 'Cantones:Echeandia', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton5bolivar: { 
        layerName: 'Cantones:Guaranda', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton6bolivar: { 
        layerName: 'Cantones:Las Naves', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },
    canton7bolivar: { 
        layerName: 'Cantones:San Miguel', 
        geoserverUrl: 'http://localhost:8080/geoserver/Cantones' 
    },

    //PARROQUIAS //

    // PARROQUIAS CHIMBORAZO
    parroquia1chimborazo: { 
        layerName: 'Parroquias:Achupallas', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia2chimborazo: { 
        layerName: 'Parroquias:Alausi', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia3chimborazo: { 
        layerName: 'Parroquias:Bilbao', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia4chimborazo: { 
        layerName: 'Parroquias:Cacha', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia5chimborazo: { 
        layerName: 'Parroquias:Calpi', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia6chimborazo: { 
        layerName: 'Parroquias:Capzol', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia7chimborazo: { 
        layerName: 'Parroquias:Cebadas', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia8chimborazo: { 
        layerName: 'Parroquias:Chambo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia9chimborazo: { 
        layerName: 'Parroquias:Chunchi', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia10chimborazo: { 
        layerName: 'Parroquias:Columbe', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia11chimborazo: { 
        layerName: 'Parroquias:Compud', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia12chimborazo: { 
        layerName: 'Parroquias:Cubijies', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia13chimborazo: { 
        layerName: 'Parroquias:Cumanda', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia14chimborazo: { 
        layerName: 'Parroquias:El Altar', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia15chimborazo: { 
        layerName: 'Parroquias:Flores', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia16chimborazo: { 
        layerName: 'Parroquias:Gonzol', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia17chimborazo: { 
        layerName: 'Parroquias:Guamote', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia18chimborazo: { 
        layerName: 'Parroquias:Guanando', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia19chimborazo: { 
        layerName: 'Parroquias:Guano', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia20chimborazo: { 
        layerName: 'Parroquias:Guasuntos', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia21chimborazo: { 
        layerName: 'Parroquias:Huigra', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia22chimborazo: { 
        layerName: 'Parroquias:Ilapo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia23chimborazo: { 
        layerName: 'Parroquias:Juan de Velasco Pangor', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia24chimborazo: { 
        layerName: 'Parroquias:La Candelaria', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia25chimborazo: { 
        layerName: 'Parroquias:La Providencia', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia26chimborazo: { 
        layerName: 'Parroquias:Lican', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia27chimborazo: { 
        layerName: 'Parroquias:Licto', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia28chimborazo: { 
        layerName: 'Parroquias:Llagos', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia29chimborazo: { 
        layerName: 'Parroquias:Matus', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia30chimborazo: { 
        layerName: 'Parroquias:Multitud', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia31chimborazo: { 
        layerName: 'Parroquias:Pallatanga', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia32chimborazo: { 
        layerName: 'Parroquias:Palmira', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia33chimborazo: { 
        layerName: 'Parroquias:Penipe', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia34chimborazo: { 
        layerName: 'Parroquias:Pistishi', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia35chimborazo: { 
        layerName: 'Parroquias:Puela', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia36chimborazo: { 
        layerName: 'Parroquias:Pumallacta', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia37chimborazo: { 
        layerName: 'Parroquias:Pungala', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia38chimborazo: { 
        layerName: 'Parroquias:Punin', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia39chimborazo: { 
        layerName: 'Parroquias:Quimiag', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia40chimborazo: { 
        layerName: 'Parroquias:Riobamba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia41chimborazo: { 
        layerName: 'Parroquias:San Andres 1', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia42chimborazo: { 
        layerName: 'Parroquias:San Antonio de Bayushig', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia43chimborazo: { 
        layerName: 'Parroquias:San Gerardo de Pacaicaguan', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia44chimborazo: { 
        layerName: 'Parroquias:San Isidro de Patulus', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia45chimborazo: { 
        layerName: 'Parroquias:San Jose del Chazo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia46chimborazo: { 
        layerName: 'Parroquias:San Juan', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia47chimborazo: { 
        layerName: 'Parroquias:San Luis', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia48chimborazo: { 
        layerName: 'Parroquias:Santa Fe de Galan', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia49chimborazo: { 
        layerName: 'Parroquias:Santiago de Quito', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia50chimborazo: { 
        layerName: 'Parroquias:Sevilla', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia51chimborazo: { 
        layerName: 'Parroquias:Sibambe', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia52chimborazo: { 
        layerName: 'Parroquias:Tixan', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia53chimborazo: { 
        layerName: 'Parroquias:Valparaiso', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia54chimborazo: { 
        layerName: 'Parroquias:Villa La Union (Cajabamba)', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },

    // PARROQUIAS TUNGURAHUA
    parroquia1tungurahua: { 
        layerName: 'Parroquias:Ambatillo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia2tungurahua: { 
        layerName: 'Parroquias:Ambato', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia3tungurahua: { 
        layerName: 'Parroquias:Augusto Martinez Mundugleo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia4tungurahua: { 
        layerName: 'Parroquias:Baquerizo Moreno', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia5tungurahua: { 
        layerName: 'Parroquias:Baños de Agua Santa', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia6tungurahua: { 
        layerName: 'Parroquias:Benitez', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia7tungurahua: { 
        layerName: 'Parroquias:Bolivar', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia8tungurahua: { 
        layerName: 'Parroquias:Cevallos', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia9tungurahua: { 
        layerName: 'Parroquias:Chiquicha', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia10tungurahua: { 
        layerName: 'Parroquias:Chisalata', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia11tungurahua: { 
        layerName: 'Parroquias:Chumaqui', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia12tungurahua: { 
        layerName: 'Parroquias:Constatino Fernandez', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia13tungurahua: { 
        layerName: 'Parroquias:Cotalo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia14tungurahua: { 
        layerName: 'Parroquias:Cunchibamba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia15tungurahua: { 
        layerName: 'Parroquias:El Triunfo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia16tungurahua: { 
        layerName: 'Parroquias:Emilio Maria Teran (Rumipamba)', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia17tungurahua: { 
        layerName: 'Parroquias:Guambalo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia18tungurahua: { 
        layerName: 'Parroquias:Huachi Grande', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia19tungurahua: { 
        layerName: 'Parroquias:Izamba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia20tungurahua: { 
        layerName: 'Parroquias:Juan Benigno Vela', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia21tungurahua: { 
        layerName: 'Parroquias:LLigua', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia22tungurahua: { 
        layerName: 'Parroquias:Los Andes', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia23tungurahua: { 
        layerName: 'Parroquias:Marcos Espinel Chacata', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia24tungurahua: { 
        layerName: 'Parroquias:Mocha', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia25tungurahua: { 
        layerName: 'Parroquias:Montalvo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia26tungurahua: { 
        layerName: 'Parroquias:Pasa', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia27tungurahua: { 
        layerName: 'Parroquias:Patate', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia28tungurahua: { 
        layerName: 'Parroquias:Pelileo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia29tungurahua: { 
        layerName: 'Parroquias:Picaigua', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia30tungurahua: { 
        layerName: 'Parroquias:Pilaguin', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia31tungurahua: { 
        layerName: 'Parroquias:Pillaro', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia32tungurahua: { 
        layerName: 'Parroquias:Pinguili', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia33tungurahua: { 
        layerName: 'Parroquias:Presidente Urbina', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia34tungurahua: { 
        layerName: 'Parroquias:Quero', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia35tungurahua: { 
        layerName: 'Parroquias:Quinchicoto', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia36tungurahua: { 
        layerName: 'Parroquias:Quisapincha', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia37tungurahua: { 
        layerName: 'Parroquias:Rio Negro', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia38tungurahua: { 
        layerName: 'Parroquias:Rio Verde', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia39tungurahua: { 
        layerName: 'Parroquias:Rumichaca', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia40tungurahua: { 
        layerName: 'Parroquias:Rumipamba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia41tungurahua: { 
        layerName: 'Parroquias:Salasaca', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia42tungurahua: { 
        layerName: 'Parroquias:San Andres 2', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia43tungurahua: { 
        layerName: 'Parroquias:San Bartolome de Pinllog', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia44tungurahua: { 
        layerName: 'Parroquias:San Fernando', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia45tungurahua: { 
        layerName: 'Parroquias:San Jose de Poalo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia46tungurahua: { 
        layerName: 'Parroquias:San Miguelito', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia47tungurahua: { 
        layerName: 'Parroquias:Santa Rosa', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia48tungurahua: { 
        layerName: 'Parroquias:Sucre', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia49tungurahua: { 
        layerName: 'Parroquias:Tisaleo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia50tungurahua: { 
        layerName: 'Parroquias:Totoras', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia51tungurahua: { 
        layerName: 'Parroquias:Ulba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia52tungurahua: { 
        layerName: 'Parroquias:Unamuncho', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia53tungurahua: { 
        layerName: 'Parroquias:Yanayacu', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },


    // PARROQUIAS BOLÍVAR
    parroquia1bolivar: { 
        layerName: 'Parroquias:Las Naves', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia2bolivar: { 
        layerName: 'Parroquias:San Luis de Pambil', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia3bolivar: { 
        layerName: 'Parroquias:Facunda Vela', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia4bolivar: { 
        layerName: 'Parroquias:Simiatug', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia5bolivar: { 
        layerName: 'Parroquias:Salinas', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia6bolivar: { 
        layerName: 'Parroquias:Echeandia', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia7bolivar: { 
        layerName: 'Parroquias:Guaranda', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia8bolivar: { 
        layerName: 'Parroquias:Julio E Moreno', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia9bolivar: { 
        layerName: 'Parroquias:Caluma', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia10bolivar: { 
        layerName: 'Parroquias:Santa Fe', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia11bolivar: { 
        layerName: 'Parroquias:Asuncion', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia12bolivar: { 
        layerName: 'Parroquias:Magdalena', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia13bolivar: { 
        layerName: 'Parroquias:San Jose de Chimbo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia14bolivar: { 
        layerName: 'Parroquias:San Sebastian', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia15bolivar: { 
        layerName: 'Parroquias:Telimbela', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia16bolivar: { 
        layerName: 'Parroquias:San Simon', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia17bolivar: { 
        layerName: 'Parroquias:San Lorenzo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia18bolivar: { 
        layerName: 'Parroquias:Santiago', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia19bolivar: { 
        layerName: 'Parroquias:San Vicente', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia20bolivar: { 
        layerName: 'Parroquias:San Miguel', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia21bolivar: { 
        layerName: 'Parroquias:San Pablo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia22bolivar: { 
        layerName: 'Parroquias:Balsapamba', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia23bolivar: { 
        layerName: 'Parroquias:Bilovan', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia24bolivar: { 
        layerName: 'Parroquias:Regulo de Mora', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia25bolivar: { 
        layerName: 'Parroquias:Chillanes', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },
    parroquia26bolivar: { 
        layerName: 'Parroquias:San Jose del Tambo', 
        geoserverUrl: 'http://localhost:8080/geoserver/Parroquias' 
    },

    //UNIDADES HIDROGRAFICAS //
    unidad3: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N3', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad3s: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N3_Santiago', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad4: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N4', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad5: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N5', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad6: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N6', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad7: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N7_tungurahua', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad8: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N8_tungurahua', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    unidad9: { 
        layerName: 'Unidades_Hidrigraficas:Unidad_Hidrigrafica_N9_tungurahua', 
        geoserverUrl: 'http://localhost:8080/geoserver/Unidades_Hidrigraficas'
    },
    chimbon5: { 
        layerName: 'Bolivar_Acus_Cuencas:Chimbo_N5', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas'
    },
    chimbon6: { 
        layerName: 'Bolivar_Acus_Cuencas:Chimbo_N6', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas'
    },
    piñanaton5: { 
        layerName: 'Bolivar_Acus_Cuencas:Piñanato_N5', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas'
    },
    piñanaton6: { 
        layerName: 'Bolivar_Acus_Cuencas:Piñanato_N6', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas'
    },
    suquibin5: { 
        layerName: 'Bolivar_Acus_Cuencas:Suquibi_N5', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas'
    },
    suquibin6: { 
        layerName: 'Bolivar_Acus_Cuencas:Suquibi_N6', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas'
    },

    //ESTUDIO MULTITEMPORAL //
    suelogualcanga: { 
        layerName: 'Estudio_Multitemporal:Cobertura_y_Uso_Gualcanga', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelojatuchimbana: { 
        layerName: 'Estudio_Multitemporal:Cobertura_y_Uso_Jatuchimbana', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelogualcanga2000: { 
        layerName: 'Estudio_Multitemporal:Gualcanga_2000', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelogualcanga2010: { 
        layerName: 'Estudio_Multitemporal:Gualcanga_2010', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelogualcanga2020: { 
        layerName: 'Estudio_Multitemporal:Gualcanga_2020', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelojatuchimbana2000: { 
        layerName: 'Estudio_Multitemporal:Jatuchimbana_2000', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelojatuchimbana2010: { 
        layerName: 'Estudio_Multitemporal:Jatuchimbana_2010', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },
    suelojatuchimbana2020: { 
        layerName: 'Estudio_Multitemporal:Jatuchimbana 2020', 
        geoserverUrl: 'http://localhost:8080/geoserver/Estudio_Multitemporal'
    },

    // BOLIVAR ACUS CUENCAS //
    npiezometrico: { 
        layerName: 'Bolivar_Acus_Cuencas:niveles_piezometricos', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas' 
    },
    acusbolivar: { 
        layerName: 'Bolivar_Acus_Cuencas:Acus_Bolivar', 
        geoserverUrl: 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas' 
    }
   
   
    };

    // Recorrer las opciones y devolver la capa seleccionada
    for (const [id, capa] of Object.entries(capas)) {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked) {
            return capa;
        }
    }

    return null; // Ninguna capa seleccionada
}

// Inicializar la funcionalidad (puede haber más inicializaciones si es necesario)
console.log("descargar-shapes.js cargado correctamente");
