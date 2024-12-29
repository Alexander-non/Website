import random
fileTXT = ""
def FileRead(txtName):
    global fileTXT
    fileTXT = "Z:/10c/Python/{}.txt".format(txtName)
    #txtName = 'sorszámolvasás'
def Olvas():
    txt = str(input("Adja meg a txt file nevét: "))
    FileRead(txt)
    ListofNumbers = []
    páros=nagy=összám = 0
    with open(fileTXT, "r", encoding="utf8") as x:
        for i in x:
            ListofNumbers.append(i.strip('\n'))
            összám += int(i.strip('\n'))
            if int(i.strip('\n')) > 100:
                nagy += 1
            if int(i.strip('\n')) % 2 == 0:
                páros += 1
    for x in range(len(ListofNumbers)): 
        print(ListofNumbers[x], end=' ')
        for x in range(int(ListofNumbers[x])): print('x', end=' ')
        print('')
    print('Sorok száma: {} | Nagy számok: {} | Számok összege: {} | Átlaga: {} | Párosak: {} | Páratlanok: {}'.format(len(ListofNumbers), nagy, összám, összám/len(ListofNumbers), páros, len(ListofNumbers)-páros))
def Ir():
    end = ""
    fileTXT = input('Adja meg a txt file nevét: ')
    while end != 'nem':
        with open(fileTXT, "a", encoding="utf8") as x:
            szam = input('Adjon meg egy számot: ')
            x.write(szam + '\n')
        end = str(input("Akarod folytatni?: ")).lower()
argument = int(input('Számokat olvasnál vagy írnál?: '))
while argument > 2 or argument < 1:
    argument = int(input('Számokat olvasnál vagy írnál?: '))
if argument == 1:
    Olvas()
else:
    Ir()
#with open(fileTXT, "w", encoding="utf8") as x:
#    x.writelines('')
#    for i in range(random.randint(5, 10)):
#        x.write(str(random.randint(10, 40)))
#        x.write('\n')