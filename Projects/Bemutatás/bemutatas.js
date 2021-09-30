function cezarszoveg(csere){
    document.getElementById("tartalom").innerHTML=csere;
}

function up() {
    document.body.scrollTop = 0;
} 

function change(kep) {
    a=kep.src.substring(kep.src.length-5);
    switch (a)
        {
            case "https://slidetodoc.com/presentation_image_h/dd5132596aa01053b37f7203dc9a2927/image-13.jpg": kep.src="https://upload.wikimedia.org/wikipedia/commons/4/41/LocationRomanRepublic.png"; break;
            case "https://upload.wikimedia.org/wikipedia/commons/4/41/LocationRomanRepublic.png": kep.src="https://slidetodoc.com/presentation_image_h/dd5132596aa01053b37f7203dc9a2927/image-13.jpg"; break;
        }
}

function title() {
    document.getElementById("szuletese").innerHTML= 'Dekt';
}

function évszám(no) {
    if (no.value == 1926) {
        alert('The text has changed');
    }
}

function kerdes() {
var evszam = document.getElementById("input").value;

if (evszam == "i.e. 44")
  {
    alert('Helyes!');
    }
else {
    alert('Téves!');
    }
}