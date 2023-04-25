/*jslint browser: true, devel: true */
function loadIMG(filename) {
    //await new Promise(r => setTimeout(r, 1500));
    var P = new Promise(function (resolve, reject) {
        var parent = document.getElementById("gallery");
        var element = document.createElement("img");
        element.setAttribute("src", filename);
        element.setAttribute("alt", filename);
        element.setAttribute("width", "46%");
        element.style.marginLeft = "2%";
        element.style.marginRight = "2%";
        element.style.marginTop = "2%";
        parent.appendChild(element);
        element.onload = function () {
            resolve(filename);
        };
        element.onerror = function () {
            reject(filename);
        };
    });
    return P;
}

Promise.all([
    loadIMG("monte/img1.jpg"),
    loadIMG("monte/img2.jpg"),
    loadIMG("monte/img3.jpg"),
    loadIMG("monte/img4.jpg"),
    loadIMG("monte/img5.jpg"),
    loadIMG("monte/img6.jpg")
]).then(function () {
    console.log("Galeria została załadowana poprawnie");
}).catch(function () {
    console.log("Przy ładowaniu galerii wystąpił błąd");
});