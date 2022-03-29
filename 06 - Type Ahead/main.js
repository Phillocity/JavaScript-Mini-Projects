const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const suggestions = document.querySelector(".suggestions")

const search = document.querySelector(".search")

let cities = []

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities = data)

search.addEventListener("keyup", (e) => {
  const query = e.target.value
  const filtered = searchCity(query)
  if (query.length === 0) {
    suggestions.innerHTML =
      "<li>Filter for a city</li>" +
      "<li>or a state</li>"
  } else {
    insertList(filtered)
  }
})

function searchCity(searchValue) {
  const regex = new RegExp(`${searchValue}`, 'gi')
  return cities.filter(cityRow => cityRow.city.match(regex) || cityRow.state.match(regex))
}

function removeChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function numberComma(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function insertList(cities) {
  removeChild(suggestions)
  cities.slice(0,9).forEach((cityRow, index) => {
    regex = new RegExp(search.value, 'gi')
    const cityHighlight = cityRow.city.replace(regex,`<span class="highlight">${search.value}</span>`)
    const stateHighlight = cityRow.state.replace(regex,`<span class="highlight">${search.value}</span>`)
    suggestions.insertAdjacentHTML("beforeend",
      `<li>
        <span class="name">${cityHighlight}, ${stateHighlight}</span>
        <span class="population">${numberComma(cityRow.population)}</span>
      </li>`
    )
  })
}
