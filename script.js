// Dane do wykresu emisji CO2
const co2Data = {
  labels: ["2000", "2005", "2010", "2015", "2020", "2025"],
  datasets: [
    {
      label: "Emisja CO2 (w mln ton)",
      data: [3000, 3200, 3400, 3600, 3800, 3900],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      fill: true,
    },
  ],
}

// Konfiguracja wykresu emisji CO2
const config = {
  type: "line",
  data: co2Data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Emisje CO2 na przestrzeni lat",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Emisja CO2 (mln ton)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Rok",
        },
      },
    },
  },
}

// Inicjalizacja wykresu
const co2Chart = new Chart(document.getElementById("co2Chart"), config)

// Ciekawostki ekologiczne
const facts = [
  "Najcieplejszy rok w historii to 2016.",
  "Każdego roku do oceanów trafia około 8 milionów ton plastiku.",
  "Recykling jednej tony papieru oszczędza około 17 drzew.",
  "Globalna temperatura wzrosła o około 1,2°C od czasów przedindustrialnych.",
  "Używanie roweru zamiast samochodu redukuje emisje CO2 o 90%.",
  "Jedna czwarta całej energii zużywanej na świecie pochodzi z odnawialnych źródeł.",
]

// Losowe wyświetlanie ciekawostki co 5 sekund
function displayRandomFact() {
  const factIndex = Math.floor(Math.random() * facts.length)
  document.getElementById("facts").innerText = facts[factIndex]
}

setInterval(displayRandomFact, 5000)
// Wyświetl pierwszą ciekawostkę przy ładowaniu
displayRandomFact()

// Sprawdzanie jakości powietrza
document
  .getElementById("check-air-quality")
  .addEventListener("click", function () {
    const city = document.getElementById("city-name").value
    const apiKey = "ff2721e314536235b5437be638f1b9b5" // Twój klucz API do OpenWeather
    fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?q=${city}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(
          "air-quality-result"
        ).innerText = `Indeks jakości powietrza (AQI): ${data.list[0].main.aqi}`
      })
      .catch((error) => {
        console.error(
          "Błąd podczas pobierania danych o jakości powietrza:",
          error
        )
        document.getElementById("air-quality-result").innerText =
          "Nie udało się pobrać danych o jakości powietrza."
      })
  })
