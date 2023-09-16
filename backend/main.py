import replicate
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


app = Flask(__name__)
CORS(app)
client = replicate.Client(api_token="r8_CLo7yb0uM3cYeHfPs1N7TyKme3Fg4z743YdrG")
# prompt = input("Enter prompt: ")
# result = client.run(
#    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
#    input={"prompt": prompt}
# print(result)

my_story = Story("no theme", "no mc_info", "no text", "no prompt", "no url")


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


@app.route("/theme/<my_theme>")
def theme(my_theme):
    print("Getting theme: ", my_theme)
    my_story.theme = my_theme
    # store on firebase
    return {"theme": my_story.theme}


@app.route("/mc_info/<my_mc_info>")
def mc_info(my_mc_info):
    print("Getting mc_info: ", my_mc_info)
    my_story.mc_info = my_mc_info
    # store on firebase
    return {"mc_info": my_story.mc_info}


@app.route("/story_text/<my_text>")
def story_text(my_text):
    # generate plot
    print("Generating story")
    # chat gpt magic
    # text = " "
    my_story.text = my_text
    # store on firebase
    return {"story_text": my_story.text}


@app.route("/view_story")
def view_story():
    print("Getting story")
    return my_story.__dict__


if __name__ == "__main__":
    app.run(debug=True)
