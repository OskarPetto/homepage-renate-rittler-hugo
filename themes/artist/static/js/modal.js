
function scaleModalTo(width, height) {

    const ratio = width / height;

    // for modal header and footer
    const maxModalHeight = window.innerHeight - 190;

    const maxHeight = Math.min(height, maxModalHeight);

    // for padding in modal
    const maxWidth = Math.min(window.innerWidth - 20,  maxHeight * ratio + 40); 

    $("#image-modal").find(".modal-dialog").css({ "max-width": maxWidth});

}

function showModal(image) {

    if (window.innerWidth < 1200) {
        return;
    }

    const modalImage = $("#modal-image");
    modalImage.attr('src', $(image).attr('data-src'));

    modalImage.one( "load", () => scaleModalTo($(modalImage).prop('naturalWidth'), $(modalImage).prop('naturalHeight')));

    const card = $(image).parent();

    $("#painting-title").text(card.find(".painting-title").text());
    $("#painting-info").text(card.find(".painting-info").text());

    $('#image-modal').modal('show')
}