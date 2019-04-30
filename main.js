window.onload = init;

function init () {
    populateHTML();

    document.querySelector('#experience-button')
        .addEventListener('click', something);

    document.querySelector('#party-button')
        .addEventListener('click', somethingElse);

    document.querySelector('#freedom-button')
        .addEventListener('click', random);
    
    document.querySelector('#why-not-button')
        .addEventListener('click', boom);
}