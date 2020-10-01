function renderPosts(data) {
    // validacija. pirma patikrinam ar data yra teisingai pateikta/formatas

    // logika, kuri generuoja turini
    let HTML = '';

    for (let i=0; i<data.length; i++) {
        const post = data[i];
        HTML += `<div class="post">
            <header>
            ${post.author.name}
            ${post.author.lastname}
            </header>
            <div>
            ${post.content.text}
            </div>
            <footer>
            LIKE + COMMENT
            </footer>
        </div>`;

    }
    console.log(HTML);

    // susirandame elementa kuriame norime perrasyti turini

    const feedDOM = document.querySelector('main');
    console.log(feedDOM);

    // i ta elementa ikeliame HTML kintamojo reiksme
    console.log(feedDOM.innerHTML);

    feedDOM.innerHTML = HTML;}

export default renderPosts;