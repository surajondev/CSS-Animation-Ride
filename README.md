
# CSS Animation Ride

Hello and welcome to CSS Animation Ride. A place to put your animation and learn how to contribute to an open source project.

## Table of Content

- [Rules](#rules)
- [How to Contribute](#how-to-contribute)

## Rules

The rules are simple. You have to:

- Use HTML `<divs>` and CSS only! No JS, and no SVGs!
- Have at least one animation in your work
- That's it!


## How to Contribute

If you've never forked a repository or made a pull request before,a cool resource to learn about the fork workflow can be found here - [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)

Now, once you've forked this repo and got a local version up on your computer, follow these steps:

1. In the Animations directory (folder), create a directory named after yourself.
2. Within this folder you just made, create two files, an HTML file, and a CSS file.
3. Link your CSS file to your HTML file.
4. Using only HTML and CSS (no `<script>` allowed!!). It can be as simple or as complex as you like, as long as it's animated in some way!
5. Get a screen recording of your finished work, **and make a gif**! Try to crop it so that it looks good as a smallish (preferably squarish) image. Save this in your directory, together with your HTML and CSS files. Static screenshots are also acceptable.  
   _If you don't add a gif/screenshot, the website won't show your animation._
6. Go to the root `show.js`. You will see an array of objects, each one represents a work of art that someone has created. Copy an example object and paste it at the end, filling it out with your art information and links:

```js
let cards = [
  //  Add your card in this section
  {
    artName: 'Your animation name here',
    pageLink: './Animations/Joy/triangle/triangle.html',
    imageLink: './Animations/Joy/triangle/triangle.gif',
    author: 'Joy',
    githubLink: 'https://github.com/username'
  }
];
```
