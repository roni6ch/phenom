$(function() {
    $(".secondSection .whiteBorder").animate({
        "border-top-width": "100%"
    }, 1e3);
    $(".sixthWrapper ul").slick({
        dots: true,
        nextArrow: $("#nextArrow"),
        prevArrow: $("#prevArrow")
    });
    $("#search , .xBT , #overlay").click(function() {
        var a = $("#searchWrapper").height() > 0 ? false : true;
        if (a) {
            $("#searchWrapper").animate({
                height: "427px"
            });
            $("#overlay").fadeIn();
        } else {
            $("#searchWrapper").animate({
                height: "0px"
            });
            $("#overlay").fadeOut();
        }
    });
    $(".forthSection ul li").hover(function() {
        $(this).find(".hImgTitle").hide();
        $(this).find(".Group-20-Copy-11").hide();
        $(this).find(".hoveredImage").show();
    }, function() {
        $(this).find(".hImgTitle").show();
        $(this).find(".Group-20-Copy-11").show();
        $(this).find(".hoveredImage").hide();
    });
    $("#searchInput").focus(function() {
        $(".searchResults").fadeIn();
    }).focusout(function() {
        $(".searchResults").fadeOut();
    });
});