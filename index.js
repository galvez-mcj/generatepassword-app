const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate-btn")
let firstPassEl = document.getElementById("first-password")
let secondPassEl = document.getElementById("second-password")

generateEl.addEventListener("click", function() {
    let firstPass = ""
    let secondPass = ""

    for (let index = 0; index < 15; index++) {
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        firstPass += characters[randomChar1]
        secondPass += characters[randomChar2]
    }

    firstPassEl.textContent = firstPass
    secondPassEl.textContent = secondPass
})