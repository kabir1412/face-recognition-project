Webcam.set({
width: 400,
height: 400,
image_format: "png",
png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function capture_image(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="result_img" src="'+data_uri+'"/>';
});
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OK5f8yneo/model.json",modelLoaded);

function modelLoaded(){
console.log("Modal is Loaded");    
}

function identify_image(){
img = document.getElementById("result_img");
classifier.classify(img, gotResults);
}

function gotResults(error, results){
if (error)
{ 
console.log(error);
}
else{
console.log(results);
document.getElementById("family_name").innerHTML = results[0].label;
document.getElementById("image_accuracy").innerHTML = results[0].confidence.toFixed(3);
}


}