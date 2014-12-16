"use strict";
// Animation pop up about
$('#icon-more').on("click",function(){
    $('#about').fadeToggle();
  });

$('.content').on('click', '#about', function(e) { //Au clic sur le body...
		$('#about').fadeOut(function() {     
	}); //...ils disparaissent ensemble
		e.stopPropagation();
	});


// Video player ajax
var vid = document.getElementById('videoEllipsy');

var content = [
    {btn: '.button',ctn: 'inc/content1.html'},
    {btn: '.button',ctn: './inc/content2.html'},
    {btn: '.button',ctn: './inc/content3.html'},
    {btn: '.button',ctn: './inc/content4.html'},
    {btn: '.button',ctn: './inc/content5.html'},
    {btn: '.button',ctn: './inc/content6.html'},
    {btn: '.button',ctn: './inc/content7.html'}
    ];

function clickbutton(){
        $('.button').on('click',function(){
        $('.videoEllipsy').get(0).play();
        var num = ($(".button").attr("data-content"));
        $('.actualContent').toggle( "puff",1000 );
        $('.content').fadeIn(content[num].ctn + ' .actualContent', function () {  
        });
    });
};

var current_time = 0;

var interval = setInterval(function() {
    current_time = Math.round(vid.currentTime);
    if (current_time == 2) {
        vid.pause();
        $('.content').load('./inc/content2.html .actualContent', function () {
            whatStation();
            order();
        });
        clearInterval(interval);   
    }
}, 1000)

var interval2 = setInterval(function() {
    current_time = Math.round(vid.currentTime);
    if (current_time == 5   ) {
        vid.pause();
        $('.content').load('./inc/content3.html .actualContent', function () {
            question1();
            order();
        });
        clearInterval(interval2);   
    }
}, 1000)

//var interval3 = setInterval(function() {
//    current_time = Math.round(vid.currentTime);
//    if (current_time == 10) {
//        vid.pause();
//        $('.content').load('./inc/content4.html .actualContent', function () {
//            question2();
//        });
//        clearInterval(interval3);   
//    }
//}, 1000)

function question1(){
    var answer1 = document.getElementById('answer1');
    var answer2 = document.getElementById('answer2');
    var answer3 = document.getElementById('answer3');
    var answer4 = document.getElementById('answer4');
    var answer5 = document.getElementById('answer5');
    var answer6 = document.getElementById('answer6');
    
    $('#goodanswer1').click(function(){
            $(answer1).addClass('color-good');
        });
    $('#goodanswer2').click(function(){
            $(answer4).addClass('color-good');
        });
    $('#goodanswer3').click(function(){
            $(answer5).addClass('color-good');
        });
    $('#goodanswer4').click(function(){
            $(answer6).addClass('color-good');
        });
    $('#badanswer1').click(function(){
            $(answer2).addClass('color-wrong');
        });
    $('#badanswer2').click(function(){
            $(answer3).addClass('color-wrong');
        });
}

function question2(){
    var answer1 = document.getElementById('answer1');
    var answer2 = document.getElementById('answer2');
    var answer3 = document.getElementById('answer3');
    var answer4 = document.getElementById('answer4');
    var answer5 = document.getElementById('answer5');
    var answer6 = document.getElementById('answer6');
    
    $('#goodanswer1').click(function(){
            $(answer2).addClass('color-good');
        });
    $('#goodanswer2').click(function(){
            $(answer4).addClass('color-good');
        });
    $('#goodanswer3').click(function(){
            $(answer6).addClass('color-good');
        });
    $('#badanswer1').click(function(){
            $(answer1).addClass('color-wrong');
        });
    $('#badanswer2').click(function(){
            $(answer3).addClass('color-wrong');
        });
    $('#badanswer3').click(function(){
            $(answer5).addClass('color-wrong');
        });
}

function whatStation(){ 
    var metro1 = document.getElementById('metroStation1');
    var metro2 = document.getElementById('metroStation2');
    var metro3 = document.getElementById('metroStation3');
    var metro4 = document.getElementById('metroStation4');
    var metro5 = document.getElementById('metroStation5');
    var metro6 = document.getElementById('metroStation6');
    var metro7 = document.getElementById('metroStation7');
    var metro8 = document.getElementById('metroStation8');
    var metro9 = document.getElementById('metroStation9');
    var metro10 = document.getElementById('metroStation10');
    var metro11 = document.getElementById('metroStation11');
    var metro12 = document.getElementById('metroStation12');
    var metro13 = document.getElementById('metroStation13');
    var metro14 = document.getElementById('metroStation14');
    var metro15 = document.getElementById('metroStation15');
    var metro16 = document.getElementById('metroStation16');
    var metro17 = document.getElementById('metroStation17');
    var metro18 = document.getElementById('metroStation18');

    var metroSound1 = new buzz.sound("./src/assets/audio/metro/metro1", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound2 = new buzz.sound("./src/assets/audio/metro/metro2", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound3 = new buzz.sound("./src/assets/audio/metro/metro3", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound4 = new buzz.sound("./src/assets/audio/metro/metro4", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound5 = new buzz.sound("./src/assets/audio/metro/metro5", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound6 = new buzz.sound("./src/assets/audio//metro/metro6", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound7 = new buzz.sound("./src/assets/audio/metro/metro7", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound8 = new buzz.sound("./src/assets/audio/metro/metro8", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound9 = new buzz.sound("./src/assets/audio/metro/metro9", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound10 = new buzz.sound("./src/assets/audio/metro/metro10", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound11 = new buzz.sound("./src/assets/audio/metro/metro11", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound12 = new buzz.sound("./src/assets/audio/metro/metro12", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound13 = new buzz.sound("./src/assets/audio/metro/metro13", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound14 = new buzz.sound("./src/assets/audio/metro/metro14", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound15 = new buzz.sound("./src/assets/audio/metro/metro15", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound16 = new buzz.sound("./src/assets/audio/metro/metro16", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound17 = new buzz.sound("./src/assets/audio/metro/metro17", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
    var metroSound18 = new buzz.sound("./src/assets/audio/metro/metro18", {
        formats: [ "mp3"],
        preload: true,
        autoplay: false,
        loop: false,
    });
        $(metro1).hover(function(){
           metroSound15.play(); 
        });
        $(metro2).hover(function(){
           metroSound5.play(); 
        });
        $(metro3).hover(function(){
           metroSound18.play(); 
        });
        $(metro4).hover(function(){
           metroSound16.play(); 
        });
        $(metro5).hover(function(){
           metroSound17.play(); 
        });
        $(metro6).hover(function(){
           metroSound2.play(); 
        });
        $(metro7).hover(function(){
           metroSound3.play(); 
        });
        $(metro8).hover(function(){
           metroSound9.play(); 
        });
        $(metro9).hover(function(){
           metroSound10.play(); 
        });
        $(metro10).hover(function(){
           metroSound12.play(); 
        });
        $(metro11).hover(function(){
           metroSound14.play(); 
        });
        $(metro12).hover(function(){
           metroSound8.play(); 
        });
        $(metro13).hover(function(){
           metroSound1.play(); 
        });
        $(metro14).hover(function(){
           metroSound4.play(); 
        });
        $(metro15).hover(function(){
           metroSound6.play(); 
        });
        $(metro16).hover(function(){
           metroSound7.play(); 
        });
        $(metro17).hover(function(){
           metroSound13.play(); 
        });
        $(metro18).hover(function(){
           metroSound11.play(); 
        });
        
    $(metro16).on('click',function(){
        $('.videoEllipsy').get(0).play();
        $('.actualContent').remove();
            }
        )
    }

// Function Order Button
function order(){

    var order = document.getElementById('order');

    // Set audio
    var soundOrder = new buzz.sound("./src/assets/audio/test", {
        formats: [ "mp3"],
        preload: true,
        autoplay: true,
        loop: false,
    });

    // Animate button when playing and end animation when sound end.
    soundOrder.bind("playing", function(e) {
        order.classList.add('animate');
    }).bind("ended", function(e) {
        order.classList.remove('animate');   
    });

    // Play sound on click
    $(order).click(function(){
        $(order).addClass("animate");
        soundOrder.play();
    });
}


clickbutton();



