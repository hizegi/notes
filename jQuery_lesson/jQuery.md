# jQuery

### Learning Objectives
- Describe jQuery and when we use it
- Install jQuery
- Use basic jQuery
- Understand jQuery documentation

### What is jQuery?

jQuery is a fast, concise, and feature-rich **JavaScript library** and is the most widely used library on the web. jQuery makes traversing and manipulating the DOM easy, and it makes event-handling, animation, and AJAX easy too.

Essentially, it makes our code easier to read and write.

### What is a library?
- A library is a collection of files that allows you to use all its functionality (like its functions, objects, methods, and properties) in another script. 
- Up until now, we've only been loading a "scripts.js" file onto our static website using `<script type="text/javascript" src="scripts.js"></script>` inside our `<head>` tag.
- Installing a Javascript library is just as simple; we are taking a 3rd party Javascript file and adding it to our `<head>` as well. 
- **NOTE**: Install the library *before* the "script.js"! This way the library will be loaded by the time our "script.js" actually gets executed. In general, the position of the `<script>` elements can affect how fast your page will load.

##### CDN

- A CDN (Content Delivery Network) is a series of servers spread out all over the world. CDN is used to serve static files (ie. HTML, CSS, Javascript, images, audio) very fast. 
- The process: The CDN tries to find the server physically closest to you and send you files from that server so that data doesn't travel as far as it would have, say, from 1 server from across the globe.
- The main CDNs to offer jQuery are [jQuery CDN](https://code.jquery.com/), [Google](https://developers.google.com/speed/libraries/#jquery), and [Microsoft](https://www.asp.net/ajax/cdn#jQuery_Releases_on_the_CDN_0) and are free! Most companies will pay for CDN serivce for their users to deliver the static assets while cutting down latency.

##### Minification

- Minification is the process of removing unnecessary characters from files (mostly Javascript), including whitespace characters, comments, line breaks, etc. while not affecting functionality. 
- A minified file looks like a big jumble of letters and numbers, and it is difficult to read, but it is used to significantly reduce the size of the Javascript file, which will then take less time for the browser to load the files.
- Most servers will host jQuery and other libraries as the original (un-minified) versions of the code so the developer can read the code. There are tools and software that will minify or un-minify your code; you can find them with a quick Google search.

### jQuery Versions

You will notice on [jQuery's Official Site](http://jquery.com/download/) there are many versions of jQuery in development, and the choice of compressed and uncompressed files (minified v. unminified). The jQuery community is very active and is constantly making improvements, so keep up with their development.

- The `1.x branch` is the most cross-browser compatible and supports IE6-8.
- The `2.x branch` does not support IE6-8.
- The `3.0 branch` is an extension of 2.x and is the newest version and finalized in June 2016 and does not support browsers IE6-IE8.

##### Installation

There are 2 ways to install jQuery:

1. Reference jQuery from a CDN and include it into our HTML 
 ```sh
<script src="http://code.jquery.com/jquery-3.0.0.min.js"></script>
```
2. Install locally
    - [Download](http://jquery.com/download/) a copy of jQuery
    - Add the jQuery file to your Javascript folder (where your script.js is)
    - Reference the relative path in your `<head>` before "script.js"
3. Test proper installation
    - Open up your browser's console and type `jQuery` and hit enter
    - If you see `function (a,b){return new r.fn.init(a,b)}` returned, you have properly installed jQuery! If you receive an error, check your syntax in the script tag.

**Note:** If you choose to reference a CDN, having a fallback option is important in case the CDN may be unavailable, the file is moved, or if some countries ban domain names (like Google). Consider installing the library locally as a fallback.

### Get to the Code Already!

Alright! With vanilla Javascript we were dealing with objects whenever you were referring to a DOM element. Now, we refer to a jQuery object simply using `$`.

##### Selectors

Take a look at the code along. How can I grab the square with the id of "square1"?

`var $square1 = $("#square1");`

- When we use jQuery, we use `$()` syntax; this allows us to reference the entire document. For example, with vanilla we used `document.getElementById`. We use the same `document` in jQuery.
- The syntax to select elements allows for CSS selector. We can select id, class, element tags, and even multiple selectors:

```javascript
//get element by id
var $square1 = $("#square1");
console.log("This is $square1 :", $square1);

//get element by class
var $square = $(".square");
console.log("This is $square: ", $square);

//get element by tag name
var $div = $("div");
console.log("This is $div: ", $div);
```

If you notice the console logs, notice `$square` doesn't give you the exact element like it did with vanilla javascript. We see a jQuery object instead. Note: You can reference the jQuery object through the browser console.

In general, here is basic jQuery syntax:

Select by | Syntax
--- | --- 
element | `$("p");`
class | `$(".className");`
id | `$("#idName");`
CSS subclass | `$("p.specialClass");`

Check out selectors syntax [here](http://api.jquery.com/category/selectors/basic-css-selectors/). jQuery uses the same syntax as CSS to select elements.

Extra things we can do! [.html,](http://api.jquery.com/html/) [.addClass,](http://api.jquery.com/addClass/) [.hasClass,](http://api.jquery.com/hasClass/) [.append,](http://api.jquery.com/append/) [.css,](http://api.jquery.com/css/) [.hide,](http://api.jquery.com/hide/) [.show,](http://api.jquery.com/show/) [.hover,](http://api.jquery.com/hover/) [.ready](http://api.jquery.com/ready/)

##### $(document).ready
With jQuery, instead of `window.onload` we can use:
```
$(document).ready(function() {
  // all our code in hurr
});
```
##### Selecting an element and changing its content

Let's change the 1st square's text to "I'm the best square!" using jQuery. With vanilla javascript we would do this like:

```
var mySquare = document.getElementById("#square1");
mySquare.innerHTML = "I'm the best square!";
```

jQuery makes it super easy!

```
$("#square1").html("I'm the best square!");
```
- Now, if we wanted to save our selection as a jQuery object, we have to save it in a variable first:
`var $mySquare = $("#square1");`
- Then use a jQuery method to perform the task: `$mySquare.html("I'm the best square!");`

##### Appending a DOM element to the webpage

Going back to our code, I want to add another `<div>` at the end of our squares with class "circle", and append text in jQuery. We can use chain methods together to accomplish our text in a very compact way.

```
$("body").append("<div class='circle'>").append("Woah cool!");
```

Recap: First we selected the `<body>`, and we wanted to `.append()` a new DOM element `<div>`, and on top of that `.append()` text to the `<body>`, which jQuery automically converted into a `<p>` element.

If you inspect the elements, you can see our new HTML:
```
<div class="circle"></div>
<p>Woah cool!</p>
```

##### Modifying Styles (CSS)

Besides selecting elements and changing its contents, you can use jQuery to modify the elements CSS attributes using the `.css()` method.

To change a single element: like my second square (with id "square2")'s color to red:
```
$("#square2").css("color", red");
```
Or if we want to change all squares (with class "square") to color blue:
```
$(.square).css("color", blue);
```

Check out [more things](http://api.jquery.com/css/) you can do with `.css()`

##### Benefits of jQuery
- jQuery lets us select DOM elements and modify them quickly using chain methods. This saves a lot of code we would see with vanilla javascript, and is easier to understand.
- It uses the same syntax as CSS to select elements
- It deals with cross-browser compatibilities (not demonstrated here, but makes it easier to deal with with more complex apps)
- Strong documentation. The jQuery community is very active and awesome.
- AJAX support (we will see this later)

