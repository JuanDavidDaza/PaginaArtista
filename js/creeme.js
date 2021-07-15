let test = document.getElementById("test");
let año = document.getElementById("año");
let nombre = document.getElementById("nombre");
let duracion = document.getElementById("duracion");
let compositor = document.getElementById("compositor");
let album = document.getElementById("album");
let productores = document.getElementById("productores");
let nominaciones = document.getElementById("nominaciones");

año.style.display = "none";
nombre.style.display = "none";
duracion.style.display = "none";
compositor.style.display = "none";
album.style.display = "none";
productores.style.display = "none";
nominaciones.style.display = "none";


const validarStorageNombre = () => {
  if (localStorage.getItem("nombre")) {
    nombre.style.display = "block";
    nombre.innerHTML = "" + localStorage.getItem("nombre");
  } else {
    nombre.innerHTML = "Nombre: 'Sin datos'";
  }
};

const validarStorageAlbum = () => {
  if (localStorage.getItem("album")) {
    album.style.display = "block";
    album.innerHTML = "Album: " + localStorage.getItem("album");
  } else {
    album.innerHTML = "Album: 'Sin datos'";
  }
};



const validarStorageDuracion = () => {
  if (localStorage.getItem("duracion")) {
    duracion.style.display = "block";
    duracion.innerHTML = "Duración: " + localStorage.getItem("duracion");
  } else {
    duracion.innerHTML = "Duración: 'Sin datos'";
  }
};

const validarStorageAño = () => {
  if (localStorage.getItem("año")) {
    año.style.display = "block";
    año.innerHTML = "Año: " + localStorage.getItem("año");
  } else {
    año.innerHTML = "Año: 'Sin datos'";
  }
};
const validarStorageCompositor = () => {
  if (localStorage.getItem("compositor")) {
    compositor.style.display = "block";
    compositor.innerHTML = "Compositor: " + localStorage.getItem("compositor");
  } else {
    compositor.innerHTML = "Compositor: 'Sin datos'";
  }
};

validarStorageCompositor();
validarStorageNombre();
validarStorageAño();
validarStorageDuracion();
validarStorageAlbum();

const fnNombre = () => {
  let nombre = prompt("Por favor ingrese el nombre de la Canción");
  nombre = nombre.toLowerCase();
  while (nombre !== "creeme") {
    nombre = prompt("Por favor ingrese el nombre correcto de la Canción");
  }
  if (nombre === null) {
    validarStorageNombre();
  } else {
    nombre.innerHTML = "Nombre: " + nombre;
    localStorage.setItem("nombre", "Créeme - Karol G (part. Maluma)");
  }
};

const fnDuracion = () => {
  let duracion = prompt(
    "Por favor ingrese la duración de la Canción en formato mm:ss"
  );
  while (
    duracion !== "3:32" &&
    duracion !== "03:32" &&
    duracion !== "00:03:32"
  ) {
    duracion = prompt(
      "Por favor ingrese la duración correcta de la Canción en formato mm:ss"
    );
  }
  if (duracion === null) {
    validarStorageDuracion();
  } else {
    duracion.innerHTML = "Duración: " + duracion;
    localStorage.setItem("duracion", "3:32");
  }
};

const fnAño = () => {
  let año = prompt("Por favor ingrese el Año de publicación");
  año = año.toLowerCase();
  while (año !== "2019") {
    año = prompt("Por favor ingrese el Año correcto de publicación");
  }
  if (año === null) {
    validarStorageAño();
  } else {
    año.innerHTML = "Año: " + año;
    localStorage.setItem("año", "2019");
  }
};


const fnAlbum = () => {
  let album = prompt("Por favor ingrese el Album");
  album = album.toLowerCase();
  while (album !== "ocean") {
    album = prompt("Por favor ingrese el Album correcto");
  }
  if (album === null) {
    validarStoragealbum();
  } else {
    album.innerHTML = "Album: " + album;
    localStorage.setItem("album", "Ocean");
  }
};

const fnCompositor = () => {
  let compositor = prompt("Por favor ingrese el Compositor");
  compositor = compositor.toLowerCase();
  while (
    compositor !== "karol g" &&
    compositor !== "maluma" &&
    compositor !== "karolg y maluma" &&
    compositor !== "karol y maluma"
  ) {
    compositor = prompt("Por favor ingrese el Compositor correcto");
  }
  if (compositor === null) {
    validarStorageCompositor();
  } else {
    compositor.innerHTML = "Compositor: " + compositor;
    localStorage.setItem("compositor", "Ocean");
  }
};


test.onclick = function () {
  fnNombre();
  fnAño();
  fnDuracion();
  fnAlbum();
  fnCompositor();
  location.reload();
};
