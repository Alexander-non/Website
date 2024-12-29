fileName = "gyümölcs_lista.txt"
gyümölcs_lista = []
def Stop(): 
    ui = str(input("Szeretnéd abba hagyni? (i/n): ")).lower()
    if ui == "i": exit()
while True:
    gyümölcs_szám = int(input("Hány gyümölcsöt akarsz beirni?: "))
    for i in range(gyümölcs_szám): gyümölcs_lista.append(str(input("Mi a gyümölcs neve: ")))
    with open(fileName, "a", encoding="utf8") as x:
        x.write(f"{gyümölcs_lista}\n")
    file = open(fileName, "r", encoding="utf8")
    with file as e:
        for line in file:
            gyümölcs_lista.clear()
            print(line.strip("\n"))
    file.close()
    Stop()