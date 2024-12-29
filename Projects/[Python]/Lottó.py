import random
winningnum = []
playernumlist = []
lottotype = int(input("Milyen lottón szeretnél játszani?: "))
for i in range(lottotype): winningnum.append(random.randint(1, 90))
for i in range(lottotype):
    playernum = int(input("Adjon meg egy számot!: "))
    playernumlist.append(playernum)
for x in range(len(winningnum)):
    if winningnum[x] == playernumlist[x]: print(f"Van egy nyertes számod! {playernumlist[x]}")
print(f"Nyertes számok : {winningnum}\nA te általad megjátszott számok: {playernumlist}")