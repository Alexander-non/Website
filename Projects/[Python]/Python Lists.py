import random
AList = []
BList = []
CList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",]

for i in range(10):
    rand = random.randint(0,100)
    AList.append(rand)
BList.extend(AList)
BList.sort()
for i in range(len(CList)):
    rand = random.randint(0, len(CList))
    CList.insert(i + rand, " ")
    CList.pop(rand)

print(AList)
print(BList)
print(CList)
print(CList.count(" "))