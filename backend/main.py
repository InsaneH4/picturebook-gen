import replicate
from flask import Flask
from flask_cors import CORS


class Story:
    def __init__(self, theme, mcInfo):
        self.theme = theme
        self.mcInfo = mcInfo

    def __str__(self, theme, mcInfo):
        return f"Theme: {self.theme}\nMC Info: {self.mcInfo}"


app = Flask(__name__)
CORS(app)
client = replicate.Client(api_token="r8_CLo7yb0uM3cYeHfPs1N7TyKme3Fg4z743YdrG")
# prompt = input("Enter prompt: ")
# result = client.run(
#    "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
#    input={"prompt": prompt}
# print(result)


def stableDiff(prompt):
    return client.run(
        "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478",
        input={"prompt": prompt}
    )[0]


@app.route("/imagegen/<prompts>")
def imagegen(prompts):
    prompts = prompts.split(",")
    print("Generating images with prompts: ", prompts)
    results = []
    for prompt in prompts:
        results.append(stableDiff(prompt))
    print(results)
    return {"images": results}


my_story = Story("blank", "blank")


@app.route("/theme/<my_theme>")
def theme(my_theme):
    print("Getting theme: ", my_theme)
    my_story.theme = my_theme
    # store on firebase
    return {"story": my_theme}


@app.route("/mc_info/<my_mcInfo>")
def mcinfo(my_mcInfo):
    print("Getting mcInfo: ", my_mcInfo)
    my_story.mcInfo = my_mcInfo
    # store on firebase
    return {"story": my_mcInfo}


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
    return {"theme": my_story.theme, "mcInfo": my_story.mcInfo}


if __name__ == "__main__":
    app.run(debug=True)
