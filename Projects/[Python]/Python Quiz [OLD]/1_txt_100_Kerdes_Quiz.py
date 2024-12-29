import time
def Quiz():
    correctAnswersOne = [1,20,32,38,56,62,74,80,86,92,98,128,146,164,182,254,278, 338,356,374,392,404,416]
    correctAnswersTwo = [51, 57, 69, 99, 135,141,171,189,195,285,291,297,303,321,333,345,351,363,411]
    correctAnswersThree = [9, 27, 99, 105, 111, 117, 123, 159, 177, 267, 273, 309, 327, 369, 387] 
    correctAnswersFour = []
    quest = 0
    answerOne = 1
    answerTwo = 2
    answerThree = 3
    answerFour = 4
    correctAnswers = 0
    numberOfQuestions = 70
    cAO = 0
    cAT2 = 0
    cAT = 0
    cAF = 0

    for q in range(1, numberOfQuestions + 1):
        with open("1_QUESTIONS" + ".txt", "r", encoding="utf8") as x:
            lines = x.readlines()
            print("\n")
            print("Question " + str(q) + ": ", lines[quest])
            print("nes[anA1: ", lines[answerOne])
            print("A2: ", lines[answerTwo])
            print("A3: ", liswerThree])
            print("A4: ", lines[answerFour])


            userAnswer = int(input("Adja meg a helyes válasz számát: "))
            if (userAnswer == 1) and (answerOne == correctAnswersOne[cAO]):
                print("Helyes válasz!")
                correctAnswers += 1
            elif (answerOne == correctAnswersOne[cAO]) and not((userAnswer == 1)):
                cAO = cAO + 1
                print("A helyes válasz a 1-as lett volna")


            elif (userAnswer == 2) and (answerTwo == correctAnswersTwo[cAT2]):
                print("Helyes válasz!")
                cAT2 += 1
                correctAnswers += 1
            elif (answerTwo == correctAnswersTwo[cAT2]) and not((userAnswer == 2)):
                cAT2 += 1
                print("A helyes válasz a 2-as lett volna")


            elif (userAnswer == 3) and (answerThree == correctAnswerThree[cAT]):
                print("Helyes válasz!")
                cAT += 1
                correctAnswers += 1
            elif (answerThree == correctAnswerThree[cAT]) and not((userAnswer == 3)):
                cAT = cAT + 1
                print("A helyes válasz a 3-as lett volna")


            elif (userAnswer == 4) and (answerFour == correctAnswerFour[cAF]):
                print("Helyes válasz!")
                cAF += 1
                correctAnswers += 1
            elif (answerFour == correctAnswersFour[cAF]) and not((userAnswer == 4)):
                cAF += 1
                print("A helyes válasz a 4-as lett volna")


            else:
                print("Rossz válasz!")
            time.sleep(1.5)
        quest += 6 
        answerOne += 6
        answerTwo += 6
        answerThree += 6
        answerFour += 6
    print("Helyes válaszok száma:", correctAnswers ,"/100")
def QuizMaker():
    quest = 0
    answerOne = 1
    answerTwo = 2
    answerThree = 3
    answerFour = 4
    txtfile = str(input("Adja meg a kivánt txt file nevét (Ez tartja majd a kérdéseket!): "))

    while True:
        with open(txtfile + ".txt", "a", encoding="utf8") as x:
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

        check = str(input("Szerednéd le ellenőrizni?: "))
        if check == "igen":
                with open(txtfile + ".txt", "r", encoding="utf8") as x:
                    lines = x.readlines()
                    print("\n")
                    print(lines[quest])
                    print(lines[answerOne])
                    print(lines[answerTwo])
                    print(lines[answerThree])
                    print(lines[answerFour])
                    time.sleep(1)
        else:
            print("ok")

question = str(input("Kezdhetünk?: "))
    
if question == "Igen" or "igen":
    question2 = int(input("Quizt irnál vagy probálnál? (1 / 2): "))
    if question2 == 1:
        #Quiz készítő
        QuizMaker()
    elif question2 == 2:
        #Quiz Játék
        Quiz()
else:
    print('Error, kérem adjon meg helyes választ "igen" vagy "nem"!')