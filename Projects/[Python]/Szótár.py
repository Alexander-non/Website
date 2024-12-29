import SzótárPlusz
vásárlók =  []
SzótárPlusz.RandomSzótárTxt(10)
with open("szótár.txt", "r", encoding="utf-8") as x:
    for adatsor in x: vásárlók.append({"Név" :  adatsor.strip().split(",")[0], "Életkora" : int(adatsor.strip().split(",")[1]), "Él még?" : bool(adatsor.strip().split(",")[2])})
print(vásárlók)