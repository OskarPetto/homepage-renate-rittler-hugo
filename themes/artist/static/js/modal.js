
function scaleModalToImage() {
    
    const image = $("#imageModal").find(".active").find("img")[0];

    const ratio = image.naturalWidth / image.naturalHeight;

    // for modal header and footer
    const maxModalHeight = window.innerHeight - 210;

    const maxHeight = Math.min(image.naturalHeight, maxModalHeight);

    // for padding in modal
    const maxWidth = Math.min(window.innerWidth - 34,  maxHeight * ratio + 34); 

    $("#imageModal").find(".modal-dialog").css({ "max-width": maxWidth});
}

function lazyLoadImage(e) {
    let image = $("#imageModal").find(".active").find("img");
    image.attr('src', image.attr('data-src'));
    image.removeAttr('data-src');
}

$("#imageModal").on('show.bs.modal', function (e) {
    lazyLoadImage(e);
  })

$("#imageCarousel").on('slid.bs.carousel', function (e) {
    lazyLoadImage(e);
})