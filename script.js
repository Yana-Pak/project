const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search__box input');
const cardWrapper = document.querySelector('.content-main__list');

const cardArray = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.png'
    },
    {
        id: 1,
        title: 'Второй товар',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.png'
    },
    {
        id: 1,
        title: 'Третий товар',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.png'
    },
    {
        id: 1,
        title: 'Четвертый товар',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.png'
    },
    {
        id: 1,
        title: 'Пятый товар',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.png'
    },
    {
        id: 1,
        title: 'Шестой товар',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './img/product.png'
    }
]

searchBtn.addEventListener('click', () => {
    console.log(searchInput.value);
})

const render = (cardList) => {
    cardWrapper.innerHTML = '';

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="product.html" class="content-main__list-item">
                 <div class="list-item__img">
                     <img src="${item.img}" alt="${item.title}">
                 </div>
                 <h5 class="list-item__title">${item.title}</h5>
                 <strong class="list-item__price">${item.price}</strong>
                 <div class="list-item__desc">
                     <div class="list-item__local">
                     ${item.address}
                     </div>
                     <span class="list-item__time">
                     ${item.date}
                     </span>
                </div>
            </a>
        `)
    });
}

const filterArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener('click', () => {
    render(filterArray(cardArray, searchInput.value))
})
