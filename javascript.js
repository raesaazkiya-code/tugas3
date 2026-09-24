function ftambah() {
    var a, b, c;
    a=parseInt(document.getElementById("bil1").value);
    b=parseInt(document.getElementById("bil2").value);
    c=a+b;
    document.getElementById("hasil").value=c;

}

function fkurang() {
     var a, b, c;
    a=parseInt(document.getElementById("bil1").value);
    b=parseInt(document.getElementById("bil2").value);
    c=a-b;
    document.getElementById("hasil").value=c;

}

function fkali() {
    var a, b, c;
    a=parseInt(document.getElementById("bil1").value);
    b=parseInt(document.getElementById("bil2").value);
    c=a*b;
    document.getElementById("hasil").value=c;
}

function fbagi() {
    var a, b, c;
    a=parseInt(document.getElementById("bil1").value);
    b=parseInt(document.getElementById("bil2").value);
    c=a/b;
    document.getElementById("hasil").value=c;

}