import math
while True:
    num = float(input("Adjon meg egy számot: "))
    roundDec = int(input("Hány decimálisra akrnál kerekíteni: "))
    if roundDec < 0:
        roundDec = math.pow(10, (roundDec * -1))
        print(math.ceil((num/roundDec))*roundDec)
    #print(round(num, roundDec))
    #print("- Az eredeti szám: {}\n + A szám kerekítve: {}\n  - Tizesekre {}\n  - Százasokra {}\n + Felfele kerekítve: {}\n + Lefele kerekítve: {}".format(number, round(number), round(number, 1), round(number, 2), math.ceil(number), math.floor(number)))