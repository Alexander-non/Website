film = str(input("Adja meg a film címét: "))
time = int(input("Adja meg a(z) film hosszát: "))
hour = time // 60
minutes = time - hour * 60
finaltime = str(hour) + ' óra ' + str(minutes) + ' perc'
print("A", film, "című film", finaltime, "hoszzú!")