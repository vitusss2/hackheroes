// Formularz do przesyłania informacji o recyklingu
document
  .getElementById("recycling-form")
  .addEventListener("submit", function (event) {
    event.preventDefault()
    const item = document.getElementById("recycling-item").value
    const itemsDiv = document.getElementById("submitted-items")

    const newItem = document.createElement("div")
    newItem.innerHTML = `<p><strong>${item}</strong></p>`
    itemsDiv.appendChild(newItem)

    document.getElementById("recycling-item").value = ""
  })

// Punkty recyklingu - symulacja danych z JSON
const recyclingPoints = [
  { name: "Punkt Recyklingu 1", address: "ul. Zielona 12, Kraków" },
  { name: "Punkt Recyklingu 2", address: "ul. Eko 8, Warszawa" },
  { name: "Punkt Recyklingu 3", address: "ul. Recyklerów 22, Gdańsk" },
]

function displayRecyclingPoints() {
  const locationsDiv = document.getElementById("recycling-locations")
  recyclingPoints.forEach((point) => {
    const pointDiv = document.createElement("div")
    pointDiv.innerHTML = `<h4>${point.name}</h4><p>${point.address}</p>`
    locationsDiv.appendChild(pointDiv)
  })
}

// Wyświetlanie punktów recyklingu przy ładowaniu strony
displayRecyclingPoints()
