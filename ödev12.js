let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
let totalCount = null

if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
    totalEl.textContent = localStorage.getItem("totalPeople")
    totalCount = Number(localStorage.getItem("totalPeople"))

} else {
    saveEl.textContent = ""
    totalEl.textContent = 0
}

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )

    totalCount += count
    totalEl.textContent = totalCount
    localStorage.setItem("totalPeople", totalEl.textContent)

    countEl.textContent = 0
    count = 0

}
