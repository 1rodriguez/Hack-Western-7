from moviepy.editor import *
import sys
# get speed as argument
speed = int(sys.argv[0])
clip = VideoFileClip("sampleVideo.mp4")
# change speed
final = clip.fx(vfx.speedx, speed)
final.write_videofile("edited.mp4")
