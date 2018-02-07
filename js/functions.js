"use strict"

$(document).ready(function () {
    // Amount of wasted pixels because of header
    var wastedSpace = -54;

    $("#aboutMeJump").on("click", function () {
        var y = $("#aboutme").offset().top;
        // $(this).attr("href", "#aboutme");
        $('html, body').animate({
            scrollTop: y + wastedSpace
        });
    });
    
    $("#educationJump").on("click", function () {
        var y = $("#resume").offset().top;
        // $(this).attr("href", "#aboutme");
        $('html, body').animate({
            scrollTop: y + wastedSpace
        });
    });
    
    $("#expJump").on("click", function () {
        var y = $("#workExp").offset().top;
        // $(this).attr("href", "#aboutme");
        $('html, body').animate({
            scrollTop: y + wastedSpace
        });
    });
});
