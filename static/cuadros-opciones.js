        


// Crear el control de capas (por ahora como desplegable)
var layerControl = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control', document.body);
        layerControl.setAttribute('id', 'layer-control');

        layerControl.innerHTML = `
            <button id="layer-toggle">Seleccionar Mapa Base</button>
            <ul id="layer-menu" style="display:none;">
                <li id="osmLayer">OpenStreetMap</li>
                <li id="googleSatLayer">Google Satelital</li>
                <li id="googleBaseLayer">Google Base</li>
            </ul>
        `;

        // Función para abrir y cerrar el menú de capas
        document.getElementById('layer-toggle').onclick = function() {
            var menu = document.getElementById('layer-menu');
            menu.style.display = (menu.style.display === 'none' || !menu.style.display) ? 'block' : 'none';
        };

        // Cambiar la capa base cuando se haga clic en una opción
        document.getElementById('osmLayer').onclick = function() {
            map.removeLayer(googleSatLayer);
            map.removeLayer(googleBaseLayer);
            osmLayer.addTo(map);
        };
        
        document.getElementById('googleSatLayer').onclick = function() {
            map.removeLayer(osmLayer);
            map.removeLayer(googleBaseLayer);
            googleSatLayer.addTo(map);
        };

        document.getElementById('googleBaseLayer').onclick = function() {
            map.removeLayer(osmLayer);
            map.removeLayer(googleSatLayer);
            googleBaseLayer.addTo(map);
        };

        // Añadir el control de capas al mapa
        map.addControl(L.control.layers({
            "OpenStreetMap": osmLayer,
            "Google Satelital": googleSatLayer,
            "Google Base": googleBaseLayer
        }));
        
        // Crear el control de subsecciones
        var sectionControl = L.control({ position: 'topright' });

        sectionControl.onAdd = function (map) {

            var div = L.DomUtil.create('div', 'leaflet-control-layers leaflet-control');
            div.setAttribute('id', 'section-control');
            div.innerHTML = `
                <h4>Capas</h4>
                <ul id="section-menu">
                    <li id="provincias">Provincias</li>
                    <ul class="submenu" id="provincia-options">
                        <li>
                        <input type="checkbox" id="chimborazo" name="provincia" value="Chimborazo"> Chimborazo
                        <button class="info-btn" onclick="showPopup('Provincias:Chimborazo', 'http://localhost:8080/geoserver/Provincias')">?</button>
                        </li>
                        <li><input type="checkbox" id="tungurahua" name="provincia" value="Tungurahua"> Tungurahua
                        <button class="info-btn" onclick="showPopup('Provincias:Tungurahua', 'http://localhost:8080/geoserver/Provincias')">?</button>
                        </li>
                        <li><input type="checkbox" id="bolivar" name="provincia" value="Bolivar"> Bolívar
                        <button class="info-btn" onclick="showPopup('Provincias:Bolivar', 'http://localhost:8080/geoserver/Provincias')">?</button>
                    </ul>

                    <li id="cantones">Cantones</li>
                    <ul class="submenu" id="cantone-options" style="display: none;">
                    <li>
                    <span>Cantones de Chimborazo</span>
                    <ul class="nested-options" style="display: none;">
                        <li><input type="checkbox" id="canton1chimborazo" name="cantone" value="Canton1Chimborazo"> Alausi
                        <button class="info-btn" onclick="showPopup('Cantones:Alausi', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton2chimborazo" name="cantone" value="Canton2Chimborazo"> Chambo 
                        <button class="info-btn" onclick="showPopup('Cantones:Chambo', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton3chimborazo" name="cantone" value="Canton3Chimborazo"> Chunchi
                        <button class="info-btn" onclick="showPopup('Cantones:Chunchi', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton4chimborazo" name="cantone" value="Canton4Chimborazo"> Colta 
                        <button class="info-btn" onclick="showPopup('Cantones:Colta', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton5chimborazo" name="cantone" value="Canton5Chimborazo"> Cumanda 
                        <button class="info-btn" onclick="showPopup('Cantones:Cumanda', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton6chimborazo" name="cantone" value="Canton6Chimborazo"> Guamote
                        <button class="info-btn" onclick="showPopup('Cantones:Guamote', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton7chimborazo" name="cantone" value="Canton7Chimborazo"> Guano
                        <button class="info-btn" onclick="showPopup('Cantones:Guano', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton8chimborazo" name="cantone" value="Canton8Chimborazo"> Pallatanga
                        <button class="info-btn" onclick="showPopup('Cantones:Pallatanga', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton9chimborazo" name="cantone" value="Canton9Chimborazo"> Penipe 
                        <button class="info-btn" onclick="showPopup('Cantones:Penipe', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton10chimborazo" name="cantone" value="Canton10Chimborazo"> Riobamba
                        <button class="info-btn" onclick="showPopup('Cantones:Riobamba', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Cantones de Tungurahua</span>
                    <ul class="nested-options" style="display: none;">
                        <li><input type="checkbox" id="canton1tungurahua" name="cantone" value="Canton1Tungurahua"> Ambato
                        <button class="info-btn" onclick="showPopup('Cantones:Ambato', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton2tungurahua" name="cantone" value="Canton2Tungurahua"> Baños de Agua Santa
                        <button class="info-btn" onclick="showPopup('Cantones:Banos de Agua Santa', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton3tungurahua" name="cantone" value="Canton3Tungurahua"> Cevallos
                        <button class="info-btn" onclick="showPopup('Cantones:Cevallos', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton4tungurahua" name="cantone" value="Canton4Tungurahua"> Mocha
                        <button class="info-btn" onclick="showPopup('Cantones:Mocha', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton5tungurahua" name="cantone" value="Canton5Tungurahua"> Patate
                        <button class="info-btn" onclick="showPopup('Cantones:Patate', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton6tungurahua" name="cantone" value="Canton6Tungurahua"> Quero
                        <button class="info-btn" onclick="showPopup('Cantones:Quero', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton7tungurahua" name="cantone" value="Canton7Tungurahua"> Pelileo
                        <button class="info-btn" onclick="showPopup('Cantones:San Pedro de Pelileo', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton8tungurahua" name="cantone" value="Canton8Tungurahua"> Pillaro
                        <button class="info-btn" onclick="showPopup('Cantones:Santiago de Pillaro', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton9tungurahua" name="cantone" value="Canton9Tungurahua"> Tisaleo
                        <button class="info-btn" onclick="showPopup('Cantones:Tisaleo', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                    </ul>
                </li>
                <li>
                <span>Cantones de Bolívar</span>
                    <ul class="nested-options" style="display: none;">
                        <li><input type="checkbox" id="canton1bolivar" name="cantone" value="Canton1Bolivar"> Caluma
                        <button class="info-btn" onclick="showPopup('Cantones:Caluma', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton2bolivar" name="cantone" value="Canton2Bolivar"> Chillanes
                        <button class="info-btn" onclick="showPopup('Cantones:Chillanes', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton3bolivar" name="cantone" value="Canton3Bolivar"> Chimbo
                        <button class="info-btn" onclick="showPopup('Cantones:Chimbo', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton4bolivar" name="cantone" value="Canton4Bolivar"> Echeandia
                        <button class="info-btn" onclick="showPopup('Cantones:Echeandia', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton5bolivar" name="cantone" value="Canton5Bolivar"> Guaranda
                        <button class="info-btn" onclick="showPopup('Cantones:Guaranda', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton6bolivar" name="cantone" value="Canton6Bolivar"> Las Naves
                        <button class="info-btn" onclick="showPopup('Cantones:Las Naves', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                        <li><input type="checkbox" id="canton7bolivar" name="cantone" value="Canton7Bolivar"> San Miguel
                        <button class="info-btn" onclick="showPopup('Cantones:San Miguel', 'http://localhost:8080/geoserver/Cantones')">?</button>
                        </li>
                    </ul>
                </li>
            </ul>
                    <li id="parroquias">Parroquias</li>
            <ul class="submenu" id="parroquia-options" style="display: none;">
                <li>
                    <span>Parroquias de Chimborazo</span>
                    <ul class="nested-options" style="display: none;">
                        <li><input type="checkbox" id="parroquia1chimborazo" name="parroquia" value="Parroquia1Chimborazo"> Achupallas
                        <button class="info-btn" onclick="showPopup('Parroquias:Achupallas', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia2chimborazo" name="parroquia" value="Parroquia2Chimborazo"> Alausi
                        <button class="info-btn" onclick="showPopup('Parroquias:Alausi', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia3chimborazo" name="parroquia" value="Parroquia3Chimborazo"> Bilbao
                        <button class="info-btn" onclick="showPopup('Parroquias:Bilbao', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia4chimborazo" name="parroquia" value="Parroquia4Chimborazo"> Cacha
                        <button class="info-btn" onclick="showPopup('Parroquias:Cacha', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia5chimborazo" name="parroquia" value="Parroquia5Chimborazo"> Calpi
                        <button class="info-btn" onclick="showPopup('Parroquias:Calpi', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia6chimborazo" name="parroquia" value="Parroquia6Chimborazo"> Capzol
                        <button class="info-btn" onclick="showPopup('Parroquias:Capzol', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia7chimborazo" name="parroquia" value="Parroquia7Chimborazo"> Cebadas
                        <button class="info-btn" onclick="showPopup('Parroquias:Cebadas', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia8chimborazo" name="parroquia" value="Parroquia8Chimborazo"> Chambo
                        <button class="info-btn" onclick="showPopup('Parroquias:Chambo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia9chimborazo" name="parroquia" value="Parroquia9Chimborazo"> Chunchi
                        <button class="info-btn" onclick="showPopup('Parroquias:Chunchi', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia10chimborazo" name="parroquia" value="Parroquia10Chimborazo"> Columbe
                        <button class="info-btn" onclick="showPopup('Parroquias:Columbe', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia11chimborazo" name="parroquia" value="Parroquia11Chimborazo"> Compud
                        <button class="info-btn" onclick="showPopup('Parroquias:Compud', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia12chimborazo" name="parroquia" value="Parroquia12Chimborazo"> Cubijies
                        <button class="info-btn" onclick="showPopup('Parroquias:Cubijies', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia13chimborazo" name="parroquia" value="Parroquia13Chimborazo"> Cumanda
                        <button class="info-btn" onclick="showPopup('Parroquias:Cumanda', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia14chimborazo" name="parroquia" value="Parroquia14Chimborazo"> El Altar
                        <button class="info-btn" onclick="showPopup('Parroquias:El Altar', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia15chimborazo" name="parroquia" value="Parroquia15Chimborazo"> Flores
                        <button class="info-btn" onclick="showPopup('Parroquias:Flores', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia16chimborazo" name="parroquia" value="Parroquia16Chimborazo"> Gonzol
                        <button class="info-btn" onclick="showPopup('Parroquias:Gonzol', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia17chimborazo" name="parroquia" value="Parroquia17Chimborazo"> Guamote
                        <button class="info-btn" onclick="showPopup('Parroquias:Guamote', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia18chimborazo" name="parroquia" value="Parroquia18Chimborazo"> Guanando
                        <button class="info-btn" onclick="showPopup('Parroquias:Guanando', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia19chimborazo" name="parroquia" value="Parroquia19Chimborazo"> Guano
                        <button class="info-btn" onclick="showPopup('Parroquias:Guano', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia20chimborazo" name="parroquia" value="Parroquia20Chimborazo"> Guasuntos
                        <button class="info-btn" onclick="showPopup('Parroquias:Guasuntos', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia21chimborazo" name="parroquia" value="Parroquia21Chimborazo"> Huigra
                        <button class="info-btn" onclick="showPopup('Parroquias:Huigra', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia22chimborazo" name="parroquia" value="Parroquia22Chimborazo"> Ilapo
                        <button class="info-btn" onclick="showPopup('Parroquias:Ilapo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia23chimborazo" name="parroquia" value="Parroquia23Chimborazo"> Juan de Velasco Pangor
                        <button class="info-btn" onclick="showPopup('Parroquias:Juan de Velasco Pangor', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia24chimborazo" name="parroquia" value="Parroquia24Chimborazo"> La Candelaria
                        <button class="info-btn" onclick="showPopup('Parroquias:La Candelaria', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia25chimborazo" name="parroquia" value="Parroquia25Chimborazo"> La Providencia
                        <button class="info-btn" onclick="showPopup('Parroquias:La Providencia', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia26chimborazo" name="parroquia" value="Parroquia26Chimborazo"> Lican
                        <button class="info-btn" onclick="showPopup('Parroquias:Lican', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia27chimborazo" name="parroquia" value="Parroquia27Chimborazo"> Licto
                        <button class="info-btn" onclick="showPopup('Parroquias:Licto', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia28chimborazo" name="parroquia" value="Parroquia28Chimborazo"> Llagos
                        <button class="info-btn" onclick="showPopup('Parroquias:Llagos', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia29chimborazo" name="parroquia" value="Parroquia29Chimborazo"> Matus
                        <button class="info-btn" onclick="showPopup('Parroquias:Matus', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia30chimborazo" name="parroquia" value="Parroquia30Chimborazo"> Multitud
                        <button class="info-btn" onclick="showPopup('Parroquias:Multitud', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia31chimborazo" name="parroquia" value="Parroquia31Chimborazo"> Pallatanga
                        <button class="info-btn" onclick="showPopup('Parroquias:Pallatanga', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia32chimborazo" name="parroquia" value="Parroquia32Chimborazo"> Palmira
                        <button class="info-btn" onclick="showPopup('Parroquias:Palmira', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia33chimborazo" name="parroquia" value="Parroquia33Chimborazo"> Penipe
                        <button class="info-btn" onclick="showPopup('Parroquias:Penipe', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia34chimborazo" name="parroquia" value="Parroquia34Chimborazo"> Pistishi
                        <button class="info-btn" onclick="showPopup('Parroquias:Pistishi', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia35chimborazo" name="parroquia" value="Parroquia35Chimborazo"> Puela
                        <button class="info-btn" onclick="showPopup('Parroquias:Puela', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia36chimborazo" name="parroquia" value="Parroquia36Chimborazo"> Pumallacta
                        <button class="info-btn" onclick="showPopup('Parroquias:Pumallacta', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia37chimborazo" name="parroquia" value="Parroquia37Chimborazo"> Pungala
                        <button class="info-btn" onclick="showPopup('Parroquias:Pungala', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia38chimborazo" name="parroquia" value="Parroquia38Chimborazo"> Punin
                        <button class="info-btn" onclick="showPopup('Parroquias:Punin', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia39chimborazo" name="parroquia" value="Parroquia39Chimborazo"> Quimiag
                        <button class="info-btn" onclick="showPopup('Parroquias:Quimiag', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia40chimborazo" name="parroquia" value="Parroquia40Chimborazo"> Riobamba
                        <button class="info-btn" onclick="showPopup('Parroquias:Riobamba', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia41chimborazo" name="parroquia" value="Parroquia41Chimborazo"> San Andres
                        <button class="info-btn" onclick="showPopup('Parroquias:San Andres 1', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia42chimborazo" name="parroquia" value="Parroquia42Chimborazo"> Bayushig
                        <button class="info-btn" onclick="showPopup('Parroquias:San Antonio de Bayushig', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia43chimborazo" name="parroquia" value="Parroquia43Chimborazo"> Pacaicaguan
                        <button class="info-btn" onclick="showPopup('Parroquias:San Gerardo de Pacaicaguan', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia44chimborazo" name="parroquia" value="Parroquia44Chimborazo"> San Isidro de Patulus
                        <button class="info-btn" onclick="showPopup('Parroquias:San Isidro de Patulus', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia45chimborazo" name="parroquia" value="Parroquia45Chimborazo"> San Jose del Chazo
                        <button class="info-btn" onclick="showPopup('Parroquias:San Jose del Chazo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia46chimborazo" name="parroquia" value="Parroquia46Chimborazo"> San Juan
                        <button class="info-btn" onclick="showPopup('Parroquias:San Juan', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia47chimborazo" name="parroquia" value="Parroquia47Chimborazo"> San Luis
                        <button class="info-btn" onclick="showPopup('Parroquias:San Luis', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia48chimborazo" name="parroquia" value="Parroquia48Chimborazo"> Santa Fe de Galan
                        <button class="info-btn" onclick="showPopup('Parroquias:Santa Fe de Galan', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia49chimborazo" name="parroquia" value="Parroquia49Chimborazo"> Santiago de Quito
                        <button class="info-btn" onclick="showPopup('Parroquias:Santiago de Quito', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia50chimborazo" name="parroquia" value="Parroquia50Chimborazo"> Sevilla
                        <button class="info-btn" onclick="showPopup('Parroquias:Sevilla', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia51chimborazo" name="parroquia" value="Parroquia51Chimborazo"> Sibambe
                        <button class="info-btn" onclick="showPopup('Parroquias:Sibambe', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia52chimborazo" name="parroquia" value="Parroquia52Chimborazo"> Tixan
                        <button class="info-btn" onclick="showPopup('Parroquias:Tixan', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia53chimborazo" name="parroquia" value="Parroquia53Chimborazo"> Valparaiso
                        <button class="info-btn" onclick="showPopup('Parroquias:Valparaiso', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia54chimborazo" name="parroquia" value="Parroquia54Chimborazo"> Cajabamba
                        <button class="info-btn" onclick="showPopup('Parroquias:Villa La Union (Cajabamba)', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <span>Parroquias de Tungurahua</span>
                    <ul class="nested-options" style="display: none;">
                        <li><input type="checkbox" id="parroquia1tungurahua" name="parroquia" value="Parroquia1Tungurahua"> Ambatillo
                        <button class="info-btn" onclick="showPopup('Parroquias:Ambatillo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia2tungurahua" name="parroquia" value="Parroquia2Tungurahua"> Ambato
                        <button class="info-btn" onclick="showPopup('Parroquias:Ambato', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia3tungurahua" name="parroquia" value="Parroquia3Tungurahua"> Augusto Martinez Mundugleo
                        <button class="info-btn" onclick="showPopup('Parroquias:Augusto Martinez Mundugleo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia4tungurahua" name="parroquia" value="Parroquia4Tungurahua"> Baquerizo Moreno
                        <button class="info-btn" onclick="showPopup('Parroquias:Baquerizo Moreno', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia5tungurahua" name="parroquia" value="Parroquia5Tungurahua"> Baños de Agua Santa
                        <button class="info-btn" onclick="showPopup('Parroquias:Baños de Agua Santa', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia6tungurahua" name="parroquia" value="Parroquia6Tungurahua"> Benitez
                        <button class="info-btn" onclick="showPopup('Parroquias:Benitez', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia7tungurahua" name="parroquia" value="Parroquia7Tungurahua"> Bolívar
                        <button class="info-btn" onclick="showPopup('Parroquias:Bolivar', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia8tungurahua" name="parroquia" value="Parroquia8Tungurahua"> Cevallos
                        <button class="info-btn" onclick="showPopup('Parroquias:Cevallos', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia9tungurahua" name="parroquia" value="Parroquia9Tungurahua"> Chiquicha
                        <button class="info-btn" onclick="showPopup('Parroquias:Chiquicha', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia10tungurahua" name="parroquia" value="Parroquia10Tungurahua"> Chisalata
                        <button class="info-btn" onclick="showPopup('Parroquias:Chisalata', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia11tungurahua" name="parroquia" value="Parroquia11Tungurahua"> Chumaqui
                        <button class="info-btn" onclick="showPopup('Parroquias:Chumaqui', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia12tungurahua" name="parroquia" value="Parroquia12Tungurahua"> Constatino Fernandez
                        <button class="info-btn" onclick="showPopup('Parroquias:Constantino Fernandez', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia13tungurahua" name="parroquia" value="Parroquia13Tungurahua"> Cotalo
                        <button class="info-btn" onclick="showPopup('Parroquias:Cotalo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia14tungurahua" name="parroquia" value="Parroquia14Tungurahua"> Cunchibamba
                        <button class="info-btn" onclick="showPopup('Parroquias:Cunchibamba', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia15tungurahua" name="parroquia" value="Parroquia15Tungurahua"> El triunfo
                        <button class="info-btn" onclick="showPopup('Parroquias:El triunfo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia16tungurahua" name="parroquia" value="Parroquia16Tungurahua"> Emilio Maria Teran (Rumipamba)
                        <button class="info-btn" onclick="showPopup('Parroquias:Emilio Maria Teran (Rumipamba)', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia17tungurahua" name="parroquia" value="Parroquia17Tungurahua"> Guambalo
                        <button class="info-btn" onclick="showPopup('Parroquias:Guambalo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia18tungurahua" name="parroquia" value="Parroquia18Tungurahua"> Huachi Grande
                        <button class="info-btn" onclick="showPopup('Parroquias:Huachi Grande', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia19tungurahua" name="parroquia" value="Parroquia19Tungurahua"> Izamba
                        <button class="info-btn" onclick="showPopup('Parroquias:Izamba', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia20tungurahua" name="parroquia" value="Parroquia20Tungurahua"> Juan Benigno Vela
                        <button class="info-btn" onclick="showPopup('Parroquias:Juan Benigno Vela', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia21tungurahua" name="parroquia" value="Parroquia21Tungurahua"> Lligua
                        <button class="info-btn" onclick="showPopup('Parroquias:LLigua', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia22tungurahua" name="parroquia" value="Parroquia22Tungurahua"> Los Andes
                        <button class="info-btn" onclick="showPopup('Parroquias:Los Andes', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia23tungurahua" name="parroquia" value="Parroquia23Tungurahua"> Marcos Espinel Chacata
                       <button class="info-btn" onclick="showPopup('Parroquias:Marcos Espinel Chacata', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia24tungurahua" name="parroquia" value="Parroquia24Tungurahua"> Mocha
                        <button class="info-btn" onclick="showPopup('Parroquias:Mocha', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia25tungurahua" name="parroquia" value="Parroquia25Tungurahua"> Montalvo
                        <button class="info-btn" onclick="showPopup('Parroquias:Montalvo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia26tungurahua" name="parroquia" value="Parroquia26Tungurahua"> Pasa
                        <button class="info-btn" onclick="showPopup('Parroquias:Pasa', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia27tungurahua" name="parroquia" value="Parroquia27Tungurahua"> Patate
                        <button class="info-btn" onclick="showPopup('Parroquias:Patate', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia28tungurahua" name="parroquia" value="Parroquia28Tungurahua"> Pelileo
                        <button class="info-btn" onclick="showPopup('Parroquias:Pelileo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia29tungurahua" name="parroquia" value="Parroquia29Tungurahua"> Picaigua
                        <button class="info-btn" onclick="showPopup('Parroquias:Picaigua', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia30tungurahua" name="parroquia" value="Parroquia30Tungurahua"> Pilaguin
                        <button class="info-btn" onclick="showPopup('Parroquias:Pilaguin', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia31tungurahua" name="parroquia" value="Parroquia31Tungurahua"> Pillaro
                        <button class="info-btn" onclick="showPopup('Parroquias:Pillaro', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia32tungurahua" name="parroquia" value="Parroquia32Tungurahua"> Pinguili
                        <button class="info-btn" onclick="showPopup('Parroquias:Pinguili', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia33tungurahua" name="parroquia" value="Parroquia33Tungurahua"> Presidente Urbina
                        <button class="info-btn" onclick="showPopup('Parroquias:Presidente Urbina', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia34tungurahua" name="parroquia" value="Parroquia34Tungurahua"> Quero
                        <button class="info-btn" onclick="showPopup('Parroquias:Quero', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia35tungurahua" name="parroquia" value="Parroquia35Tungurahua"> Quinchicoto
                        <button class="info-btn" onclick="showPopup('Parroquias:Quinchicoto', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia36tungurahua" name="parroquia" value="Parroquia36Tungurahua"> Quisapincha
                        <button class="info-btn" onclick="showPopup('Parroquias:Quisapincha', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia37tungurahua" name="parroquia" value="Parroquia37Tungurahua"> Rio Negro
                        <button class="info-btn" onclick="showPopup('Parroquias:Rio Negro', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia38tungurahua" name="parroquia" value="Parroquia38Tungurahua"> Rio Verde
                        <button class="info-btn" onclick="showPopup('Parroquias:Rio Verde', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia39tungurahua" name="parroquia" value="Parroquia39Tungurahua"> Rumichaca
                        <button class="info-btn" onclick="showPopup('Parroquias:Rumichaca', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia40tungurahua" name="parroquia" value="Parroquia40Tungurahua"> Rumipamba
                        <button class="info-btn" onclick="showPopup('Parroquias:Rumipamba', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia41tungurahua" name="parroquia" value="Parroquia41Tungurahua"> Salasaca
                        <button class="info-btn" onclick="showPopup('Parroquias:Salasaca', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia42tungurahua" name="parroquia" value="Parroquia42Tungurahua"> San Andres
                        <button class="info-btn" onclick="showPopup('Parroquias:San Andres2', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia43tungurahua" name="parroquia" value="Parroquia43Tungurahua"> San Bartolome de Pinllog
                        <button class="info-btn" onclick="showPopup('Parroquias:San Bartolome de Pinllog', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia44tungurahua" name="parroquia" value="Parroquia44Tungurahua"> San Fernando
                        <button class="info-btn" onclick="showPopup('Parroquias:San fernando', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia45tungurahua" name="parroquia" value="Parroquia45Tungurahua"> San Jose de Poalo
                        <button class="info-btn" onclick="showPopup('Parroquias:San Jose de Poalo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia46tungurahua" name="parroquia" value="Parroquia46Tungurahua"> San Miguelito
                        <button class="info-btn" onclick="showPopup('Parroquias:San Miguelito', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia47tungurahua" name="parroquia" value="Parroquia47Tungurahua"> Santa Rosa
                        <button class="info-btn" onclick="showPopup('Parroquias:Santa Rosa', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia48tungurahua" name="parroquia" value="Parroquia48Tungurahua"> Sucre
                        <button class="info-btn" onclick="showPopup('Parroquias:Sucre', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia49tungurahua" name="parroquia" value="Parroquia49Tungurahua"> Tisaleo
                        <button class="info-btn" onclick="showPopup('Parroquias:Tisaleo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia50tungurahua" name="parroquia" value="Parroquia50Tungurahua"> Totoras
                        <button class="info-btn" onclick="showPopup('Parroquias:Totoras', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia51tungurahua" name="parroquia" value="Parroquia51Tungurahua"> Ulba
                        <button class="info-btn" onclick="showPopup('Parroquias:Ulba', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia52tungurahua" name="parroquia" value="Parroquia52Tungurahua"> Unamuncho
                        <button class="info-btn" onclick="showPopup('Parroquias:Unamuncho', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia53tungurahua" name="parroquia" value="Parroquia53Tungurahua"> Yanayacu
                        <button class="info-btn" onclick="showPopup('Parroquias:Yanayacu', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        
                        
                    </ul>
                </li>
                <li>
                    <span>Parroquias de Bolívar</span>
                    <ul class="nested-options" style="display: none;">
                        <li><input type="checkbox" id="parroquia1bolivar" name="parroquia" value="Parroquia1Bolivar"> Las Naves
                        <button class="info-btn" onclick="showPopup('Parroquias:Las Naves', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia2bolivar" name="parroquia" value="Parroquia2Bolivar"> San Luis de Pambil
                        <button class="info-btn" onclick="showPopup('Parroquias:San Luis de Pambil', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia3bolivar" name="parroquia" value="Parroquia3Bolivar"> Facundo Vela
                        <button class="info-btn" onclick="showPopup('Parroquias:Facunda Vela', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia4bolivar" name="parroquia" value="Parroquia4Bolivar"> Simiatug
                        <button class="info-btn" onclick="showPopup('Parroquias:Simiatug', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia5bolivar" name="parroquia" value="Parroquia5Bolivar"> Salinas
                        <button class="info-btn" onclick="showPopup('Parroquias:Salinas', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia6bolivar" name="parroquia" value="Parroquia6Bolivar"> Echeandia
                       <button class="info-btn" onclick="showPopup('Parroquias:Echeandia', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia7bolivar" name="parroquia" value="Parroquia7Bolivar"> Guaranda
                        <button class="info-btn" onclick="showPopup('Parroquias:Guaranda', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia8bolivar" name="parroquia" value="Parroquia8Bolivar"> Julio E Moreno
                        <button class="info-btn" onclick="showPopup('Parroquias:Julio E Moreno', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia9bolivar" name="parroquia" value="Parroquia9Bolivar"> Caluma
                        <button class="info-btn" onclick="showPopup('Parroquias:Caluma', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia10bolivar" name="parroquia" value="Parroquia10Bolivar"> Santa Fe
                        <button class="info-btn" onclick="showPopup('Parroquias:Santa Fe', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia11bolivar" name="parroquia" value="Parroquia11Bolivar"> Asuncion
                        <button class="info-btn" onclick="showPopup('Parroquias:Asuncion', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia12bolivar" name="parroquia" value="Parroquia12Bolivar"> Magdalena
                        <button class="info-btn" onclick="showPopup('Parroquias:Magdalena', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia13bolivar" name="parroquia" value="Parroquia13Bolivar"> San Jose de Chimbo
                        <button class="info-btn" onclick="showPopup('Parroquias:San Jose de Chimbo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia14bolivar" name="parroquia" value="Parroquia14Bolivar"> San Sebastian
                        <button class="info-btn" onclick="showPopup('Parroquias:San Sebastian', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia15bolivar" name="parroquia" value="Parroquia15Bolivar"> Telimbela
                        <button class="info-btn" onclick="showPopup('Parroquias:Telimbela', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia16bolivar" name="parroquia" value="Parroquia16Bolivar"> San Simon
                        <button class="info-btn" onclick="showPopup('Parroquias:San Simon', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia17bolivar" name="parroquia" value="Parroquia17Bolivar"> San Lorenzo
                        <button class="info-btn" onclick="showPopup('Parroquias:San Lorenzo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia18bolivar" name="parroquia" value="Parroquia18Bolivar"> Santiago
                        <button class="info-btn" onclick="showPopup('Parroquias:Santiago', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia19bolivar" name="parroquia" value="Parroquia19Bolivar"> San Vicente
                        <button class="info-btn" onclick="showPopup('Parroquias:San Vicente', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia20bolivar" name="parroquia" value="Parroquia20Bolivar"> San Miguel
                        <button class="info-btn" onclick="showPopup('Parroquias:San Miguel', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia21bolivar" name="parroquia" value="Parroquia21Bolivar"> San Pablo
                        <button class="info-btn" onclick="showPopup('Parroquias:San Pablo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia22bolivar" name="parroquia" value="Parroquia22Bolivar"> Balsapamba
                        <button class="info-btn" onclick="showPopup('Parroquias:Balsapamba', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia23bolivar" name="parroquia" value="Parroquia23Bolivar"> Bilovan
                        <button class="info-btn" onclick="showPopup('Parroquias:Bilovan', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia24bolivar" name="parroquia" value="Parroquia24Bolivar"> Regulo de Mora
                        <button class="info-btn" onclick="showPopup('Parroquias:Regulo de Mora', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia25bolivar" name="parroquia" value="Parroquia25Bolivar"> Chillanes
                        <button class="info-btn" onclick="showPopup('Parroquias:Chillanes', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                        <li><input type="checkbox" id="parroquia26bolivar" name="parroquia" value="Parroquia26Bolivar"> San Jose del Tambo
                        <button class="info-btn" onclick="showPopup('Parroquias:San Jose del Tambo', 'http://localhost:8080/geoserver/Parroquias')">?</button>
                        </li>
                    </ul>
                </li>
            </ul>

                    <li id="unidades-hidrograficas">Unidades Hidrográficas</li>
                    <ul class="submenu" id="unidadeshidrografica-options">
                        <li><input type="checkbox" id="unidad3" name="unidadeshidrografica" value="Unidad3"> Unidad Hidrografica N3
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N3', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad3s" name="unidadeshidrografica" value="Unidad3s"> Unidad Hidrografica N3 Santiago
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N3_Santiago', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad4" name="unidadeshidrografica" value="Unidad4"> Unidad Hidrografica N4
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N4', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad5" name="unidadeshidrografica" value="Unidad5"> Unidad Hidrografica N5
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N5', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad6" name="unidadeshidrografica" value="Unidad6"> Unidad Hidrografica N6
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N6', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad7" name="unidadeshidrografica" value="Unidad7"> Unidad Hidrografica N7
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N7_tungurahua', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad8" name="unidadeshidrografica" value="Unidad8"> Unidad Hidrografica N8
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N8_tungurahua', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="unidad9" name="unidadeshidrografica" value="Unidad9"> Unidad Hidrografica N9
                        <button class="info-btn" onclick="showPopup('Unidades_Hidrigraficas:Unidad_Hidrigrafica_N9_tungurahua', 'http://localhost:8080/geoserver/Unidades_Hidrigraficas')">?</button>
                        </li>
                        <li><input type="checkbox" id="chimbon5" name="provincia" value="Chimbon5"> Chimbo N5
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Chimbo_N5', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        <li><input type="checkbox" id="chimbon6" name="provincia" value="Chimbon6"> Chimbo N6
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Chimbo_N6', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        <li><input type="checkbox" id="piñanaton5" name="provincia" value="Piñanaton5"> Piñanato 5
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Piñanato_N5', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        <li><input type="checkbox" id="piñanaton6" name="provincia" value="Piñanaton6"> Piñanato 6
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Piñanato_N6', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        <li><input type="checkbox" id="suquibin5" name="provincia" value="Suquibin5"> Suquibi 5
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Suquibi_N5', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        <li><input type="checkbox" id="suquibin6" name="provincia" value="Suquibin6"> Suquibi 6
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Suquibi_N6', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        </ul>

                    <li id="estudio-tungurahua">Estudio Multitemporal Tungurahua</li>
                    <ul class="submenu" id="estudio-options">
                        <li><input type="checkbox" id="suelogualcanga" name="provincia" value="Suelogualcanga"> Uso de Suelo y Cobertur Vegetal Gualcanga
                        <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Cobertura_y_Uso_Gualcanga', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                        </li>
                        <li><input type="checkbox" id="suelojatuchimbana" name="provincia" value="Suelojatuchimbana"> Uso de Suelo y Cobertur Vegetal Jatuchimbana
                        <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Cobertura_y_Uso_Jatuchimbana', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                        </li>
                        <li><input type="checkbox" id="suelogualcanga2000" name="provincia" value="Suelogualcanga2000"> Uso de Suelo y Cobertur Vegetal Gualcanga 2000
                        <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Gualcanga_2000', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                        </li>
                         <li><input type="checkbox" id="suelogualcanga2010" name="provincia" value="Suelogualcanga2010"> Uso de Suelo y Cobertur Vegetal Gualcanga 2010
                        <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Gualcanga_2010', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                         </li>
                          <li><input type="checkbox" id="suelogualcanga2020" name="provincia" value="Suelogualcanga2020"> Uso de Suelo y Cobertur Vegetal Gualcanga 2020
                          <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Gualcanga_2020', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                          </li>
                           <li><input type="checkbox" id="suelojatuchimbana2000" name="provincia" value="Suelojatuchimbana2000"> Uso de Suelo y Cobertur Vegetal Jatuchimbana 2000
                           <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Jatuchimbana_2000', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                           </li>
                            <li><input type="checkbox" id="suelojatuchimbana2010" name="provincia" value="Suelojatuchimbana2010"> Uso de Suelo y Cobertur Vegetal Jatuchimbana 2010
                            <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Jatuchimbana_2010', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                            </li>
                            <li><input type="checkbox" id="suelojatuchimbana2020" name="provincia" value="Suelojatuchimbana2020"> Uso de Suelo y Cobertur Vegetal Jatuchimbana 2020
                            <button class="info-btn" onclick="showPopup('Estudio_Multitemporal:Jatuchimbana 2020', 'http://localhost:8080/geoserver/Estudio_Multitemporal')">?</button>
                            </li>
                    </ul>

                    <li id="bolivar-cuencas">Bolivar Acus Cuencas</li>
                    <ul class="submenu" id="cuencas-options">
                        <li><input type="checkbox" id="npiezometrico" name="provincia" value="Npiezometrico"> Niveles Piezometricos
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:niveles_piezometricos', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                        <li><input type="checkbox" id="acusbolivar" name="provincia" value="Acusbolivar"> Acus Bolivar
                        <button class="info-btn" onclick="showPopup('Bolivar_Acus_Cuencas:Acus_Bolivar', 'http://localhost:8080/geoserver/Bolivar_Acus_Cuencas')">?</button>
                        </li>
                     
                    </ul>
                    



                </ul>
            `;
            // Mostrar/ocultar Provincias
            div.querySelector('#provincias').addEventListener('click', function () {
                var submenu = document.querySelector('#provincia-options');
                submenu.style.display = submenu.style.display === 'none' || !submenu.style.display ? 'block' : 'none';
            });
             // Mostrar/ocultar Cantones
             div.querySelector('#cantones').addEventListener('click', function () {
                var submenu = document.querySelector('#cantone-options');
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
             });
            // Mostrar/ocultar sub-opciones de cantones
             div.querySelectorAll('#cantone-options > li > span').forEach(function(element) {
                 element.addEventListener('click', function() {
                    var nestedOptions = this.nextElementSibling;
                    nestedOptions.style.display = nestedOptions.style.display === 'none' ? 'block' : 'none';
                });
            });

            // Mostrar/ocultar Parroquias
            div.querySelector('#parroquias').addEventListener('click', function () {
                var submenu = document.querySelector('#parroquia-options');
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
            });

            // Mostrar/ocultar sub-opciones de parroquias
            div.querySelectorAll('#parroquia-options > li > span').forEach(function(element) {
            element.addEventListener('click', function() {
                 var nestedOptions = this.nextElementSibling;
                 nestedOptions.style.display = nestedOptions.style.display === 'none' ? 'block' : 'none';
                });
            });

            // Mostrar/ocultar Unidades Hidrograficas
            div.querySelector('#unidades-hidrograficas').addEventListener('click', function () {
                var submenu = document.querySelector('#unidadeshidrografica-options');
                submenu.style.display = submenu.style.display === 'none' || !submenu.style.display ? 'block' : 'none';
            });
        
             // Mostrar/ocultar Estudio Multitemporal
            div.querySelector('#estudio-tungurahua').addEventListener('click', function () {
                var submenu = document.querySelector('#estudio-options');
                submenu.style.display = submenu.style.display === 'none' || !submenu.style.display ? 'block' : 'none';
            });

            // Mostrar/ocultar Bolivar Acus
            div.querySelector('#bolivar-cuencas').addEventListener('click', function () {
                var submenu = document.querySelector('#cuencas-options');
                submenu.style.display = submenu.style.display === 'none' || !submenu.style.display ? 'block' : 'none';
            });
            return div;

        };
        // Función para mostrar la ventana emergente
        function showPopup(layerName, geoserverUrl) {
            const popup = document.getElementById('popup');
            popup.style.display = 'block'; // Muestra la ventana emergente
            popup.innerHTML = `
                <p>Información de la capa seleccionada:</p>
               
                <button onclick="descargarCapaGeografica('${layerName}', '${geoserverUrl}')">Descargar Shape</button>
                <button onclick="closePopup()">Cerrar</button>
            `;
        }
        

// Función para cerrar la ventana emergente
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

        

        // Añadir el control de subsecciones y el control de capas al mapa
        sectionControl.addTo(map);
        
        // Crear contenedor para los controles
        var controlContainer = L.DomUtil.create('div', 'control-container');
        controlContainer.id = 'control-container';
        document.body.appendChild(controlContainer);

        var controlsContainer = L.DomUtil.create('div', 'controls-container');
        controlsContainer.id = 'controls-container';
        document.body.appendChild(controlsContainer);

        // Mover los controles dentro del contenedor
        controlContainer.appendChild(document.querySelector('.leaflet-control-layers'));
        controlsContainer.appendChild(document.querySelector('#section-control'));
        
/*************************** */

// Crear el botón para contraer/expandir el cuadro de opciones
const collapseButton = document.createElement('button');
collapseButton.id = 'collapse-options';
collapseButton.innerHTML ='<i class="align-middle me-2" data-feather="chevrons-up"></i>'; // Ícono inicial del botón
collapseButton.style.cssText = `
    display: block;
    margin: 0px auto;
    padding: 5px;
    background-color: #1c1f2b ; /* Igual que el cuadro de opciones */
    color: white;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    font-size: 11px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Igual que el cuadro de opciones */
`;
document.querySelector('#section-control').appendChild(collapseButton);

// Función para contraer/expandir el cuadro de opciones
collapseButton.addEventListener('click', function () {
    const sectionControl = document.getElementById('section-control');
    if (sectionControl.classList.contains('collapsed')) {
        sectionControl.classList.remove('collapsed'); // Expandir cuadro
        sectionControl.style.height = 'auto';
        this.innerHTML = '<i class="align-middle me-2" data-feather="chevrons-up"></i>';
    } else {
        sectionControl.classList.add('collapsed'); // Contraer cuadro
        sectionControl.style.height = '50px';
        this.innerHTML = '<i class="align-middle me-2" data-feather="chevrons-down"></i>'; 
    }
    feather.replace();
});
////////////////////////////////////////

// Crear el botón para limpiar capas seleccionadas
const clearButton = document.createElement('button');
clearButton.id = 'clear-layers';
clearButton.innerHTML = 'Limpiar Capas';
clearButton.style.cssText = `
    display: block;
    margin: 10px auto;
    padding: 10px;
    background-color: red; /* Igual que el cuadro de opciones */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Igual que el cuadro de opciones */
`;
document.querySelector('#section-control').appendChild(clearButton);

// Función para limpiar las capas seleccionadas
clearButton.addEventListener('click', function () {
    // Deseleccionar todos los checkboxes
    document.querySelectorAll('#section-menu input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Remover capas visibles del mapa excepto las capas base
    map.eachLayer(layer => {
        if (layer !== osmLayer && layer !== googleSatLayer && layer !== googleBaseLayer) {
            map.removeLayer(layer); // Remover solo las capas que no son base
        }
    });
});

