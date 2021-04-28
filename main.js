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
shopeShose.on("click", () => {
    divToMainScren.hide()
    const divToshopeShose = $("<div></div>");
    const picturShose1 = $("<img src='https://m.media-amazon.com/images/I/71RaTmb7kDL._UL1500_.jpg' >")
    picturShose1.addClass("viewTheShose");
    divToshopeShose.append(picturShose1);
    const picturShose2 = $("<img src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B800%2C500%5D&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F06%2Ffila-womens-disruptor-WHITEKICKS1218.jpg' >")
    picturShose2.addClass("viewTheShose");
    divToshopeShose.append(picturShose2);
    const shose1 = $("<p>adidas shose<br> price:70$<br></p>");
    shose1.addClass("describeTheShose");
    const size=$("<select></select>");
    size.append('<option value=1>size 40-41</option>')
    size.append('<option value=2>size 42-43</option>')
    size.append('<option value=3>size 44-45</option>')
    shose1.append(size)
    shose1.append("<br>")
    const addToStore1 = $("<button>ad to cart</button>");
    shose1.append(addToStore1);
    addToStore1.on("click", () => {
        const val=$(`$("shose1.text()")`);
        console.log(val);
        divAddToCart.append(val);
    })
    divToshopeShose.append(shose1);
    const shose2 = $("<p>fila shose<br> size 38-42<br> price:40$<br></p>");
    shose2.addClass("describeTheShose");
    const addToStore2 = $("<button>add to cart</button>");
    shose2.append(addToStore2);
    addToStore2.on("click",()=>{
        divAddToCart.show()

    })
    divToshopeShose.append(shose2);
    const picturShose3 = $("<img src='https://pyxis.nymag.com/v1/imgs/e92/82c/0fc2191d5dd0aeac6a425a201619f9138f.2x.rsquare.w600.jpg'> ")
    picturShose3.addClass("viewTheShose");
    divToshopeShose.append(picturShose3);
    const picturShose4 = $("<img src='https://pyxis.nymag.com/v1/imgs/e92/82c/0fc2191d5dd0aeac6a425a201619f9138f.2x.rsquare.w600.jpg'> ")
    picturShose4.addClass("viewTheShose");
    divToshopeShose.append(picturShose4);

    body.append(divToshopeShose);
})