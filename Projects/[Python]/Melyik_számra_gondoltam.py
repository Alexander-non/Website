import random
def Guess(guessNum, guessed):
    if guess == guessNum:
        print(str(guessed) + "-szor probálkoztál")
        return 0
    else:
        guessed += 1
        if guess > guessNum:
            print("A szám kisebb")
        elif guess < guessNum:
            print("A szám nagyobb")
        return 1
guessed = 0
randomNum = random.randint(1, 100)
guess = int(input("Milyen számra gondoltam?: "))
while Guess(randomNum, guessed):
    guess = int(input("Milyen számra gondoltam?: "))