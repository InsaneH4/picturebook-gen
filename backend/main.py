import replicate
from flask import Flask
from flask_cors import CORS

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


if __name__ == "__main__":
    app.run(debug=True)
