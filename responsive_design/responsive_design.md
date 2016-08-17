# Responsive Design

## Learning Objectives
- Explain responsiveness and why we need it
- Describe the "mobile first" development process
- Explain min/max-width
- Define media queries and why we need them

### Why is this important?
Almost every client and company is pushing for a mobile version of their website as more users are using their mobile devices like phones and tablets to view the web. When viewing on your phone, you'll notice sometimes instead of `www.` you'll see `m.` or `mobile.` preceding the website's URL, so those companies created separate 'mobile' versions of that site. But these mobile sites have reduced functionality, as it only uses the site's basic content. 

> Example: Using your smartphone or tablet, open up a browser and enter youtube.com. Select 'Cancel' when prompted to open up in the YouTube app. Check the URL. What does it say? Now open up your desktop browser and enter m.youtube.com. How does the URL change?

Responsive Design let's us use 1 source of code for your website that adapts beautifully on every screen size, device and device orientation.

## What is Responsive Design?
- Responsive design requires a variety of tools and techniques to allow a website to flex, adapt, and scale to the device that it's being viewed on. That is, the website can "respond" to the devices' different sized view ports and resolutions accordingly.

- It lets you use the same basic HTML and simply style based on the device being used.

- Think of it as the accessibility of content.

> Example: on your cell phones, you don't have to look at the huge website and zoom in 100x to click read something.

### You Do: Responsive Design Exercise
#### Groups: 2-3
#### Time: 5 minutes
#### Link: http://www.badruttspalace.com/ , http://craigslist.org
#### Instructions: 
- 1 person takes notes (text editor: your choice)
- Everyone check out each website together and see how you think responsive design is achieved or unachieved. Explore the sites, click the tabs, and shrink the window's width, as small and as big as it can go. 
    - What's happening to the images? Text? Font-size? Menu bar? Animations? Buttons? Forms?
    - Turn on element inspect to view the browser's pixel width and height. At what dimensions are the changes happening?
- Be ready to discuss a few points with the class

#### Discussion: 4 minutes

[//]: # "Refer back to craigslist.com. Ask everyone to go to the bottom and click on 'mobile' "

Different experiences right? We see how widely our user experience changes when viewing the same content on a range of screen sizes. For companies and clients who want excellent user experience depend on good responsive design.

- Content responds to device attributes:
    - width
    - height
    - orientation
    - media
- 3 Main Methods to achieve this:
    - Device/browser detection to add performance to your site and reduce bloat
    - Fluid layouts and ems (%)
    - Media Queries

## The "mobile first" development process
**Question**: Can you guess what this may mean?

It's exactly as it sounds: mobile first means designing for the smallest screen size and working your way up to larger screen size. It's the idea that we start our CSS with mobile devices in mind first, and adding media queries to serve up increasingly larger viewport sizes. 

Check out popular mobile devices screen sizes [here](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/).

### min/max --- height/width
- [max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
- [min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
- [max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
- [min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height)

**Note**: These values override the `height` and `width` properties you may have set.

***Demo*** 

### You Do: Max-Width, Min-width
#### Time: 3 minutes
#### Link: [JS-Bin](http://jsbin.com/qikebojoxu/1/edit?css,output)
#### Instructions:
- Clone your open copy (File > Clone)
- Make sure `Auto Run JS` is ticked off
- In the CSS file, change the div's:
	- mix-width
	- max-width
	- min-height
	- max-height
- Use pixels and percentage amounts
- Try out different combinations
- Dont forget to shrink/expand the window's width manually

### Media Queries

- Screen resolutions differ per device
- Smartphones typically have a lower resolution (dpi) than a desktop computer
- `@media` query is a CSS technique. It uses the `@media` rule and executes if a condition is true.
- screen type (print, screen, all devices)
- media features include:
	- color
	- aspect-ration
	- height
	- width
	- orientation
	- full list of [media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#color)
- Just like you saw with min- and max-width, you can prefix these features with min-, max-.

### Why @media queries?
- It let's us tailor the website's content to a set range of devices without having to change the HTML and content itself.
- There are a few ways to add media queries onto your page.

```
INDEX.HTML
<-- external style sheet: directly into <link> as media -->

<link rel="stylesheet" type="text/css" href= "smartphone.css" media="screen and (max-device-width: 480px)" />

```

or

```
INDEX.HTML
<-- internal style sheet -->
<style>
@media (max-width: 600px) {
  nav {
    display: none;
  }
}
</style>
```

or

```
STYLE.CSS
<-- in .css file -->
@media (max-width: 600px) {
  nav {
    display: none;
  }
}
```

**POP QUIZ!** What are the 3 ways we can add media queries into our website?




```
FOR DEVICES 320px AND SMALLER (iPHONE 4, 5)

@media only screen 
	and (max-width: 320px) {
    body {
        background-color:lightblue;
    }
}
```

We can have multiple conditions too.
And multiple CSS rules.

```
FOR IPAD AIR (768 x 1024px)

@media only screen
  and (min-device-width: 320px) 
  and (max-device-width: 768px){
  	body {
  		background-color: yellow
  	}
  	
  	div {
  		width: 50%
  	}
}
```
Read more on [all viewport sizes](http://viewportsizes.com/).

### You Do: Media Queries
#### Time: 5 minutes
#### Link: Cloud9 - Your Space
#### Instructions:
- Create `index.html` file
- Create `style.css` file
- Link your CSS to your html file
- In `index.html` write "Responsive Design Party!" in the `<body>` 
- In `style.css`:
    - Set your body background to `blanchedalmond`
		- using `@media` queries, use `min-width` and `max-width` so that:
    - If the screen width is 320px or smaller
        - the body background is `mintcream`
        - font-size is 30px
    - If the screen width is 768px or larger
        - the body background is `lawngreen`
        - font-size is 50px

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



