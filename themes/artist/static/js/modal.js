$("#imageModal").on('show.bs.modal', function (e) {
    
    const image = $(this).find(".active").find("img")[0];

    const ratio = image.naturalWidth / image.naturalHeight;

    // for modal footer
    const maxModalHeight = window.innerHeight - 190;

    const maxHeight = Math.min(image.naturalHeight, maxModalHeight);

    // for padding in modal
    const maxWidth = maxHeight * ratio + 34; 

    $(this).find(".modal-dialog").css({ "max-width": maxWidth});

  })