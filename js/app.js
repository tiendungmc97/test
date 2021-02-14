$(document).ready(function(){
    $(window).on('scroll', function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element", {
        strings: ["Nguyen Tien Dung", "a Developer", "a Designer"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    /*Progress bar*/
    var waypoint = new Waypoint({
        element: document.getElementById('exp-class'),
        handler: function() {
            var p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width: 90%;transition:1s all");
            p[1].setAttribute("style", "width: 90%;transition:1.5s all");
            p[2].setAttribute("style", "width: 55%;transition:1.8s all");
            p[3].setAttribute("style", "width: 75%;transition:2.1s all");
            p[4].setAttribute("style", "width: 60%;transition:2.4s all");
            p[5].setAttribute("style", "width: 60%;transition:2.7s all");
        },
        offset:'90%'
      })
    
})