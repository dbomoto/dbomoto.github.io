// element - css selector
// classes - array of classes to toggle
function toggleClass(element, classes) {
    let domElement = document.querySelector(element)
    // console.log(element,classes)
    classes.forEach(show => domElement.classList.toggle(show))
}
