# Movie Website - README

# What kind of website did you make and why?
I made a movie-themed website that highlights my favorite films, my credibility in choosing them, and related content such as actors and a gallery of movie posters. I chose this topic because I enjoy movies and wanted to create an engaging, interactive website to share my preferences.

# Description of the 5 Pages
1. Home (index.html):  
   - Introduction to the site.
   - Navigation Panel  
   - Invert Color Button
   - Contains my top 3 movies in a table.    
   - Has a hide/show table button.  
   - Includes an unordered list describing why I like each movie.  
   - Displays an image of Remy from 'Ratatouille'.  

2. About (about.html):
   - Lists 3 reasons why the audience should see me as credible to recommend movies. 
   - Navigation Panel 

3. Gallery (gallery.html):  
   - Shows 3 Batman movie posters as images because it is my favorite franchise.  
   - Has a shuffle images button that rearranges them until the user likes the order.
   - Navigation Panel  

4. Actors (actors.html):  
   - Contains a header, description of my article, and a paragraph about my top 5 favorite actors.  
   - The paragraph is initially hidden, with a button to show/hide it.  
   - Navigation Panel

5. Contact (contact.html):  
   - Provides a form with name, email, and message fields.  
   - Includes Send and Clear buttons.  
   - Displays a thank-you message when the form is submitted.  

# HTML Elements Used
- Table: Displays top 3 favorite movies.  
- Unordered List: Explains reasons behind movie choices.  
- Image and Caption: Ratatouille image with alt text.  
- Semantic Elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`.  
- Divs and Spans: Used for styling (`.hidden`, `.inverted`) and JavaScript interactivity.  

# CSS Styles Applied
- Global styles: Fonts, body background, margins.  
- Navigation styling: Links styled with colors, spacing, hover, and visited pseudo-classes.  
- Layout: Flexbox (`.grid`) for the gallery.  
- Text styling: Custom fonts, colors, alignment.  
- Footer styling: Centered and padded.  
- Interactive styles:  
  - `.hidden` to toggle visibility.  
  - `.inverted` to invert colors with `filter`.    

# JavaScript Code and Interactivity
- Footer year: Automatically inserts the current year.  
- Invert Colors: Toggles `.inverted` class on body.  
- Show/Hide Table: Button toggles visibility of the movies table.  
- Show/Hide Text: Used on actors page to toggle the paragraph.  
- Shuffle Gallery: Rearranges Batman images each time the shuffle button is pressed.  
- Contact Form:  
  - `Send` button displays a thank-you message with the user’s name.  
  - `Clear` button resets the form and hides the message.    

