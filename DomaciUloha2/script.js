const tricko = Number(prompt("Vlož požadované množství triček"))
if (tricko < 50) {
  document.body.innerHTML += "Celková cena objednávky je: " + tricko * 300 + "Kč"
} else if (tricko === 50) {
    document.body.innerHTML += "Celková cena objednávky je: " + tricko * 250 + "Kč"
} else if (tricko >= 200) {
    document.body.innerHTML += "Celková cena objednávky je: " + tricko * 200 + "Kč"
} else if (tricko >= 500) {
    document.body.innerHTML += "Celková cena objednávky je: " + tricko * 150 + "Kč"
} else if (tricko >= 1000) {
    document.body.innerHTML += "Celková cena objednávky je: " + tricko * 120 + "Kč"
} 