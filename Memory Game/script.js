const cardArray = [
    {
        name: 'fries',
        img: 'images/pizza.png',
    },

    {
        name: 'apple',
        img: 'images/apple.png',
    },

    {
        name: 'pineapple',
        img: 'images/pineapple.png',
    },

    {
        name: 'carrot',
        img: 'images/carrot.png',
    },

    {
        name: 'banana',
        img: 'images/banana.png',
    },

    {
        name: 'wateremelon',
        img: 'images/watermelon.png',
    },

    {
        name: 'fries',
        img: 'images/pizza.png',
    },

    {
        name: 'apple',
        img: 'images/apple.png',
    },

    {
        name: 'pineapple',
        img: 'images/pineapple.png',
    },

    {
        name: 'carrot',
        img: 'images/carrot.png',
    },

    {
        name: 'banana',
        img: 'images/banana.png',
    },

    {
        name: 'wateremelon',
        img: 'images/watermelon.png',
    },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for(let i = 0; i < 10; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/white.png');
        card.setAttribute('data-id', i);
        gridDisplay.append(card);
    }
}

createBoard();