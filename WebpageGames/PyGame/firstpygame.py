from os import environ
environ['PYGAME_HIDE_SUPPORT_PROMPT'] = '1'
import pygame
pygame.init()

def drawThings(user):
    BACKGROUND_COLOR = (150, 230, 240)
    SURFACE.fill(BACKGROUND_COLOR)
    pygame.draw.rect(SURFACE, (255, 255, 255), [user.x, user.y, SCREEN_SIZE[0]/4, SCREEN_SIZE[1]/4], 0)
    
    pygame.display.update()

currentCubeYout = 0
cubeVelocityYout = 10
def gravity(user, cubeVelocityY, currentCubeYout):
    currentCubeY = user.y
    cubeVelocityY -= velocity
    currentCubeY += cubeVelocityY
    user.y = currentCubeY
    #currentCubeY = parseInt(sideContainer.style.bottom.replace("px", ""));
    #cubeVelocityY -= gravitionForce
    #currentCubeY += cubeVelocityY;
    #sideContainer.style.bottom = currentCubeY + "px";

def runGame():
    player = pygame.Rect(0, 0, SCREEN_SIZE[0]/4, SCREEN_SIZE[1]/4)
    running = True
    while running:
        gravity(player, cubeVelocityYout, currentCubeYout)
        clock.tick(FPS)
        keys_pressed = pygame.key.get_pressed()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        if keys_pressed[pygame.K_UP] or keys_pressed[pygame.K_w]:
            player.y -= velocity
        if keys_pressed[pygame.K_DOWN] or keys_pressed[pygame.K_s]:
            player.y += velocity
        if keys_pressed[pygame.K_LEFT] or keys_pressed[pygame.K_a]:
            player.x -= velocity
        if keys_pressed[pygame.K_RIGHT] or keys_pressed[pygame.K_d]:
            player.x += velocity
        drawThings(player)

gameTitle="Cat Tower Defender"
#gameIcon = pygame.image.load("WebpageGames\SpaceInvaders\Textures\icon.png") # Textures\icon
pygame.display.set_caption(gameTitle)
#pygame.display.set_icon(gameIcon)
clock = pygame.time.Clock()

SCREEN_SIZE = (600, 600)
SURFACE = pygame.display.set_mode(SCREEN_SIZE)

velocity = 5
FPS = 60

runGame()