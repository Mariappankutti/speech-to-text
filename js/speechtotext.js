var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
//This is default javascript api
var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.continuous = true;
document.body.onclick = function() {
    
  }
  

var diagnostic = document.querySelector('.textarea');

recognition.onresult = function(event) {
    // The SpeechRecovar recognition = new SpeechRecognition();gnitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The [last] returns the SpeechRecognitionResult at the last position.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object
  
    var last = event.results.length - 1;
    var text = event.results[last][0].transcript;
    diagnostic.textContent += text;
 }
  
//   recognition.onspeechend = function() {
//     recognition.stop();
//   }
  
  recognition.onnomatch = function(event) {
    diagnostic.textContent = "I didn't recognise that color.";
  }
  
  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }
  
  
  
  document.getElementsByClassName('start')[0].onclick = function(){
    recognition.start();
    showHide('stop-img','start-img');
    
  }
  document.getElementsByClassName('stop')[0].onclick  = function(){
    recognition.stop();
    showHide('start-img','stop-img');
  }
  function showHide(show,hide){
    if(document.getElementsByClassName(show)[0].classList.contains('page-hide')){
        document.getElementsByClassName(show)[0].classList.remove('page-hide');
        document.getElementsByClassName(hide)[0].classList.add('page-hide');
    }

  }