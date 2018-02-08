"use strict"

$(document).ready(function () {
    // Amount of wasted pixels because of header
    var wastedSpace = -54;
    var devMatchHidden = true;
    var andrewpaganHidden = true;

    $(".text").hide();

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
    
    // Buitton for Projects
    $("#devMatchImage").on("click", function () {
        if (devMatchHidden) {
            $("#devMatchText").fadeIn();
            // $("#devMatchImage").css("opacity", ".5");
            $("#devMatchImage").fadeTo("slow", 0.25);
            devMatchHidden = false;
        }
    });

    $("#devMatchText").on("click", function () {
        if (!(devMatchHidden)) {
            $("#devMatchText").fadeOut();
            $("#devMatchImage").fadeTo("slow", 1);
            devMatchHidden = true;
        }
    });

    $("#andrewpaganImage").on("click", function () {
        if (andrewpaganHidden) {
            $("#andrewpaganText").fadeIn();
            $("#andrewpaganImage").fadeTo("slow", 0.25);
            andrewpaganHidden = false;
        }
    });

    $("#andrewpaganText").on("click", function () {
        if (!(andrewpaganHidden)) {
            $("#andrewpaganText").fadeOut();
            $("#andrewpaganImage").fadeTo("slow", 1);
            andrewpaganHidden = true;
        }
    });
});
