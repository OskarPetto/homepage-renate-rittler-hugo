// For smooth scrolling on mobile because 100vh is not constant 
if (window.innerWidth < 576) {
    const viewportHeight = $('.sidebar').innerHeight();
    $('.sidebar').css({ 'height': viewportHeight * 0.8 });
}
