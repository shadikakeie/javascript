const data = {
    "product_groups": [
        {

            "group_id": 1,
            "group_title": "ساندویچ",
            "group_image": "images/foods/food4.jpg",
            "group_products": [{
                "product_id": 1,
                "product_name": "ژامبون مرغ تنوری",
                "product_type": ["normal"],
                "product_price": [95000],
                "product_image": ["images/jambon/j1.jpg",
                                    "images/jambon/j2.jpg",
                                    "images/jambon/j3.jpg"],
                "product_content": [
                    "ژامبون مرغ",
                    "قارچ",
                    "پنیر",
                    "سس مخصوص"
                ],
                "product_energy": 45,
                "product_protein": 83
            },
            {
                "product_id": 2,
                "product_name": "هات داگ مخصوص",
                "product_type": ["normal"],
                "product_price": [100000],
                "product_image": ["images/hotdogs/h1.jpg",
                    "images/hotdogs/h2.jpg",
                    "images/hotdogs/h3.jpg"],
                "product_content": [
                    "هات داگ",
                    "قارچ",
                    "پنیر",
                    "کاهو",
                    "خیارشور",
                    "گوجه"
                ],
                "product_energy": 45,
                "product_protein": 83
            },
            {
                "product_id": 3,
                "product_name": "چیز برگر",
                "product_type": ["normal", "double"],
                "product_price": [110000, 155000],
                "product_image": ["images/cheesberger/ch1.jpg",
                    "images/cheesberger/ch2.jpg",
                    "images/cheesberger/ch3.jpg"],
                "product_content": [
                    "همبرگر90 درصد",
                    "پنیر گودا",
                    "سس مخصوص",
                    "گوجه"
                ],
                "product_energy": 45,
                "product_protein": 83
            },
            {
                "product_id": 4,
                "product_name": "رویال برگر",
                "product_type": ["normal"],
                "product_price": [193000],
                "product_image": ["images/royalberger/r1.jpg",
                    "images/royalberger/r2.jpg",
                    "images/royalberger/r3.jpg"],
                "product_content": [
                    "همبرگر 90 درصد",
                    "ژامبون گوشت",
                    "قارچ",
                    "پنیر"
                ],
                "product_energy": 45,
                "product_protein": 83
            }
            ]
        },
        {
            "group_id": 2,
            "group_title": "پیتزا",
            "group_image": "images/foods/food5.jpg",
            "group_products": [{
                "product_id": 5,
                "product_name": "پیتزا فیله مرغ",
                "product_type": ["mini", "normal", "large"],
                "product_price": [110000, 145000, 210000],
                "product_image": ["images/chickenpizza/chp1.jpg",
                    "images/chickenpizza/chp2.jpg",
                    "images/chickenpizza/chp3.jpg"],
                "product_content": [
                    "فیله مرغ",
                    "قارچ",
                    "فلفل دلمه",
                    "پنیر",
                    "گوجه",
                    "ذرت"
                ],
                "product_energy": 32,
                "product_protein": 79
            }, {
                "product_id": 6,
                "product_name": "پیتزا پنجره ای مخصوص",
                "product_type": ["mini", "normal", "large"],
                "product_price": [125000, 185000, 230000],
                "product_image": ["images/windowpizza/wp1.jpg",
                    "images/windowpizza/wp2.jpg",
                    "images/windowpizza/wp3.jpg"],
                "product_content": [
                    "ژامبون بره",
                    "قارچ",
                    "پنیر",
                    "گوشت چرخ کرده",
                    "فلفل دلمه"
                ],
                "product_energy": 45,
                "product_protein": 83
            }, {
                "product_id": 7,
                "product_name": "پیتزا پپرونی",
                "product_type": ["mini", "normal", "large"],
                "product_price": [105000, 135000, 190000],
                "product_image": ["images/pitza-peperoni/pp1.jpg",
                    "images/pitza-peperoni/pp2.jpg",
                    "images/pitza-peperoni/pp3.jpg"],
                "product_content": [
                    "کالباس پپرونی",
                    "قارچ",
                    "پنیر",
                    "فلفل دلمه"
                ],
                "product_energy": 51,
                "product_protein": 56
            }]
        },
        {
            "group_id": 3,
            "group_title": "کباب",
            "group_image": "images/foods/food3.jpg",
            "group_products":
                [
                    {
                        "product_id": 8,
                        "product_name": "کوبیده",
                        "product_type": ["single", "double"],
                        "product_price": [45000, 85000],
                        "product_image": ["images/kabab/k1.jpg",
                            "images/kabab/k2.jpg",
                            "images/kabab/k3.jpg"],
                        "product_content": [
                            "گوشت چرخ کرده",
                            "پیاز",
                            "نمک",
                            "جوش شیرین"
                        ],
                        "product_energy": 45,
                        "product_protein": 83
                    },
                    {
                        "product_id": 9,
                        "product_name": "برگ",
                        "product_type": ["normal"],
                        "product_price": [130000],
                        "product_image": ["images/barg/b1.jpg",
                            "images/barg/b2.jpg",
                            "images/barg/b3.jpg"],
                        "product_content": [
                            "گوشت گوسفندی",
                            "نمک",
                            "آبلیمو"
                        ],
                        "product_energy": 45,
                        "product_protein": 83
                    }
                ]
        }

    ]
};


//----------------------------------------------------------------

var jsondata = JSON.stringify(data);
localStorage.setItem("data", jsondata);
var res = localStorage.getItem("data");
var jsdata = JSON.parse(res);

// fix menu for scroll page
function fixmenu() {
    var menuDiv = document.getElementById("menu");
    if (window.scrollY > 30) {
        menuDiv.classList.add("newMenu");
    }
    else {
        menuDiv.classList.remove("newMenu");
    }

};

// finding length of json array to finding out the number of foods
var elements = Object.keys(jsdata.product_groups).length;

// finding master div for add foods div into it
var banner = document.getElementById("product-banner");
var products = document.getElementById("food-products");

//mouseenter event on under-img div
function enterFunction() {
    let caption_element = this.querySelector(".under-img");
    caption_element.style.transform = "rotate(0deg) scale(1.1)";

    let title_element = caption_element.querySelector(".title");
    title_element.style.transform = "rotate(0deg) scale(1.1)";
    title_element.style.transform = "translate(-90px, 0px)";

};

//mouseleave event on under-img div
function leaveFunction() {
    let caption_element = this.querySelector(".under-img");
    caption_element.style.transform = "rotate(-5deg) scale(1.1)";

    let title_element = caption_element.querySelector(".title");
    title_element.style.transform = "rotate(5deg) scale(1.1)";
};

for (var i = 0; i < elements; i++) {
    var productDiv = document.createElement("div");
    products.appendChild(productDiv);
    productDiv.setAttribute("class", "product");

    // add image tag of food
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", jsdata.product_groups[i].group_image);
    productDiv.appendChild(imgTag);

    // add caption div for transform
    var captionDiv = document.createElement("div");
    captionDiv.setAttribute("class", "under-img");
    productDiv.appendChild(captionDiv);

    // add h3 tag for title of food in page
    var hTag = document.createElement("h3");
    hTag.setAttribute("class", "title");
    var htagid = "id-" + i;
    hTag.setAttribute("id", htagid);
    captionDiv.appendChild(hTag);
    var titleFood = jsdata.product_groups[i].group_title;
    hTag.innerText = titleFood;

    // add events to caption div
    productDiv.addEventListener('mouseenter', enterFunction, false);
    productDiv.addEventListener('mouseleave', leaveFunction, false);
    productDiv.addEventListener('click', function page2(event) {
        // extract number of food group that has been clicked
        var idgrid = event.target.id.split('-')[1];
        var foodti = this.innerText;
        var number1 = Object.keys(jsdata.product_groups[idgrid].group_products).length;
        localStorage.setItem("numer", number1);
        localStorage.setItem("idgrid", idgrid);
        localStorage.setItem("htag", foodti);
        location.href = 'product.html?group=' + idgrid;
    });

};
//////////////////////////////////////////////////////////////






