##Core Deliverables

As a user, I can:

1. See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an `img` tag inside the `#ramen-menu` div.
  See all ramen image in menu on page load
    [X] fetch ramen data from server
    [X] iterate the ramen array (forEach)
    [X] create <image> element for each ramen
    [X] assign the src to each <img> from the ramen obj
    [X] select menu element from DOM (anchor)
    [X] append <img> to menu


2. Click on an menu image to see details of that ramen shows in detai section
    [X] add event listeners to <img> in menu
    [X] handle events by calling a detail render function
    [X] select appropriate elements
    [X] assign data to those elements from ramen obj


3. Submit a form to create a new ramen in the menu(no persistence) - just open in DOM
    [] select the form
    [] add event listener to form
    [] handle submit event with callback function
    [] preventDefault() for form refresh
    [] get value from each input (via the event OR selector)
    [] create new ramenObj with values from form
    [] call render function passing new ramenObj

##Data Shape

##End points
baseURL: http://localhost:3000
GET /ramens
Get /ramens/:id