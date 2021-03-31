window.onload = function(){
    
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    var widthMax = vw / 14
    var heightMax = vh / 9

    // var tvMultiplier = 1;

    // if (widthMax > heightMax){
    //     tvMultiplier = Math.floor(heightMax);
    // } else {
    //     tvMultiplier = Math.floor(widthMax);
    // }


    var tvBackgroundAR = [14,9]
    var tvBackground = document.querySelectorAll(".background")

    // tvBackground[0].style.width = `${14 * tvMultiplier}px`;
    // tvBackground[0].style.height = `${9 * tvMultiplier}px`;

    aspectRatio(tvBackgroundAR,tvBackground,1,1)



    // ar = aspect ratio of element; an array [width,height]
    // elmnt = element to change style
    // perWidth = % width of elmnt relative to widthMax
    // perHeight = % width of elmnt relative to heightMax
    function aspectRatioResize(ar,elmnt,perWidth,perHeight){
        var mult = 1;
    }


    // pick whichever is lower, and floor it, use it as the base multiplier for 
    // the aspect ratio

    // make it into a function that will be reusable. accepts the element chosen,
    // outputs the corresponding widht and height.



}