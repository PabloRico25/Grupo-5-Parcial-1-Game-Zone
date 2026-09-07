// region-comuna.js — dataset simplificado de regiones y comunas para los formularios

const REGIONES_COMUNAS = {
  "Región Metropolitana de Santiago": ["Santiago", "Providencia", "Las Condes", "Maipú"],
  "Región del Maule": ["Talca", "Linares", "Longaví"],
  "Región del Biobío": ["Concepción", "Talcahuano", "Los Ángeles"],
  "Región de la Araucanía": ["Temuco", "Villarrica"],
  "Región de Ñuble": ["Chillán", "San Carlos"]
};

function llenarRegiones(selectRegion) {
  Object.keys(REGIONES_COMUNAS).forEach(function (region) {
    const opcion = document.createElement("option");
    opcion.value = region;
    opcion.textContent = region;
    selectRegion.appendChild(opcion);
  });
}

function llenarComunas(selectRegion, selectComuna) {
  selectComuna.innerHTML = '<option value="">Selecciona una comuna</option>';
  const comunas = REGIONES_COMUNAS[selectRegion.value] || [];
  comunas.forEach(function (comuna) {
    const opcion = document.createElement("option");
    opcion.value = comuna;
    opcion.textContent = comuna;
    selectComuna.appendChild(opcion);
  });
}