const product = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 }
];
let inputElement = document.getElementById("search-input");
const findProduct = () => {
    let nameProduct = inputElement.value;
    let index = product.findIndex((e) => {
        return e.name.toLowerCase() === nameProduct.toLowerCase().trim();
    });
    let listProduct = document.getElementById("product-list");
    listProduct.innerHTML = "";
    listProduct.style.display = "block";
    let itemProduct = document.createElement("li");
    itemProduct.innerHTML = `Tên sản phẩm : ${product[index].name} | Giá : ${product[index].price}`
    listProduct.appendChild(itemProduct);
    inputElement.value = "";
}
let button = document.getElementById("button");
button.addEventListener("click", findProduct);