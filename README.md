# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Carl Eagan Djapardi**


## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Used w3schools guide to look up flexbox properties and syntax/specifics for javascript functions (i.e math random int).

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One specific challenge I faced was implementing the logic to check the user's guess against the computer's pattern. It was tricky to keep track of the current index within the turn and the overall progress of the game. I initially got confused about when to reset the guess counter and when to increment the progress variable.

To overcome this, I printed the values to console and step through it one by one. This helped me see the variables value and structure the if-else statements in the guess function. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Definitely curious about ways to improve design of the game and keep users coming back to play the game. I know that human benchmark has a similar game and their version is quite addicting to play. Would love to learn how design translates into retention. 

Would further love to learn tools to manage state in larger projects, right now there are only a small number of variables, but I am curios to see how large companies manage states in their codebases and the different types of architechture they use for different projects.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had more time, I would implement more levels, wherein the clue playback speeds up and there are more buttons. 

I would thus refactor the CSS to use CSS Grid for the button layout, which gives more control over the positioning. And as a stylistic measure, I would replace the alerts with custom cards for winning and losing. 

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
[losing screen recording](https://www.loom.com/share/2ca68a89dd98409b81c869560663876d)
[winning screen recording](https://www.loom.com/share/a4e5f4dae2c849bba9927a721027ee8e)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/8V31eLXSmF0)


## License

    Copyright Carl Eagan Djapardi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.