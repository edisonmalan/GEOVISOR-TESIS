// public/js/graficos.js

// Definimos variables globales para las instancias de Chart.js
let chartPromedio = null;
let chartMaximo = null;
let chartMinimo = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1) Extraer variable y periodo desde data-attributes en el contenedor
  const container = document.getElementById('grafico-container');
  if (!container) {
    console.error('No se encontró el elemento con id "grafico-container". Asegúrate de incluirlo en tu HTML.');
    return;
  }
  const variable = container.dataset.variable; // Ej: "humedad_relativa"
  const periodo = container.dataset.periodo;   // Ej: "diario"

  // 2) Obtener el select de región
  const regionSelect = document.getElementById('regionSelect');
  if (!regionSelect) {
    console.error('No se encontró el elemento con id "regionSelect". Asegúrate de incluirlo en tu HTML.');
    return;
  }

  // 3) Función que carga datos y renderiza las tres gráficas
  async function cargarDatosYGraficar() {
    const regionId = regionSelect.value;
    if (!regionId) {
      console.warn('Selecciona una región válida.');
      return;
    }

    const url = `/api/graficos/${variable}/${periodo}?regionId=${regionId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      // data = { labels: [...], promedio: [...], maximo: [...], minimo: [...] }

      renderizarGraficas(data.labels, data.promedio, data.maximo, data.minimo);
    } catch (err) {
      console.error('Error al obtener datos del backend:', err);
    }
  }

  // 4) Función para destruir instancias previas de Chart.js
  function destruirGraficas() {
    if (chartPromedio) {
      chartPromedio.destroy();
      chartMaximo.destroy();
      chartMinimo.destroy();
      chartPromedio = null;
      chartMaximo = null;
      chartMinimo = null;
    }
  }

  // 5) Función que crea las tres gráficas (Promedio, Máximo, Mínimo)
  function renderizarGraficas(labels, promedioData, maximoData, minimoData) {
    destruirGraficas();

    // Referencias a los canvases
    const ctxProm = document.getElementById('avgChart').getContext('2d');
    const ctxMax  = document.getElementById('maxChart').getContext('2d');
    const ctxMin  = document.getElementById('minChart').getContext('2d');

    // 5.1) Gráfica de PROMEDIO
    chartPromedio = new Chart(ctxProm, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `${variable.replace('_', ' ')} Promedio (${periodo})`,
          data: promedioData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: false,
          tension: 0.2,
          pointRadius: 3,
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: { size: 12 },
              color: '#333'
            }
          },
          title: {
            display: false
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: periodo === 'diario' ? 'Fecha' :
                    periodo === 'mensual' ? 'Mes' : 'Año',
              color: '#555',
              font: { size: 12 }
            },
            ticks: {
              maxRotation: 45,
              minRotation: 0,
              color: '#666',
              font: { size: 10 }
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Valor Promedio',
              color: '#555',
              font: { size: 12 }
            },
            ticks: {
              color: '#666',
              font: { size: 10 },
              beginAtZero: true
            },
            grid: { color: '#ddd' }
          }
        }
      }
    });

    // 5.2) Gráfica de MÁXIMO
    chartMaximo = new Chart(ctxMax, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `${variable.replace('_', ' ')} Máximo (${periodo})`,
          data: maximoData,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.2,
          pointRadius: 3,
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: { size: 12 },
              color: '#333'
            }
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: periodo === 'diario' ? 'Fecha' :
                    periodo === 'mensual' ? 'Mes' : 'Año',
              color: '#555',
              font: { size: 12 }
            },
            ticks: {
              maxRotation: 45,
              minRotation: 0,
              color: '#666',
              font: { size: 10 }
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Valor Máximo',
              color: '#555',
              font: { size: 12 }
            },
            ticks: {
              color: '#666',
              font: { size: 10 },
              beginAtZero: true
            },
            grid: { color: '#ddd' }
          }
        }
      }
    });

    // 5.3) Gráfica de MÍNIMO
    chartMinimo = new Chart(ctxMin, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `${variable.replace('_', ' ')} Mínimo (${periodo})`,
          data: minimoData,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
          tension: 0.2,
          pointRadius: 3,
          pointBackgroundColor: 'white',
          pointBorderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: { size: 12 },
              color: '#333'
            }
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: periodo === 'diario' ? 'Fecha' :
                    periodo === 'mensual' ? 'Mes' : 'Año',
              color: '#555',
              font: { size: 12 }
            },
            ticks: {
              maxRotation: 45,
              minRotation: 0,
              color: '#666',
              font: { size: 10 }
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Valor Mínimo',
              color: '#555',
              font: { size: 12 }
            },
            ticks: {
              color: '#666',
              font: { size: 10 },
              beginAtZero: true
            },
            grid: { color: '#ddd' }
          }
        }
      }
    });
  }

  // 6) Cargar datos y generar gráficas por primera vez
  cargarDatosYGraficar();

  // 7) Volver a cargar cada vez que cambie la región
  regionSelect.addEventListener('change', cargarDatosYGraficar);
});
