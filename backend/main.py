import replicate
import openai
from flask import Flask, jsonify, request
from flask_cors import CORS


class Story:
    def __init__(self, topic, mc_info, text, img_prompt, img_url):
        self.topic = topic
        self.mc_info = mc_info
        self.text = text
        self.img_prompt = img_prompt
        self.img_url = img_url

    def __str__(self, topic, mc_info, text, img_prompt, img_url):
        return f"Topic: {self.topic}\nMC Info: {self.mc_info}\nText: {self.text}\nImage Prompt: {self.img_prompt}\nImage URL: {self.img_url}"


app = Flask(__name__)
CORS(app)
openai.api_key = "pk-bAAvcNSLkIImdCjCpocEoXswrexCPXVtZdOYWaapPQgtUJsx"
openai.api_base = 'https://api.pawan.krd/pai-001-light-beta/v1'
client = replicate.Client(api_token="r8_CLo7yb0uM3cYeHfPs1N7TyKme3Fg4z743YdrG")
# prompt = input("Enter prompt: ")
# result = client.run(
#    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
#    input={"prompt": prompt}
# print(result)

my_story = Story("no topic", "no mc_info", "no text", "no prompt", "no url")


def chat(character, goal):
    return openai.Completion.create(
        model="gpt-3.5-turbo",
        prompt="write the beginning of a story about a character " + character + "learning about " + goal +
        "end with a scenario where the character needs to make a decision regarding what they are learning about",
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


@app.route("/imagegen/<my_prompt>")
def imagegen(my_prompt):
    print("Generating image with prompt: ", my_prompt)
    result = stable_diff(my_prompt)
    my_story.img_url = result
    my_story.img_prompt = my_prompt
    print(result)
    return {"image_url": my_story.img_url, "prompt": my_story.img_prompt}


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


@app.route("/story_text/", methods=['GET', 'POST'])
def story_text():
    # generate plot
    print("Generating story...")
    # chat gpt magic
    my_story.text = chat(my_story.mc_info, my_story.topic).choices[0].text
    print(my_story.text)
    return {"story_text": my_story.text}


@app.route("/story_info")
def story_info():
    print("Getting story")
    print(my_story)
    return my_story.__dict__


if __name__ == "__main__":
    app.run(debug=True)
