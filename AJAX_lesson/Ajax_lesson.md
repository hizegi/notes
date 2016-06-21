# AJAX

### Learning Objectives
- Describe AJAX and when we use it
- Understand jQuery + AJAX responses
- Data Types
- Use AJAX calls

### What is AJAX?

- Historically, AJAX stood for Asynchronous Javascript And XML, but instead of XML we now use JSON. 
- AJAX lets us load data on the webpage when the browser, using JavaScript, makes a request without reloading the current page. 
Normally, the user makes a request by clicking a link/typing in a URL.

##### Examples of AJAX:
- Live searches like autocomplete on Google commonly use AJAX to display results before you finished typing
-  Websites with user-generated content (like Twitter) may allow you to display your info like your latest tweets on your own website. This involves collecting data from their servers.
-  Online shopping carts automatically update without you leaving the page. 

##### Why use AJAX?
Normally, as a browser reaches a `<script>` tag it will stop, wait for that script to load fully, and move on to the next one. This is called  **synchronous processing model**. If a script requires to get data from a server, AJAX is used so that once that data is requested, the browser can continue to load the rest of the page without waiting. This is called **asynchronous processing model**. 

Once a page has loaded, normally you would refresh the whole page to view a change. With AJAX, you can update the content of just one element, without interrupting the user experience.

### The AJAX Process
1. **Request**: The browser makes a request to the server for some data.
2. **Response**: The server responds with the data, the browser processes the data and displays it on the page.

##### Data Formats
- HTML
- XML
- JSON

##### jQuery and AJAX: Requests
There are several jQuery methods that handle Ajax requests, which are usually triggered by an event (clicking on a link, submitting a form, etc):
Method | Description 
--- | --- 
`.load()` | Simplest method to retrieve data. Loads HTML into an element.
`$.get()` | Requests data from the server.
`$.post()` | Sends data that updates data on server
`$.getJSON()` | Loads JSON data with GET request
`$.getScript()` | Used for JSONP with GET request
`$.ajax()` | Performs ALL requests. Above methods all use this under the hood.


##### Example:
```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script type="text/javascript" src="http://code.jquery.com/jquery-3.0.0.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            $.ajax({
                url:'http://www.omdbapi.com/',
                method: "GET",
                data: { s: "star wars" }, //data that gets passed to server
                success: function(data, status, jqXHR){ //success callback
                    console.log("This is the response: ", data); //just console logging
                    console.log("This is the status: ", status);
                    console.log("This is jqXHR: ", jqXHR);
                },
                error: function(jqXHR, status, error){ //error callback.  Gets called on situations like trying to hit a url that doesn't exist
                    console.log("Error: ", error);
                    console.log("Status: ", status);
                }
            });
        </script>
    </body>
</html>
```

##### jQuery and AJAX: Responses
jQuery makes it easier to handle data from the server. Use these event methods to handle the data upon success/failure:
Method | Description
--- | --- 
`.done()` | fires when the request has successfully completed
`.fail()` | fires when the request did not successfully complete
`.always()` | fires when the request has completed (successful or not)
`.abort()` | Stop the communication

##### AJAX Promises
- A way to organize your code and easier to read
- No changed functionality, still dealing with the same data
- `$.ajax()` returns a `promise` objects, which we use: `.done()`, `.fail()`, or `.always()` on, passing in a callback function:

```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    </head>
    <body>
        <script type="text/javascript">
            var promise = $.ajax({ //promise gets returned.
                url:'http://www.omdbapi.com/',
                method: "GET",
                data: { s: "star wars" }
                // no properties inside this object for success, error
            });
            promise.done(function(data){ //instead the callbacks are defined here
                console.log(data);
            });
            promise.fail(function(data){ //and here
                console.log('fail!');
            });
            promise.always(function(data){ //this will always run whether on success or failure
                console.log('always!');
            });
        </script>
    </body>
</html>
```

