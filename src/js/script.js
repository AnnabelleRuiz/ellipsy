"use strict";

	$('#icon-more').on("click",function(){
	    $('#about').fadeToggle();
	  });




// jQuery


//     $('.bouton').click(function () {
//         $('.nextContent').load('inc/content1.html .actualContent', function (){
//         });
//         $('.actualContent').toggle();
//     });


	// $.ajax({
 //        type:"GET",
 //        url: "inc/content", + x[i] + ".html",
 //        success: function(retour){
 //            $("#content").empty().html(retour).fadeIn();
 //          }
 //      });
// generateAjaxLink : function(){
// 		var a = document.getElementsByClassName('nextContent');
// 		for (var i = 0; i < a.length; i++) {
// 			a[i].addEventListener('click',model.ajaxLoad,false);
// 			console.log(a[i]);
// 		};
// 	},
// });