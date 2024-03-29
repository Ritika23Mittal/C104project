Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tDxPNSN5H/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}