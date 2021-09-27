# Clean Code

Today we're going to get to know a bit about the concept of clean code.

When we write a program or an application, it's common to think about the performance of that code and how 'well' it communicates with the computer that runs it. However, when we work in teams with other coders towards in a project, it's important that the people in the team also communicate to each other in a performant and effective way through their code.

One of the most common ways a new team member contributes to a code base is to go look somewhere where there is code that looks like it does what they would like to do. You find something, and then you understand that what you want to do is almost exactly like this, only with a different name.

So you create some new files and then you start copying this code and renaming stuff so it matches your use case.

This process is pretty straightforward if the codebase is easy to read, and the various functions are easy to understand and loosely coupled so you can copy some stuff and remove some stuff without breaking your own code.

Furthermore, since this is a very common way to add code to a project, you might understand that it's also a very effective way to spread code, whether is clean or dirty code.

There are many principles and guidelines out there to help you write clean code, here are a few:

- A function or a variable should be named in a way that it's human readable, describing what it is if it's a variable, and what it does if it's a function, to such an extent that someone with less context can read it and understand what it is. This isn't black and and white and there is more to be said about it, but hopefully you get the point. Short names like `const n = prices.map(x => x * 1.1)` is a really bad name for a list that holds a list of swedish prices converted to norwegianprices based on the value of the currency. Use `const swedishPriceListAsNorwegian` instead.

- A function should do _one_ thing. If your function does more than one thing, you can extract another function from it to it's own separate function.

-

Today we're going to do some [array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods) cardio in Javascript. Knowing and getting relatively comfortable with these are going to help you solve alot of problems in the future.

## We will mainly look at:

> [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  
> [.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach)  
> [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  
> [.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  
> [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  
> [.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)  
> We will also use `fetch()` for all the assignments.

## Assignments

Before we start, create a new directory with the following structure:

```
- array_cardio
    - index.html
    - index.js
    - index.css
```

Set up default HTML `<!DOCTYPE>` template and include both the index.js (above the closing `</body>` tag) and index.css files. Then go to index.js and do a `console.log('im here')`, just to verify that index.js has been included correctly. Lastly open index.html in your favourite browser (not IE ;)).

> Note that all data should be parsed as JSON in your fetch request handling.

1. Fetch the 'inventors' from <https://arraycardio.herokuapp.com/inventors>, and `.filter()` the list of inventors for those who were born in the 1500's.

2. Using `.map()`, Give us an array of the inventors' first and last names.

3. `.sort()` the inventors by birthdate, oldest to youngest.

4. Using `.map()` and `.reduce()`, how many years did all the inventors live combined?

5. `.sort()` the inventors by years lived.

6. Fetch the 'people' from <https://arraycardio.herokuapp.com/people> and `sort()` them alphabetically by last name.

### Part 2

Copy the circles directory and open circles/index.js and, in your browser, index.html.

> **TIP**: _Once you have got everything working, try to split up your code into smaller functions. Making a habit of this will make it easier to structure and overview your own and other peoples code. If you feel like you don't know how, start with naming the function after what it should do and continue from there._

7. Fetch <https://arraycardio.herokuapp.com/circles> and do a `console.log(data)` to verify that the request went as expected.

8. Loop over the data and create a [`<div>`](http://htmlreference.io/element/div) using a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for each of the circle objects from your fetched data.
   The div should have `class="circle"` and also an [inline-style](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) background-property. The value of this property should be the color from the circle object in your fetched array.

9. Filter your fetched data to exclude the objects with the color darkred.

10. Filter your fetched data to only include the objects with color cyan.

## Extra

11. Picking up where we left our circles, add functionality to click each of the circles to remove it from the document body. This should work more than one click ;)

    <details>
    <summary>Hint</summary>
    Somewhere you want to assign an event listener to each of the elements that you have put into the document body.
    </details>

12. Using `.reduce()`, sum up the instances of each of the circles color value into an object.

13. Write a function that checks if a given input word is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).

## Tryhard

14. This assignment is borrowed from this years [advent of code](https://adventofcode.com). Go to <https://adventofcode.com/2018/day/2> and read the assignment. Then fetch <https://arraycardio.herokuapp.com/tryhard> to get your input. The right answer is 7192. Gl hf.
    > Too easy? Go to [advent of code](https://adventofcode.com/) to sign up for more challenges!
