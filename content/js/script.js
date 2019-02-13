$(function() {
    $('.sixthWrapper ul').slick({
        dots: true,
        nextArrow: $('#nextArrow'),
        prevArrow: $('#prevArrow')
    });

    $('#search , .xBT').click( function() {
        var searchOpen = $('#searchWrapper').height() > 0 ? false : true;
        if (searchOpen){
            $('#searchWrapper').animate({ height: "427px" });
            $("#overlay").fadeIn();
        }
        else{
            $('#searchWrapper').animate({ height: "0px" });
            $("#overlay").fadeOut();
        }
    });

    $(".forthSection ul li").hover(function() { 
        $(this).find(".hImgTitle").hide();
        $(this).find(".Group-20-Copy-11").hide();
        $(this).find(".hoveredImage").show();
    }, function(){  
        $(this).find(".hImgTitle").show();
        $(this).find(".Group-20-Copy-11").show();
        $(this).find(".hoveredImage").hide();
    });

    
    $("#searchInput").focusIn(function(){
        alert("x");
        $(".searchResults").fadeIn();
    }, function(){  
        $(".searchResults").fadeOut();
    })
    
});