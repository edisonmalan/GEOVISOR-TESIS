// Parámetros y factores de ponderación
const parameters = [
    { name: "Oxígeno disuelto", wi: 0.17 },
    { name: "Coliformes fecales", wi: 0.16 },
    { name: "pH", wi: 0.11 },
    { name: "DBO5", wi: 0.11 },
    { name: "Cambio de temperatura", wi: 0.10 },
    { name: "Fosfato", wi: 0.10 },
    { name: "Nitratos", wi: 0.10 },
    { name: "Turbidez", wi: 0.08 },
    { name: "TDS", wi: 0.07 },
  ];
  
  // Lógica para calcular Sub-i basado en el parámetro y valor
  function calculateSubIndex(parameterName, value) {
    if (value === null || value === undefined || isNaN(value)) return 0; // Validación de valores inválidos
  
    switch (parameterName) {
      case "Oxígeno disuelto":
        if (value >= 0 && value <= 40) return 0.009 * value ** 2 + 0.2818 * value + 2.9658;
        if (value > 40 && value <= 70) return 0.0109 * value ** 2 + 0.264 * value + 2.6985;
        if (value > 70 && value <= 99) return -0.0184 * value ** 2 + 3.9434 * value - 111.16;
        if (value > 99 && value <= 140) return -0.0034 * value ** 2 + 0.2622 * value + 107.16;
        if (value > 140) return 50;
        return 0;
      case "Coliformes fecales":
        if (value === 0) return 99;
        if (value > 0 && value <= 100) return 105.58 * value ** -0.183;
        if (value > 100 && value <= 100000) return 275.18 * value ** -0.36;
        if (value > 100000) return 2;
        return 0;
      case "pH":
        if (value < 2 || value > 12) return 0;
        if (value >= 2 && value < 4.1) return 1.3598 * value ** 2 - 4.577 * value + 5.6962;
        if (value >= 4.1 && value < 5.6) return 8.1141 * value ** 2 - 55.612 * value + 101.49;
        if (value >= 5.6 && value < 6.8) return 7.9365 * value ** 2 - 65.746 * value + 163.32;
        if (value >= 6.8 && value < 8.3) return -25.965 * value ** 2 + 385.38 * value - 1337;
        if (value >= 8.3 && value < 9.2) return 11.111 * value ** 2 - 225.11 * value + 1176.3;
        if (value >= 9.2 && value < 10.4) return 14.286 * value ** 2 - 307.33 * value + 1664.9;
        if (value >= 10.4 && value <= 12) return 2.9428 * value ** 2 - 72.69 * value + 451.7;
        return 0;
      case "DBO5":
        if (value >= 0 && value <= 2) return -2.3209 * value ** 3 + 1.8688 * value ** 2 - 4.4367 * value + 100;
        if (value > 2 && value <= 4) return -4.3933 * value ** 3 + 43.187 * value ** 2 - 145.71 * value + 233.85;
        if (value > 4 && value <= 30) return -0.0024 * value ** 3 + 0.2218 * value ** 2 - 7.2164 * value + 86.605;
        if (value > 30) return 2;
        return 0;
      case "Cambio de temperatura":
        if (value >= -5 && value < -2.5) return 8 * value + 95;
        if (value >= -2.5 && value < 0) return 7.2 * value + 93;
        if (value >= 0 && value < 2.5) return -8 * value + 93;
        if (value >= 2.5 && value < 5) return -11.4 * value + 101.5;
        if (value >= 5 && value < 7.5) return -6.6 * value + 77.5;
        if (value >= 7.5 && value < 10) return -2.8 * value + 49;
        if (value >= 10 && value < 12.5) return -1.4 * value + 35;
        if (value >= 12.5 && value <= 15) return -3.2 * value + 57.5;
        return 0;
      case "Fosfato":
        if (value >= 0 && value <= 0.5) return 176.28 * value ** 3 - 237.56 * value ** 2 - 4.8952 * value + 99.724;
        if (value > 0.5 && value <= 1.75) return 19.003 * value ** 2 - 66.857 * value + 88.179;
        if (value > 1.75 && value <= 10) return 0.4329 * value ** 2 - 7.6534 * value + 40.586;
        if (value > 10) return 2;
        return 0;
      case "Nitratos":
        if (value >= 0 && value <= 4) return -1.1036 * value ** 3 + 3.5884 * value ** 2 - 3.617 * value + 97.015;
        if (value > 4 && value <= 22) return -0.0069 * value ** 3 + 0.356 * value ** 2 - 7.1307 * value + 93.072;
        if (value > 22 && value <= 50) return 0.0057 * value ** 3 - 1.3005 * value ** 2 + 60.915 * value;
        if (value > 50 && value <= 100) return 0.0034 * value ** 2 - 0.6331 * value + 32.832;
        if (value > 100) return 1;
        return 0;
      case "Turbidez":
        if (value >= 0 && value <= 20) return 0.0402 * value ** 2 - 2.6873 * value + 98.621;
        if (value > 20 && value <= 80) return 0.0047 * value ** 2 - 1.0732 * value + 80.741;
        if (value > 80 && value <= 100) return -0.0045 * value ** 2 + 0.4075 * value + 21.5;
        if (value > 100) return 5;
        return 0;
      case "TDS":
        if (value >= 0 && value <= 65) return -0.0021 * value ** 2 + 0.2534 * value + 79.272;
        if (value > 65 && value <= 210) return -0.0003 * value ** 2 - 0.0344 * value + 89.553;
        if (value > 210 && value <= 450) return -0.1302 * value + 98.561;
        if (value > 450 && value <= 500) return -0.1818 * value + 121.95;
        if (value > 500) return 20;
        return 0;
      default:
        return 0;
    }
  }
  
  // Calcular el ICA total
  function calculateICA(values) {
    let totalQualityIndex = 0;
    parameters.forEach(param => {
      const subIndex = calculateSubIndex(param.name, values[param.name] ?? 0); // Usar 0 como valor predeterminado
      totalQualityIndex += subIndex * param.wi;
    });
    return Math.round(totalQualityIndex); // Redondear al entero más cercano
  }
  
  module.exports = { calculateICA };
  