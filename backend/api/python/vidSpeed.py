import moviepy.editor as mp
import sys
from os import listdir
from pathlib import Path

# get speed as argument
videoName = Path("uploads/" + listdir("uploads/")[0]).resolve()
speed = int(sys.argv[1])

clip = mp.VideoFileClip(str(videoName))
# change speed
final = clip.fx(mp.vfx.speedx, speed)
final.write_videofile("edited.mp4")

