import replicate
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from unicodedata import name
from urllib import response
# from google.cloud import texttospeech_v1

# os.environ['GOOGLE_APPLLICATION_CREDENTIALS'] = "picturebook-399214-ec6e8f8cfbd4.json"
# client = texttospeech_v1.TextToSpeechClient()


class Story:
    def __init__(self, topic, mc_info, text, summary, img_prompt, img_url, audio):
        self.topic = topic
        self.mc_info = mc_info
        self.text = text
        self.summary = summary
        self.img_prompt = img_prompt
        self.img_url = img_url
        self.audio = audio

    def __str__(self, topic, mc_info, text, summary, img_prompt, img_url):
        return f"Topic: {self.topic}\nMC Info: {self.mc_info}\nText: {self.text}\nSummary: {self.summary}\nImage Prompt: {self.img_prompt}\nImage URL: {self.img_url}"


app = Flask(__name__)
CORS(app)
openai.api_key = "pk-kZNLLuaOkcMCCrqifAxAOFiXFIZtmtmdIhhlUzuTpLzwQaBm"
# morrigan -> pk-kZNLLuaOkcMCCrqifAxAOFiXFIZtmtmdIhhlUzuTpLzwQaBm
# sam -> "pk-bAAvcNSLkIImdCjCpocEoXswrexCPXVtZdOYWaapPQgtUJsx"
openai.api_base = 'https://api.pawan.krd/pai-001-light-beta/v1'
client = replicate.Client(api_token="r8_CLo7yb0uM3cYeHfPs1N7TyKme3Fg4z743YdrG")
# prompt = input("Enter prompt: ")
# result = client.run(
#    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
#    input={"prompt": prompt}
# print(result)

my_story = Story("no topic", "no mc_info", "no text",
                 "no summary", "no prompt", "no url", "no audio")


def story_gpt(character, goal):
    return openai.Completion.create(
        model="gpt-3.5-turbo",
        prompt="make a short story less than 5 sentences (required!!), write the beginning of a story about a character " + character + "learning about " + goal +
        "end with a scenario where the character needs to make a decision regarding what they are learning about",
        temperature=0.7,
        max_tokens=400,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["Human: ", "AI: "]
    )


def summary_gpt(story):
    return openai.Completion.create(
        model="gpt-3.5-turbo",
        prompt="do a one sentence summary of the story provided: " + story,
        temperature=0.7,
        max_tokens=200,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["Human: ", "AI: "]
    )


# chat_result = chat("Joe the dog", "patience").choices[0].text
# print(chat_result)


def stable_diff(prompt):
    return client.run(
        "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
        input={"prompt": prompt}
    )[0]

# Generates ai image of scene


# @app.route("/imagegen/<my_prompt>", methods=['GET', 'POST'])
# def imagegen(my_prompt):
#     print("Generating image with prompt: ", my_prompt)
#     result = stable_diff(my_prompt)
#     my_story.img_url = result
#     my_story.img_prompt = my_prompt
#     print(result)
#     return {"image_url": my_story.img_url, "prompt": my_story.img_prompt}


# @app.route("/summarize_story/")
# def summarize_story(story_text):
#     print("Summarizing story: ", story_text)
#     summary = story_gpt(story_text).choices[0].text
#     return {"summarized_story": summary}


@app.route("/topic/<my_topic>", methods=['GET', 'POST'])
def topic(my_topic):
    # post topic recieved to frontend

    print("Getting topic: ", my_topic)
    my_story.topic = my_topic
    return {"topic": my_story.topic}


@app.route("/mc_info/<my_mc_info>", methods=['GET', 'POST'])
def mc_info(my_mc_info):
    print("Getting mc_info: ", my_mc_info)
    my_story.mc_info = my_mc_info
    return {"mc_info": my_story.mc_info}


@app.route("/story_gen/", methods=['GET', 'POST'])
def story_gen():
    # generate plot
    print("Generating story...")
    # chat gpt magic
    my_story.text = story_gpt(my_story.mc_info, my_story.topic).choices[0].text
    print(my_story.text)
    print("Summarizing story: ")
    my_story.summary = summary_gpt(my_story.text).choices[0].text
    print(my_story.summary)
    # my_story.img_url = stable_diff(my_story.summary)

    # synthesis_input = texttospeech_v1.SynthesisInput(ssml=my_story.text)
    # voice = texttospeech_v1.VoiceSelectionParams(
    #     language_code='en_au',
    #     ssml_gender=texttospeech_v1.SsmlVoiceGender.FEMALE
    # )
    # #print(client.list_voices)
    # audio_config = texttospeech_v1.AudioConfig(
    #     audio_encoding=texttospeech_v1.AudioEncoding.MP3
    # )
    # response1 = client.synthesize_speech(
    #     input=synthesis_input,
    #     voice=voice,
    #     audio_config=audio_config
    # )
    # my_story.audio = response1.audio_content
    # with open('audiobee.mp3', 'wb', )as output:
    #     output.write(response1.audio_content)
    return {"story_text": my_story.text, "story_summary": my_story.summary, "image_url": my_story.img_url, "audio": my_story.audio}


@app.route("/story_info/")
def story_info():
    print("Getting story")
    print(my_story)
    return my_story.__dict__


if __name__ == "__main__":
    app.run(debug=True)
