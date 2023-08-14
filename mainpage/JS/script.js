function show() {
    var search = document.getElementById("searchbar");

    search.classList.remove("d-none");
    search.style.transition = "2s";
    return false;
}



var cards = {};

var row = document.getElementById("rowId");
axios.get("https://fakestoreapi.com/products").then(function(response){

cards = response.data;

console.log(cards);

    response.data.forEach(function(data) {

        var col3 = document.createElement("div");
        col3.classList.add("col-3");
    
        var box = document.createElement("div");
        box.classList.add("w-100");

        var imgElement = document.createElement("img");
        imgElement.src = data.image;
        imgElement.alt = "card image";
        imgElement.classList.add("img-size");

        var title = document.createElement("h6");
        title.innerText = data.title;
        title.classList.add("h6-names");

        var smallDiv = document.createElement("div");
        smallDiv.classList.add("d-flex");
        smallDiv.classList.add("align-items-center");
        smallDiv.classList.add("justify-content-between");
        smallDiv.classList.add("mt-3");

        var cattegories = document.createElement("p");
        cattegories.innerText = data.cattegory;
        cattegories.classList.add("p-cattegories");

        var price = document.createElement("p");
        price.innerText = data.price
        price.classList.add("price");

        col3.appendChild(box);
        box.appendChild(imgElement);
        box.appendChild(title);
        box.appendChild(smallDiv);
        smallDiv.appendChild(cattegories);
        smallDiv.appendChild(price);

        row.appendChild(col3);

    })

})


var row1 = document.getElementById("rowIdTwo");
axios.get("https://fakestoreapi.com/products?limit=4").then(function(response){

    response.data.forEach(function(data) {

        var col3 = document.createElement("div");
        col3.classList.add("col-3");
    
        var box = document.createElement("div");
        box.classList.add("w-100");

        var imgElement = document.createElement("img");
        imgElement.src = data.image;
        imgElement.alt = "card image";
        imgElement.classList.add("img-size");

        var title = document.createElement("h6");
        title.innerText = data.title;
        title.classList.add("h6-names");

        var smallDiv = document.createElement("div");
        smallDiv.classList.add("d-flex");
        smallDiv.classList.add("align-items-center");
        smallDiv.classList.add("justify-content-between");
        smallDiv.classList.add("mt-3");

        var cattegories = document.createElement("p");
        cattegories.innerText = data.cattegory;
        cattegories.classList.add("p-cattegories");

        var price = document.createElement("p");
        price.innerText = data.price
        price.classList.add("price");

        col3.appendChild(box);
        box.appendChild(imgElement);
        box.appendChild(title);
        box.appendChild(smallDiv);
        smallDiv.appendChild(cattegories);
        smallDiv.appendChild(price);

        row1.appendChild(col3);

    })

})