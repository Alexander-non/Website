#a = int(input("1. szám:  "))
#b = int(input("2. szám:  "))
#c = int(input("3. szám:  "))
#Smax = 0
#Smin = 0
#
#if (a > b) and (a > c):
#    print(a, "a legnagyobb szám")
#    Smax = a
#elif (b > a) and (b > c):
#    print(b, "a legnagyobb szám")
#    Smax = b
#elif (c > a) and (c > b):
#    print(c, "a legnagyobb szám")
#    Smax = c
#elif (a == b) or (a == c) or (b == c):
#    print("A számok egyenlők")
#
#if (a < b) and (a < c):
#    print(a, "a legkisebb szám")
#    Smin = a
#elif (b < a) and (b < c):
#    print(b, "a legkisebb szám")
#    Smin = b
#elif (c < a) and (c < b):
#    print(c, "a legkisebb szám")
#    Smin = c
#
#if not((a == b) or (a == c) or (b == c)):
#    print(Smax,"és", Smin, "különbsége", Smax - Smin)

AList = []
k = int(input("Hány számot akarasz bevinni? "))
for i in range(k):
    num = int(input("Adja meg a kivánt számot: "))
    AList.append(num)
print("A teljes lista:", AList)
print("A legnagyobb szám a", max(AList))
print("A legkisebb szám a", min(AList))
print("A két szám különbsége", max(AList) - min(AList))