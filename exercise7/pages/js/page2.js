function fixmenu() {
    var menuDiv = document.getElementById("menu");
    if (window.scrollY > 30) {
        menuDiv.classList.add("newMenu");
    }
    else {
        menuDiv.classList.remove("newMenu");
    }

};
var foodTitle = document.getElementById("food-group");
var foodList = document.getElementById("food-list");
// get the group name
var group = localStorage.getItem("htag");
// get the food group
var foodid = localStorage.getItem("idgrid");
foodTitle.innerText = group;

var result = localStorage.getItem("data");
var datajs = JSON.parse(result);

var foodTitle2=document.getElementById("food_title2");
foodTitle2.innerText=group;
// get the number of foods of specific group
var element=localStorage.getItem("numer");


for (var i = 0; i < element; i++) {
    var groupId = document.createElement("div");
    foodList.appendChild(groupId);
    groupId.setAttribute("class", "lists");

    // add p1 tag for name of food
    var p1 = document.createElement("a");
    p1.setAttribute("id","name");
    p1.setAttribute("href","food.html?group="+foodid+"&product="+i)
    p1.setAttribute("class","food-title");
    p1.innerText = datajs.product_groups[foodid].group_products[i].product_name;
    groupId.appendChild(p1);
    

    // add p2 tag for price of food in page
    var p2 = document.createElement("p");
    p2.setAttribute("id", "price");
    p2.innerText = datajs.product_groups[foodid].group_products[i].product_price[0];
    p2.innerText+=" تومان";
    groupId.appendChild(p2);
   
    // add p3 tag for gradient of food in page
    var p3 = document.createElement("p");
    p3.setAttribute("id", "gradient");
    p3.innerText= datajs.product_groups[foodid].group_products[i].product_content;
    groupId.appendChild(p3);


}