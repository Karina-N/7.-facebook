function renderContentGallery (data) {
    // validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija reikia duoti tinkama informacija/objekta.');
        return '';
    }

    //logika
    const maxGallerySize = 4;
    const totalPhotoCount = data.length;
    const visiblePhotoCount = totalPhotoCount > maxGallerySize ? maxGallerySize : totalPhotoCount;

    let imagesHTML = '';
    for (let i=0; i < visiblePhotoCount; i++) {
        imagesHTML += `<img src="./img/posts/${data[i]}" alt="User post gallery picture">`;

    }


    let extraHTML = '';
    if (totalPhotoCount > maxGallerySize) {
        extraHTML = `<div class="extra">+${totalPhotoCount - maxGallerySize}</div>`;
    }

        return `<div class="gallery gallery-${visiblePhotoCount}">
                    ${imagesHTML}
                    ${extraHTML}
                </div>`;

}

export default renderContentGallery;

