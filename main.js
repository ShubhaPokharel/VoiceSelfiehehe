var SpeechRecognition = window.webkitSpeechRecognition; // the varible SpeechRecognition is holding window.webkitSpeechRecognition
var recognition = new SpeechRecognition();// the varible recognition is holding new SpeechRecognition so that means SpeechRecognition will be an object

function start() {
    document.getElementById("textbox").innerHTML = "";// in the function start the input will be empty
    recognition.start();// when the function start starts the recognition starts
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
}
function speak() {
    var synth = window.speechSynthesis; 

     speak_data = "Taking your selfie in 3 seconds";
    var utterThis  = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function () {
        take_snapshot();
        save();
    }, 3000);
}

Webcam.set({ // we are setting css in the js
    width:360, // the width of the camera will be 360
    height:250, //height of the camera will be 250
    image_format : 'png', //type of img will be png
    png_quality:100 //the quality of the img will be 100
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri +'">';
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}
//hi
