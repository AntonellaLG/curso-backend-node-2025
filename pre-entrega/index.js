import { argv } from "node:process";


const args = argv.slice(2);
const [method, fullPath, title, price, category] = args;
const [resource, id] = fullPath.split('/');


if (method.toLowerCase() == "get" && resource == "products" && !id) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data));
} else if (method.toLowerCase() == "get" && resource == "products" && id) {
            fetch(`https://fakestoreapi.com/products/${id}`)
              .then(response => response.json())
              .then(data => console.log(data));
} else if (method.toLowerCase() == "post" && resource == "products" && title && price && category) {
  const product = {title: title, price: price, category: category};
  fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
    .then(response => response.json())
    .then(data => console.log(data));
} else if (method.toLowerCase() == "delete" && resource == "products" && id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
    console.log("El producto ha sido borrado.");
  } else {
    console.log("Ruta o método no reconocidos.");
}
