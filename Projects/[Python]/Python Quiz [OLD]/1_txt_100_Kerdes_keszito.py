import time
quest = 0
answerOne = 1
answerTwo = 2
answerThree = 3
answerFour = 4

while True:
    válasz = int(input("Írnál kérdést vagy lekérdeznél: "))

    if válasz == 1:
            with open("QUESTIONS" + ".txt", "a") as x:
                x.write(str(input("Adjon meg egy kérdést: ")))
                x.write("\n")
                x.write(str(input("Adja meg az első választ a kérdésre: ")))
                x.write("\n")
                x.write(str(input("Adja meg az második választ a kérdésre: ")))
                x.write("\n")
                x.write(str(input("Adja meg az harmadik választ a kérdésre: ")))
                x.write("\n")
                x.write(str(input("Adja meg az negyedik választ a kérdésre: ")))
                for newline in range(2):
                    x.write("\n")
                print("Kérdés sikeresen hozzáadva!")

    elif válasz == 0:
        for q in range(1, 66):
            with open("QUESTIONS" + ".txt", "r", encoding="utf8") as x:
                lines = x.readlines()
                print("\n")
                print(lines[quest])
                print(lines[answerOne])
                print(lines[answerTwo])
                print(lines[answerThree])
                print(lines[answerFour])
                time.sleep(1)
            quest += 6 
            answerOne += 6
            answerTwo += 6
            answerThree += 6
            answerFour += 6
    else:
        break