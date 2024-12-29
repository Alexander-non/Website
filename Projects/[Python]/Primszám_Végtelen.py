#Nincs befejezve
import time
CurrentNumber = 1
osztók = 0
while True:
    for i in range(CurrentNumber):
        if CurrentNumber % (i+1) == 0:
            osztók += 1
    if osztók <= 2:
        osztók = 0
        print(CurrentNumber, "Prímszám")
    else:
        osztók = 0 
        print(CurrentNumber)
    CurrentNumber += 1
    time.sleep(0.1)