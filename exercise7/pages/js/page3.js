discount_data = {
    "Discounts": [
        { "group_id": 0, "group_title": "ساندویچ", "discount": 20 },
        { "group_id": 1, "group_title": "پیتزا", "discount": 35 },
        { "group_id": 2, "group_title": "کباب", "discount": 50 },
        { "group_id": 3, "group_title": "نوشیدنی", "discount": 25 },
        { "group_id": 4, "group_title": "سالاد", "discount": 65 },
        { "group_id": 5, "group_title": "سوپ", "discount": 40 },
        { "group_id": 6, "group_title": "دسر", "discount": 35 }
    ]
};
// ------------------------------------------------------------------------------------------------
var res2 = localStorage.getItem("data");
var jsdata2 = JSON.parse(res2);
var discounts = JSON.stringify(discount_data);
var discounts2 = JSON.parse(discounts);
var foodTitle3 = document.getElementById("food-group");
var foodTitle2 = document.getElementById("food_title2");

// -------------------------------------------------------------------------fix menu for scroll page
function fixmenu() {
    var menuDiv = document.getElementById("menu");
    if (window.scrollY > 30) {
        menuDiv.classList.add("newMenu");
    }
    else {
        menuDiv.classList.remove("newMenu");
    }
};

// -------------------------------------------------------------------------
function createInfoProduct(name, content, energy, protein, group, product) {
    var info = document.getElementById("content");
    var divOut = document.createElement("div");
    info.appendChild(divOut);
    divOut.setAttribute("class", "div-out");

    var details = document.createElement("div");
    details.setAttribute("class", "details");

    var fN1 = document.createElement("span");
    fN1.setAttribute("id", "name-food");
    fN1.innerText = name;
    details.appendChild(fN1);

    var butFood = document.createElement("span");
    butFood.setAttribute("id", "label-food");
    butFood.innerText = "خوشمزه"
    details.appendChild(butFood);

    // add p2 tag for content of food in page
    var fC1 = document.createElement("p");
    fC1.setAttribute("id", "content-food");
    fC1.innerHTML = content;
    details.appendChild(fC1);

    var hr2 = document.createElement("div");
    hr2.setAttribute("id", "hr");
    details.appendChild(hr2);

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("id", "price-div");
    details.appendChild(priceDiv);

    var primaryCost = document.createElement("div");
    primaryCost.setAttribute("id", "primary-cost");
    priceDiv.appendChild(primaryCost);

    var newCost = document.createElement("div");
    newCost.setAttribute("id", "new-cost");
    priceDiv.appendChild(newCost);

    var typeCost = document.createElement("div");
    typeCost.setAttribute("id", "type-cost");
    priceDiv.appendChild(typeCost);

    // right div for images of food/ the main div
    var divRight = document.createElement("div");
    divRight.setAttribute("class", "div-right");
    divOut.appendChild(details);
    divOut.appendChild(divRight);

    // top div for image in big size
    var imageTop = document.createElement("div");
    imageTop.setAttribute("id", "image-top");

    // bottom div for other images at the bottom
    var imageBottom = document.createElement("div");
    imageBottom.setAttribute("id", "image-bottom");

    divRight.appendChild(imageTop);
    divRight.appendChild(imageBottom);

    // div for image in big size
    var bigFood = document.createElement("div");
    bigFood.setAttribute("id", "big-food");
    imageTop.appendChild(bigFood);
    var imgBig = document.createElement("img");
    bigFood.appendChild(imgBig);

    // div contains of three images
    var divFoods = document.createElement("div");
    divFoods.setAttribute("id", "div-foods");
    imageBottom.appendChild(divFoods);

    var writeType = document.createElement("span");
    writeType.setAttribute("id", "write-type");
    details.appendChild(writeType);

    for (const id_index in discounts2.Discounts) {
        if (group == discounts2.Discounts[id_index].group_id) {
            var discount1 = discounts2.Discounts[group].discount;
            var discount2 = jsdata2.product_groups[group].group_products[product].product_price;
            var discounType = jsdata2.product_groups[group].group_products[product].product_type;

            var imagesFood = jsdata2.product_groups[group].group_products[product].product_image;
            imgBig.setAttribute("src", imagesFood[0]);
            for (let j = 0; j < imagesFood.length; j++) {
                // div for small image of food
                var smallFood = document.createElement("div");
                smallFood.setAttribute("class", "small-food");
                divFoods.appendChild(smallFood);
                // img tag for all three of images
                var imgSmall = document.createElement("img");
                imgSmall.setAttribute("src", imagesFood[j]);
                smallFood.appendChild(imgSmall);

                // added click event for which image that we want to show it in big size
                imgSmall.addEventListener("click", function () {
                    imgBig.setAttribute("src", imagesFood[j]);
                })


            }

            // for each cost in product-price we added one del tag, 2 spans for type and new cost
            var discountFinal = [];
            for (var i = 0; i < discount2.length; i++) {
                primaryCost.dir = "rtl";
                primaryCost.innerHTML += "<del>" + discount2[i] + " تومان</del>";
                var typeCosts = document.createElement("span");
                typeCosts.innerText = discounType[i];
                typeCost.appendChild(typeCosts);

                var discount3 = discount2[i] - (discount1 / 100) * discount2[i];
                discountFinal.push(discount3);
                newCost.dir = "rtl";
                newCost.innerHTML += "<span>" + discount3 + " تومان</span>";
                typeCosts.addEventListener('click', function (event) {
                    localStorage.setItem('type', this.innerText);
                    writeType.style.color = "#e95d11";
                    writeType.innerText = "انتخاب شده است " + this.innerText + " سایز";
                })

            }
        }
    }

    var bar1 = document.createElement("div");
    bar1.setAttribute("id", "bar1");
    var title1 = document.createElement("p");
    title1.innerText = "ارزش انرژی";
    var energyFoodBar = document.createElement("div");
    energyFoodBar.setAttribute("class", "progress-bar");
    energyFoodBar.setAttribute("id", "energy-bar");
    energyFoodBar.dir = "rtl";
    energyFoodBar.innerText = "۵۰۰ کیلو کالری";
    bar1.appendChild(title1);
    bar1.appendChild(energyFoodBar);

    var energyFood = document.createElement("div");
    energyFood.setAttribute("class", "progress");
    energyFood.setAttribute("id", "energy-bar-in");
    energyFood.innerText = energy + "%"
    energyFood.style.width = energy + "%";

    details.appendChild(bar1);
    energyFoodBar.appendChild(energyFood);

    var bar2 = document.createElement("div");
    bar2.setAttribute("id", "bar2");
    var title2 = document.createElement("p");
    title2.innerText = "پروتئین";
    var proteinFoodBar = document.createElement("div");
    proteinFoodBar.setAttribute("class", "progress-bar");
    proteinFoodBar.setAttribute("id", "protein-bar");
    proteinFoodBar.dir = "rtl";
    proteinFoodBar.innerHTML = "۵۰۰ کیلو کالری";
    bar2.appendChild(title2);
    bar2.appendChild(proteinFoodBar);

    var proteinFood = document.createElement("div");
    proteinFood.setAttribute("class", "progress");
    proteinFood.setAttribute("id", "protein-bar-in");
    proteinFood.innerText = protein + "%";
    proteinFood.style.width = protein + "%";

    details.appendChild(bar2);
    proteinFoodBar.appendChild(proteinFood);

    var addTo = document.createElement("button");
    addTo.setAttribute("id", "add-to-shop");
    addTo.innerText = "اضافه به سبد خرید";
    var keys = [];
    var values = [];
    var dictFood = {};
    addTo.addEventListener('click', function (event) {
        var selectType = writeType.innerText.split(' ')[3];
        var selectNum = parseInt(nums.innerText);
        var merge = selectType + " " + fN1.innerText;
        if (!selectType == "") {
            if (keys.includes(merge) === false) {
                keys.push(merge);
                values.push(selectNum);
                for (let i = 0; i < keys.length; i++) {
                    dictFood[keys[i]] = values[i];
                }

            }
            else {
                dictFood[merge] = selectNum;
            }
            var dict1 = JSON.stringify(dictFood);
            console.log(dict1);
            var carts = document.getElementById("nums-cart");
            var len = Object.values(dictFood).length;
            if (Object.values(dictFood).length > 0) {
                localStorage.setItem("carts", dict1);
                localStorage.setItem("cartN", len);
            }
            carts.innerText = "(" + len + ")";
            writeType.innerText = "به سبد خرید شما اضافه شد";
            writeType.style.color = "green";
        }
        else {
            alert("لطفا اندازه و نوع محصول را انتخاب کنید");
        }
    })
    details.appendChild(addTo);

    var plusMinus = document.createElement("div");
    plusMinus.setAttribute("id", "plus-minus");

    var plus = document.createElement("button");
    plus.setAttribute("id", "plus");
    plus.innerText = "+";
    plus.addEventListener('click', function () {
        nums.innerText = parseInt(nums.innerText) + 1;

    })
    plusMinus.appendChild(plus);

    var nums = document.createElement("span");
    nums.setAttribute("id", "nums");
    nums.innerText = '1';
    plusMinus.appendChild(nums);

    var minus = document.createElement("button");
    minus.setAttribute("id", "minus");
    minus.innerText = "-";
    minus.addEventListener('click', function () {
        if (parseInt(nums.innerText) != 0) {
            nums.innerText = parseInt(nums.innerText) - 1;
        }

    })
    plusMinus.appendChild(minus);
    details.appendChild(plusMinus);


}
// --------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const group = urlParams.get('group');
    localStorage.setItem("group", group);
    localStorage.setItem("product", product);

    foodTitle3.innerText = jsdata2.product_groups[group].group_products[product].product_name;
    foodTitle2.innerText = jsdata2.product_groups[group].group_products[product].product_name;

    var products1 = jsdata2.product_groups[group].group_products[product];

    createInfoProduct(products1.product_name,
        products1.product_content,
        products1.product_energy,
        products1.product_protein, group, product);

});
// ---------------------------------------------------------------------------------------------------
var shopCart = document.getElementById("shop-cart");
shopCart.addEventListener("click", function page4(event) {
    location.href = 'carts.html';

});