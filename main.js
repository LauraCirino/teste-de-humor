// https://teachablemachine.withgoogle.com/models/KFUS5T2A8/ 
let prediction1 = "";
let prediction2 = "";
let classifier;

Webcam.set({
    width: 350,
    height: 275,
    imageFormat: "png"
});

Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML = `<img id="capturedImage" src="${datauri}">`;
    })
}

console.log("ml5 version:", ml5.version);

ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KFUS5T2A8/model.json")
    .then(model => {
        classifier = model;
        console.log("model loaded!");
    })
    .catch(err => console.error("erro ao carregar o modelo:",err));