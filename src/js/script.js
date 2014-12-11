// jQuery
$(function() {
	$.ajax({
        type:"GET",
        url: "inc/content", + x[i] + ".html",
        success: function(retour){
            $("#content").empty().html(retour).fadeIn();
          }
      });

});
// generateAjaxLink : function(){
// 		var a = document.getElementsByClassName('nextContent');
// 		for (var i = 0; i < a.length; i++) {
// 			a[i].addEventListener('click',model.ajaxLoad,false);
// 			console.log(a[i]);
// 		};
// 	},