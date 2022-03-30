Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="img_1" >';
    });
}
console.log('ml5.version: ',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/72JAG0SwB/model.json', modelLoaded);
function modelLoaded(){
    console.log('Model loaded');
}
function check(){
    img=document.getElementById("img_1");
    classifier.classify(img, gotResults);
}
function gotResults(error, results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("result_object_name").innerHTML=results[0].label;
         document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
     }
}