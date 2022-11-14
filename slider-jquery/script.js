$(function() {

    let slideCount =  $(".slider .slides .item").length;
    let slideWidth =  $(".slider .slides .item img").width();
    let slideHeight =  $(".slider .slides .item img").height();
    let slideUlWidth =  slideCount * slideWidth;

    $(".slider").css({"max-width":slideWidth, "height": slideHeight});
    $(".slider .slides").css({"width":slideUlWidth, "margin-left": - slideWidth });
    $(".slider .slides .item:last-child").prependTo($(".slider .slides"));

    function moveLeft() {
        $(".slider .slides").stop().animate({
            left: + slideWidth
        },700, function() {
            $(".slider .slides .item:last-child").prependTo($(".slider .slides"));
            $(".slider .slides").css("left","");
        });
    }

    function moveRight() {
        $(".slider .slides").stop().animate({
            left: - slideWidth
        },700, function() {
            $(".slider .slides .item:first-child").appendTo($(".slider .slides"));
            $(".slider .slides").css("left","");
        });
    }
    $(".next").on("click",function(){
        moveRight();
    });

    $(".prev").on("click",function(){
        moveLeft();
    });
});