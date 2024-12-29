nap = int(input("Nap: "))
óra = int(input("Idő: "))
#hét = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"]
if ((nap >= 1 and óra >= 8 and óra <= 16) or ((nap >= 6 or nap <= 7) and óra >= 8 and óra <= 12) ): print("A bolt nyitva van!")
else: print("A bolt zárva van!")