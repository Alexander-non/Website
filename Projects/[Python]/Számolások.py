def negyzet(def_szám): return def_szám * def_szám
def kob(def_szám): return def_szám*def_szám*def_szám
def paros_paratlan(def_szám):
    if def_szám % 2 == 0: return "Páros"
    else: return "Páratlan"
def fakt(def_szám):
    kezdőszám = 1
    for i in range(1, def_szám + 1): kezdőszám *= i
    return kezdőszám
szám = int(input("Adjon meg egy számot: "))
print(f"A szám négyzete: {negyzet(szám)} \nKöbe: {kob(szám)}\nPáros vagy Páratlan: {paros_paratlan(szám)}\nFaktoriálisa: {fakt(szám)}")