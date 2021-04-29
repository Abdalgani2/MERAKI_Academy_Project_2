const body = $("body");
const divToMainScren = $("<div></div>");
body.append(divToMainScren);
const shopeShose = $("<button></button>");
shopeShose.addClass("mainButton");
divToMainScren.append(shopeShose);
const ShopeTShirt = $("<button></button>");
ShopeTShirt.addClass("mainButton");
divToMainScren.append(ShopeTShirt);
const ShopeHoodie = $("<button></button>");
ShopeHoodie.addClass("mainButton");
divToMainScren.append(ShopeHoodie);
const ShopeShort = $("<button></button>");
ShopeShort.addClass("mainButton");
divToMainScren.append(ShopeShort);
const divAddToCart = $("<div></div>");
const shopeShoseItem = [
    {
        name: " adidas Shose",
        price: " 70$",
        option1: "size 40-41",
        option2: "size 42-43",
        option3: "size 44-45",
        image: "https://m.media-amazon.com/images/I/71RaTmb7kDL._UL1500_.jpg",
    },
    {
        name: " fila Shose",
        price: " 50$",
        option1: "size 38-39",
        option2: "size 40-41",
        option3: "size 42-43",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B800%2C500%5D&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F06%2Ffila-womens-disruptor-WHITEKICKS1218.jpg",
    },
    {
        name: " puma Shose",
        price: " 60$",
        option1: "size 39-40",
        option2: "size 41-42",
        option3: "size 43-44",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374765/02/sv01/fnd/IND/fmt/png/Rebound-JOY-SoftFoam+-Shoes",

    },
    {
        name: " puma Shose",
        price: " 70$",
        option1: "size 40-41",
        option2: "size 42-43",
        option3: "size 44-45",
        image: "https://www.famousfootwear.com/blob/product-images/20000/00/43/4/00434_pair_large.jpg",

    },
    {
        name: " nike Shose",
        price: " 70$",
        option1: "size 38-39",
        option2: "size 40-41",
        option3: "size 42-43",
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11979672/2021/1/4/be55d570-ea5e-41ac-b92a-ba01120831dc1609754255757-Nike-Air-Max-270-React-SEMens-Shoe-7171609754253758-1.jpg",
    },
    {
        name: " nike Shose",
        price: " 60$",
        option1: "size 38-39",
        option2: "size 40-41",
        option3: "size 42-43",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zjp8fptkt8xvzszzmskz/air-monarch-iv-mens-training-shoe-lPtRrS.png",
    }

]
shopeShose.on("click", () => {
    divToMainScren.hide();
    const divToshopeShose = $("<div></div>");
    shopeShoseItem.forEach(element => {

        const card = $(`<div>
        <img class="viewTheShose" src="${element.image}" >
        <p class="describeTheShose">${element.name}<br> ${element.price}<br>
        <select >
         <option value=1>${element.option1}</option>;
         <option value=2>${element.option2}</option>;
         <option value=3>${element.option3}</option>;
        </select></p>
      </div>`)
        card.addClass = "card";
        // addToStore1.on("click", () => {
        //     const val = $(`$("shose1.text()")`);
        //     console.log(val);
        //     divAddToCart.append(val);
        // });
        divToshopeShose.append(card);
    });
    const backButton = $("<button> back </button>");
    backButton.on("click", () => {
        divToshopeShose.hide();
        divToMainScren.show();

    });
    divToshopeShose.append(backButton)


    body.append(divToshopeShose);
})
ShopeTShirt.on("click", () => {
    divToMainScren.hide();
    const divToshopeTShirt = $("<div></div>");
    const picturTShirt1 = $("<img src='https://images.sportsdirect.com/images/products/62310940_l.jpg' >");
    picturTShirt1.addClass("viewTheShose");
    divToshopeTShirt.append(picturTShirt1);
    const picturTShirt2 = $("<img src='https://cdn.shopify.com/s/files/1/1202/6102/products/adidas-bb-floral-fill-t-shirt-black-multicolour-1.jpg?v=1567095293' >");
    picturTShirt2.addClass("viewTheShose");
    divToshopeTShirt.append(picturTShirt2);



    body.append(divToshopeTShirt);
})