# the_coding_QUIZ

Homework for Week 4

[LINK TO PAGE](https://theoriginalison.github.io/the-coding-QUIZ/)

index.html
![Screenshot of Start Page](./ReadMeImages.startquiz.png)

![Screenshot of Question](./ReadMeImages.question.png)

![Screenshot of Finished, Enter Scores Page](./ReadMeImages.finishedquiz.png)

highscores.html
![Screenshot of High Scores Page](./ReadMeImages.highscores.png)

## Approach & Process

- Used the Bootstrap template
- Used a Navbar with a link, and added a placeholder for where the timer will go (even if that's replaced using JS)
- Found buttons that worked the way when they were clicked & hovered over
- Found a card to contain the buttons
- Created a fixed size column so the card would float nicely in the middle of the page
- Created the CSS file & linked to the HTML
- Created the JS file & linked to the HTML (and tested this with console.log)
- Began creating variables and writing pseudocode
- Created click function on the buttons in the original question
- Created the questions & their answers as objects
- Created a question counter as well as an array made up of all of the objects
- Event Listener Time! First, I had to hide the containers that weren't being used (which I did via CSS), and then switch them when the Start Button was clicked (to hide the Start container, and show the Question container)
- Question Iteration! Each object was listed as a question that was iterated through (through the nextQuestion function, which changed the question text according to the counter), and the user choice had to be matched with the correct answer. I also added a correct/incorrect message to pop up. In the future, this would be good as an alert instead, maybe.
- Created an if/else statement that if the last question was there, then once the button was clicked (and the question counter was as long as the question array), then the game was over, and the last container came up.
- Captured the score as the seconds left on the clock

- Created the variables for the timer
- Created the function for the timer, and have it start when the "start" button was clicked

- LOCAL STORAGE was the last component to create-- I created an event listener for the score box
- The finalScore was captured, split into strings in an array, then I took the score (the fourth item) and rejected the exclamation point
- Local storage had the user initials and final score sent to it, and I created the function to render the score
- Created the JS file just for the high scores tab, then rendered the score
- Added button & event listener that the scores would be cleared on the "Clear Scores" button click

## Discoveries

- Use console.log after each function or for loop as the end of it, to show that it ran without breaking
- There's a difference between .value, textInput, and innerHTML
- I figured out Local Storage! :D
- CONSOLE.LOG ALL THE TIME!! It's easy, and a good way to leave encouraging messages for yourself as you progress, or when something works
- Create all of the things you think you'll need before you ask for help, bc frequently you just need help w where to put something
- Copy and paste IDs & Classes from the HTML rather than type them out for querySelector-- you have to be precise! And in the same vein, be careful when C&P multiple elements, containers, etc-- check the classes & IDs to make sure those didn't inadvertantly follow. And be careful of using plural vs. singular names for things (that one "s" can mess everything up)
- Exclamation points are special and touchy. I use them frequently, but I should save those for emails, DMs, and texts instead of code

## Further features for next time

- A "next question" button so the user can see what's correct and incorrect
- Storage of multiple scores
- Links to where the information can be explained if it's wrong
