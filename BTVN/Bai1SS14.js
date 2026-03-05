const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const renderData = () => {
    products.forEach((product) => {
        let listItemProduct = document.getElementById("product_list");
        let itemProduct = document.createElement("li");
        let divClass = document.createElement("div");
        divClass.classList.add("product");
        divClass.innerText = `Tên sản phẩm: ${product.name}      Giá: ${product.price}`;
        divClass.innerHTML = `Tên sản phẩm: ${product.name}      Giá: ${product.price}`;
        listItemProduct.appendChild(itemProduct);
        itemProduct.appendChild(divClass);
    });
}
renderData();