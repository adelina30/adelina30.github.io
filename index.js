function sortPopularity(a, b) {
  if (a.dataset.popularity > b.dataset.popularity) {
    return -1
  }
  return 1
}
function sortYearOldest(a, b) {
  if (a.dataset.year < b.dataset.year) {
    return -1
  }
  return 1
}
function sortYearNew(a, b) {
  if (a.dataset.year > b.dataset.year) {
    return -1
  }
  return 1
}

function renderFilmCards() {
  let html = ""
  for (let element of film_cards) {
    html += element.outerHTML
  }
  film_container.innerHTML = html
}

function clearFilters() {
  input_popularity.checked = false
  input_year_new.checked = false
  input_year_oldest.checked = false
}

function makeButtonsActive() {
  backButton.classList.remove("disabled")
  nextButton.classList.remove("disabled")
}

function renderFilmCardsByPage() {
  clearFilters()
  if (currentPage == 3) {
    film_cards = all_film_cards.slice(14, 21)
    renderFilmCards()
    backButton.classList.remove("disabled")
    nextButton.classList.add("disabled")
  }
  if (currentPage == 2) {
    film_cards = all_film_cards.slice(7, 14)
    renderFilmCards()
    makeButtonsActive()
  }
  if (currentPage == 1) {
    film_cards = all_film_cards.slice(0, 7)
    renderFilmCards()
    backButton.classList.add("disabled")
    nextButton.classList.remove("disabled")
  }
}

let currentPage = 1
let nextButton = document.getElementById("next")
let backButton = document.getElementById("back")
let input_popularity = document.getElementById("popularity")
let input_year_oldest = document.getElementById("year1")
let input_year_new = document.getElementById("year2")

let all_film_cards = document.querySelectorAll(".card")
all_film_cards = Array.from(all_film_cards)
let film_container = document.querySelector(".my-content")
let film_cards = all_film_cards.slice(0, 7)
window.onload = () => {
  film_cards.sort(sortYearOldest)
  renderFilmCards()
}

input_popularity.addEventListener("click", () => {
  film_cards.sort(sortPopularity)
  renderFilmCards()
})

input_year_oldest.addEventListener("click", () => {
  film_cards.sort(sortYearOldest)
  renderFilmCards()
})

input_year_new.addEventListener("click", () => {
  film_cards.sort(sortYearNew)
  renderFilmCards()
})

nextButton.addEventListener("click", () => {
  currentPage += 1
  renderFilmCardsByPage()
  
})

backButton.addEventListener("click", () => {
  currentPage -= 1
  renderFilmCardsByPage()
})
