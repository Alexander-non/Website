Játékosok = []
JátékosokPontjai = []
JátékosokPontjaiLista = []
JelenlegiSzámLista = []
össz = db = játékospont = 0
with open("pontok.txt", "r", encoding="utf-8") as r:
    for line in r:
        num = len(line.strip().split(";")) - 1
        Játékosok.append(line.strip().split(";")[0])
        for i in range(num):
            JelenlegiSzámLista.append(int(line.strip().split(";")[i+1]))
            if i == num-1:
                JátékosokPontjaiLista.append(JelenlegiSzámLista)
                JelenlegiSzámLista = []
    for x in range(len(JátékosokPontjaiLista)):
        for y in range(len(JátékosokPontjaiLista[x])):
            játékospont += JátékosokPontjaiLista[x][y]
            if y == num-1: 
                JátékosokPontjai.append(játékospont) 
                játékospont = 0
            össz += JátékosokPontjaiLista[x][y]
            db += 1
    print(f"A játékosok: {Játékosok}\nA játékosok pontjai {JátékosokPontjaiLista}\nAz áltaga a pontoknak: {össz/db}")
    for a in range(len(JátékosokPontjai)): 
        if JátékosokPontjai[a] < össz/db: print(f"{Játékosok[a]} kevesebb pontot ért el mint az átlag! (pontja: {JátékosokPontjai[a]})")