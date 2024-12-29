import random
def Throw(diceSide):
    for i in range(n):
        randomNumber = random.randint(1, diceSide)
        if randomNumber == h:
            print(str(i) + "-szer kell dobni.")
            break
n = int(input("Hányszor akarsz dobni?: "))
m = int(input("Hány oldalú a kocka?: "))
while m < 4:
    m = int(input("Hány oldalú a kocka?: "))
h = int(input("Hányat szeretnél dobni?: "))
while h > m:
    h = int(input("Hányat szeretnél dobni?: "))
Throw(m)


######## LISTA VERZIÓ ########
#import random
#def Throw(diceSide):
#    RandomList = []
#    for i in range(n):
#        randomNumber = random.randint(1, diceSide)
#        RandomList.append(randomNumber)
#    for x in range(len(RandomList)):
#        if RandomList[x] == h:
#            print(str(x) + "-szer kell dobni.")
#            break
#n = int(input("Hányszor akarsz dobni?: "))
#m = int(input("Hány oldalú a kocka?: "))
#while m < 4:
#    m = int(input("Hány oldalú a kocka?: "))
#h = int(input("Hányat szeretnél dobni?: "))
#while h > m:
#    h = int(input("Hányat szeretnél dobni?: "))
#Throw(m)



######## GLOBAL VERZIÓ ########
#import random
#randomNumber = 0
#def Throw(diceSide):
#    global randomNumber
#    randomNumber = random.randint(1, diceSide)
#n = int(input("Hányszor akarsz dobni?: "))
#m = int(input("Hány oldalú a kocka?: "))
#while m < 4:
#    m = int(input("Hány oldalú a kocka?: "))
#h = int(input("Hányat szeretnél dobni?: "))
#while h > m:
#    h = int(input("Hányat szeretnél dobni?: "))
#for i in range(n):
#    Throw(m)
#    if randomNumber == h:
#        print(str(i) + "-szer kell dobni.")
#        break