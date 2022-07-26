const light = document.getElementById('light');

light.addEventListener('click', function onClick(event) {
    const box = document.getElementById('container');

    box.style.backgroundColor = 'white';
    box.style.color = 'black';
});

const dark = document.getElementById('dark');

dark.addEventListener('click', function onClick(event) {
    const box = document.getElementById('container');

    box.style.backgroundColor = 'black';
    box.style.color = 'white';
});

const purple = document.getElementById('purple');

purple.addEventListener('click', function onClick(event) {
    const box = document.getElementById('container');

    box.style.backgroundColor = '#8246af';
    box.style.color = 'white';
});

green.addEventListener('click', function onClick(event) {
    const box = document.getElementById('container');

    box.style.backgroundColor = '#78be20';
    box.style.color = 'black';
});