
function scaleModalToImage() {
    
    const image = $("#imageModal").find(".active").find("img")[0];

    const ratio = image.naturalWidth / image.naturalHeight;

    // for modal footer
    const maxModalHeight = window.innerHeight - 210;

    const maxHeight = Math.min(image.naturalHeight, maxModalHeight);

    // for padding in modal
    const maxWidth = Math.min(window.innerWidth - 34,  maxHeight * ratio + 34); 

    $("#imageModal").find(".modal-dialog").css({ "max-width": maxWidth});
}

function setImageSrc(e) {
    let image = $(e.relatedTarget).find('img[data-src]');
    image.attr('src', image.data('src'));
    image.removeAttr('data-src');
}

// scale modal on show
$("#imageModal").on('show.bs.modal', function (e) {
    
    setImageSrc(e);
  })

// scale modal on next or prev click
$("#imageCarousel").on('slid.bs.carousel', function (e) {
    
    setImageSrc(e);
})