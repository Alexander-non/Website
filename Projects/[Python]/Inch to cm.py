question = str(input("Válassza ki hogy melyikből szeretné át váltani (inch/cm): "))
if (question == "cm"):
    number1 = float(input("Adja meg az átváltandó számot (cm): "))
    print(number1 * 2.54, "inch")
elif (question == "inch"):
    number2 = float(input("Adja meg az átváltandó számot (inch): "))
    print(number2 / 2.54, "cm")
else: print("Csak centimétert vagy inch-et tudsz átváltani!")