def hetnapja(honap: int, nap: int) -> str:
    napnev = ['vásarnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
    napszam = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 335]
    napsorszam = (napszam[honap-1]+nap) % 7
    return napnev[napsorszam - 2]
def kivantnapszamlalo(nap: str):
    if hetnapja(1, 1) == nap:
        napszámláló += 1
    napszámláló += round(365 / 7)
    print(f"Egy évben {napszámláló} {nap} van.")
hónapok = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December']
honap2 = int(input("Hanyadik hónap: "))
nap2 = int(input("Hanyadik napja: "))
print(f"{hónapok[honap2-1]} {nap2}.-e {hetnapja(honap2, nap2)}-ra/re esett.")


napszámláló = 0
#hónap = 0
#hónapnap = 0
#napok = 0
#while napok <= 365:
#    hónapnap += 1
#    if hónapnap == 30:
#        hónap += 1
#    if hetnapja(hónap, hónapnap) == "szombat":
#        napszámláló += 1
#   napok += 1
#print(f"Egy évben {napszámláló} szombat van.")
