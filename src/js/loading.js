"use strict";



        $(function () {
         $('.bouton').click(function () {
                $('.actualContent').remove();
                $('.content').load('inc/content1.html .actualContent', function () {
                $.getScript("../H3P2017E13/src/js/loading2.js");
                });
            });
        });