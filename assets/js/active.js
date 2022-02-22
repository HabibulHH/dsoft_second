/*===================================================================
    Author          : Duronto Soft
    Template Name   : Duronto Soft
    Version         : 1.0
* ================================================================= */

(function ($) {
    "use strict";
    $(document).on("ready", function () {
        // MOBILE MENU
        $("#hamburger").on("click", function () {
            $(".mobile-nav").addClass("show");
            $(".overlay").addClass("active");
        });

        $(".close-nav").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $(".overlay").on("click", function () {
            $(".mobile-nav").removeClass("show");
            $(".overlay").removeClass("active");
        });

        $("#mobile-menu").metisMenu();
    }); // end document ready function
})(jQuery); // End jQuery
