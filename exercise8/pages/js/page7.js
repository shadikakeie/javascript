const products_data = {
    "group_products": [{
        "product_id": 1,
        "product_name": "گوجه",
        "product_price": 1000,
        "product_kaleri": 20,
        "product_image": "images/creating/t.jpg"
    },
    {
        "product_id": 2,
        "product_name": "قارچ",
        "product_price": 20000,
        "product_kaleri": 30,
        "product_image": "images/creating/m.jpg"
    },
    {
        "product_id": 3,
        "product_name": "ژامبون",
        "product_price": 50000,
        "product_kaleri": 50,
        "product_image": "images/creating/j1.jpg"
    },
    {
        "product_id": 4,
        "product_name": "پنیر پیتزا",
        "product_price": 50000,
        "product_kaleri": 100,
        "product_image": "images/creating/p.jpg"
    },
    {
        "product_id": 5,
        "product_name": "زیتون",
        "product_price": 1000,
        "product_kaleri": 10,
        "product_image": "images/creating/z1.jpg"
    },
    {
        "product_id": 6,
        "product_name": "ذرت",
        "product_price": 1000,
        "product_kaleri": 10,
        "product_image": "images/creating/c1.jpg"
    },
    {
        "product_id": 7,
        "product_name": "فلفل دلمه ای",
        "product_price": 5000,
        "product_kaleri": 10,
        "product_image": "images/creating/b.jpg"
    }
    ]
}
////////////////////////////////////////////////////////////////////////
function fixmenu() {
    var menuDiv = document.getElementById("menu");
    if (window.scrollY > 30) {
        menuDiv.classList.add("newMenu");
    }
    else {
        menuDiv.classList.remove("newMenu");
    }

};
////////////////////////////////////////////////////////////////////////
var pizzaProducts = JSON.stringify(products_data);
var pizzas = JSON.parse(pizzaProducts);

var mainDiv = document.getElementById("create-div");
var leftDiv = document.createElement("div");
leftDiv.setAttribute("class", "side-div");

var rightDiv = document.createElement("div");
rightDiv.setAttribute("class", "side-div");

var pizzaDough = document.createElement("div");
pizzaDough.setAttribute('id', 'dough-div');
pizzaDough.setAttribute('class', 'side-div');

var totalPriceAmount = 0;
var totalKaleriAmount = 0;

for (const product_index in pizzas.group_products) {
    var productPizza = document.createElement("div");
    productPizza.setAttribute('class', 'gradiant-div');
    productPizza.id = 'product-' + (parseInt(product_index) + 1);

    var gradientImage = document.createElement("img");
    productPizza.appendChild(gradientImage);
    // jsdata3.product_groups[group1].group_products[product1].product_price[typeIndex]
    gradientImage.setAttribute("src", pizzas.group_products[product_index].product_image);
    gradientImage.setAttribute("class", "pizza-image");
    gradientImage.setAttribute('alt', pizzas.group_products[product_index].product_name);

    leftDiv.appendChild(productPizza);
}

mainDiv.appendChild(leftDiv);
var pizzaPrice = document.createElement("div");
var pizzaKaleri = document.createElement("div");
pizzaPrice.innerHTML = "قیمت" + "<br>";
pizzaKaleri.innerHTML = "میزان کالری" + "<br>";

leftDiv.childNodes.forEach(element => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', event => {
        event.dataTransfer.effectAllowed = 'copy';
        event.dataTransfer.setData('text/plain', event.currentTarget.id);
    });
});
pizzaDough.addEventListener('dragover', event => {
    event.preventDefault();
    // event.dataTransfer.dropEffect = 'copy';
    // return false;
});
pizzaDough.addEventListener('drop', event => {
    event.preventDefault();

    var itemId = event.dataTransfer.getData('text/plain');
    var item = document.getElementById(itemId);
    var idItem = itemId.split('-')[1];

    var itemPrice = Number(pizzas.group_products[idItem].product_price);
    totalPriceAmount += itemPrice;
    pizzaPrice.innerHTML = "قیمت" + "<br>" + totalPriceAmount + "<br>"+" تومان";

    var itemKaleri = Number(pizzas.group_products[idItem].product_kaleri);
    totalKaleriAmount += itemKaleri;
    pizzaKaleri.innerHTML = "میزان کالری" + "<br>" + totalKaleriAmount + "<br>"+" کیلوکالری";

    if (!item) return;

    var clone = item.cloneNode(true);
    clone.id = itemId + '-copy-' + Date.now();
    clone.setAttribute('draggable', 'true');

    clone.style.position = 'absolute';
    clone.style.transform = 'translate(-50%, -50%)';
    pizzaDough.appendChild(clone);

    var doughBounds = pizzaDough.getBoundingClientRect();
    var cloneWidth = clone.offsetWidth;
    var cloneHeight = clone.offsetHeight;
    var x = event.clientX - doughBounds.left - pizzaDough.clientLeft;
    var y = event.clientY - doughBounds.top - pizzaDough.clientTop;
    clone.style.left = Math.max(cloneWidth / 2, Math.min(x, pizzaDough.clientWidth - cloneWidth / 2)) + 'px';
    clone.style.top = Math.max(cloneHeight / 2, Math.min(y, pizzaDough.clientHeight - cloneHeight / 2)) + 'px';

    // Add drag event listeners to the cloned item
    clone.addEventListener('dragstart', dragStartEvent => {
        dragStartEvent.dataTransfer.setData('text/plain', dragStartEvent.target.id);
    });

}, false);

mainDiv.appendChild(pizzaDough);



//  + "/span" + "<br>" + "تومان";
// + "/span" + "<br>" + "کیلوکالری";

pizzaKaleri.setAttribute("class", "pizza-pk");
pizzaPrice.setAttribute("class", "pizza-pk");
rightDiv.appendChild(pizzaPrice);
rightDiv.appendChild(pizzaKaleri);
mainDiv.appendChild(rightDiv);


