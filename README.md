<img src="https://media.giphy.com/media/3o6MbbUmrvmDH8DKHS/giphy.gif?cid=ecf05e47e3xontfasrowpu7yptwy2hti504ttmd1xidd439q&rid=giphy.gif&ct=g" width="100%">

# 10 - Clean Code

Today we're going to learn how to write clean(er) code.

## About

When we write a program or an application, it's common to think about the performance of that code and how 'well' it communicates with the computer that runs it. However, when we work in teams with other coders towards in a project, it's important that the people in the team also communicate to each other in a performant and effective way through their code.

One of the most common ways a new team member contributes to a code base is to go look somewhere where there is code that looks like it does what they would like to do. You find something, and then you understand that what you want to do is almost exactly like this, only with a different name.

So you create some new files and then you start copying this code and renaming stuff so it matches your use case.

This process is pretty straightforward if the codebase is easy to read, and the various functions are easy to understand and loosely coupled so you can copy some stuff and remove some stuff without breaking your own code.

Furthermore, since this is a very common way to add code to a project, you might understand that it's also a very effective way to spread code, whether is clean or dirty code.

> Code is clean if it can be understood easily – by everyone on the team. With understandability comes readability, changeability, extensibility and maintainability. All the things needed to keep a project going over a long time without accumulating up a large amount of technical debt. - Robert C Martin

There are many principles and guidelines out there to help you write clean code, we will mainly work with two of them today:

- **A function or a variable should be named in a way that it's human readable, describing what it is if it's a variable, and what it does if it's a function, to such an extent that someone with less context can read it and understand what it is.**

  _This isn't black and and white and there is more to be said about it, but hopefully you get the point. Short names like `const n = prices.map(x => x * 1.1)` is a poor name for a list that holds a list of swedish prices converted to norwegianprices based on the value of the currency. Use `swedishPriceListAsNorwegian` instead._

- **A function should do _one_ thing. If your function does more than one thing, you should extract another function from it to it's own separate function.**

## Assignments

This workshop contains a tic tac toe game. The main code for the game lives in `src/main.ts`. It's all in one file and I've done some work on making it difficult to read. Using the guidelines listed above, You should try to clean the code into something that is easier to understand.

If this is too easy or you have a lot of time after you've done, I suggest you try to to clean some other code in one of your projects.
