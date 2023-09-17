import openai

openai.api_key = 'pk-IxwZvTOEshpomvdzsHUJZXaADCaVoeUbOhJkMfWjlUEjsoWQ'
openai.api_base = 'https://api.pawan.krd/pai-001-light-beta/v1'

character = "theresa the dragon"
goal = "sharing"

response = openai.Completion.create(
  model="gpt-3.5-turbo",
  prompt="write the beginning of a story about a character " + character + "learning about " + goal + "end with a scenario where the character needs to make a decision regarding what they are learning about",
  temperature=0.7,
  max_tokens=200,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0,
  stop=["Human: ", "AI: "]
)

print(response.choices[0].text)