with open("schumacher.csv", "r", encoding="utf-8") as x:
    adatok = []
    for i in x:
        adatsor = i.strip().split(";")
        for jelenlegi_adatsor in x:
            adatszotar = {
                "Dátum" : jelenlegi_adatsor.strip().split(";")[0],
                "Grandprix" : jelenlegi_adatsor.strip().split(";")[1],
                "Pozíció" : jelenlegi_adatsor.strip().split(";")[2],
                "Körök" : jelenlegi_adatsor.strip().split(";")[3],
                "Pontok" : jelenlegi_adatsor.strip().split(";")[4],
                "Csapat" : jelenlegi_adatsor.strip().split(";")[5],
                "Állapot" : jelenlegi_adatsor.strip().split(";")[6],
                }
            adatok.append(adatszotar)
    választás = str(input("Mi alapján akarsz szűrni? (Dátum/Grandprix/Pozíció/Körök/Pontok/Csapat/Állapot)"))
    if választás.lower() == "dátum": filterinput = str(input("Melyik dátum alapján szűröd: "))
    elif választás.lower() == "grandprix": filterinput = str(input("Melyik grandprix alapján szűröd: "))
    elif választás.lower() == "pozíció": filterinput = str(input("Melyik pozíció alapján szűröd: "))
    elif választás.lower() == "körök": filterinput = str(input("Mennyi kőr alapján szűröd: "))
    elif választás.lower() == "pontok": filterinput = str(input("Mennyi pont alapján szűröd: "))
    elif választás.lower() == "csapat": filterinput = str(input("Melyik csapatot alapján szűröd: "))
    else: filterinput = str(input("Milyen állapot alapján szűröd: "))  
    for i in adatok:
        if i[választás].lower() == filterinput.lower():
            print(i)