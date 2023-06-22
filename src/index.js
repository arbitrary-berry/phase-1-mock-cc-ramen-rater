// write your code here

//Global Scope
  const URL = "http://locahost:3000/ramens"

//DOM Selectors
const detailImage = document.querySelector("#ramen-detail")
const owner = document.querySelector("#name")
const restaurant = document.querySelector("#restaurant")

const menu = document.querySelector("#ramen-menu")
const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")

//Fetch Functions
function getRamens(url){
    fetch("http://locahost:3000/ramens")
        .then(response => response.json())
}

//Render Functions
function renderRamens(data) {
    const ramens = data
    detailImage.src = ramens.image
    owner.textContent = ramens.name
    restaurant.textContent = ramens.restaurant
    menu.src = ramens.image
    ratingDisplay.textContent = ramens.rating
    commentDisplay = ramens.comment
}


//Event Listener