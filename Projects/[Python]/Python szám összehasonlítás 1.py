number1 = str(input("Első szöveg: "))
number2 = str(input("Második szöveg: "))

if (len(number1) > len(number2)):
    print("Az első szöveg nagyobb! :", number1)
elif (len(number1) < len(number2)):
    print("A második szöveg nagyobb! :", number2)
else:
    print("A kettő szöveg egyenlő!")