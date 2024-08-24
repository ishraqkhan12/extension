function quotes1(){
let quotes = [
    { text:"The only way to do great work is to love what you do."},
    { text:"It always seems impossible until it's done."},
    { text:"Life is like riding a bicycle. To keep your balance, you must keep moving."},
    { text:"The future belongs to those who believe in the beauty of their dreams."},  
    { text:"It does not matter how slowly you go as long as you do not stop."},
    { text:"The biggest adventure you can take is to live the life of your dreams."},
    { text:"The past has no power over the present moment."},
    { text:"Life is what happens when you’re busy making other plans."},
    { text:"The best way to predict your future is to create it."},
    { text: "you can't go back and change the beginning, but you can start where you"}
   
]

let random = Math.floor(Math.random()*quotes.length);


let slctArr = quotes[random]


document.getElementById("myQuote").innerHTML = slctArr.text
}
document.addEventListener("DOMContentLoaded", quotes1)

