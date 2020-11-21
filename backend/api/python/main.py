import speech_recognition as sr
import moviepy.editor as mp
import sys 
from pathlib import Path

# get video and convert to audtio

# NOTE: Paths are relative to directory where python command is run. In the case
# of multiple node files, this seems to default not to the file.js file which
# spawned the process, but the main server.js file that's called to start the server

# TODO: These path resolutions might not work for Kwame on windows
videoName = Path("api/python/sampleVideo.mp4").resolve()
clip = mp.VideoFileClip(str(videoName))
clip.audio.write_audiofile(r"converted.wav")
r = sr.Recognizer()

# See Note re: paths above; converted.wav resolves to backend/converted.wav, not
# backend/api/python/converted.wav or even backend/api/controller/converter.wav
audio = sr.AudioFile("converted.wav")

# read in speech to text file
with audio as source:
    audio_file = r.record(source)

result = r.recognize_google(audio_file)






