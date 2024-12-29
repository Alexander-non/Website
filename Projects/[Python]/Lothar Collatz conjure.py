import random
start_number = 0
def Start(num):
    with open("CollatzNumbers.txt", "w", encoding="utf8") as x:
        while num != 1:
            print(int(num))
            x.write("{} \n".format(str(int(num))))
            if (num % 2 == 0): num = num / 2
            elif (num % 2 != 0): num = num * 3 + 1
        if num == 1:
            print("A szám ({}) 4, 2, 1-es loopba került!".format(start_number))
main_question = int(input("Egy random számmal mész vagy saját magad választasz? (1 / 2): "))
while main_question > 2 or main_question < 1:
    main_question = int(input("Egy random számmal mész vagy saját magad választasz? (1 / 2): "))
if main_question == 1:
    number = int(input('Adjon meg egy számot: '))
    Start(number)
elif main_question == 2:
    number = random.randrange(5, 1000)
    start_number = number
    Start(number)