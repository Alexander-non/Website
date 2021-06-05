function haromszog() {
    for (h=1;h<=100;h=h+1){
        document.write("<hr width="+h+"%>", "<body bgcolor='black'>");
    }
}

function haromszogle() {
    for (h=100;h >= 1;h=h-1) {
        document.write("<hr width="+h+"%>", "<body bgcolor='black'>", "<title>Rombusz</title>");
    }
}

function rombusz() {
    haromszog();
    haromszogle(); 
}

function pasta(vector, number) {

    if (vector == 1) {
        for (h=1;h<=100;h=h+number) document.write("<hr width="+h+"%>", "<body bgcolor='black'>", "<title>Háromszög felfele</title>");
    }
    else {
        for (h=100;h >= 1;h=h-number) document.write("<hr width="+h+"%>", "<body bgcolor='black'>", "<title>Háromszög lefele</title>");
    }

    if (vector == 2) {
        rombusz();
    }
}