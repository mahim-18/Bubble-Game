var score = 0;
var totalTime = 60;
var random = 0


function makeBubble(){
    var clutter = ""
    for(var i = 0; i<=174; i++){
        random = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${random}</div>` 
    }
    document.querySelector(".box-main").innerHTML = clutter
}

makeBubble();

function runTimer(){
    var settime = setInterval((e) => {
        if (totalTime>0) {
            totalTime--;
            document.querySelector("#timer").innerHTML = totalTime
        }else{
            clearInterval(settime);
            document.querySelector(".box-main").innerHTML = `<div class="result">
            <h1 class="gameover">Game Over!</h1> 
            <h1 class="gameover">Your Score Was: ${score}</h1>
            </div>`
        }
    }, 1000);
}

runTimer()

function getNewHit(){
    random = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = random
}

getNewHit()

function hitSuccess(){
    score += 10;
    document.querySelector("#score").innerHTML = score
}

// concept of event-bubbling is used.
document.querySelector(".box-main").addEventListener("click", (e)=>{
    var numClicked = Number(e.target.textContent);
    if (numClicked === random) {
        hitSuccess()
        makeBubble()
        getNewHit()
    }
})



