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

One specific challenge I faced was implementing the logic to check the user's guess against the computer's pattern. It was tricky to keep track of the current index within the turn and the overall progress of the game. I initially got confused about when to reset the guess counter and when to increment the progress variable. To overcome this, I printed the values to console and step through it one by one. This helped me see the variables value and structure the if-else statements in the guess function. 

Another challenge was adding delay to the play cue sequence. Initially, it played all the buttons instantly without any timestep / delay for the pattern. To overcome this, I had to change the loop to add clueHoldTime and cluePauseTime to a delay variable at each iteration. This allowed the notes to play correctly at different intervals.

Lastly, some tinkering had to be done to center the board on the screen. To overcome this, I had to read about different centering approaches and at last settled with flexbox. Using display: flex, justify-content: center, and align-items: center on the body finally snapped everything into place.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Definitely curious about ways to improve the design of the game and keep users coming back to play the game. I know that human benchmark has a similar game and their version is quite addicting to play. I would love to learn how design translates into retention. 

I would further love to learn tools to manage state in larger projects. As of right now there are only a small number of variables, but I am curious to see how large companies manage states in their codebases and the different types of architecture they use for different projects and purposes.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had more time, I would focus on making the game more engaging and polished. First, I would implement multiple levels of difficulty. Currently, the game speed and number of buttons is constant, but I would change it so the playback speed and number of buttons increases as the player advances to higher levels. 

Thus, I would refactor the CSS to use CSS Grid for the button layout. CSS Grid would give me more control over positioning for more buttons, like an 8-button or 12-button mode. It would also make it easier to create a responsive layout that looks good on both mobile phones and large desktop screens.

I would further think about extending the game to more users. How do I store their scores in a database? How can I compare their scores and create a leaderboard page / feature. And would a real time 1 vs 1 feature be feasible? 

Finally, I would replace the browser alerts with custom modal windows for winning and losing. Browser alerts are functional but interrupt the user experience and look outdated. A custom modal would allow me to display the final score, offer a "Play Again" button directly, and style the message to match the game's theme. 

## Video Walkthrough 

Add your screen recordings for specified implemented features here:
- [losing screen recording](https://www.loom.com/share/2ca68a89dd98409b81c869560663876d)
- [winning screen recording](https://www.loom.com/share/a4e5f4dae2c849bba9927a721027ee8e)

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
