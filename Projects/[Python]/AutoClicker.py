import sys, pygame
pygame.init()

import time
import tkinter as tk

# Size of window
screen_width = 450
screen_height = 500
size = screen_width, screen_height
screen = pygame.display.set_mode(size, pygame.RESIZABLE)




dx = 0.1
dy = 0.1
x= 163
y = 120
background_color = (255,0,0)
white = (255,255,255)



while True:
    screen.fill(background_color)
    for event in pygame.event.get():
        if event.type == pygame.QUIT: sys.exit()
        if event.type == pygame.MOUSEBUTTONDOWN:
            if screen_width/2 <= mouse[0] <= screen_width/2+140 and screen_height/2 <= mouse[1] <= screen_height/2+40: 
                pygame.quit()
    mouse = pygame.mouse.get_pos() 

    if screen_width/2 <= mouse[0] <= screen_width/2+140 and screen_height/2 <= mouse[1] <= screen_height/2+40: 
        pygame.draw.rect(screen,white,[screen_width/2,screen_height/2,100,50]) 
          
    else: 
        pygame.draw.rect(screen,white,[screen_width/2,screen_height/2,100,50])

    #smallfont = pygame.font.SysFont('Corbel',35) 
    #text = smallfont.render('quit' , True , black)
    #screen.blit(text , (screen_width/2+50,screen_height/2)) 

    def ball():
        x += dx
        y += dy

        if x < 0 or x > screen_width:   
            dx = -dx

        if y < 0 or y > screen_height:
            dy = -dy

        screen.fill(black)

        pygame.draw.circle(screen, white, (x,y), 8)

    #pygame.display.flip()
    pygame.display.update()