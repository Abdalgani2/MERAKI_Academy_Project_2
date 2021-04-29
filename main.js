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
const shopeTShirtItem = [
    {
        name: "adidas T Shirt",
        price: " price :10$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://images.sportsdirect.com/images/products/62310940_l.jpg",
    },
    {
        name: " adidas T Shirt",
        price: "price :10$",
        option1: "size small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://cdn.shopify.com/s/files/1/1202/6102/products/adidas-bb-floral-fill-t-shirt-black-multicolour-1.jpg?v=1567095293",
    },
    {
        name: " nike T Shirt",
        price: "price :20$",
        option1: "size small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://thumblr.uniid.it/product/184400/72a340e3cc82.jpg",
    },
    {
        name: " nike T Shirt",
        price: "price :20$",
        option1: "size small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://cdn.mainlinemenswear.co.uk/f_auto,q_auto/mainlinemenswear/shopimages/products/135564/Mainimage.jpg",
    },
    {
        name: " puma T Shirt",
        price: "price :15$",
        option1: "size small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://ean-images.booztcdn.com/puma/232x303/g/pum605558_cpumawhite_v005.jpg",
    },
    {
        name: " puma T Shirt",
        price: "price :15$",
        option1: "size small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://www.costco.com.au/medias/sys_master/images/h0a/he3/17573226676254.jpg",
    }

]
const ShopeHoodieItem = [
    {
        name: "puma hoodie",
        price: " price :35$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "data:image/jpeg;base64,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",
    },
    {
        name: "puma hoodie",
        price: " price :45$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "data:image/jpeg;base64,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",
    },
    {
        name: "nike hoodie",
        price: " price :40$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwb5c16acd/images/58727901/Rebel_58727901_grey_hi-res.jpg?sw=558&sh=558&sm=fit",
    },
    {
        name: "nike hoodie",
        price: " price :35$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://cdn.shopify.com/s/files/1/2382/1249/products/nike-sweatshirts-s-black-nike-club-pullover-hoodie-fleece-sweatshirt-13874633080855_1024x1024.jpg?v=1590789097",
    },
    {
        name: "adidas hoodie",
        price: " price :40$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "data:image/jpeg;base64,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",
    },
    {
        name: "adidas hoodie",
        price: " price :40$",
        option1: "size :small",
        option2: "size larg",
        option3: "size x-larg",
        image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/e967205d2c784f5eb49fabac0123f9a6_9366/Hoodie_Rod_GD2876_01_laydown.jpg",
    }
    
]
shopeShose.on("click", () => {
    divToMainScren.hide();
    const divToshopeShose = $("<div></div>");
    divToshopeShose.addClass="viewTheShose1";
    shopeShoseItem.forEach(element => {

        const card = $(`<div class="s">
        <img class="viewTheShose" src="${element.image}" >
        <p class="describeTheShose">${element.name}<br> ${element.price}<br>
        <select >
         <option value=1>${element.option1}</option>;
         <option value=2>${element.option2}</option>;
         <option value=3>${element.option3}</option>;
        </select></p>
      </div>`)
      
      divToshopeShose.append(card);
      const addToStore=$("<button>add to cart</button>")
      addToStore.addClass="addToCartButton"
      divToshopeShose.append(addToStore)
        addToStore.on("click", () => {
            const card = $(`<div>
            <img class="viewTheShose" src="${element.image}" >
            <p class="describeTheShose">${element.name}<br> ${element.price}<br>
            <select >
             <option value=1>${element.option1}</option>;
             <option value=2>${element.option2}</option>;
             <option value=3>${element.option3}</option>;
            </select></p>
          </div>`)
             divAddToCart.append(card);

         });
        

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
    shopeTShirtItem.forEach(element => {

        const card = $(`<div>
        <img class="viewTheShose" src="${element.image}" >
        <p class="describeTheShose">${element.name}<br> ${element.price}<br>
        <select >
         <option value=1>${element.option1}</option>;
         <option value=2>${element.option2}</option>;
         <option value=3>${element.option3}</option>;
        </select></p>
      </div>`)
        divToshopeTShirt.append(card);
    });
    const backButton = $("<button> back </button>");
    backButton.on("click", () => {
        divToshopeTShirt.hide();
        divToMainScren.show();

    });
    divToshopeTShirt.append(backButton)


    body.append(divToshopeTShirt);
});
ShopeHoodie.on("click", () => {
    divToMainScren.hide();
    const divToshopeHoodie = $("<div></div>");
    ShopeHoodieItem.forEach(element => {

        const card = $(`<div>
        <img class="viewTheShose" src="${element.image}" >
        <p class="describeTheShose">${element.name}<br> ${element.price}<br>
        <select >
         <option value=1>${element.option1}</option>;
         <option value=2>${element.option2}</option>;
         <option value=3>${element.option3}</option>;
        </select></p>
      </div>`)
        divToshopeHoodie.append(card);
    });
    const backButton = $("<button> back </button>");
    backButton.on("click", () => {
        divToshopeHoodie.hide();
        divToMainScren.show();

    });
    divToshopeHoodie.append(backButton)


    body.append(divToshopeHoodie);
});