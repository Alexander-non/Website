with open("Ranglista.txt", "r", encoding="utf-8") as x:
    összpont = 0
    játékosok = {}
    for line in x:
        fősor = line.strip().split(":")
        alsor = fősor[1].split(",")
        for i in range(len(alsor)):
            összpont += int(alsor[i].strip())
        játékosok[fősor[0]] = összpont
        összpont = 0
    print(f"Pontok\n{játékosok.items()}")