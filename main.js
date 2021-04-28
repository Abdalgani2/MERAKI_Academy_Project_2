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
shopeShose.on("click",()=>{
    divToMainScren.hide()

    const divToshopeShose = $("<div></div>");
    const shose1=$("<p>adidas shosesize 40-44 price:70$</p>");
    const picturShose1=$("<img src='https://i.pinimg.com/736x/35/fc/04/35fc049f532a650f0ddd9a1bfdd3003f.jpg' >")
    picturShose1.addClass("viewTheShose")
    shose1.append(picturShose1)
    divToshopeShose.append(shose1)
    
    
    body.append(divToshopeShose)
})