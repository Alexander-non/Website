var Pressed = false
function ShowHide(elementsClass) {
    if (Pressed == true) {
        Pressed = false;
        const Fogalom = document.getElementsByClassName(elementsClass);
        for (let x = 0; x < Fogalom.length; x++) {
            Fogalom[x].innerHTML = "";
        }
    } else {
        Pressed = true;
        document.getElementById("probaido").innerHTML = '<b> Próda idő: </b> A munkaszerződésben kikötött, általában 30 napos időtartam, amely alatt a munkaviszonyt bármelyik fél azonnali hatállyal megszüntetheti.';
        document.getElementById("gyakornok").innerHTML = '<b> Gyakornok: </b> Gyakornok az a kezdő alkalmazott, aki szakképesítése, illetve oklevele megszerzése után a hivatásra való felkészülés közben már szakmai tevékenységet folytat'
        document.getElementById("felmondasi-ido").innerHTML = `<b> Felmondási idő: </b> Felmondás esetén hacsak nem azonnali hatályú felmondásról van szó, melynek szigorú törvényi követelményei vannak nem egyik napról a másikra tud <br> lelépni a dolgozó, hanem van egy bizonyos felmondási idő, amelyet le kell töltenie.`
        document.getElementById("beteg-szabadsag").innerHTML = '<b> Betegszabadság: </b> A beteg szabadság ami a munkáltatónak fizetedő, amikor valamilyen betegség vagy sérülés miatt képtelen dolgozni'
        document.getElementById("cafeteria").innerHTML = '<b> Cafetéria: </b> Cafetéria vagy másnéven választható juttatási rendszer az egy bizonyos keretenbelül megszabottben levő juttatásokat kérhetsz.'
        document.getElementById("kollektiv-szerzodes").innerHTML = '<b> Kollektív szerződés: </b> A munkáltató és a dolgozók között (általában szakszervezet által) létrejött külön megállapodás a foglalkoztatással kapcsolatban.'
    }
};