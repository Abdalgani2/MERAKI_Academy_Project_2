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
    shose1.append("<br>")
    divToshopeShose.append(shose1);
    const shose2 = $("<p>fila shose<br> price:40$<br></p>");
    shose2.addClass("describeTheShose");
    const size2=$("<select></select>");
    size2.append('<option value=1>size 37-38</option>')
    size2.append('<option value=2>size 39-40</option>')
    size2.append('<option value=3>size 41-42</option>')
    shose2.append(size2);
    shose2.append("<br>")
    const addToStore2 = $("<button>add to cart</button>");
    shose2.append(addToStore2);
    addToStore2.on("click",()=>{
        divAddToCart.show()

    })
    divToshopeShose.append(shose2); 
    const picturShose3 = $("<img src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374765/02/sv01/fnd/IND/fmt/png/Rebound-JOY-SoftFoam+-Shoes'> ")
    picturShose3.addClass("viewTheShose");
    divToshopeShose.append(picturShose3);
    const picturShose4 = $("<img src='https://www.famousfootwear.com/blob/product-images/20000/00/43/4/00434_pair_large.jpg'> ")
    picturShose4.addClass("viewTheShose");
    divToshopeShose.append(picturShose4);
    const shose3 = $("<p>puma shose<br> price:60$<br></p>");
    shose3.addClass("describeTheShose");
    const size3=$("<select></select>");
    size3.append('<option value=1>size 39-41</option>')
    size3.append('<option value=2>size 42-44</option>')
    size3.append('<option value=3>size 45-47</option>')
    shose3.append(size3);
    shose3.append("<br>")
    const addToStore3 = $("<button>add to cart</button>");
    shose3.append(addToStore3);
    addToStore2.on("click",()=>{
        divAddToCart.show()

    })
    divToshopeShose.append(shose3); 
    const shose4 = $("<p>puma shose<br> price:50$<br></p>");
    shose4.addClass("describeTheShose");
    const size4=$("<select></select>");
    size4.append('<option value=1>size 40-41</option>')
    size4.append('<option value=2>size 42-43</option>')
    size4.append('<option value=3>size 44-45</option>')
    shose4.append(size4);
    shose4.append("<br>")
    const addToStore4 = $("<button>add to cart</button>");
    shose4.append(addToStore4);
    addToStore4.on("click",()=>{
        divAddToCart.show()

    })
    divToshopeShose.append(shose4);
    const picturShose5 = $("<img src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11979672/2021/1/4/be55d570-ea5e-41ac-b92a-ba01120831dc1609754255757-Nike-Air-Max-270-React-SEMens-Shoe-7171609754253758-1.jpg'> ")
    picturShose5.addClass("viewTheShose");
    divToshopeShose.append(picturShose5);
    const picturShose6 = $("<img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zjp8fptkt8xvzszzmskz/air-monarch-iv-mens-training-shoe-lPtRrS.png'> ")
    picturShose6.addClass("viewTheShose");
    divToshopeShose.append(picturShose6); 
    const shose5 = $("<p>nike<br> price:80$<br></p>");
    shose5.addClass("describeTheShose");
    const size5=$("<select></select>");
    size5.append('<option value=1>size 39-41</option>')
    size5.append('<option value=2>size 42-44</option>')
    size5.append('<option value=3>size 45-47</option>')
    shose5.append(size5);
    shose5.append("<br>")
    const addToStore5 = $("<button>add to cart</button>");
    shose5.append(addToStore5);
    addToStore5.on("click",()=>{
        divAddToCart.show()

    })
    divToshopeShose.append(shose5); 
    const shose6 = $("<p>nike shose<br> price:70$<br></p>");
    shose6.addClass("describeTheShose");
    const size6=$("<select></select>");
    size6.append('<option value=1>size 38-39</option>')
    size6.append('<option value=2>size 40-41</option>')
    size6.append('<option value=3>size 42-43</option>')
    shose6.append(size6);
    shose6.append("<br>")
    const addToStore6 = $("<button>add to cart</button>");
    shose6.append(addToStore6);
    addToStore4.on("click",()=>{
        divAddToCart.show()

    })
    divToshopeShose.append(shose6);
    const backButton=$("<button> back </button>")
    backButton.on("click",()=>{
divToshopeShose.hide()
divToMainScren.show()

    })
    divToshopeShose.append(backButton)
    

    body.append(divToshopeShose);
})