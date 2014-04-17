Welcome to the Zendesk engineering test!

# Diving in

Launch the node.js server and take a look around. There are two views in the app: a primary list and an individual article view. The test will involve adding functionality to the article view to increase user engagement.

# The mission

The mission, should you choose to accept it, is to build a basic content recommendation service in node.js. When a user scrolls to the bottom of an article they should be presented with a mediumesque (https://www.dropbox.com/s/lg98mj7ws08p5zy/Screenshot%202014-04-17%2010.03.28.png) content recommendation.

To keep it simple we've included a JSON file (articles.json) in the project that contains all the articles and their meta data (most importantly tags).

# Requirements

A valid recommendation must fit the following criteria:

- The visitor has not read the recommended content before
- The visitor has not seen a recommendation for the specific content piece before
- Best possible match based off the viewed articles tags (see articles.json for tag meta data)
- Recommendation is displayed when a visitor reaches the bottom of an article
- Recommendation must contain the article title and truncated description

# Tech

The service should be built on node.js and use a combination of web sockets and client-side javascript to update the DOM. Feel free to use any libraries (server-side or client-side) that you'd like to accomplish the task.

# Design

We're leaving the design of the front-end content recommendation module up to you. Feel free to take inspiration from medium or any other sites you like. The work should render correctly in Google Chrome so don't worry about functionality other browsers.

# Timeline

We know you're busy so you've got two weeks from receiving the test to submit the completed work. If you have any questions at all feel free to drop us a line. Happy hacking!

Stephany Varga - svarga@zendesk.com
Paul Godfrey - pgodfrey@zendesk.com 
