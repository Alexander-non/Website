numberOfLines = 10
while True:
    válasz = int(input("Írnál kérdést vagy lekérdeznél: "))

    if válasz == 1:
            with open("FileWriteTXT" + ".txt", "r") as x:
                for s in range(0, numberOfLines):
                    line = x.readline()
                    print(line)
                with open("FileWriteTXT" + ".txt", "a") as x:
                    krd = input("Mit adjunk hozzá?: ")
                    x.write(krd + "\n")
    else:
        break