import random
Emberek = ["Gábor", "Pista", "Róbert", "Károly", "István", "Péter", "Irma", "Vilmos", "Ibolya", "Evelin", "Virág", "Anna", "Petra", "Viktor", "Benedek", "Imre", "Endre", "Gergő", "Júlia"]
BlockedPeople = []
def RandomHeight(futtatások_száma):
    with open("magassagok.txt", "w", encoding="utf-8") as x:
        for w in range(futtatások_száma):
            Magassag = random.randint(100, 200)
            JelenlegiEmber = Emberek[random.randint(0, len(Emberek)-1)]
            for i in range(len(BlockedPeople)): if BlockedPeople[i] == JelenlegiEmber: JelenlegiEmber = Emberek[random.randint(0, len(Emberek)-1)]
            BlockedPeople.append(JelenlegiEmber)
            toWrite = JelenlegiEmber + " : " + str(Magassag) + "cm\n"
            x.write(toWrite)