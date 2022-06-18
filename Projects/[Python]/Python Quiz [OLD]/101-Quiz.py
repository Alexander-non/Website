import time
data = []
question = str(input("Kezdhetünk?: "))


    
if question == "Yes" or "yes":
    #quiz program
    for questionGenerator in range(1, 4):
        dataAdd = "question_" + str(questionGenerator)
        data.append(dataAdd)
        with open(dataAdd + ".txt", "r") as x:
            question = x.readline()
            print('Kérdés: ', question)
            answer = x.readline()
            print('Első válasz: ', answer)
            answer2 = x.readline()
            print('Második válasz: ', answer2)
            answer3 = x.readline()
            print('Harmadik válasz: ', answer3)
            answer4 = x.readline()
            print('Negyedik válasz: ', answer4)
            vegso = int(input("Adja meg a helyes választ: "))

            if vegso == 1 and len(answer) > 20:
                print("Helyes válasz")
            elif vegso == 1 and len(answer) < 20:
                print("Rossz válasz")

            if vegso == 2 and len(answer2) > 20:
                print("Helyes válasz")
            elif vegso == 2 and len(answer2) < 20:
                print("Rossz válasz")

            if vegso == 3 and len(answer3) > 20:
                print("Helyes válasz")
            elif vegso == 3 and len(answer3) < 20:
                print("Rossz válasz")

            if vegso == 4 and len(answer4) > 20:
                print("Helyes válasz")
            elif vegso == 4 and len(answer4) < 20:
                print("Rossz válasz")
            
        data.remove(dataAdd)
        time.sleep(2)
elif question == "No" or "no":
    print("Maybe next time!")
else: 
    print('Error, please enter "yes" or "no"!')