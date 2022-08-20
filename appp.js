
function Digimon(Name, level, image) {

    this.Name = Name;
    this.level = level;
    this.image = image;
}



fetch("https://digimon-api.herokuapp.com/api/digimon").then((result) => {

    console.log(result);
    let myData = result.json();
    return myData;

}).then((next) => {
    next.length = 40;
    return next;

}).then((finalArray) => {

    console.log(finalArray);
    loopingArray(finalArray);
}
)



function loopingArray(arr) {

    arr.map(newArr => {
        console.log(newArr.name);
        console.log(newArr.level);
        console.log(newArr.img);


        console.log(newArr);

        cardMaker(newArr);

    })


    function cardMaker(digimons) {

        let mainDiv = document.getElementById("test");

        let imagesDiv = document.createElement("div");
        mainDiv.appendChild(imagesDiv);
        imagesDiv.style.border = "thin solid #FFB3B3";
        imagesDiv.style.margin = "5px";
        imagesDiv.style.backgroundColor = "#FFB3B3";
        imagesDiv.style.display = "inline-block";

        let image = document.createElement("img");
        image.setAttribute("src", digimons.img);
        // image.style.width = "500";
        imagesDiv.appendChild(image);

        let p1 = document.createElement("p");
        p1.textContent = digimons.name;
        imagesDiv.appendChild(p1);


        let p2 = document.createElement("p");
        p2.textContent = digimons.level;
        imagesDiv.appendChild(p2);
    }
}





