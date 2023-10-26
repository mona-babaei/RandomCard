document.getElementById("drawButton").addEventListener("click", function() {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(response => response.json())
        .then(data => {
            const cardImageDiv = document.getElementById("cardImage");
            cardImageDiv.innerHTML = "";  // Clear the div
            const img = document.createElement("img");
            img.setAttribute("src", data.cards[0].image);
            cardImageDiv.appendChild(img);
        })
        .catch(error => console.error("Failed to fetch card:", error));
});