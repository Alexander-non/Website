def Prim(szám):
    osztók = 0
    osztókList = []
    for i in range(szám):
        if szám % (i+1) == 0:
            osztók += 1
            osztókList.append(i+1)
    if osztók <= 2:
        print(str(szám) + " Prímszám")
    else:
        print(str(szám) + " " + str(osztókList))
a = int(input("Adjon meg egy számot: "))
for x in range(a):
    Prim(x+1)