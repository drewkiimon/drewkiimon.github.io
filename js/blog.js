$(document).ready(function () {
    // Loading the HTML into the website
    $.get("blog-entries/blog1.html", function (data) {
        $("#blogStart").html(data);
    });
    
    // Gotta find a better way to iterate through pages
      $.get("blog-entries/blog2.html", function (data) {
        $("#blogStart").append(html(data));
    });  
})
