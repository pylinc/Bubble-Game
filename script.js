var timer = 10;
var score = 0;
var hitvalue = 0;
var maxscore = 0;
function makebox(){
    var cluster = "";

    for(var i = 1;i<=160;i++){
        cluster += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = cluster;
}
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
            if(score>maxscore){
                
            }
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

    // console.log(val.textContent);
    if(clickednum === hitvalue){
        scorecal();
        makebox();
        hitval();
    }
    
    if(timer==0){
        document.querySelector("#scoreval").textContent = 0;
    }
    
});


settimer();
makebox();
hitval();


