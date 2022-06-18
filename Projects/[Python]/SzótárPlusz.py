import random
def RandomSzótárTxt(emberek):
    Names = ["Gábor", "Pista", "Róbert", "Károly", "István", "Péter", "Irma", "Vilmos", "Ibolya", "Evelin", "Virág", "Anna", "Petra", "Viktor", "Benedek", "Imre", "Endre", "Gergő", "Júlia"]
    with open("szótár.txt", "w", encoding="utf-8") as x:
        for i in range(emberek):
            randomName = Names[random.randint(0, len(Names)-1)]
            randomAge = random.randint(10, 99)
            if (random.randint(1, 2) == 1): alive = True
            else: alive = False
            toWrite = randomName + "," + str(randomAge) + "," + str(alive) + "\n"
            x.write(toWrite)