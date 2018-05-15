# GifTastic Image Servers
 App uses the GIPHY API to make a dynamic web page that populates with gifs of your choice.
 
## Overview
In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

### Installation requirements
- jQuery 3.3.1
- Bootstrap 3.7
- game.js logic.
- style.css stylesheet.

### How play this Game
- Add an animal.
- Click submit.
- Store an animal into your collection.
- The system will consume Giphy API to display all images in a raw of collections.

### Before You Begin
Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

We chose animals for our theme, but you can make a list to your own liking.
Your app should take the topics in this array and create buttons in your HTML.

Try using a loop that appends a button for each string in the array.
When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

Under every gif, display its rating (PG, G, so on).

This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.
Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

Deploy your assignment to Github Pages.

Rejoice! You just made something really cool.
