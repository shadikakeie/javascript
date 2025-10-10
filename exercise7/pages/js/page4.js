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
var len1 = localStorage.getItem("cartN");
var dict2 = localStorage.getItem("carts");
var data2 = localStorage.getItem("data");
var jsdata3 = JSON.parse(data2);
var group1 = localStorage.getItem("group");
var product1 = localStorage.getItem("product");

console.log(dict2);
var dict3 = JSON.parse(dict2);
var cartShop = document.getElementById("nums-cart");
cartShop.innerText = "(" + len1 + ")";

var mainSection = document.getElementById("content2");

var divUp = document.createElement("div");
divUp.setAttribute("id", "div-up");

var spanRight = document.createElement("span");
spanRight.setAttribute("id", "span-right");
spanRight.innerText = "مورد در سبد خرید" + "(" + len1 + ")";

var spanLeft = document.createElement("a");
spanLeft.setAttribute("id", "span-left");
spanLeft.setAttribute("href", "index.html");
spanLeft.innerText = "برگشت";

divUp.appendChild(spanRight);
divUp.appendChild(spanLeft);
mainSection.appendChild(divUp);

var hr1 = document.createElement("hr");
hr1.setAttribute("class", "hrr");
mainSection.appendChild(hr1);

var div1 = document.createElement("div");
div1.setAttribute("id", "div-1");

var div2 = document.createElement("div");
div2.setAttribute("id", "div-2");

var totalSpan = document.createElement("span");
totalSpan.setAttribute("id", "total-span");
totalSpan.innerText = "جمع کل";

var totalPrice = document.createElement("span");
totalPrice.setAttribute("id", "total-price");

var sum = 0;
var totalArray = [];
var sumDict = {};
var keyCart = Object.keys(dict3);
var valueCart = Object.values(dict3);

for (let i = 0; i < Object.keys(dict3).length; i++) {
    var divCart = document.createElement("div");
    divCart.setAttribute("class", "div-cart");

    var spanName = document.createElement("span");
    spanName.setAttribute("id", "span-name");

    var spanImage = document.createElement("img");
    spanImage.setAttribute("class", "span-image");

    var spanCost = document.createElement("span");
    spanCost.setAttribute("id", "span-cost");

    var spanCount = document.createElement("span");
    spanCount.setAttribute("id", "span-count");
    spanCount.innerHTML = valueCart[i] + " عدد";

    var spanSum = document.createElement("span");
    spanSum.setAttribute("id", "span-sum");

    var spanDel = document.createElement("i");
    spanDel.setAttribute("id", "span-del");

    var plusMinus1 = document.createElement("div");
    plusMinus1.setAttribute("id", "plus-minus1");

    var plus1 = document.createElement("button");
    plus1.setAttribute("id", "plus1");
    plus1.innerText = "+";
    plusMinus1.appendChild(plus1);

    var nums1 = document.createElement("span");
    nums1.setAttribute("id", "nums1");
    nums1.innerText = valueCart[i];

    var type2 = keyCart[i].split(' ')[0];
    const type1 = jsdata3.product_groups[group1].group_products[product1].product_type;
    var typeIndex = type1.findIndex(item => item === type2);
    spanSum.innerHTML = jsdata3.product_groups[group1].group_products[product1].product_price[typeIndex] * valueCart[i];

    sumDict[i] = spanSum.innerText;
    spanName.innerText = keyCart[i];
    spanCost.innerHTML = jsdata3.product_groups[group1].group_products[product1].product_price[typeIndex] + " تومان ";
    plusMinus1.appendChild(nums1);

    var minus1 = document.createElement("button");
    minus1.setAttribute("id", "minus1");
    minus1.innerText = "-";
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
    plus1.addEventListener('click', function () {
        totalArray = [];
        sum = 0;
        const key = getKeyByValue(sumDict, this.parentNode.parentNode.childNodes[5].innerText);

        this.nextElementSibling.innerText = parseInt(this.nextElementSibling.innerText) + 1;
        this.parentNode.parentNode.childNodes[4].innerText = this.nextElementSibling.innerText + " عدد";
        this.parentNode.parentNode.childNodes[5].innerText = parseInt(this.parentNode.parentNode.childNodes[3].innerText.split(' ')[0]) * parseInt(this.nextElementSibling.innerText);
        sumDict[key] = this.parentNode.parentNode.childNodes[5].innerText;
        totalArray = Object.values(sumDict);
        totalArray.forEach(item => {
            sum += parseInt(item);
        })
        totalPrice.innerText=sum+" تومان ";

    })
    minus1.addEventListener('click', function () {
        const key1 = getKeyByValue(sumDict, this.parentNode.parentNode.childNodes[5].innerText);
        if (parseInt(this.previousElementSibling.innerText) != 0) {
            this.previousElementSibling.innerText = parseInt(this.previousElementSibling.innerText) - 1;

        }
        totalArray = [];
        sum = 0;
        this.parentNode.parentNode.childNodes[4].innerText = this.previousElementSibling.innerText + " عدد";
        this.parentNode.parentNode.childNodes[5].innerText = parseInt(this.parentNode.parentNode.childNodes[3].innerText) * parseInt(this.previousElementSibling.innerText);
        sumDict[key1] = this.parentNode.parentNode.childNodes[5].innerText;

        totalArray = Object.values(sumDict);
        totalArray.forEach(item => {
            sum += parseInt(item);
        })
        totalPrice.innerText=sum+" تومان ";
    })

    plusMinus1.appendChild(minus1);
    divCart.appendChild(plusMinus1);

    var group2 = jsdata3.product_groups[group1].group_products[product1].product_name;
    spanImage.setAttribute("src", jsdata3.product_groups[group1].group_products[product1].product_image[typeIndex]);
    spanDel.setAttribute("class", "fa fa-times");
    spanDel.addEventListener('click', function () {
        this.parentNode.remove();
    })

    divCart.appendChild(spanImage);
    divCart.appendChild(spanName);
    divCart.appendChild(spanCost);
    divCart.appendChild(spanCount);
    divCart.appendChild(spanSum);
    divCart.appendChild(spanDel);
    div1.appendChild(divCart);

}

totalArray = Object.values(sumDict);
totalArray.forEach(item => {
    sum += parseInt(item);
})
totalPrice.innerText=sum+" تومان ";
div2.appendChild(totalSpan);
div2.appendChild(totalPrice);
mainSection.appendChild(div1);
var hr2 = document.createElement("hr");
hr2.setAttribute("class", "hrr");
mainSection.appendChild(hr2);
mainSection.appendChild(div2);

if (len1 == 0) {
    var pc = document.createElement("p");
    pc.innerText = "سبد خرید شما خالی می باشد."
    mainSection.appendChild(pc);
}



