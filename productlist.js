const url = "https://kea-alt-del.dk/t7/api/products";



fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function (data){
        handleProductList(data);
    });
function handleProductList(data) {
    // console.log(data);
    data.forEach(showProduct);
    
}

function showProduct(product){
    console.log(product);
    // soldOut onSale


    // grabbing the template
    const template = document.querySelector("#smallProductTemplate").content;
    // cloning template
    const copy = template.cloneNode(true);
    // change ffs content
     copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
     copy.querySelector("h3").textContent = product.productdisplayname;
        
     
     if(product.soldout){
            copy.querySelector("article").classList.add("soldOut");
        }
     if(product.discount) {
        copy.querySelector("article").classList.add("onSale");
     }

     copy.querySelector(".discounted p").textContent = "DISCOUNT PA"
     // grab daddy
    const parent = document.querySelector("main");
    // append (?)
    parent.appendChild(copy); 




} 
