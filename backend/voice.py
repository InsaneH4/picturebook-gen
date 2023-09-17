import os
from unicodedata import name
from urllib import response
from google.cloud import texttospeech_v1

os.environ['GOOGLE_APPLLICATION_CREDENTIALS'] = "picturebook-399214-561b4cc59b3b.json"
client = texttospeech_v1.TextToSpeechClient()

text = '''<speak>A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.

Where is the party in opposition that has not been decried as communistic by its opponents in power? Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?

Two things result from this fact:

I. Communism is already acknowledged by all European powers to be itself a power.

II. It is high time that Communists should openly, in the face of the whole world, publish their views, their aims, their tendencies, and meet this nursery tale of the Spectre of Communism with a manifesto of the party itself.</speak>'''

synthesis_input = texttospeech_v1.SynthesisInput(ssml=text)

voice = texttospeech_v1.VoiceSelectionParams(
    language_code = 'en_au',
    ssml_gender = texttospeech_v1.SsmlVoiceGender.FEMALE
)

print(client.list_voices)
audio_config = texttospeech_v1.AudioConfig(
    audio_encoding  = texttospeech_v1.AudioEncoding.MP3
)


response1 = client.synthesize_speech(
    input = synthesis_input,
    voice = voice,
    audio_config = audio_config
)

with open('audiobee.mp3', 'wb', )as output:
    output.write(response1.audio_content)
