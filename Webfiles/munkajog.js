function Fogalom(element, text) {
    key = element.value
    switch (key) {
        case "Próbaidő":
            document.getElementById(text).innerHTML = '<b> Próda idő: </b> A munkaszerződésben kikötött, általában 30 napos időtartam, amely alatt a munkaviszonyt bármelyik fél azonnali hatállyal megszüntetheti.';
            break;
        case "Gyakornok":
            document.getElementById(text).innerHTML = '<b> Gyakornok: </b> Gyakornok az a kezdő alkalmazott, aki szakképesítése, illetve oklevele megszerzése után a hivatásra való felkészülés közben már szakmai tevékenységet folytat';
            break;
        case "Felmondási idő":
            document.getElementById(text).innerHTML = `<b> Felmondási idő: </b> Felmondás esetén hacsak nem azonnali hatályú felmondásról van szó, melynek szigorú törvényi követelményei vannak nem egyik napról a másikra tud lelépni a dolgozó, hanem van egy bizonyos felmondási idő, amelyet le kell töltenie.`;
            break;
        case "Betegszabadság":
            document.getElementById(text).innerHTML = '<b> Betegszabadság: </b> A betegszabadság ami a munkáltatónak fizetedő, amikor valamilyen betegség vagy sérülés miatt képtelen dolgozni';
            break;
        case "Cafetéria":
            document.getElementById(text).innerHTML = '<b> Cafetéria: </b> Cafetéria vagy másnéven választható juttatási rendszer az egy bizonyos keretenbelül megszabottben levő juttatásokat kérhetsz.';
            break;
        case "Kollektív szerződés":
            document.getElementById(text).innerHTML = '<b> Kollektív szerződés: </b> A munkáltató és a dolgozók között (általában szakszervezet által) létrejött külön megállapodás a foglalkoztatással kapcsolatban.';
            break;
        case "Igényes munka":
            document.getElementById(text).innerHTML = '<b> Igényes munka: </b> Az igényes munka fontos egy ember számára hisz az mutatja be az embert saját maga helyett bár az igényes munka nem tud beszélni mégis tökéletesen mutatja készítőjének hozzáállását és belefektetett idejét tehát egy munka minél igényesebb annál jobb.';
            break;
        default:
            break;
    };
};