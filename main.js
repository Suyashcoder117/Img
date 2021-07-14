function capture(){
    Webcam.attach(camea);
}
camea = document.getElementById("camera");
Webcam.set({
    width: 345,
    height: 298,
    image_format: 'png',
    png_quality: 90
     
 });
 Webcam.attach(camea);
 function capture(){
     Webcam.snap(function(data_uri) {
         document.getElementById("snapshot").innerHTML = "<img id='captured_img' src='" + data_uri +"' />";
         ;});
     }
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ce9enb-lw/model.json');
function modelLoaded(){
    console.log("model loaded");
}
function identify(){
    img = document.getElementById('captured_img');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
if (error){
    console.error(error);
} else {
    console.log(result);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}