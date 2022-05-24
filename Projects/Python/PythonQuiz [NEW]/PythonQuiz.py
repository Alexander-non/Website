#Importálja a kellő külső függvényeket
import time
import datetime
import random
#Megadja a kezdő értékeket
txtName = "PythonQuizQuestion.txt" #kérdés txt fájl neve
correctAnswers = 0
numberOfQuestions = 0
maxNumberOfQuestions = 0

#Dokumentáló függvény
def Documenting(UsageMode, FirstElement, SecondElement, ThierdElement, FourthElement):
    txtDocumentingName = "naplozás.txt"
    #Quiz mód választás naplózása
    if UsageMode == 2:
        with open(txtDocumentingName, "a", encoding="utf8") as b:
            if FourthElement == 2:
                FourthElement = "Quiz Játék"
            else:
                FourthElement = "Quiz készítés"
            b.write("A felhasználó által választott mód: {} \n".format(FourthElement))
    #Elkezdés naplózása
    elif UsageMode == 3:
        with open(txtDocumentingName, "a", encoding="utf8") as b:
            b.write("A felhasználó elkezdte a Quiz-t: {} \n".format(datetime.datetime.now().strftime("%c")))
    #Nehézségi mód és kérdések számának naplózása
    elif UsageMode == 4:
        with open(txtDocumentingName, "a", encoding="utf8") as b:
            b.write("A felhasználó által választott nehézségi mód: {} \n".format(FirstElement))
            b.write("A felhasználó által kért kérdések száma: {} \n".format(SecondElement))
    #Újra kezdés naplózása
    elif UsageMode == 5:
        with open(txtDocumentingName, "a", encoding="utf8") as b:
            b.write("A felhasználó újra kezdte a Quiz-t: {} \n".format(datetime.datetime.now().strftime("%c")))
#Quiz kiprobáló függvény
def Quiz():
    def SplitCorrection():
        # opening the file in read mode
        with open(txtName, "r", encoding="utf8") as x:
            replacement = ""
            # using the for loop
            for line in x:
                line = line.strip()
                changes = line.replace("*", "@*")
                replacement = replacement + changes + "\n"
        # opening the file in write mode
        with open(txtName, "w", encoding="utf8") as y:
            y.write(replacement)
    def FinalCorrection():
        # opening the file in read mode
        with open(txtName, "r", encoding="utf8") as x:
            replacement = ""
            # using the for loop
            for line in x:
                line = line.strip()
                changes = line.replace("@@", "@")
                replacement = replacement + changes + "\n"
        # opening the file in write mode
        with open(txtName, "w", encoding="utf8") as y:
            y.write(replacement)
    def AnswerCheck():
        getPoints = True
        canContinue = False
        notCorrect = 0
        CorrectAnswerList = [CorrectAnswerOne, CorrectAnswerTwo, CorrectAnswerThree, CorrectAnswerFour]
        Answers = [0,0,0,0,0]
        userAnswer = str(input("Adja meg a helyes válasz számát: ")).split(',')
        #Felhasználó válaszellenőrzés
        while canContinue == False:
            #Leellenőrizzük a felhasználó által adott válasz(oka)t
            for i in range(len(userAnswer)):
                if (int(userAnswer[i]) <= 0) or (int(userAnswer[i]) > 5):
                    userAnswer.clear()
                    userAnswer = str(input("Adja meg a helyes válasz számát: ")).split(',')
                    canContinue = False
                else:
                    canContinue = True
                    #Az "Answers" listának annak a helyére amennyit a felhasználó megadott beírunk egy 1-t
                    for k in range(len(userAnswer)):
                        Answers[int(userAnswer[k])-1] = 1
        
        global correctAnswers
        #Végig megy az összes válasz helyein és megnézi melyik a helyes válasz
        for x in range(len(CorrectAnswerList)):
            if len(CorrectAnswerList[x]) == 2:
                #Ha helyes választ jelöl meg plusz pont
                if int(Answers[x]) == 1:
                    print("Helyes válasz!")
                #Ha nem helyes választ jelöl meg megvonjuk tőle a pont kapás jogát és megmondjuk melyik volt
                else:
                    print("A helyes válasz a {}-es lett volna".format(x+1))
                    getPoints = False
            else:
                notCorrect+=1
                #Hogyha megjelől egy választ, de az nem helyes megvonja a pontot
                if int(Answers[x]) == 1:
                    getPoints = False
                #Ha 4 helytelen van (nincs helyes válasz a kérdésekre)
                if notCorrect == 4:
                    #Ha azt jelöli meg hogy nincs helyes válasz és tényleg nincs plusz pont
                    if int(Answers[4]) == 1:
                        getPoints = True
                        print("Helyes válasz!")
                    #Ha nem azt jelöli meg hogy nincs helyes válasz
                    else:
                        print("Egyik sem volt helyes!")
        #Miután végig mentünk az összes kérdésen és meghatároztuk hogy kaphat pontot adunk neki pontot
        if getPoints == True:
            correctAnswers += 1
    def Difficulty():
        global numberOfQuestions
        global maxNumberOfQuestions
        global correctAnswers
        correctAnswers = 0
        very_easy = 10
        easy = 20
        medium = 30
        hard = 50
        ultra_hard = 100
        death_mode = 200
        with open(txtName, "r", encoding="utf8") as x:
            lines = x.readlines()
            maxNumberOfQuestions = int((len(lines)+1)/6)

        warning = "\n Figyelmeztetés! \n A helyes válaszokat 1-5-ig lehet választani, az 5-ös arra utal ha nincs helyes válasz!\n"
        difficulty = " 1) Nagyon Könnyű ({}) \n 2) Könnyű ({}) \n 3) Közepes ({}) \n 4) Nehéz ({}) \n 5) Ultra Nehéz ({}) \n 6) Halál mód ({}) \n 7) Egyéb".format(very_easy, easy, medium, hard, ultra_hard, death_mode)
        print(warning + difficulty)
        difficultyChoosing = int(input("Válassz egy nehézséget (1-7): "))
        while (difficultyChoosing > 7) or (difficultyChoosing < 0):
            difficultyChoosing = int(input("Válassz egy nehézséget (1-7): "))
        if difficultyChoosing == 1:
            Documenting(4, "Nagyon Könnyű", very_easy, "", "")
            numberOfQuestions = very_easy
        elif difficultyChoosing == 2:
            Documenting(4, "Könnyű", easy, "", "")
            numberOfQuestions = easy
        elif difficultyChoosing == 3:
            Documenting(4, "Közepes", medium, "", "")
            numberOfQuestions = medium
        elif difficultyChoosing == 4:
            Documenting(4, "Nehéz", hard, "", "")
            numberOfQuestions = hard
        elif difficultyChoosing == 5:
            Documenting(4, "Ultra Nehéz", ultra_hard, "", "")
            numberOfQuestions = ultra_hard
        elif difficultyChoosing == 6:
            Documenting(4, "Halál mód", death_mode, "", "")
            numberOfQuestions = death_mode
        elif difficultyChoosing == 7:
            numberOfQuestions = int(input("Hány kérdéssel akarsz játszani?: "))
            while numberOfQuestions > maxNumberOfQuestions:
                print("Az általad megadott kérdések száma ("+str(numberOfQuestions)+") túl sok.")
                numberOfQuestions = int(input("Hány kérdéssel akarsz játszani?: "))
            Documenting(4, "Egyéb", numberOfQuestions, "", "")
        else:
            print("Hiba történt nehézség választáskor!")
    def Leaderboard(yourScore, scoreablePoints):
        leaderboardTxtName = "Ranglista.txt"
        file = open(leaderboardTxtName, "a", encoding="utf8")
        fileRead = open(leaderboardTxtName, "r", encoding="utf8")
        usersName = str(input("Meg adja a nevét a ranglistán?: ")).lower()
        while usersName != None:
            if usersName == "igen":
                leaderboardName = str(input("Adja meg a nevét: "))
                break
            elif usersName == "nem":
                leaderboardName = "Ismeretlen"
                break
            else:
                usersName = str(input("Meg adja a nevét a ranglistán?: ")).lower()
        with file as x:
            x.write("{}: {}/{}\n".format(leaderboardName, yourScore, scoreablePoints))
    #Txt formáló függvények me 
    SplitCorrection()
    FinalCorrection()
    Difficulty()
    #Kérdés/Válaszok helyének kiolvasására felyügyelő számok
    quest = random.randrange(0, (maxNumberOfQuestions*6), 6)
    #Blockolt számok listájának készitése kérdés duplázódás ellen
    BlockedNumbers = []
    BlockedNumbers.append(quest)
    #Belső változók létrehozása
    answerOne = quest+1
    answerTwo = answerOne+1
    answerThree = answerTwo+1
    answerFour = answerThree+1
    
    #For loop, ami végig megy az összes kérdésen és ahhoz tartozó válaszon majd kiírja őket
    for q in range(1, numberOfQuestions + 1):
        #Megnyitja a kivánt txt file-t
        with open(txtName, "r", encoding="utf8") as x:
            #Txt fájl sorainak olvasása és azok felhasználónak adása
            lines = x.readlines()
            CorrectAnswerOne = lines[answerOne].split("@")
            CorrectAnswerTwo = lines[answerTwo].split("@")
            CorrectAnswerThree = lines[answerThree].split("@")
            CorrectAnswerFour = lines[answerFour].split("@")
            print(f"\n{q}. Kérdés: {lines[quest]}") #Megfelelő sor kiválasztása a txt fájl soraiból
            print(f"1. Válasz: {CorrectAnswerOne[0].replace("\n", "")}") #Kiírja a válaszok sorainak azt a részét ami csak a válasz részt tartalmazza
            print(f"2. Válasz: {CorrectAnswerTwo[0].replace("\n", "")}")
            #3/4. válasz kiírása vagy nem megjelenítése ha nincs válasz
            if lines[answerThree].replace("\n", "") == "":
                print("")
            else:
                print("3. Válasz: ", CorrectAnswerThree[0].replace("\n", ""))
            if lines[answerFour].replace("\n", "") == "":
                print("")
            else:
                print("4. Válasz: ", CorrectAnswerFour[0].replace("\n", ""))
            print("\n")
            #Válasz ellenőrzés
            AnswerCheck()
            time.sleep(1)
            #Következő kérdést/választ változóba való rögzítése
            quest = random.randrange(0, (maxNumberOfQuestions*6), 6)
            #Olyan kérdés ki választása mely nem volt eddig
            for w in range(len(BlockedNumbers)):
                if quest == BlockedNumbers[w]:
                    quest = random.randrange(0, (maxNumberOfQuestions*6), 6)
                else:
                    break
            answerOne = quest+1
            answerTwo = answerOne+1
            answerThree = answerTwo+1
            answerFour = answerThree+1
    #Felhasználó értesítése általa elért pontok alapján
    print("\nHelyes válaszok száma: {} / {}".format(correctAnswers, numberOfQuestions))
    #Felhasználó pontjainak rögzítése
    Leaderboard(correctAnswers, numberOfQuestions)
    #Újra kezdés inputja
    restart = str(input("Akarsz újra játszani?: ")).lower()
    #Újra kezdésre hiba kezelő while loop
    while restart != None:
        #Hiba kezelés IGEN válasz megadásának része
        if restart == "igen":
            Documenting(5, "", "", "", "")
            Quiz()
        #Hiba kezelés NEM válasz megadásának része
        elif restart == "nem":
            print("Találkozunk később")
            time.sleep(5)
            exit()
        #Hiba kezelés ROSSZ válasz megadásának része
        else:
            print('Hiba, kérem adjon meg egy helyes választ: "Igen" vagy "Nem"!')
            time.sleep(1)
            restart = str(input("Akarsz újra játszani?: ")).lower()
#Szipla Quiz készitő függvény
def QuizMaker():
    #Txt fájl nevét rögzítő input
    txtfile = str(input("Adja meg a kivánt txt file nevét (Ez tartja majd a kérdéseket!): "))
    while True:
        #Kérdés és arra válaszok rögzítése txt fájlba
        with open(txtfile + ".txt", "a", encoding="utf8") as x:
            print("Tipp: Ha nem akar kérdést megadni csak nyomjon 'Enter'-t.\n Helyes kérdéseket egy csillag '*' megjelölésévek jelezze.")
            x.write(str(input("Adjon meg egy kérdést: ")) + "\n")
            for element in ["első", "második", "harmadik", "negyedik"]:
                x.write(str(input("Adja meg az {} választ a kérdésre: ".format(element))) + "\n")
            x.write("\n")
            print("Kérdés sikeresen hozzáadva!")
        check = str(input("Szerednéd le ellenőrizni?: ")).lower()
        #Kérdés ellenőrzés IGEN válasz megadásának része
        if check == "igen":
            with open(txtfile + ".txt", "r", encoding="utf8") as x:
                lines = x.readlines()
                print("\n")
                for i in range(4): print(lines[i])
                time.sleep(1)
        #Kérdés ellenőrzés NEM válasz megadásának része
        elif check == "nem":
            check2 = str(input("Szerednél vissza menni a 'kezdőképernyőre?': ")).lower()
            #Főmenüre visszalépés IGEN válasz megadásának része
            if check2 == "igen":
                question2 = int(input("Quiz-t írnál vagy probálnál? (1 / 2): "))
                while question2 != None:
                    if question2 == 1:
                        Documenting(2, "", "", "", 1)
                        QuizMaker()
                    elif question2 == 2:
                        Documenting(2, "", "", "", 2)
                        Quiz()
            #Főmenüre visszalépés NEM válasz megadásának része
            elif check2 == "nem":
                print("Találkozunk később")
                time.sleep(5)
                exit()
            #Főmenüre visszalépés ROSSZ válasz megadásának része
            else:
                print('Hiba, kérem adjon meg egy helyes választ: "Igen" vagy "Nem"!')
                check2 = str(input("Szerednél vissza menni a 'kezdőképernyőre?': ")).lower()
        #Kérdés ellenőrzés ROSSZ válasz megadásának része
        else:
            print('Hiba, kérem adjon meg egy helyes választ: "Igen" vagy "Nem"!')
            check = str(input("Szerednéd le ellenőrizni?: ")).lower()
#A program innen indul egy kérdéssel
question = str(input("Kezdhetünk?: ")).lower()
#Első kérdésre hiba kezelő while loop
while question != None:
    #Hiba kezelés IGEN válasz megadásának része
    if question == "igen":
        Documenting(3, "", "", "", "")
        #Következő kérdés mely a felhasználót a program két része között vezet el
        question2 = int(input("Quiz-t írnál vagy probálnál? (1 / 2): "))
        while question2 != None:
            #Hiba kezelés 1. válasz megadásának része
            if question2 == 1:
                #Quiz készítő
                Documenting(2, "", "", "", 1)
                QuizMaker()
            #Hiba kezelés 2. válasz megadásának része
            elif question2 == 2:
                #Quiz Játék
                Documenting(2, "", "", "", 2)
                Quiz()
            #Hiba kezelés ROSSZ válasz megadásának része
            else:
                print("Adjon meg egy érvényes számot 1 és 2 között")
                question2 = int(input("Quiz-t írnál vagy probálnál? (1 / 2): "))
    #Hiba kezelés NEM válasz megadásának része
    elif question == "nem":
        print("Találkozunk később")
        time.sleep(5)
        exit()
    #Hiba kezelés ROSSZ válasz megadásának része
    else: 
        print('Hiba, kérem adjon meg egy helyes választ: "Igen" vagy "Nem"!')
        time.sleep(1)
        question = str(input("Kezdhetünk?: ")).lower()