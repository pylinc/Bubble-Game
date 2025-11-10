var timer = 60;
var score = 0;
var hitvalue = 0;
var maxscore = 0;
let resizeTimeout;

const clickSound = new Audio('/mouse_click.mp3');
const wrong = new Audio('/wrong-answer.mp3');

clickSound.preload = 'auto';


function calculateBubbles() {
    const width = window.innerWidth;
    if (width <= 320) return 80;  // smaller phones
    if (width <= 480) return 100; // mobile
    if (width <= 768) return 130; // tablets
    return 160; // desktop
}

function makebox(){
    var cluster = "";
    const bubbleCount = calculateBubbles();

    for(var i = 1; i <= bubbleCount; i++){
        cluster += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = cluster;
}

// Add window resize handler to rebuild bubbles when screen size changes
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        makebox();
        hitval();
    }, 250); // debounce resize events
});

function settimer(){

    var timerin = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#interval").textContent = timer;
        }
        else{
            clearInterval(timerin); 
            document.querySelector("#pbtm").innerHTML = `<p class = 'scoredis'>Your Score: ${score} </p> `;
            // document.querySelector(".scoredis").innerHTML = `<p> Your Score: ${score}</p>`
            // if(score>maxscore){
                
            // }
        }
    },1000);
}
function hitval(){

    hitvalue = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitvalue;
    
}
function scorecal(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",(bub)=>{
    var clickednum = Number(bub.target.textContent);

    // if(!clickednum.classList.contains("bubble")) return;

    
    const sound = clickSound.cloneNode(); // create a copy of the sound
    const sound1 = wrong.cloneNode();
    if(clickednum === hitvalue){
        sound.play().catch(err => console.log('Audio play blocked:', err));
        scorecal();
        makebox();
        hitval();
    }else{
        sound1.play().catch(err => console.log('Audio play blocked:', err));
    }
     
    if(timer==0){
        document.querySelector("#scoreval").textContent = 0;
    }
    
});


settimer();
makebox();
hitval();


