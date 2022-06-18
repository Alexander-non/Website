num1 = int(input('Mekkora legyen a négyzet?: '))
num2 = int(input('Mekkora legyen a keret?: '))
def Keret(size, border):
    while border > (size/2):
        print('A keret nem lehet nagyobb a négyzet méreténél!')
    for sor in range(size):
        for x in range(size):
            if (sor < border) or (sor >= size - border) or (x < border) or  (x >= size - border):
                print("H", end='')
            else:
                print(' ', end='')
        print('')
#Máskor
def InvertKeret(size, border):
    while border > (size/2):
        print('A keret nem lehet nagyobb a négyzet méreténél!')
    for sor in range(size):
        for x in range(size):
            if (sor > border) or (sor <= size - border) or (x > border) or  (x <= size - border):
                print("H", end='')
            else:
                print(' ', end='')
        print('')

InvertKeret(num1, num2)