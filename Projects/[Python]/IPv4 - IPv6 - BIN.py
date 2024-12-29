def BINCORRECTOR(binNumber):
    global bin1
    zero = ""
    pluszeros = 8 - len(str(binNumber))
    for i in range(pluszeros):
        zero += "0"
    bin1 = zero + str(binNumber)
def Calculate_IPV6(convertlist, chosen):
    global ipv6
    if chosen == True:
        for i in range(4):
            ipv6 = str(input("Adja meg az IPv6 cim {}. tagját!: ".format(i+1)))
            while len(ipv6) > 4:
                ipv6 = str(input("Adja meg az IPv6 cim {}. tagját!: ".format(i+1)))
            IPV6FULL.append(ipv6)
            ipv6 = ""
        for x in range(len(IPV6FULL)):
            if (x+1) % 2 == 0:
                ipv6 += str(IPV6FULL[x]) + " : "
            else:
                ipv6 += str(IPV6FULL[x])
        ipv6 = ipv6[:-2]
    else:
        if source_address == 1:
            for x in range(len(IPV4FULL)):
                ipv6 = hex(IPV4FULL[x]) #Az IPV4 es lisámnak bizonyos elemét átalakitom binbe
                ipv6 = ipv6[2:] #bin megjelőést leszedem
                IPV6FULL.append(ipv6)
                ipv6 = ""
            for x in range(len(IPV6FULL)):
                if (x+1) % 2 == 0:
                    ipv6 += str(IPV6FULL[x]) + " : "
                else:
                    ipv6 += str(IPV6FULL[x])
            ipv6 = ipv6[:-2]
        else:
            for x in range(len(convertlist)):
                ipv6 = hex(convertlist[x]) #Az IPV4 es lisámnak bizonyos elemét átalakitom binbe
                ipv6 = ipv6[2:] #bin megjelőést leszedem
                IPV6FULL.append(ipv6)
                ipv6 = ""
            for x in range(len(IPV6FULL)):
                if (x+1) % 2 == 0:
                    ipv6 += str(IPV6FULL[x]) + " : "
                else:
                    ipv6 += str(IPV6FULL[x])
            ipv6 = ipv6[:-2]
def Calculate_BIN(convertlist, chosen):
    global bin1
    if chosen == True:
        print("Teljes 8 karaket hosszúságú értéket adj meg!")
        for i in range(4):
            bin1 = int(input("Adja meg az Binary cim {}. tagját!: ".format(i+1)))
            BINCORRECTOR(bin1)

            #FAIL TEST BEGIN
            for x in range(len(str(bin1))):
                while int(bin1[x]) > 1 or int(bin1[x]) < 0:
                    bin1 = int(input("Adja meg az Binary cim {}. tagját!: ".format(i+1)))
                    BINCORRECTOR(bin1)
            while len(str(bin1)) > 8 or len(str(bin1)) < 0:
                bin1 = int(input("Adja meg az Binary cim {}. tagját!: ".format(i+1)))
                BINCORRECTOR(bin1)
            #FAIL TEST END

            BINFULL.append(bin1)
            bin1 = ""
        for x in range(len(BINFULL)):
            bin1 += str(BINFULL[x]) + "."
        bin1 = bin1[:-1]
    else:
        if source_address == 2:
            for x in range(len(convertlist)):
                bin1 = bin(convertlist[x]) #Az IPV4 es lisámnak bizonyos elemét átalakitom binbe
                bin1 = bin1[2:] #bin megjelőést leszedem
                BINFULL.append(bin1)
                bin1 = ""
            bin2 = ""
            for x in range(len(BINFULL)):
                BINCORRECTOR(BINFULL[x])
                bin2 += bin1 + "."
            bin1 = bin2[:-1]
        else:
            for x in range(len(IPV4FULL)):
                bin1 = bin(IPV4FULL[x]) #Az IPV4 es lisámnak bizonyos elemét átalakitom binbe
                bin1 = bin1[2:] #bin megjelőést leszedem
                BINFULL.append(bin1)
                bin1 = ""
            bin2 = ""
            for x in range(len(BINFULL)):
                BINCORRECTOR(BINFULL[x])
                bin2 += bin1 + "."
            bin1 = bin2[:-1]
def Calculate_IPV4(convertlist, chosen):
    if chosen == True:
        global ipv4
        for i in range(4):
            ipv4 = int(input("Adja meg az IPv4 cim {}. tagját!: ".format(i+1)))
            
            #FAIL TEST BEGIN
            while ipv4 > 255 or ipv4 < 0:
                ipv4 = int(input("Adja meg az IPv4 cim {}. tagját!: ".format(i+1)))
            #FAIL TEST END

            IPV4FULL.append(ipv4)
            ipv4 = ""
        for x in range(len(IPV4FULL)):
            ipv4 += str(IPV4FULL[x]) + "."
        ipv4 = ipv4[:-1]
    else:
        if source_address == 1:
            for x in range(len(convertlist)):
                for y in range(len(str(convertlist[x]))):
                    if str(convertlist[x])[y] == "1":
                        ipv4 += binList[y]
                IPV4FULL.append(ipv4)
                ipv4 = 0
            ipv4 = ""
            for x in range(len(IPV4FULL)):
                ipv4 += str(IPV4FULL[x]) + "."
            ipv4 = ipv4[:-1]
        else:
            for x in range(len(convertlist)):
                IPV4FULL.append(int(convertlist[x], base=16))
                ipv4 = 0
            ipv4 = ""
            for x in range(len(IPV4FULL)):
                ipv4 += str(IPV4FULL[x]) + "."
            ipv4 = ipv4[:-1]
IPV4FULL = []
IPV6FULL = []
BINFULL = []
binList = [128, 64, 32, 16, 8, 4, 2, 1]
bin1 = 0
ipv6 = 0
ipv4 = 0
source_address = int(input("Milyen cimet akarasz megadni? [ (1) BIN / (2) IPV4 / (3) IPV6 ]: "))
while source_address > 3 or source_address < 1:
    source_address = int(input("Milyen cimet akarasz megadni? [ (1) BIN / (2) IPV4 / (3) IPV6 ]: "))
with open("cimek.txt", "w", encoding="utf8") as q:
    if source_address == 1:
        Calculate_BIN("", True)
        Calculate_IPV4(BINFULL, False)
        Calculate_IPV6(BINFULL, False)
    elif source_address == 2:
        Calculate_IPV4("", True)
        Calculate_IPV6(IPV4FULL, False)
        Calculate_BIN(IPV4FULL, False)
    else:
        Calculate_IPV6("", True)
        Calculate_IPV4(IPV6FULL, False)
        Calculate_BIN(IPV6FULL, False)
    writeable = ["IPv4: ", ipv4, "IPv6: ", ipv6, "Binary: ", bin1]
    for i in range(len(writeable)):
        if i % 2 == 0:
            current_write = str(writeable[i])
        else:
            current_write = str(writeable[i]) + "\n"
        q.write(current_write)
print("Az általad meg adott:\n IPV4 cim: {}\n IPV6 cim: x : x : x : x : x : x : {}\n Binary cim: {}".format(ipv4, ipv6, bin1))