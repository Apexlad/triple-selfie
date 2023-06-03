var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start1(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);
    if(Content=="selfie"){
        console.log("#TAKINGSELFIE");
        speak();
        //take_selfie();
        
    }
}
Webcam.set({
    width:320,
    height:240,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");


function speak(){
    synth=window.speechSynthesis;
    Webcam.attach(camera);
    speak_data="Taking the first selfie in five seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    setTimeout(function(){
        img_1="selfie1";
        take_selfie();
        speak_data="Taking the next selfie in five seconds";
        utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 5000);
    setTimeout(function(){
        img_1="selfie2";
        take_selfie();
        speak_data="Taking the next selfie in five seconds";
        utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }, 10000);
    setTimeout(function(){
        img_1="selfie3";
        take_selfie();
    }, 15000);

   }

   function take_selfie(){
    Webcam.snap(function(data_uri){
        if (img_1=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">'
        }
        if (img_1=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">'
        }
        if (img_1=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie2" src="'+data_uri+'">'
        }

    });
   }

