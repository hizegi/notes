# DOM Events

### Learning Objectives
-  How interactions create events
-  How Events trigger code
-  How code responds to users
-  Practice binding events to single and multiple DOM elements

### Why is this important?
- So far we've had a lot of stand alone functional JavaScript exercises. In our Intro to DOM lesson, we finally started seeing the **interaction between HTML/CSS and JavaScript.**
- Today we will expand our understanding of how the DOM and JavaScript begin to allow user functionality and in-depth interaction.

## DOM Events Exercise! 

#### Groups: 2-3 students
#### Time: 4 minutes
#### Instructions:

- Everyone go to amazon.com 
- 1 person open up new text file on Atom. Track and List all the user interactions occurring. Be ready to talk about a few points!
- Work together to see what happens when:
    - I hover over with my mouse..
    - I click on something..
    - I press something on my keyboard..
    - I shrink my browser window..

#### Discussion: 3 minutes

DOM interaction is event based. HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document. It's the browser's way of saying "Hey, this just happened!" We can use our script, then, to respond to these events with Javascript. 

#### Read More:

- [MDN DOM Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [W3Schools DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
- [List of Event Types!](https://developer.mozilla.org/en-US/docs/Web/Events)

## Common Event Types
- UI Events
    - **load** - web page has finished loading
- Keyboard Events
    - **keydown**: user presses a key down
    - **keyup**: user releases a key that is pressed
- Mouse Events
    - **click**: user clicks
    - **mouseover**: user puts their mouse over an element
    - **mouseout**: user mouses off/out an element
- Form Events
    - **change**: can be attached to a input, select, or textarea element and fires when value is changed
- Focus Events

## Basic Event Listeners & Handlers
Let's try out some basic event listeners.

- Use "vanilla" JavaScript to select the desired HTML element through the DOM
- Add an onclick event listener onto the selected element.
- For example's sake, let's make it respond with an alert().

##### Step 1: Select the element node(s) you want the script to respond to. Let's grab box1.
```
var box1 = document.querySelector('#box1');
```

##### Step 2: Indicate which EVENT the element(s) will trigger the response. (ex: onclick event)
```
box1.onclick = function(event) {
    //code goes here
};
```
##### Step 3:  State the code you want to run when the event happens. I add the alert function (for this example).
```
box1.onclick = function(event) {
    alert('You just clicked me!');
};
```

#### Syntax Explanation...
# *element*.on*event* = *functionName;*

1. **element**: DOM element node we want to target
2. **onevent**: event bound to the node. *onclick* is an example of a listener. It is listening on the DOM for an event to trigger.
3. **functionName**: name of function to call. The response of the listening triggering is referred to as the handler.

##### Why do we pass 'event' in the parameter?
The event is an actual object. Sometimes people prefer to pass it in explicitly but it can still work without it.
Sometimes people pass in the letter 'e' instead of 'event'. These are common to see in documentation.

You can see the event object you are interacting with:
```
box1.onclick = function(event) {
    console.log(event);
}
```

## Individual Practice:
#### Time: 4 minutes
#### Link: [JS-bin](https://jsbin.com/lufufenihi/1/edit?html,js,output)
#### Notes: turn Auto-JS on
- Work on your own CLONE: `File > Clone`
- Add a `onmouseover` listener to box1 that responds with an alert saying "you moused on this!"
- Add a `onmouseout` listener to box1 that responds with an alert saying "you moused out of this!"

#### Group Review: 3 minutes
The handler's we've used so alert(), console.log() are all functions right?
So we are passing a function inside a function anonymous!

## Advanced Practice
#### Time: 4 minutes
#### Link: [JS-bin](https://jsbin.com/lufufenihi/1/edit?html,js,output)
- Work on your own CLONE: `File > Clone`
- box2 on mouseover, changes background color to red
    - hint: style.background
- box2 on mouseout, changes background color to white
- box1 on click, console.log(this) AND change the font-color to white;

#### Review: 3 minutes
Can we see what other functionality we can add to this?

## Window.onload
Now that we can interact with user interaction, we realize we are completely dependent on HTML elements being where they are. As we build complex functionality and add more and more things, load time becomes really really important.

Imagine trying to attach a click event on a picture, but the picture didn't finish loading. JavaScript already executed all your code tho. Now your events won't register!

What if your app becomes more complex and HTML elements are added through external sources (facebook login popup). But your javascript might not be able to register since it fired off before the elements from the external source were loaded.

We first solve this issue as well as that of polluting global scope by encapsulating our entire JS file in a `window.onload`

```
window.onload = function() {

    var box1 = document.querySelector('#box1');

    box1.onclick = function(event) {
        alert("click!")
    }

    box1.onmouseover = function(event) {
        alert("moused over");
    }

    box1.onmouseout = function(event) {
        alert("moused out");
    }

}
```
Notice now that you cannot console.log through the browser as everything you coded is not in global scope! Be sure to execute console logs within the onloaded functions' scope.


## Obtaining value from a field
#### Time: 10 minutes
#### Link: code-along
Let's do this together!

- Open up Atom.
- Create HTML + JS file, link them up
```
    <form>
      <input type="text" id="secret-input" />
      <button id="click-me">What's my message?</button>
    </form>
    <p id="message">Just a plain old message</p>
```
- On browser: Type in a value into the input field.
- Using Dev Inspect: inspect the input field, what element is this going in?
- Use the function `.value`

```
var secretValue = document.querySelector('#secret-input');
secretValue.value;
```

1. I want a user to input value into the field 
2. On click of the button I need to obtain the value of that field 
3. I need to save that value into a JS variable 
4. I want to display my secret message inside my `<p></p>`
5. I need to make sure my code works inside a window load function (scope);




Notes: referenced [Joe's docs](https://github.com/hizegi/WDI_NYC_Meeseeks/blob/master/unit_01/w02d05/instructor_notes/%5Ba1%5Ddom_events.md) 




