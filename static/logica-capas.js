 // Lógica para activar/desactivar las capas de Provincias 
 var puntosChimborazoGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "nombre": "Chimborazo",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/6/60/Chimborazo_from_southwest.jpg",
            "regionId": 1
            },
            "geometry": {
                "coordinates": [-78.654, -1.664], // Coordenadas de Chimborazo
                "type": "Point"
            }
        }
    ]
};

// Crear la capa GeoJSON (pero sin agregarla aún al mapa)
var marcadorChimborazo = L.geoJSON(puntosChimborazoGeoJSON, {
    onEachFeature: function (feature, layer) {
        console.log("🔵 Procesando región:", feature.properties.regionId);
        var contenidoPopup = `<b>${feature.properties.nombre}</b>`;

        // 🔹 URL absoluta para obtener datos de ICA
        let icaUrl = `http://localhost:3000/get-ica-data?regionId=${feature.properties.regionId}`;
        console.log("🟠 Solicitando ICA:", icaUrl);

        fetch(icaUrl)
            .then(response => {
                console.log("🟢 Respuesta ICA recibida:", response);
                if (!response.ok) {
                    console.error("❌ Error en la respuesta ICA:", response.status);
                    throw new Error(`Error ${response.status} en ICA`);
                }
                return response.json();
            })
            .then(data => {
                console.log("🟢 Datos de ICA obtenidos:", data);
                if (!(data && data.length > 0)) {
                    contenidoPopup += "<p>No hay datos de ICA disponibles.</p>";
                } else {
                    // Construir la tabla con los datos de ICA
                    var tabla = "<div class='popup-table-container'><table class='popup-table'><tr><th>Codigo de Muestra</th><th>Coordenada X</th><th>Coordenada Y</th><th>%OD</th><th>Coliformes fecales</th><th>pH</th><th>DBO5</th><th>Cambio de Temp</th><th>Fosfatos</th><th>Nitratos</th><th>Turbidez</th><th>TDS</th><th>ICA</th></tr>";

                    data.forEach(row => {
                        tabla += `<tr>
                           <td>${row["Codigo Muestra"]}</td>
                           <td>${row["Coordenada X"]}</td>
                           <td>${row["Coordenada Y"]}</td>
                            <td>${row["%OD ()"]}</td>
                            <td>${row["Coliformes fecales (NMP/100 mL)"]}</td>
                            <td>${row["pH"]}</td>
                            <td>${row["DBO5 (mg O2/L)"]}</td>
                            <td>${row["Cambio de Temp ºC"]}</td>
                            <td>${row["Fosfatos (mg/L)"]}</td>
                            <td>${row["Nitratos (mg/L)"]}</td>
                            <td>${row["Turbidez (NTU)"]}</td>
                            <td>${row["TDS (mg/L)"]}</td>
                            <td>${row["valor_ica"]}</td>
                        </tr>`;
                    });
                    tabla += "</table></div>";
                    contenidoPopup += tabla;
                }

                // 🔹 URL absoluta para obtener la predicción
                let prediccionUrl = `http://localhost:5000/prediccion?region_id=${feature.properties.regionId}`;
                console.log("🟠 Solicitando predicción:", prediccionUrl);

                return fetch(prediccionUrl);
            })
            .then(response => {
                console.log("🟢 Respuesta predicción recibida:", response);
                if (!response.ok) {
                    console.error("❌ Error en la respuesta de predicción:", response.status);
                    throw new Error(`Error ${response.status} en predicción`);
                }
                return response.json();
            })
            .then(prediccionData => {
                console.log("🟢 Datos de predicción obtenidos:", prediccionData);
                if (prediccionData.prediccion !== undefined) {
                    contenidoPopup += `<p><strong>Temperatura aproximada:</strong> ${prediccionData.prediccion.toFixed(2)}<strong>°C</strong> </p>`;
                } else {
                    contenidoPopup += `<p><strong>Predicción:</strong> No disponible</p>`;
                }
                console.log("🔵 Contenido final del popup:", contenidoPopup);
                layer.bindPopup(contenidoPopup);
            })
            .catch(error => {
                console.error("❌ Error en el proceso:", error);
                contenidoPopup += `<p><strong>Error al obtener datos.</strong></p>`;
                layer.bindPopup(contenidoPopup);
            });
    }
});


document.getElementById('chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(chimborazoLayer);
        map.addLayer(marcadorChimborazo);
    } else {
        map.removeLayer(marcadorChimborazo);
        map.removeLayer(chimborazoLayer);
    }
};

///////////////////////////////////////////////////

// Lógica para activar/desactivar las capas de Provincias

// GeoJSON de Tungurahua
var puntosTungurahuaGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "nombre": "Tungurahua",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Volc%C3%A1n_Tungurahua.jpg/640px-Volc%C3%A1n_Tungurahua.jpg",
                "regionId": 2 // ID para Tungurahua
            },
            "geometry": {
                "coordinates": [-78.442, -1.467], // Coordenadas del volcán Tungurahua
                "type": "Point"
            }
        }
    ]
};

// Crear la capa GeoJSON de Tungurahua
var marcadorTungurahua = L.geoJSON(puntosTungurahuaGeoJSON, {
    onEachFeature: function (feature, layer) {
        console.log("🔵 Procesando región:", feature.properties.regionId);
        var contenidoPopup = `<b>${feature.properties.nombre}</b>`;

        // 🔹 URL absoluta para obtener datos de ICA
        let icaUrl = `http://localhost:3000/get-ica-data?regionId=${feature.properties.regionId}`;
        console.log("🟠 Solicitando ICA:", icaUrl);

        fetch(icaUrl)
            .then(response => {
                console.log("🟢 Respuesta ICA recibida:", response);
                if (!response.ok) {
                    console.error("❌ Error en la respuesta ICA:", response.status);
                    throw new Error(`Error ${response.status} en ICA`);
                }
                return response.json();
            })
            .then(data => {
                console.log("🟢 Datos de ICA obtenidos:", data);
                if (!(data && data.length > 0)) {
                    contenidoPopup += "<p>No hay datos de ICA disponibles.</p>";
                } else {
                    // Construir la tabla con los datos de ICA
                    var tabla = "<div class='popup-table-container'><table class='popup-table'><tr><th>Codigo de Muestra</th><th>Coordenada X</th><th>Coordenada Y</th><th>%OD</th><th>Coliformes fecales</th><th>pH</th><th>DBO5</th><th>Cambio de Temp</th><th>Fosfatos</th><th>Nitratos</th><th>Turbidez</th><th>TDS</th><th>ICA</th></tr>";

                    data.forEach(row => {
                        tabla += `<tr>
                            <td>${row["Codigo Muestra"]}</td>
                            <td>${row["Coordenada X"]}</td>
                            <td>${row["Coordenada Y"]}</td>
                            <td>${row["%OD ()"]}</td>
                            <td>${row["Coliformes fecales (NMP/100 mL)"]}</td>
                            <td>${row["pH"]}</td>
                            <td>${row["DBO5 (mg O2/L)"]}</td>
                            <td>${row["Cambio de Temp ºC"]}</td>
                            <td>${row["Fosfatos (mg/L)"]}</td>
                            <td>${row["Nitratos (mg/L)"]}</td>
                            <td>${row["Turbidez (NTU)"]}</td>
                            <td>${row["TDS (mg/L)"]}</td>
                            <td>${row["valor_ica"]}</td>
                        </tr>`;
                    });
                    tabla += "</table></div>";
                    contenidoPopup += tabla;
                }

                // 🔹 URL absoluta para obtener la predicción
                let prediccionUrl = `http://localhost:5000/prediccion?region_id=${feature.properties.regionId}`;
                console.log("🟠 Solicitando predicción:", prediccionUrl);

                return fetch(prediccionUrl);
            })
            .then(response => {
                console.log("🟢 Respuesta predicción recibida:", response);
                if (!response.ok) {
                    console.error("❌ Error en la respuesta de predicción:", response.status);
                    throw new Error(`Error ${response.status} en predicción`);
                }
                return response.json();
            })
            .then(prediccionData => {
                console.log("🟢 Datos de predicción obtenidos:", prediccionData);
                if (prediccionData.prediccion !== undefined) {
                    contenidoPopup += `<p><strong>Temperatura aproximada:</strong> ${prediccionData.prediccion.toFixed(2)}<strong>°C</strong> </p>`;
                } else {
                    contenidoPopup += `<p><strong>Predicción:</strong> No disponible</p>`;
                }
                console.log("🔵 Contenido final del popup:", contenidoPopup);
                layer.bindPopup(contenidoPopup);
            })
            .catch(error => {
                console.error("❌ Error en el proceso:", error);
                contenidoPopup += `<p><strong>Error al obtener datos.</strong></p>`;
                layer.bindPopup(contenidoPopup);
            });
    }
});



// Lógica para activar/desactivar la capa de Tungurahua
document.getElementById('tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(tungurahuaLayer);
        map.addLayer(marcadorTungurahua);
    } else {
        map.removeLayer(marcadorTungurahua);
        map.removeLayer(tungurahuaLayer);
    }
};

// GeoJSON de Bolívar
var puntosBolivarGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "nombre": "Bolívar",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Guaranda.JPG/640px-Guaranda.JPG",
                "regionId": 3 // ID para Bolívar
            },
            "geometry": {
                "coordinates": [-79.000, -1.600], // Coordenadas de Guaranda, Bolívar
                "type": "Point"
            }
        }
    ]
};

// Crear la capa GeoJSON de Bolívar
var marcadorBolivar = L.geoJSON(puntosBolivarGeoJSON, {
    onEachFeature: function (feature, layer) {
        console.log("🔵 Procesando región:", feature.properties.regionId);
        var contenidoPopup = `<b>${feature.properties.nombre}</b>`;

        // 🔹 URL absoluta para obtener datos de ICA
        let icaUrl = `http://localhost:3000/get-ica-data?regionId=${feature.properties.regionId}`;
        console.log("🟠 Solicitando ICA:", icaUrl);

        fetch(icaUrl)
            .then(response => {
                console.log("🟢 Respuesta ICA recibida:", response);
                if (!response.ok) {
                    console.error("❌ Error en la respuesta ICA:", response.status);
                    throw new Error(`Error ${response.status} en ICA`);
                }
                return response.json();
            })
            .then(data => {
                console.log("🟢 Datos de ICA obtenidos:", data);
                if (!(data && data.length > 0)) {
                    contenidoPopup += "<p>No hay datos de ICA disponibles.</p>";
                } else {
                    // Construir la tabla con los datos de ICA
                    var tabla = "<div class='popup-table-container'><table class='popup-table'><tr><th>Codigo de Muestra</th><th>Coordenada X</th><th>Coordenada Y</th><th>%OD</th><th>Coliformes fecales</th><th>pH</th><th>DBO5</th><th>Cambio de Temp</th><th>Fosfatos</th><th>Nitratos</th><th>Turbidez</th><th>TDS</th><th>ICA</th></tr>";

                    data.forEach(row => {
                        tabla += `<tr>
                            <td>${row["Codigo Muestra"]}</td>
                            <td>${row["Coordenada X"]}</td>
                            <td>${row["Coordenada Y"]}</td>
                            <td>${row["%OD ()"]}</td>
                            <td>${row["Coliformes fecales (NMP/100 mL)"]}</td>
                            <td>${row["pH"]}</td>
                            <td>${row["DBO5 (mg O2/L)"]}</td>
                            <td>${row["Cambio de Temp ºC"]}</td>
                            <td>${row["Fosfatos (mg/L)"]}</td>
                            <td>${row["Nitratos (mg/L)"]}</td>
                            <td>${row["Turbidez (NTU)"]}</td>
                            <td>${row["TDS (mg/L)"]}</td>
                            <td>${row["valor_ica"]}</td>
                        </tr>`;
                    });
                    tabla += "</table></div>";
                    contenidoPopup += tabla;
                }

                // 🔹 URL absoluta para obtener la predicción
                let prediccionUrl = `http://localhost:5000/prediccion?region_id=${feature.properties.regionId}`;
                console.log("🟠 Solicitando predicción:", prediccionUrl);

                return fetch(prediccionUrl);
            })
            .then(response => {
                console.log("🟢 Respuesta predicción recibida:", response);
                if (!response.ok) {
                    console.error("❌ Error en la respuesta de predicción:", response.status);
                    throw new Error(`Error ${response.status} en predicción`);
                }
                return response.json();
            })
            .then(prediccionData => {
                console.log("🟢 Datos de predicción obtenidos:", prediccionData);
                if (prediccionData.prediccion !== undefined) {
                    contenidoPopup += `<p><strong>Temperatura aproximada:</strong> ${prediccionData.prediccion.toFixed(2)}<strong>°C</strong> </p>`;
                } else {
                    contenidoPopup += `<p><strong>Predicción:</strong> No disponible</p>`;
                }
                console.log("🔵 Contenido final del popup:", contenidoPopup);
                layer.bindPopup(contenidoPopup);
            })
            .catch(error => {
                console.error("❌ Error en el proceso:", error);
                contenidoPopup += `<p><strong>Error al obtener datos.</strong></p>`;
                layer.bindPopup(contenidoPopup);
            });
    }
});


// Lógica para activar/desactivar la capa de Bolívar
document.getElementById('bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(bolivarLayer);
        map.addLayer(marcadorBolivar);
    } else {
        map.removeLayer(marcadorBolivar);
        map.removeLayer(bolivarLayer);
    }
};



/////////////////////////////////////////



// Lógica para activar/desactivar las capas de Cantones Chimborazo
document.getElementById('canton1chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton1chimborazoLayer);
    } else {
        map.removeLayer(canton1chimborazoLayer);
    }
};
document.getElementById('canton2chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton2chimborazoLayer);
    } else {
        map.removeLayer(canton2chimborazoLayer);
    }
};document.getElementById('canton3chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton3chimborazoLayer);
    } else {
        map.removeLayer(canton3chimborazoLayer);
    }
};document.getElementById('canton4chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton4chimborazoLayer);
    } else {
        map.removeLayer(canton4chimborazoLayer);
    }
};document.getElementById('canton5chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton5chimborazoLayer);
    } else {
        map.removeLayer(canton5chimborazoLayer);
    }
};document.getElementById('canton6chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton6chimborazoLayer);
    } else {
        map.removeLayer(canton6chimborazoLayer);
    }
};document.getElementById('canton7chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton7chimborazoLayer);
    } else {
        map.removeLayer(canton7chimborazoLayer);
    }
};document.getElementById('canton8chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton8chimborazoLayer);
    } else {
        map.removeLayer(canton8chimborazoLayer);
    }
};document.getElementById('canton9chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton9chimborazoLayer);
    } else {
        map.removeLayer(canton9chimborazoLayer);
    }
};
document.getElementById('canton10chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(canton10chimborazoLayer);
    } else {
        map.removeLayer(canton10chimborazoLayer);
    }
};

// Lógica para activar/desactivar las capas de Cantones Tungurahua
document.getElementById('canton1tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton1tungurahuaLayer);
    } else {
        map.removeLayer(canton1tungurahuaLayer);
    }
};
document.getElementById('canton2tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton2tungurahuaLayer);
    } else {
        map.removeLayer(canton2tungurahuaLayer);
    }
};
document.getElementById('canton3tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton3tungurahuaLayer);
    } else {
        map.removeLayer(canton3tungurahuaLayer);
    }
};
document.getElementById('canton4tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton4tungurahuaLayer);
    } else {
        map.removeLayer(canton4tungurahuaLayer);
    }
};
document.getElementById('canton5tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton5tungurahuaLayer);
    } else {
        map.removeLayer(canton5tungurahuaLayer);
    }
};
document.getElementById('canton6tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton6tungurahuaLayer);
    } else {
        map.removeLayer(canton6tungurahuaLayer);
    }
};
document.getElementById('canton7tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton7tungurahuaLayer);
    } else {
        map.removeLayer(canton7tungurahuaLayer);
    }
};
document.getElementById('canton8tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton8tungurahuaLayer);
    } else {
        map.removeLayer(canton8tungurahuaLayer);
    }
};
document.getElementById('canton9tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(canton9tungurahuaLayer);
    } else {
        map.removeLayer(canton9tungurahuaLayer);
    }
};

// Lógica para activar/desactivar las capas de Cantones Bolivar
document.getElementById('canton1bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton1bolivarLayer);
    } else {
        map.removeLayer(canton1bolivarLayer);
    }
};
document.getElementById('canton2bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton2bolivarLayer);
    } else {
        map.removeLayer(canton2bolivarLayer);
    }
};
document.getElementById('canton3bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton3bolivarLayer);
    } else {
        map.removeLayer(canton3bolivarLayer);
    }
};
document.getElementById('canton4bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton4bolivarLayer);
    } else {
        map.removeLayer(canton4bolivarLayer);
    }
};
document.getElementById('canton5bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton5bolivarLayer);
    } else {
        map.removeLayer(canton5bolivarLayer);
    }
};
document.getElementById('canton6bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton6bolivarLayer);
    } else {
        map.removeLayer(canton6bolivarLayer);
    }
};
document.getElementById('canton7bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(canton7bolivarLayer);
    } else {
        map.removeLayer(canton7bolivarLayer);
    }
};
// Lógica para activar/desactivar las capas de Parroquias Chimborazo
document.getElementById('parroquia1chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia1chimborazoLayer);
    } else {
        map.removeLayer(parroquia1chimborazoLayer);
    }
};
document.getElementById('parroquia2chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia2chimborazoLayer);
    } else {
        map.removeLayer(parroquia2chimborazoLayer);
    }
};
document.getElementById('parroquia3chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia3chimborazoLayer);
    } else {
        map.removeLayer(parroquia3chimborazoLayer);
    }
};
document.getElementById('parroquia4chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia4chimborazoLayer);
    } else {
        map.removeLayer(parroquia4chimborazoLayer);
    }
};
document.getElementById('parroquia5chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia5chimborazoLayer);
    } else {
        map.removeLayer(parroquia5chimborazoLayer);
    }
};
document.getElementById('parroquia6chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia6chimborazoLayer);
    } else {
        map.removeLayer(parroquia6chimborazoLayer);
    }
};
document.getElementById('parroquia7chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia7chimborazoLayer);
    } else {
        map.removeLayer(parroquia7chimborazoLayer);
    }
};
document.getElementById('parroquia8chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia8chimborazoLayer);
    } else {
        map.removeLayer(parroquia8chimborazoLayer);
    }
};
document.getElementById('parroquia9chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia9chimborazoLayer);
    } else {
        map.removeLayer(parroquia9chimborazoLayer);
    }
};
document.getElementById('parroquia10chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia10chimborazoLayer);
    } else {
        map.removeLayer(parroquia10chimborazoLayer);
    }
};
document.getElementById('parroquia11chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia11chimborazoLayer);
    } else {
        map.removeLayer(parroquia11chimborazoLayer);
    }
};
document.getElementById('parroquia12chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia12chimborazoLayer);
    } else {
        map.removeLayer(parroquia12chimborazoLayer);
    }
};
document.getElementById('parroquia13chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia13chimborazoLayer);
    } else {
        map.removeLayer(parroquia13chimborazoLayer);
    }
};
document.getElementById('parroquia14chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia14chimborazoLayer);
    } else {
        map.removeLayer(parroquia14chimborazoLayer);
    }
};
document.getElementById('parroquia15chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia15chimborazoLayer);
    } else {
        map.removeLayer(parroquia15chimborazoLayer);
    }
};
document.getElementById('parroquia16chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia16chimborazoLayer);
    } else {
        map.removeLayer(parroquia16chimborazoLayer);
    }
};
document.getElementById('parroquia17chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia17chimborazoLayer);
    } else {
        map.removeLayer(parroquia17chimborazoLayer);
    }
};
document.getElementById('parroquia18chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia18chimborazoLayer);
    } else {
        map.removeLayer(parroquia18chimborazoLayer);
    }
};
document.getElementById('parroquia19chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia19chimborazoLayer);
    } else {
        map.removeLayer(parroquia19chimborazoLayer);
    }
};
document.getElementById('parroquia20chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia20chimborazoLayer);
    } else {
        map.removeLayer(parroquia20chimborazoLayer);
    }
};
document.getElementById('parroquia21chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia21chimborazoLayer);
    } else {
        map.removeLayer(parroquia21chimborazoLayer);
    }
};
document.getElementById('parroquia22chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia22chimborazoLayer);
    } else {
        map.removeLayer(parroquia22chimborazoLayer);
    }
};
document.getElementById('parroquia23chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia23chimborazoLayer);
    } else {
        map.removeLayer(parroquia23chimborazoLayer);
    }
};
document.getElementById('parroquia24chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia24chimborazoLayer);
    } else {
        map.removeLayer(parroquia24chimborazoLayer);
    }
};
document.getElementById('parroquia25chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia25chimborazoLayer);
    } else {
        map.removeLayer(parroquia25chimborazoLayer);
    }
};
document.getElementById('parroquia26chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia26chimborazoLayer);
    } else {
        map.removeLayer(parroquia26chimborazoLayer);
    }
};
document.getElementById('parroquia27chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia27chimborazoLayer);
    } else {
        map.removeLayer(parroquia27chimborazoLayer);
    }
};
document.getElementById('parroquia28chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia28chimborazoLayer);
    } else {
        map.removeLayer(parroquia28chimborazoLayer);
    }
};
document.getElementById('parroquia29chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia29chimborazoLayer);
    } else {
        map.removeLayer(parroquia29chimborazoLayer);
    }
};
document.getElementById('parroquia30chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia30chimborazoLayer);
    } else {
        map.removeLayer(parroquia30chimborazoLayer);
    }
};
document.getElementById('parroquia31chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia31chimborazoLayer);
    } else {
        map.removeLayer(parroquia31chimborazoLayer);
    }
};
document.getElementById('parroquia32chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia32chimborazoLayer);
    } else {
        map.removeLayer(parroquia32chimborazoLayer);
    }
};
document.getElementById('parroquia33chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia33chimborazoLayer);
    } else {
        map.removeLayer(parroquia33chimborazoLayer);
    }
};
document.getElementById('parroquia34chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia34chimborazoLayer);
    } else {
        map.removeLayer(parroquia34chimborazoLayer);
    }
};
document.getElementById('parroquia35chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia35chimborazoLayer);
    } else {
        map.removeLayer(parroquia35chimborazoLayer);
    }
};
document.getElementById('parroquia36chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia36chimborazoLayer);
    } else {
        map.removeLayer(parroquia36chimborazoLayer);
    }
};
document.getElementById('parroquia37chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia37chimborazoLayer);
    } else {
        map.removeLayer(parroquia37chimborazoLayer);
    }
};
document.getElementById('parroquia38chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia38chimborazoLayer);
    } else {
        map.removeLayer(parroquia38chimborazoLayer);
    }
};
document.getElementById('parroquia39chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia39chimborazoLayer);
    } else {
        map.removeLayer(parroquia39chimborazoLayer);
    }
};
document.getElementById('parroquia40chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia40chimborazoLayer);
    } else {
        map.removeLayer(parroquia40chimborazoLayer);
    }
};
document.getElementById('parroquia41chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia41chimborazoLayer);
    } else {
        map.removeLayer(parroquia41chimborazoLayer);
    }
};
document.getElementById('parroquia42chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia42chimborazoLayer);
    } else {
        map.removeLayer(parroquia42chimborazoLayer);
    }
};
document.getElementById('parroquia43chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia43chimborazoLayer);
    } else {
        map.removeLayer(parroquia43chimborazoLayer);
    }
};
document.getElementById('parroquia44chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia44chimborazoLayer);
    } else {
        map.removeLayer(parroquia44chimborazoLayer);
    }
};
document.getElementById('parroquia45chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia45chimborazoLayer);
    } else {
        map.removeLayer(parroquia45chimborazoLayer);
    }
};
document.getElementById('parroquia46chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia46chimborazoLayer);
    } else {
        map.removeLayer(parroquia46chimborazoLayer);
    }
};
document.getElementById('parroquia47chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia47chimborazoLayer);
    } else {
        map.removeLayer(parroquia47chimborazoLayer);
    }
};
document.getElementById('parroquia48chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia48chimborazoLayer);
    } else {
        map.removeLayer(parroquia48chimborazoLayer);
    }
};
document.getElementById('parroquia49chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia49chimborazoLayer);
    } else {
        map.removeLayer(parroquia49chimborazoLayer);
    }
};
document.getElementById('parroquia50chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia50chimborazoLayer);
    } else {
        map.removeLayer(parroquia50chimborazoLayer);
    }
};
document.getElementById('parroquia51chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia51chimborazoLayer);
    } else {
        map.removeLayer(parroquia51chimborazoLayer);
    }
};
document.getElementById('parroquia52chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia52chimborazoLayer);
    } else {
        map.removeLayer(parroquia52chimborazoLayer);
    }
};
document.getElementById('parroquia53chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia53chimborazoLayer);
    } else {
        map.removeLayer(parroquia53chimborazoLayer);
    }
};
document.getElementById('parroquia54chimborazo').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia54chimborazoLayer);
    } else {
        map.removeLayer(parroquia54chimborazoLayer);
    }
};
// Lógica para activar/desactivar las capas de Parroquias Tungurahua

document.getElementById('parroquia1tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia1tungurahuaLayer);
    } else {
        map.removeLayer(parroquia1tungurahuaLayer);
    }
};
document.getElementById('parroquia2tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia2tungurahuaLayer);
    } else {
        map.removeLayer(parroquia2tungurahuaLayer);
    }
};
document.getElementById('parroquia3tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia3tungurahuaLayer);
    } else {
        map.removeLayer(parroquia3tungurahuaLayer);
    }
};
document.getElementById('parroquia4tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia4tungurahuaLayer);
    } else {
        map.removeLayer(parroquia4tungurahuaLayer);
    }
};
document.getElementById('parroquia5tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia5tungurahuaLayer);
    } else {
        map.removeLayer(parroquia5tungurahuaLayer);
    }
};
document.getElementById('parroquia6tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia6tungurahuaLayer);
    } else {
        map.removeLayer(parroquia6tungurahuaLayer);
    }
};
document.getElementById('parroquia7tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia7tungurahuaLayer);
    } else {
        map.removeLayer(parroquia7tungurahuaLayer);
    }
};
document.getElementById('parroquia8tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia8tungurahuaLayer);
    } else {
        map.removeLayer(parroquia8tungurahuaLayer);
    }
};
document.getElementById('parroquia9tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia9tungurahuaLayer);
    } else {
        map.removeLayer(parroquia9tungurahuaLayer);
    }
};
document.getElementById('parroquia10tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia10tungurahuaLayer);
    } else {
        map.removeLayer(parroquia10tungurahuaLayer);
    }
};
document.getElementById('parroquia11tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia11tungurahuaLayer);
    } else {
        map.removeLayer(parroquia11tungurahuaLayer);
    }
};
document.getElementById('parroquia12tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia12tungurahuaLayer);
    } else {
        map.removeLayer(parroquia12tungurahuaLayer);
    }
};
document.getElementById('parroquia13tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia13tungurahuaLayer);
    } else {
        map.removeLayer(parroquia13tungurahuaLayer);
    }
};
document.getElementById('parroquia14tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia14tungurahuaLayer);
    } else {
        map.removeLayer(parroquia14tungurahuaLayer);
    }
};
document.getElementById('parroquia15tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia15tungurahuaLayer);
    } else {
        map.removeLayer(parroquia15tungurahuaLayer);
    }
};
document.getElementById('parroquia16tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia16tungurahuaLayer);
    } else {
        map.removeLayer(parroquia16tungurahuaLayer);
    }
};
document.getElementById('parroquia17tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia17tungurahuaLayer);
    } else {
        map.removeLayer(parroquia17tungurahuaLayer);
    }
};
document.getElementById('parroquia18tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia18tungurahuaLayer);
    } else {
        map.removeLayer(parroquia18tungurahuaLayer);
    }
};
document.getElementById('parroquia19tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia19tungurahuaLayer);
    } else {
        map.removeLayer(parroquia19tungurahuaLayer);
    }
};
document.getElementById('parroquia20tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia20tungurahuaLayer);
    } else {
        map.removeLayer(parroquia20tungurahuaLayer);
    }
};
document.getElementById('parroquia21tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia21tungurahuaLayer);
    } else {
        map.removeLayer(parroquia21tungurahuaLayer);
    }
};
document.getElementById('parroquia22tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia22tungurahuaLayer);
    } else {
        map.removeLayer(parroquia22tungurahuaLayer);
    }
};
document.getElementById('parroquia23tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia23tungurahuaLayer);
    } else {
        map.removeLayer(parroquia23tungurahuaLayer);
    }
};
document.getElementById('parroquia24tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia24tungurahuaLayer);
    } else {
        map.removeLayer(parroquia24tungurahuaLayer);
    }
};
document.getElementById('parroquia25tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia25tungurahuaLayer);
    } else {
        map.removeLayer(parroquia25tungurahuaLayer);
    }
};
document.getElementById('parroquia26tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia26tungurahuaLayer);
    } else {
        map.removeLayer(parroquia26tungurahuaLayer);
    }
};
document.getElementById('parroquia27tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia27tungurahuaLayer);
    } else {
        map.removeLayer(parroquia27tungurahuaLayer);
    }
};
document.getElementById('parroquia28tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia28tungurahuaLayer);
    } else {
        map.removeLayer(parroquia28tungurahuaLayer);
    }
};
document.getElementById('parroquia29tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia29tungurahuaLayer);
    } else {
        map.removeLayer(parroquia29tungurahuaLayer);
    }
};
document.getElementById('parroquia30tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia30tungurahuaLayer);
    } else {
        map.removeLayer(parroquia30tungurahuaLayer);
    }
};
document.getElementById('parroquia31tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia31tungurahuaLayer);
    } else {
        map.removeLayer(parroquia31tungurahuaLayer);
    }
};
document.getElementById('parroquia32tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia32tungurahuaLayer);
    } else {
        map.removeLayer(parroquia32tungurahuaLayer);
    }
};
document.getElementById('parroquia33tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia33tungurahuaLayer);
    } else {
        map.removeLayer(parroquia33tungurahuaLayer);
    }
};
document.getElementById('parroquia34tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia34tungurahuaLayer);
    } else {
        map.removeLayer(parroquia34tungurahuaLayer);
    }
};
document.getElementById('parroquia35tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia35tungurahuaLayer);
    } else {
        map.removeLayer(parroquia35tungurahuaLayer);
    }
};
document.getElementById('parroquia36tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia36tungurahuaLayer);
    } else {
        map.removeLayer(parroquia36tungurahuaLayer);
    }
};
document.getElementById('parroquia37tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia37tungurahuaLayer);
    } else {
        map.removeLayer(parroquia37tungurahuaLayer);
    }
};
document.getElementById('parroquia38tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia38tungurahuaLayer);
    } else {
        map.removeLayer(parroquia38tungurahuaLayer);
    }
};
document.getElementById('parroquia39tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia39tungurahuaLayer);
    } else {
        map.removeLayer(parroquia39tungurahuaLayer);
    }
};
document.getElementById('parroquia40tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia40tungurahuaLayer);
    } else {
        map.removeLayer(parroquia40tungurahuaLayer);
    }
};
document.getElementById('parroquia41tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia41tungurahuaLayer);
    } else {
        map.removeLayer(parroquia41tungurahuaLayer);
    }
};
document.getElementById('parroquia42tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia42tungurahuaLayer);
    } else {
        map.removeLayer(parroquia42tungurahuaLayer);
    }
};
document.getElementById('parroquia43tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia43tungurahuaLayer);
    } else {
        map.removeLayer(parroquia43tungurahuaLayer);
    }
};
document.getElementById('parroquia44tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia44tungurahuaLayer);
    } else {
        map.removeLayer(parroquia44tungurahuaLayer);
    }
};
document.getElementById('parroquia45tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia45tungurahuaLayer);
    } else {
        map.removeLayer(parroquia45tungurahuaLayer);
    }
};
document.getElementById('parroquia46tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia46tungurahuaLayer);
    } else {
        map.removeLayer(parroquia46tungurahuaLayer);
    }
};
document.getElementById('parroquia47tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia47tungurahuaLayer);
    } else {
        map.removeLayer(parroquia47tungurahuaLayer);
    }
};
document.getElementById('parroquia48tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia48tungurahuaLayer);
    } else {
        map.removeLayer(parroquia48tungurahuaLayer);
    }
};
document.getElementById('parroquia49tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia49tungurahuaLayer);
    } else {
        map.removeLayer(parroquia49tungurahuaLayer);
    }
};
document.getElementById('parroquia50tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia50tungurahuaLayer);
    } else {
        map.removeLayer(parroquia50tungurahuaLayer);
    }
};
document.getElementById('parroquia51tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia51tungurahuaLayer);
    } else {
        map.removeLayer(parroquia51tungurahuaLayer);
    }
};
document.getElementById('parroquia52tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia52tungurahuaLayer);
    } else {
        map.removeLayer(parroquia52tungurahuaLayer);
    }
};
document.getElementById('parroquia53tungurahua').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia53tungurahuaLayer);
    } else {
        map.removeLayer(parroquia53tungurahuaLayer);
    }
};

// Lógica para activar/desactivar las capas de Parroquias  Bolivar

document.getElementById('parroquia1bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia1bolivarLayer);
    } else {
        map.removeLayer(parroquia1bolivarLayer);
    }
};
document.getElementById('parroquia2bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia2bolivarLayer);
    } else {
        map.removeLayer(parroquia2bolivarLayer);
    }
};
document.getElementById('parroquia3bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia3bolivarLayer);
    } else {
        map.removeLayer(parroquia3bolivarLayer);
    }
};
document.getElementById('parroquia4bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia4bolivarLayer);
    } else {
        map.removeLayer(parroquia4bolivarLayer);
    }
};
document.getElementById('parroquia5bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia5bolivarLayer);
    } else {
        map.removeLayer(parroquia5bolivarLayer);
    }
};
document.getElementById('parroquia6bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia6bolivarLayer);
    } else {
        map.removeLayer(parroquia6bolivarLayer);
    }
};
document.getElementById('parroquia7bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia7bolivarLayer);
    } else {
        map.removeLayer(parroquia7bolivarLayer);
    }
};
document.getElementById('parroquia8bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia8bolivarLayer);
    } else {
        map.removeLayer(parroquia8bolivarLayer);
    }
};
document.getElementById('parroquia9bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia9bolivarLayer);
    } else {
        map.removeLayer(parroquia9bolivarLayer);
    }
};
document.getElementById('parroquia10bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia10bolivarLayer);
    } else {
        map.removeLayer(parroquia10bolivarLayer);
    }
};
document.getElementById('parroquia11bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia11bolivarLayer);
    } else {
        map.removeLayer(parroquia11bolivarLayer);
    }
};
document.getElementById('parroquia12bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia12bolivarLayer);
    } else {
        map.removeLayer(parroquia12bolivarLayer);
    }
};
document.getElementById('parroquia13bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia13bolivarLayer);
    } else {
        map.removeLayer(parroquia13bolivarLayer);
    }
};
document.getElementById('parroquia14bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia14bolivarLayer);
    } else {
        map.removeLayer(parroquia14bolivarLayer);
    }
};
document.getElementById('parroquia15bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia15bolivarLayer);
    } else {
        map.removeLayer(parroquia15bolivarLayer);
    }
};
document.getElementById('parroquia16bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia16bolivarLayer);
    } else {
        map.removeLayer(parroquia16bolivarLayer);
    }
};
document.getElementById('parroquia17bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia17bolivarLayer);
    } else {
        map.removeLayer(parroquia17bolivarLayer);
    }
};
document.getElementById('parroquia18bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia18bolivarLayer);
    } else {
        map.removeLayer(parroquia18bolivarLayer);
    }
};
document.getElementById('parroquia19bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia19bolivarLayer);
    } else {
        map.removeLayer(parroquia19bolivarLayer);
    }
};
document.getElementById('parroquia20bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia20bolivarLayer);
    } else {
        map.removeLayer(parroquia20bolivarLayer);
    }
};
document.getElementById('parroquia21bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia21bolivarLayer);
    } else {
        map.removeLayer(parroquia21bolivarLayer);
    }
};
document.getElementById('parroquia22bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia22bolivarLayer);
    } else {
        map.removeLayer(parroquia22bolivarLayer);
    }
};
document.getElementById('parroquia23bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia23bolivarLayer);
    } else {
        map.removeLayer(parroquia23bolivarLayer);
    }
};
document.getElementById('parroquia24bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia24bolivarLayer);
    } else {
        map.removeLayer(parroquia24bolivarLayer);
    }
};
document.getElementById('parroquia25bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia25bolivarLayer);
    } else {
        map.removeLayer(parroquia25bolivarLayer);
    }
};
document.getElementById('parroquia26bolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(parroquia26bolivarLayer);
    } else {
        map.removeLayer(parroquia26bolivarLayer);
    }
};

   // Lógica para activar/desactivar las capas de Unidades Hidrograficas
   
   document.getElementById('unidad3').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad3Layer);
    } else {
        map.removeLayer(unidad3Layer);
    }
};
document.getElementById('unidad3s').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad3sLayer);
    } else {
        map.removeLayer(unidad3sLayer);
    }
};document.getElementById('unidad4').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad4Layer);
    } else {
        map.removeLayer(unidad4Layer);
    }
};document.getElementById('unidad5').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad5Layer);
    } else {
        map.removeLayer(unidad5Layer);
    }
};
document.getElementById('unidad6').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad6Layer);
    } else {
        map.removeLayer(unidad6Layer);
    }
};document.getElementById('unidad7').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad7Layer);
    } else {
        map.removeLayer(unidad7Layer);
    }
};document.getElementById('unidad8').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad8Layer);
    } else {
        map.removeLayer(unidad8Layer);
    }
};
document.getElementById('unidad9').onchange = function () {
    if (this.checked) {
        map.addLayer(unidad9Layer);
    } else {
        map.removeLayer(unidad9Layer);
    }
};
document.getElementById('piñanaton5').onchange = function () {
    if (this.checked) {
        map.addLayer(piñanaton5Layer);
    } else {
        map.removeLayer(piñanaton5Layer);
    }
};document.getElementById('piñanaton6').onchange = function () {
    if (this.checked) {
        map.addLayer(piñanaton6Layer);
    } else {
        map.removeLayer(piñanaton6Layer);
    }
};
document.getElementById('chimbon5').onchange = function () {
    if (this.checked) {
        map.addLayer(chimbon5Layer);
    } else {
        map.removeLayer(chimbon5Layer);
    }
};document.getElementById('chimbon6').onchange = function () {
    if (this.checked) {
        map.addLayer(chimbon6Layer);
    } else {
        map.removeLayer(chimbon6Layer);
    }
};document.getElementById('suquibin5').onchange = function () {
    if (this.checked) {
        map.addLayer(suquibin5Layer);
    } else {
        map.removeLayer(suquibin5Layer);
    }
};
document.getElementById('suquibin6').onchange = function () {
    if (this.checked) {
        map.addLayer(suquibin6Layer);
    } else {
        map.removeLayer(suquibin6Layer);
    }
};

// Lógica para activar/desactivar las capas del estudio multitemporal

document.getElementById('suelogualcanga').onchange = function () {
    if (this.checked) {
        map.addLayer(gualcangaLayer);
    } else {
        map.removeLayer(gualcangaLayer);
    }
};
document.getElementById('suelojatuchimbana').onchange = function () {
    if (this.checked) {
        map.addLayer(jatuchimbanaLayer);
    } else {
        map.removeLayer(jatuchimbanaLayer);
    }
};document.getElementById('suelogualcanga2000').onchange = function () {
    if (this.checked) {
        map.addLayer(gualcanga2000Layer);
    } else {
        map.removeLayer(gualcanga2000Layer);
    }
};document.getElementById('suelogualcanga2010').onchange = function () {
    if (this.checked) {
        map.addLayer(gualcanga2010Layer);
    } else {
        map.removeLayer(gualcanga2010Layer);
    }
};
document.getElementById('suelogualcanga2020').onchange = function () {
    if (this.checked) {
        map.addLayer(gualcanga2020Layer);
    } else {
        map.removeLayer(gualcanga2020Layer);
    }
};document.getElementById('suelojatuchimbana2000').onchange = function () {
    if (this.checked) {
        map.addLayer(jatuchimbana2000Layer);
    } else {
        map.removeLayer(jatuchimbana2000Layer);
    }
};document.getElementById('suelojatuchimbana2010').onchange = function () {
    if (this.checked) {
        map.addLayer(jatuchimbana2010Layer);
    } else {
        map.removeLayer(jatuchimbana2010Layer);
    }
};
document.getElementById('suelojatuchimbana2020').onchange = function () {
    if (this.checked) {
        map.addLayer(jatuchimbana2020Layer);
    } else {
        map.removeLayer(jatuchimbana2020Layer);
    }
};

 // Lógica para activar/desactivar las capas de Bolivar Acus Cuencas
 document.getElementById('npiezometrico').onchange = function () {
    if (this.checked) {
        map.addLayer(piezometricosLayer);
    } else {
        map.removeLayer(piezometricosLayer);
    }
};
document.getElementById('acusbolivar').onchange = function () {
    if (this.checked) {
        map.addLayer(acusbolivarLayer);
    } else {
        map.removeLayer(acusbolivarLayer);
    }
};