"use strict";



$(function () {
    $('.bouton').click(function () {
        $('.actualContent').remove();
        $('.content').load('../H3P2017E13/inc/content2.html .actualContent', function () {
        // $.getScript("../src/js/loading3.js");
        });
    });
});
    