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
var data3 = localStorage.getItem("data");
var jsdata4 = JSON.parse(data3);

var searchBtn = document.getElementById("search1");
var searchTxt = document.getElementById("search-text");
var searchDel = document.getElementById("search-del");
var searchShow = document.getElementById("search-res");
var searchPic = document.getElementById("search-pic");
var searchTable = document.getElementById("search-table");

// making visible search box and del by clicking search icon
searchBtn.addEventListener('click', function () {

    searchTxt.style.visibility = "visible";
    searchDel.style.visibility = "visible";

})
// hidden search box by clicking on del
searchDel.addEventListener('click', function () {
    searchTxt.value = "";
    searchTxt.style.visibility = "hidden";
    searchDel.style.visibility = "hidden";
    searchShow.style.visibility = "hidden";
    newDiv.style.visibility = "hidden";

})
// adding img tag in the first td of table
var serachImg = document.createElement("img");
serachImg.setAttribute("class", "searchImg");
searchPic.appendChild(serachImg);

// creating new div to show the result if the food doesn't exist
var newDiv = document.createElement("div");
newDiv.setAttribute("class", "new-div");
newDiv.innerText = "غذایی یافت نشد";
document.getElementById("main-search1").appendChild(newDiv);


var foodNames = [];
var foodTypes = [];

searchTxt.addEventListener('keypress', function (event) {

    if (event.key === "Enter") {
        var searchValue = searchTxt.value;

        // adding all products to finding out that the search value is exist
        for (let i = 0; i < jsdata4.product_groups.length; i++) {
            for (let j = 0; j < jsdata4.product_groups[i].group_products.length; j++) {
                foodNames.push(jsdata4.product_groups[i].group_products[j].product_name)
            }
        }

        if (foodNames.includes(searchValue) == true) {
            newDiv.style.visibility = "hidden";
            searchShow.style.visibility = "visible";

            // searching for the search value in jsdata
            for (let i = 0; i < jsdata4.product_groups.length; i++) {
                for (let j = 0; j < jsdata4.product_groups[i].group_products.length; j++) {

                    if (searchValue == jsdata4.product_groups[i].group_products[j].product_name) {
                        serachImg.setAttribute("src", jsdata4.product_groups[i].group_products[j].product_image[0]);
                        document.getElementById("search-title").innerText = jsdata4.product_groups[i].group_products[j].product_name;

                        // adding product_type elements into the array to find normal type index
                        for (let l = 0; l < jsdata4.product_groups[i].group_products[j].product_type.length; l++) {
                            foodTypes.push(jsdata4.product_groups[i].group_products[j].product_type[l]);

                            // if the array includes normal type then by its index find price and type for that product
                            if (foodTypes.includes("normal") == true) {
                                var ind = foodTypes.indexOf("normal");
                                document.getElementById("search-size").innerText = jsdata4.product_groups[i].group_products[j].product_type[ind];
                                document.getElementById("search-price").innerText = jsdata4.product_groups[i].group_products[j].product_price[ind] + " تومان";
                            }
                            //  else using the first element for type and price of product
                            else {
                                document.getElementById("search-size").innerText = jsdata4.product_groups[i].group_products[j].product_type[0];
                                document.getElementById("search-price").innerText = jsdata4.product_groups[i].group_products[j].product_price[0] + " تومان";

                            }

                        }

                        foodTypes = [];
                    }

                }

            }

        }
        else {
            searchShow.style.visibility = "hidden";
            newDiv.style.visibility = "visible";

        }

    }

})
