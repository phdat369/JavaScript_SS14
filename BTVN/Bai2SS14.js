const products = [];
let buttonAdd = document.getElementsByTagName("button")[0];
const renderData = () => {
    let listProduct = document.getElementById("list_products");
    let itemProduct = document.createElement("li");
    listProduct.innerHTML = "";
    listProduct.appendChild(itemProduct);
    products.forEach((product) => {
        itemProduct = document.createElement("li");
        itemProduct.innerText = `Tên sản phẩm: ${product.name}      Giá: ${product.price}`;
        itemProduct.innerHTML = `Tên sản phẩm: ${product.name}      Giá: ${product.price}`;
        listProduct.appendChild(itemProduct);
    });
}
const addProducts = () => {
    let inputName = document.getElementById("product_name");
    let inputPrice = document.getElementById("product_price");
    event.preventDefault();
    let inputProductName = document.getElementById("product_name");
    let inputProductPrice = document.getElementById("product_price");
    let newName = inputProductName.value;
    let newPrice = inputProductPrice.value;
    let newlistProduct = {
        name: newName,
        price: newPrice,
    };
    inputName.style.display = "none";
    inputPrice.style.display = "none";
    products.push(newlistProduct);
    renderData();
    buttonAdd.style.display = "none";
}
buttonAdd.addEventListener("click", addProducts);