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
shopeShose.on("click", () => {
    divToMainScren.hide()
    const divToshopeShose = $("<div></div>");
    const picturShose1 = $("<img src='https://m.media-amazon.com/images/I/71RaTmb7kDL._UL1500_.jpg' >")
    picturShose1.addClass("viewTheShose");
    divToshopeShose.append(picturShose1);
    const picturShose2 = $("<img src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B800%2C500%5D&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F06%2Ffila-womens-disruptor-WHITEKICKS1218.jpg' >")
    picturShose2.addClass("viewTheShose");
    divToshopeShose.append(picturShose2);
    const shose1 = $("<p>adidas shose<br> size 40-44<br> price:70$</p>");
    shose1.addClass("describeTheShose")
    divToshopeShose.append(shose1);
    // const addTostore = $("<button></button>");
    // divToshopeShose.append(addTostore);
    const shose2 = $("<p>fila shose<br> size 38-42<br> price:40$</p>");
    shose2.addClass("describeTheShose")
    divToshopeShose.append(shose2);
    const picturShose3 = $("<img src='https://pyxis.nymag.com/v1/imgs/e92/82c/0fc2191d5dd0aeac6a425a201619f9138f.2x.rsquare.w600.jpg'> ")
    picturShose3.addClass("viewTheShose");
    divToshopeShose.append(picturShose3);
    const picturShose4 = $("<img src='https://pyxis.nymag.com/v1/imgs/e92/82c/0fc2191d5dd0aeac6a425a201619f9138f.2x.rsquare.w600.jpg'> ")
    picturShose4.addClass("viewTheShose");
    divToshopeShose.append(picturShose4);

    body.append(divToshopeShose);
})