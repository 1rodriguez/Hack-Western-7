import speech_recognition as sr
import moviepy.editor as mp

# get video and convert to audtio
videoName = "sampleVideo.mp4"
clip = mp.VideoFileClip(videoName)
clip.audio.write_audiofile(r"converted.wav")
r = sr.Recognizer()
audio = sr.AudioFile("converted.wav")

# read in speech to text file
with audio as source:
    audio_file = r.record(source)

result = r.recognize_google(audio_file)

# export
with open('recognized.txt',mode ='w') as file:
    file.write("Recognized Speech:")
    file.write("\n")
    file.write(result)
