﻿# picturebook-gen 
openai API key: 
pk-IxwZvTOEshpomvdzsHUJZXaADCaVoeUbOhJkMfWjlUEjsoWQ

resources:
https://platform.openai.com/docs/api-reference/introduction
https://github.com/bradtraversy/nodejs-openai-image
https://www.youtube.com/watch?v=fU4o_BKaUZE

attributes:
- Interactive story creation
    - Children actively contribute and shape the story through choices
- Gamification elements
    - Integrate rewards, badges, or a scoring system to incentivize participation
- Educational integration
    - Align the story generation with educational objectives, encouraging language, problem-solving, and moral values
- AI powered guidance
    - Real-time guidance toward good choices
- parental involvement ??
    - Enable parents to monitor their children’s stories
- Visual customization
    - Allow children to customize the illustrations and characters based on their own preferences
    - Maybe it’s about a little girl who looks just like them, or a really cool dinosaur
- Safety and privacy measures to make the interactions safe
- Pitch social impact
- Narration by AI generated voice
- parents set learning topics for child
    - Better English skills
    - Social development
    - Problem solving
    - General education
- Designed for parent-child collaboration because children are small and to ensure safety   

sequence:
- When child opens the application it has the prompt “let’s write a story about…” and it enters a character creation mode
    - Child enters name for character
    - “What does our character look like?”
        - Feed the response into an illustration generator
        - Child chooses from options or regenerates
    - “What is our character like?”
        - Child chooses from personality traits to keep things safe
        - Generates a paragraph and asks “does this seem like them?”
        - Parent confirms to ensure appropriateness and accuracy
- The application generates a story based on the previously set goals and asks the child at certain breaks what they think should happen
- The child has the opportunity to answer questions through narrative
    - Story about learning moral values, it would stop at a plot point and ask the child to decide what the character does
        - Good response gets positive points and the story continues
        - Poor response gets no points and the story continues, giving the child more opportunities to make the right choice
    - After the story concludes, it brings up what the child did right and praises them, takes a minute to talk about what happened when the choices were poor
- More points help indicate to the parent how well the child is progressing toward their learning goals
    - Think class dojo points !
