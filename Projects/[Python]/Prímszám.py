def Prim(szám):
    osztók = 0
    osztókList = []
    for i in range(1, szám+1):
        if szám % i == 0:
            osztókList.append(i)
            osztók += 1
    if osztók <= 2: print("Prímszám")
    else: print(osztókList)
list1 = ['számot', 'évszámot', 'páros számot']
for i in range(len(list1)):
    a = int(input("Adjon meg egy {}: ".format(list1[i])))
    Prim(a)

#a = int(input("Adjon meg egy számot: "))
#b = int(input("Adjon meg egy évszámot: "))
#c = int(input("Adjon meg egy páros számot: "))
#Prim(a)
#Prim(b)
#Prim(c)