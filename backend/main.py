import replicate
import firebase_admin
from firebase_admin import db
from flask import Flask
from flask_cors import CORS


class Story:
    def __init__(self, theme, mc_info, text, img_prompt, img_url):
        self.theme = theme
        self.mc_info = mc_info
        self.text = text
        self.img_prompt = img_prompt
        self.img_url = img_url

    def __str__(self, theme, mc_info, text, img_prompt, img_url):
        return f"Theme: {self.theme}\nMC Info: {self.mc_info}\nText: {self.text}\nImage Prompt: {self.img_prompt}\nImage URL: {self.img_url}"


# firebase setup
cred_obj = firebase_admin.credentials.Certificate(
    "storybook-edu-9dd73-firebase-adminsdk-5lvfu-e63ffee7f1.json")
default_app = firebase_admin.initialize_app(cred_obj, {
    "databaseURL": "https://storybook-edu-9dd73-default-rtdb.firebaseio.com/"
})

app = Flask(__name__)
CORS(app)
client = replicate.Client(api_token="r8_CLo7yb0uM3cYeHfPs1N7TyKme3Fg4z743YdrG")
# prompt = input("Enter prompt: ")
# result = client.run(
#    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
#    input={"prompt": prompt}
# print(result)


ref = db.reference("/Story")
my_story = Story("no theme", "no mc_info", "no text", "no prompt", "no url")


def stable_diff(prompt):
    return client.run(
        "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
        input={"prompt": prompt}
    )[0]


# Generates ai image of scene
@app.route("/imagegen/<prompt>")
def imagegen(prompt):
    print("Generating image with prompt: ", prompt)
    result = stable_diff(prompt)
    my_story.img_url = result
    print(result)
    return {"image_url": result, "prompt": prompt}


@app.route("/theme/<my_theme>")
def theme(my_theme):
    print("Getting theme: ", my_theme)
    my_story.theme = my_theme
    # store on firebase
    return {"story": my_theme}


@app.route("/mc_info/<my_mc_info>")
def mc_info(my_mc_info):
    print("Getting mc_info: ", my_mc_info)
    my_story.mc_info = my_mc_info
    # store on firebase
    return {"story": my_mc_info}


@app.route("/story_text")
def story_text():
    # generate plot
    print("Generating story")
    # chat gpt magic
    text = ""
    # store on firebase
    return {"story_text": text}


@app.route("/view_story")
def view_story():
    print("Getting story")
    return {"theme": my_story.theme, "mc_info": my_story.mc_info}


if __name__ == "__main__":
    app.run(debug=True)
