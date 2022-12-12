$(document).ready(function(){
    // initializations
    $("#menu").menu();
    var hash = "";

    // accessibility
    // if the user prefers reduced motion at request of page
    const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
    if (!!isReduced) {
        var scrollSpeed = 0;
    } else {
        var scrollSpeed = 800;
    }
    // prefers-reduce-motion manual user toggle
    $("[data-reducemotion='no']").click(()=>{
        $("[data-reducemotion='no']").toggle("hidden");
        $("[data-reducemotion='yes']").toggle("hidden");
        scrollSpeed = 0;
    })
    $("[data-reducemotion='yes']").click(()=>{
        $("[data-reducemotion='no']").toggle("hidden");
        $("[data-reducemotion='yes']").toggle("hidden");
        scrollSpeed = 800;
    })
    // dark-mode manual user toggle
    $("[data-darkmode='no']").click(()=>{
        $("[data-darkmode='no']").toggle("hidden");
        $("[data-darkmode='yes']").toggle("hidden");
        $("html").toggleClass("dark");
    })
    $("[data-darkmode='yes']").click(()=>{
        $("[data-darkmode='no']").toggle("hidden");
        $("[data-darkmode='yes']").toggle("hidden");
        $("html").toggleClass("dark");
    })


    // ANIMATIONS
    // blind effect for menu
    $("#menuButton").click(function(event){
        $("#menu").toggle("blind",150);
    })

    //removes stutter of <ul> when loading the page
    $("#menu").toggle("hidden");    
    $("#menu").hide();

    // collapses menu when an item is clicked
    $("[data-menu='item']").click(()=>{
        $("#menu").hide("blind",150);
    })

    // listens to document clicks, if the target does not match 'menuButton' or have it as 
    // an ancestor, the click is outside of the menu items
    $(document).on('click',(event)=>{
        if(!$(event.target).closest("#menuButton").length){
            $("#menu").hide("blind",150);
        }
    })    
    // smooth scroll animation for cross browser compatibility
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
          hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, scrollSpeed, function(){
    
            window.location.hash = hash;
          });
        } 
    });    
    // hero section chevron
    anime({
        targets: [".chev1",".chev2",".chev3"],
        autoplay: true,
        loop: true,
        translateY: [-90,0],
        delay: anime.stagger(500),
    })
    // fancy borders
    function fancyBorders(){
        anime({
            targets: ".fancyBorder",
            autoplay: true,
            // loop: true,
            borderRadius: function(){
                var border1 = ""
                var border2 = ""
                for (let x=1;x<=4;x++){
                    border1 += `${anime.random(30,70)}% `
                }
                for (let x=1;x<=4;x++){
                    border2 += `${anime.random(30,70)}% `
                }
                // console.log(`${border1} / ${border2}`)
                return `${border1} / ${border2}`
            },
            duration: 1500,
            easing: "easeOutElastic(2,1)",
            complete: fancyBorders
        })
    }
    // ring animation
    anime({
        targets: "#ringAnimation",
        autoplay: true,
        loop: true,
        direction: 'alternate',
        scale: [1,1.2],
        rotate: 50,
        easing: 'linear',
        // scale: [
        //     {
        //     value: 1,
        //     direction: "alternate",
        //     easing: 'linear',
        //     duration: 1000,
        //     },
        //     {
        //     value: 1.2,
        //     direction: "alternate",
        //     easing: 'linear',
        //     duration: 1000
        //     }
        // ],
        // keyframes: [
        //     {scale: 1.1},
        //     {scale: 1},
        // ],
        // rotate: {
        //     value: '360deg',
        //     duration: 20000,
        //     direction: 'normal',
        //     easing: 'linear',
        // }
    })

    // ANIMATION TRIGGERS
    fancyBorders();
})