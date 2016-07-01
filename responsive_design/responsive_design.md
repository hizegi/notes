# Responsive Design

## Learning Objectives
- Explain responsiveness and why we need it
- Describe the "mobile first" development process
- Explain min/max-width
- Define media queries and why we need them

### Why is this important?
Almost every client and company is pushing for a mobile version of their website as more users are using their mobile devices like phones and tablets to view the web. When viewing on your phone, you'll notice sometimes instead of `www.` you'll see `m.` preceding the website's URL, so those companies created separate 'mobile' versions of that site. But these mobile sites have reduced functionality, as it uses the basic site content. So to have one fully functioning website for all devices --- we have Responsive Design!

### What is Responsive Design?
Responsive design requires a variety of tools and techniques to allow a website to flex, adapt, and scale to the device's screen size that it's being viewed on. That is, the website can "respond" to the mobile device accordingly. You don't have to look at the huge website and zoom in 100x to click read something.

### Responsive Design Drill!
#### Groups: 2-3
#### Time: 5 minutes
#### Link: http://outdatedbrowser.com/ , http://reddit.com
#### Instructions: 
- 1 person takes notes (text editor: your choice)
- Everyone check out each website together and see how you think responsive design is achieved or unachieved. Explore the sites, click the tabs, and shrink the window's width, as small as it can go. 
    - What's happening to the images? Animations? Buttons? Forms?
    - Turn on element inspect to view the browser's pixel width and height. At what dimensions are the changes happening?
- Be ready to discuss a few points with the class

#### Discussion: 4 minutes

Different experiences right? We see how our widely our user experience changes when viewing the same content on a range of screen sizes. For companies and clients who want excellent user experience depend on good responsive design.

- Content responds to device attributes:
    - width
    - height
    - orientation
    - media
- Methods to achieve this:
    - fluid layout- %, rems, ems
    - media queries

### The "mobile first" development process
**Question**: Can you guess what this may mean?

It's exactly as it sounds: mobile first means designing for the smallest screen size and working your way up to larger screen size. It is one of the best strategies to create a responsive website site, as building desktop first won't be the fastest development process as the core and supplementary elements merge and become harder to distinguish and separate.

### min/max --- height/width
- [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
- [min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
- [max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
- [min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)

**Note**: These values override the `height` and `width` properties you may have set.

***Demo** * 

### Media Queries
Media query is a CSS technique. It uses the `@media` rule and executes if a condition is true. 

```
/* If the browser window is smaller than 400px, the background color will change to lightblue: */

@media only screen and (max-width: 400px) {
    body {
        background-color:lightblue;
    }
}
```

We can have multple conditions too.

```
/* If the browser window is smaller than 400px the background color will change to lightblue*/
/* If the browser is larger than 800px, the background color will change to lightblue */

@media only screen and (min-width: 400px) and (max-width: 800px)  {
    body {
        background-color:lightblue;
    }
}
```

### Individual Drill!
#### Time: 5 minutes
#### Link: [html + css]
#### Instructions:
***If you're using cloud9, preview in browser***
- make sure your HTML and CSS file are linked:
    - Set your body background to `blanchedalmond`
    - Write any text within your body
- using media queries, use `min-width` and `max-width` so that:
    - If the browser is 350px or smaller
        - the body background is `mintcream`
        - font-size is 30px
    - If the browser is 600px or larger
        - the body background is `lawngreen`
        - font-size is 50px

### media types and features
Link: [MDN Media Types](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)
- screen type (print, screen, all devices)
- media features
    - min-width
    - max-width
    - orientation
    - resolution


```
body {
	background: green;
}

h1 {
	text-align: center;
}

img {
	width: 100%;
	display: block;
	margin: 0 auto;
}

/*devices larger than 420px*/
@media only screen and (min-width: 420px) {
	img {
		width: 40%;
	}
}
```

### Individual Drill!
#### Time: 8 minutes
#### Link [HTML + CSS]
#### Instructions:
- Link your HTML + CSS together
- Using media queries, at width of 420px and larger, make the list take up 3 "columns" (hint: % width)
- Using media queries, at width of 750px and larger, make the list take up 6 "columns"
- **BONUS:** Don't use starter code, and make the example happen!
#### Starter Code:
```
<---HTML STARTER--->
	<nav>
		<ul>
			<li>Home</li>
			<li>About</li>
			<li>Services</li>
			<li>Contact</li>
			<li>Resources</li>
			<li>More Info</li>
		</ul>
	</nav>

/* CSS STARTER */
ul{
	list-style-type: none;
	padding: 0;
}

li{
	color: white;
	text-align: center;
	display: inline-block;
	width: 100%;
	background: grey;
	padding: 1em;
}
```

Read more about [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)



