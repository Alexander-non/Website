import MagasságokPlusz
with open("magassagok.txt", "r", encoding="utf-8") as x:
    MagasságokPlusz.RandomHeight(5)
    for line in x:
        if int(line.split(":")[1].strip().strip("cm")) > 150: print(line.split(":")[0].strip())