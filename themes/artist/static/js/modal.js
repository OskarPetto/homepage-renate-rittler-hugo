
function scaleModalToImage() {

    if (window.innerWidth < 1200) {
        return;
    }
    
    const image = $("#imageModal").find(".active").find("img")[0];

    const ratio = image.naturalWidth / image.naturalHeight;

    // for modal footer
    const maxModalHeight = window.innerHeight - 220;

    const maxHeight = Math.min(image.naturalHeight, maxModalHeight);

    // for padding in modal
    const maxWidth = maxHeight * ratio + 34; 

    $("#imageModal").find(".modal-dialog").css({ "max-width": maxWidth});
}

// scale modal on show
$("#imageModal").on('show.bs.modal', function (e) {
    
    scaleModalToImage();
  })

// scale modal on next or prev click
$("#imageCarousel").on('slid.bs.carousel', function (e) {
    
    scaleModalToImage();
})