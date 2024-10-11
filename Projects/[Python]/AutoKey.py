import keyboard
import time
run = True
def loop(key):
    keyboard.press(key)
    time.sleep(2)
    keyboard.release(key)
keyList = ["w", "a", "s", "d"]
while run == True:
    if keyboard.is_pressed('enter'):
        while run == True:
            for i in range(len(keyList)):
                loop(keyList[i])
    #Exit
    if keyboard.is_pressed('esc'):
        run = False
