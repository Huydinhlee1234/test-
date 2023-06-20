function numberOneTriangle() {
    var num = parseInt(document.getElementById('num').value);
    var triangle = "";

    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= i; j++) {
            triangle += "* ";
        }
        triangle += "<br>";
    }

    document.getElementById('triangle').innerHTML = triangle;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    numberOneTriangle();
});