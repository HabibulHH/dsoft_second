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

        // HIGHLIGHT ACTIVE LINK
        const activePage = location.href;
        const navLinks = document.querySelectorAll(".navbar-items-2 .navbar-link");
        navLinks.forEach((link) => {
            if (link.href === activePage) {
                link.className = "current";
            }
        });

        // MODAL VIDEO
        $(".modal-video-active").modalVideo();
    }); // end document ready function
})(jQuery); // End jQuery
