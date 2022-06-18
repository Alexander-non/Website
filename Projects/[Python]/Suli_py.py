#1 feladat függvény
def TerületSzámitás(a, b):
    terulet = a * b
    print(str(terulet) + "m/2")
def KerületSzámitás(a, b):
    kerület1 = 2 * a
    kerület2 = 2 * b
    kerületÖssz = kerület1 + kerület2
    print(kerületÖssz)

while True:
    a = int(input("Első szám: "))
    b = int(input("Második szám: "))
    kerdes = str(input("Kerület vagy Terület?: "))
    if kerdes == "kerület":
        KerületSzámitás(a, b)
    if kerdes == "terület":
        TerületSzámitás(a, b)
    n = input("Folytassuk?: ")
    if n == 'ne':
        break