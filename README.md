Odin Project - Rock, Paper Scissors
Date - Tuesday June 2, 2026

Psuedocode

getComputerChoice

- Look at what javascript methods can be used to get any number from 1 - 10 

- Create variable 'randomNumber' that equals above Method 

- Add randomNumber variable as an argument to the getComputerChoice function

- Add conditionals to getComputerChoice when a given number is selected by randomNumber variable, the computer returns one of Rock, Paper or Scissors

getHumanChoice

- Use previous resources to understand how prompts are called in a function scope

- Create a prompt asking the user to enter either Rock, Paper, or Scissors

- Add the prompt within the function

- Create if/else statements within the function depending on the user's answer

Declaring players score variables

- Assign humanScore variable to zero

- Assign computerScore variable to zero

- Search how to make userInput string case insensitive - Answer: toLowerCase() function - Add this at the end after you've ensured the game is functioning correctly

Writing the logic to play the entire match of 5 rounds

- Create a function which calls the Round and it's variables

- Ask the function to repeat the getHumanChoice and playRound function


Remarks on Project upon completion - Saturday June 6th 2026:

- Everything was going according to plan until Stage 6. I struggled to grasp the possibility of not requiring any parameters in my earlier functions. And as a Result i found it very difficult to complete a entire match where each round result would be different.

- I drifted away from using for loops as I hadn't learnt how to use them - but each time I found myself overcomplicating the project by using new variables for a variable that had already assigned results of the first iteration. Meaning I would still get 5 round results using the initial round result as a source.

- Going back, I realised I needed to change two things....

1 - That I didn't need to declare a variable in the global scope for my getHumanChoice and getComputerChoice functions and putting them inside the parameter. I should've first placed those variables inside the function argument and tried calling the function with an empty paramater. This would've worked out completely okay and would've driven better decision making when creating the playRound() function.

2 - Taking a step back to read the task hints and understanding that I could call a new variable to the same functions and it would've given me a different result. Again, understanding that I could call these variables within the function block to execute more accurately instead of declaring them in the global scope (or using the humanChoice and computerChoice variables in Step 5) where I would've got the same results for a single result would've made life very difficult for me.

3 - Once I tested the playGame() for loop, and made some tweaks to the playRound() function for a draw - the final step was to declare a winner - which was straightforward to do by using the number types of humanScore and computerScore in an if/else statement to share the final match winner.


Overall I learnt a lot of things about this project and I'm glad I was able to find out where I was going wrong. I think in future a little more experimentation and seeing what the console prints out could've saved me a bit more time (especially in the earlier function declarations and not getting wound up by thinking the only way to print a function was to ensure it had a parameter - when they were so many examples where this just wasn't the case).

In future, I will ensure I do the following...

- Write step by step psueodocode that focuses on completing one step at a time

- Complete each step and check that the command provides the correct result

- Regularly googling for each step to understand how it works - then doing a trial and error of that step to see what I can and can't do

- Writing additional psuedocode for any new problems or outcomes that come out of that code, then doing bullet point 2 again 

Signed F.O.



