// write your code here

//Global Scope
  const baseURL = "http://localhost:3000"

//DOM Selectors
const menu = document.querySelector("#ramen-menu")
const detailImage = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")

const ratingDisplay = document.querySelector("#rating-display")
const commentDisplay = document.querySelector("#comment-display")
const newRamen = document.querySelector("#new-ramen")


//Fetch Functions
function getRamens(url){
    return fetch(url) 
        .then(response => response.json())
}

//Render Functions
function renderAllRamen(ramenArr){
    ramenArr.forEach(renderInMenu)
}

function renderInMenu(ramenObj) {
    const img = document.createElement("img");
    img.src = ramenObj.image;
    img.addEventListener("click", () => renderRamenDetail(ramenObj));
    menu.append(img);

}
function renderRamenDetail(ramenObj) {
    detailImage.src = ramenObj.image
    ramenName.textContent = ramenObj.name
    restaurant.textContent = ramenObj.restaurant
    ratingDisplay.textContent = ramenObj.rating
    commentDisplay.textContent = ramenObj.comment
}


//Event Listener
newRamen.addEventListener('submit', handleNewRamen)

//Event handlers
function handleNewRamen(e){
    e.preventDefault();
    const newRamen = {
        name: e.target.name.value,
        restuarant: e.target.restaurant.value,
        image: e.target.image.value,
        raiting: e.target.rating.value,
        comment: e.target["new-comment"],
    }
    renderInMenu(newRamen)
}

//Initializers
getRamens(baseURL + '/ramens')
    .then(ramenArr => {
        //ramenArr.ForEach(renderInMenu)
        renderAllRamen(ramenArr)
    })