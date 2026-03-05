//DOM

//Element
//Atr
//Text

console.log(document);

//Element: Là các cái thẻ

// Cách truy xuất: Lấy các thẻ trong js (element) (LẤY TẤT CẢ THẺ)
//1.Lấy theo id
let itemElement = document.getElementById("item_01");
console.log(itemElement);
let ulElement = document.getElementById("list");
console.log(ulElement);
//2.Lấy theo class
let listItemElement = document.getElementsByClassName("item"); 
console.log(listItemElement); // giống như mảng nhưng không phải là mảng
//để chuyển cái này thành mảng thì phải dùng Array.from()
Array.from(listItemElement).forEach((element) => {
    console.log(element.innerText);
    
});
//3.Lấy theo tag Name
let litsDivElement = document.getElementsByTagName("div");
console.log(litsDivElement); // lại giống như mảng nhưng không phải là mảng
Array.from(litsDivElement).forEach((element,index) => {
    console.log(element.childNodes);
    console.log(index);
});
//4. Lấy bằng Query Selector/Query SelectorALL
let firstElement = document.querySelector(".item");
console.log(firstElement); // lấy 1 thẻ đầu tiên
let itemElementQuery = document.querySelectorAll(".item");
console.log(itemElementQuery); // nó sinh ra một nodeList giống như HTMLCollection

// Cách lấy nội dung trong thẻ (CHỈ LẤY NỘI DUNG TRONG THẺ KHÔNG LẤY TẤT CẢ THẺ)

let listElement = document.getElementById("list");
console.log(listElement.innerText); // lấy nội dung (bị ảnh hưởng bởi CSS, không hiện ra nếu display: none)
console.log(listElement.innerHTML);  // lấy đoạn code trong html của thẻ đấy
console.log(listElement.textContent); // Không bị ảnh hướng bởi CSS

//Sửa nội dung trong HTML qua JS
let itemChangeElement = document.getElementById("item_01");
itemChangeElement.innerText = "Xem phim";
console.log(itemChangeElement.classList);
itemChangeElement.classList.add("complite");
itemChangeElement.classList.remove("item");
itemChangeElement.classList.contains("complite"); //(trả về true hoặc false)
itemChangeElement.classList.toggle("firstElement");

itemChangeElement.style.color = "blue";



