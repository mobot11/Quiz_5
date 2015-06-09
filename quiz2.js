/* Question 1 Pretend you have a button with a given id, like this:

<button id="superButton">Super Button</button>

Write code that uses plain JavaScript (not jQuery) to attach an event listener to this button.
The event listener should execute a function of your choosing when clicked. It can append elements
to the DOM, display an alert, etc.

Need help? Check out the event listener section in chapter 6 of your book.*/

function sayHello(){
  alert("hello my name is Dylan");
}
var el = document.getElementById('superButton');

el.addEventListener('click', sayHello, false);

$('#superButton').on(click, function(){
  alert("hello my name is DYlan");
});

/* QUestion 2 Choose a jQuery selector (yellow section of http://oscarotero.com/jquery/
(Links to an external site.)) that you haven't used before (or that you don't understand well).
Read the docs, then explain what it does, and use it in an example.*/
The :odd selector selects the even numbers of a set of elements because indexing starts at zero.
for example <table border="1">
  <tr><td></td></tr>
  <tr><td></td></tr>
  <tr><td></td></tr>
  <tr><td></td></tr>
</table>

(tr:odd).css('background-color', 'black'); will set all of the even numbered tr elements to
have the background color black.

/*Question 3 Choose a jQuery method (pick from the non-yellow sections of
 http://oscarotero.com/jquery/ (Links to an external site.)) that you haven't
 used before (or that you don't understand well). Read the docs, and then explain
 what it does, and use it in an example.*/

 the.select() method does something whenever text the method is running on is selected.
for
   <input type="text" value="Some text">
  <input type="text" value="to test on">
  <div></div>

<script>
$( ":input" ).select(function() {
  $( "div" ).text( "Something was selected" )
}); when the text inside of the input type of the form is selected the text "something was selected"
will appear in the div.


 /*question 4 Research the .each() method. Write an example of .each() that also uses the $(this) selector
  inside the callback function.*/
  <ul>
  <li></li>
  <li></li>
</ul>

$( "li" ).each(function() {
  $( this ).addClass( "listItem" );
});

  /*question 5 Write a function that returns a random string from an array of strings.*/

  var randomArray = ['dog', 'cat', 'pig', 'hamster', 'human'];

  var randomStringSelector = function (stringArray) {
    return stringArray[Math.floor(Math.random() * stringArray.length)];
  }


  /*question 6 For these last two questions, you're going to create a website that displays a random string when you click a button. (You'll be using the function you just wrote above to generate that random string.) Use jQuery to do this.

In this question, submit the html for this website. I recommend writing it in Sublime (or whatever your text editor of choice is), and then copying and pasting it here. Save that file - you'll need it later!

Alternatively, create a new repo for your code and upload it to GitHub. Paste the repo link here.*/



/*Question 7 In this question, copy and paste in the contents of your JavaScript file for your random string generator site.



Again, be sure to create this code in a sublime file that you save for later use.



Alternatively, create a new repo for your code and upload it to GitHub. Paste the repo link here.*/
