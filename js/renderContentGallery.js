function renderContentGallery (data) {
    // validacija
    if (!data) {
        console.warn('ERROR: generuojant galerija reikia duoti tinkama informacija/objekta.');
        return '';
    }

    //logika



    let imagesHTML = '';
    for (let i=0; i < data.length; i++) {
        imagesHTML += `<img src="./img/posts/${data[i]}" alt="User  post gallery picture">`;

    }
        return `<div class="gallery gallery-${data.length}">
                    ${imagesHTML}
                </div>`;

}

export default renderContentGallery;

