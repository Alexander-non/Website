####################################################################################################################################################################################
used = 0
while True:
    def cm():
        cm1 = float(input("(CM) Adja meg az átváltandó számot: "))
        inch1 = cm1 * 2.54
        print(inch1, "inch")
        with open("Eljárási_Gyakorlás_Szöveg_Kimentési_Feladat" + ".txt", "a") as x:
            x.write("cm: " + str(cm1) + " --> " + "inch: " + str(inch1))
            x.write("\n")
    def inch():
        inch2 = float(input("(INCH) Adja meg az átváltandó számot: "))
        cm2 = inch2 / 2.54
        print(cm2, "cm")
        with open("Eljárási_Gyakorlás_Szöveg_Kimentési_Feladat" + ".txt", "a") as x:
            x.write("inch: " + str(inch2) + " --> " + "cm: " + str(cm2))
            x.write("\n")
    kerdes = str(input("Átváltás (c/i): "))

    if kerdes == "c":
        used+=1
        cm()
    elif kerdes == "i":
        used+=1
        inch()
    elif kerdes == "exit":
        if used == 0:
            exit()
        else: 
            print("Átváltások lementve!")
            exit()
    else:
        print('Adja meg az átváltás jelét (cm / inch) vagy kilépéshez gépgelje be azt hogy "exit"!')