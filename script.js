$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >= 99)
            $("nav").css({
                "position": "fixed",
                "left" : 0,
                "right" : 0,
                "top" : 0,
                "z-index": 500
            })
        else
            $("nav").css({
                "position": "relative"
            })

    })

    $("a#gototop").click(function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 10000)
    }, 20000)

    $("nav ul.menu a").click(function() {
        var h = $(this).attr("href")

        $("html, body"). animate({
            scrollTop: $("h").prop("offsetTop") + "px"

        }, 1000)
    })



     $("#btnsearch").click(function() {
        var k = $("#searchi4").val()
        $(`h5.food_title span:contains(${k})`).parent().parent().css("outline","3px solid orange")

        setTimeout(function() {
            $("div.item").css("outline","none")
        },3000)
    })



    $(".items div.item:not(:first-child)").hide()

    $("ul.menu a").click(function() {

       
        //xuli tab
        $("ul.menu a").removeClass("active")
        $(this).addClass("active")
        //xu li content
        var tab = $(this).attr("href")
        $("section.items div.item").hide()
        $(tab).show().css("display","inline")
    })


   

    $(window).scroll(function() {
        if($(this).scrollTop() >= 99)
            $("nav").css({
                "position": "fixed",
                "left" : 0,
                "right" : 0,
                "top" : 0,
                "z-index": 500
            })
        else
            $("nav").css({
                "position": "relative"
            })

    })
    
})