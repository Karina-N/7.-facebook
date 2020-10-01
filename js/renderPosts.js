import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    // validacija. pirma patikrinam ar data yra teisingai pateikta/formatas

    // logika, kuri generuoja turini

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);

    }
    console.log(HTML);

    // susirandame elementa kuriame norime perrasyti turini

    const feedDOM = document.querySelector('main');
    console.log(feedDOM);

    // i ta elementa ikeliame HTML kintamojo reiksme
    console.log(feedDOM.innerHTML);

    feedDOM.innerHTML = HTML;
}

export default renderPosts;