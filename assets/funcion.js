let sitio = {
  nombre: "ecamp",
};

let handler = {
  get(target, prop, receiver) {
    console.log("GET", prop);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log("SET", prop + "=" + value);
    return Reflect.set(target, prop, value, receiver);
  },
};

let proxySitio = new Proxy(sitio, handler);

let nombre = proxySitio.nombre;
proxySitio.nombre = "ECAMP"; 

console.log(nombre); 