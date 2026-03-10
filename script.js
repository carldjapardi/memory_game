const clueHoldTime = 500; 
const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 

var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  
var guessCounter = 0;

function startGame(){
    progress = 0;
    gamePlaying = true;
    
    pattern = [];
    for(let i=0; i<8; i++){
        pattern.push(Math.floor(Math.random() * 4) + 1);
    }

    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("levelDisplay").classList.remove("hidden");
    document.getElementById("levelDisplay").innerText = "Level: 1";
    context.resume();
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("levelDisplay").classList.add("hidden");
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392.0,
  4: 516.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume() 
  tonePlaying = true
  setTimeout(() => stopTone(), len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){ document.getElementById("btn"+btn).classList.add("lit") }
function clearButton(btn){ document.getElementById("btn"+btn).classList.remove("lit") }

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; 
  for(let i=0; i<=progress; i++){ 
    setTimeout(playSingleClue, delay, pattern[i]) 
    delay += clueHoldTime + cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert(`Game Over. You lost at level ${progress + 1}`);
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if (progress == pattern.length - 1){
        winGame();
      } else{
        progress++;
        document.getElementById("levelDisplay").innerText = "Level: " + (progress + 1);
        playClueSequence();
      }
    } else{
      guessCounter++;
    }
  } else{
    loseGame();
  }
}