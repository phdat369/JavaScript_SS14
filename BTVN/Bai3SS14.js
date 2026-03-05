const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
const renderData = () => {
    let listProduct = document.getElementById("list_product");
    listProduct.innerHTML = "";
    products.forEach((product, index) => {
        let itemProduct = document.createElement("li");
        itemProduct.innerHTML = `Tên sản phẩm: ${product.name} | Giá: ${product.price}
        <button class = "delete-btn">Xóa</button>`;
        itemProduct.querySelector(".delete-btn").addEventListener("click", () => {
            deleteProduct(index);
        });
        listProduct.appendChild(itemProduct);
    });
}
const deleteProduct = (index) => {
    products.splice(index, 1);
    renderData();
}
renderData();