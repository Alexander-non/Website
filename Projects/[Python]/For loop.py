number1 = int(input("Adja meg az első számot: "))
number2 = int(input("Adja meg az második számot: "))
if (number1 > number2):
    number3 = -1
    for x in range(number1, number2, number3): print(x)
elif (number1 < number2):
    number3 = 1
    for x in range(number1, number2, number3): print(x)
else: print("A kettő szám nem lehet egyenlő!")

#for x in range(2, 100, 2): print(x)
#   number1 = int(input("Adjon meg egy számot: "))
#   number2 = int(input("Adja meg hogy hanyasával lépegessen: "))
#   for x in range(0, number1, number2): print(x)