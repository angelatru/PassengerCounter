// Create variables to store data in
// Initialize count as 0
// listen for clicks on increment button
// change the count-el in the html to reflect the nre count

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

// Save function, logs out count when called (ie when clicked)
function save() { 
    let saveCount = count + " - "
    saveEl.textContent += saveCount
    countEl.textContent = 0
    count = 0
}





