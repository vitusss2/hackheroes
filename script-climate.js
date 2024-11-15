// Ciekawostki o zmianach klimatycznych - dane z JSON
const climateFacts = [
  "W ciągu ostatnich 100 lat średnia globalna temperatura wzrosła o około 1,1°C.",
  "Topnienie lodowców przyczynia się do wzrostu poziomu oceanów, co zagraża nisko położonym regionom.",
  "Od lat 80-tych każdego dziesięciolecia bijemy rekordy najcieplejszych lat w historii.",
  "Wylesianie to jedna z głównych przyczyn globalnego ocieplenia, gdyż drzewa pochłaniają CO2.",
  "Zmiany klimatyczne zwiększają intensywność ekstremalnych zjawisk pogodowych, takich jak huragany, fale upałów i powodzie.",
]

function displayClimateFacts() {
  const factsContainer = document.getElementById("facts-container")
  climateFacts.forEach((fact) => {
    const factDiv = document.createElement("div")
    factDiv.innerHTML = `<p>${fact}</p>`
    factsContainer.appendChild(factDiv)
  })
}

// Wyświetlanie ciekawostek klimatycznych przy ładowaniu strony
displayClimateFacts()
