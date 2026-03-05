const product = [
    {id: 1 , name: "Bánh Chưng" , price: 150000},
    {id: 2 , name: "Giò Lụa" , price: 180000},
    {id: 3 , name: "Cành Đào" , price: 500000},
    {id: 4 , name: "Mứt Tết" , price: 120000},
    {id: 5 , name: "Bao Lì Xì" , price: 25000},
    {id: 6 , name: "Dưa Hấu Tết" , price: 80000}
];
const renderProduct = () =>  {
    let listProduct = document.getElementById("product_list");
    listProduct.innerHTML = "";
    product.forEach((e) => {
        let itemElement = document.createElement("li");
        itemElement.innerHTML = `
         <div style = " padding : 20px">
            Tên Sp:${e.name} | Giá sản phẩm ${e.price}VND
        <button class="price-btn"  onclick = "updatePrice(${p.id})">Sửa giá</button>
        </div>`;
        listProduct.appendChild(itemElement);
    });
};
renderProduct();
const updatePrice = (idProduct) => {
    let index = product.findIndex((e) => {
        return idProduct === e.id;
    });
    let newPrice = +prompt("Nhập giá tiền mới");
    product[index].price = newPrice;

    renderProduct();
}