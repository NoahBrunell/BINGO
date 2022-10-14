const numbersDiv = document.getElementById("numbers")

function toggleNumber(el) {
    // Check if number is already "locked"
    if (el.classList == "locked") {
        // Remove class to element
        el.classList.remove("locked");
    } else {
        // Get parent element (div) of el (button) and get all elements inside div with class locked
        const lockedElements = el.parentElement.querySelectorAll(".locked");

        el.classList.add("locked");

        console.log("locked: ", el.id);

    }
}

// Create 40 buttons inside every div
for (let i = 1; i < 26; i++) {
    const newButton = document.createElement("button");

    // Set id on button
    newButton.id = "button" + i;
    // Set text inside button
    newButton.innerText = Math.floor(Math.random() * 75) + 1;
    // Set onclick on button
    newButton.onclick = function () {
        toggleNumber(this);
    }

    // Add button inside div
    numbersDiv.appendChild(newButton);
}

document.getElementById("button13").innerHTML = "<img src='https://editzstock.com/wp-content/uploads/2022/05/Crown-PNG-image-with-transparent-background-1.png'>"
