import { fetchData } from "../services/repo";

console.log("Products initialized.");
const productList = document.getElementById("product-list");
const products = fetchData("products").then((data) => {
    console.log("Fetched products:", data);
    if (productList) {
        productList.innerHTML = data
            .map((product: any) => `<li>${product.name}</li>`)
            .join("");
    } else {
        console.error("Product list element not found.");
    }
}).catch((error) => {
    console.error("Error fetching products:", error);
}); 

