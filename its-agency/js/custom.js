const store = {
    currentTarget: null,
    currentClassToRemove: null,
    productList: [],
    filteredProductList: [],
    basketList: [],
    basketTotalCount: 0
}

// Получение товаров
const fetchProducts = async () => {
    try {
        const response = await axios.get('https://berezg86.lightboxapi.ru/products-list');
        console.log('response', response);
        const products = response.data?.list;
        store.productList = products;
        renderSortedProductsByActiveOption(products);
        addProductToBasket();
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        document.getElementById('products').innerText = 'Не удалось загрузить товары.';
    }
};

fetchProducts().catch(error => {
    console.error('Ошибка при выполнении fetchProducts:', error);
});

const addProductToBasket = () => {
    // Добавление товара в корзину
    const handleAddToBasket = (productId) => {
        const product = store.productList.find(p => p.id === productId);
        if (!product) return;

        const existingItem = store.basketList.find(item => item.id === productId);

        if (existingItem) {
            existingItem.basketCount += 1;
        } else {
            const newProduct = {...product, basketCount: 1};
            store.basketList.push(newProduct);
        }

        // Пересчитываем общее количество товаров
        store.basketTotalCount = store.basketList.reduce((sum, item) => sum + item.basketCount, 0);

        // Обновить отображение корзины (если нужно)
        updateBasketCountDisplay();
        console.log('basketList', store.basketList);
    };

    const updateBasketCountDisplay = () => {
        const basketCountElement = document.getElementById('cartOpen');
        if (basketCountElement) {
            basketCountElement.innerText = store.basketTotalCount;
        }
    };

    // Добавить в корзину
    document.querySelectorAll('.products__add').forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.products__item');
            const productId = parseInt(productElement?.dataset.id, 10);
            console.log('productId', productId);
            if (!isNaN(productId)) {
                handleAddToBasket(productId);
            }
        });
    });
}

// Затемнение экрана при выводе модальных окон
const overlay = document.getElementById('overlay');

const overlayState = (isShow = false, elClass = '', elRemoveClass = '') => {
    if (isShow) {
        overlay.classList.add('overlay--active');
        if (elClass && elRemoveClass) {
            store.currentTarget = document.querySelector(elClass);
            store.currentClassToRemove = elRemoveClass;
        }
    } else {
        overlay.classList.remove('overlay--active');
        store.currentTarget = null;
        store.currentClassToRemove = null;
    }
}

overlay.addEventListener('click', () => {
    if (store.currentTarget && store.currentClassToRemove) {
        store.currentTarget.classList.remove(store.currentClassToRemove);
    }
    overlayState(false);
});

// Галерея в шапке
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.media-gallery__btn-next',
        prevEl: '.media-gallery__btn-prev',
    },
    pagination: {
        el: '.media-gallery__paginate',
        clickable: true,
    },
});

// Количество товаров в каталоге
const productsCount = (count) => {
    const container = document.querySelector('.toolbar__products-count');
    if (!container) return;

    const getWordForm = (n, forms) => {
        n = Math.abs(n) % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) return forms[2];
        if (n1 > 1 && n1 < 5) return forms[1];
        if (n1 === 1) return forms[0];
        return forms[2];
    };

    const word = getWordForm(count, ['товар', 'товара', 'товаров']);
    container.textContent = `${count} ${word}`;
}

// Рендер карточек товаров
const addProducts = (list = [], containerId = 'products', bySort = false) => {
    if(list && list.length) {
        console.log('list', list);
        const container = document.getElementById('products');
        productsCount(list.length);

        container.innerHTML = '';
        list.forEach(product => {
            const el = document.createElement('div');
            el.className = 'products__item';
            el.dataset.id = product.id;

            el.innerHTML = `
            <div class="products__image">
              <img src="${product.image}" alt="${product.name}">
              <div class="products__badge products__badge--${product.type}">
                ${product.typeText}
              </div>
                <div class="products__favorites">
                    <svg class="products__favor-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20.8 4.6c-1.5-1.6-4-1.6-5.5 0L12 7.9l-3.3-3.3c-1.5-1.6-4-1.6-5.5 0s-1.5 4.1 0 5.7L12 21l8.8-10.7c1.5-1.6 1.5-4.1 0-5.7z"></path>
                    </svg>
                    <span>${product.favorites}</span>
                </div>
            </div>
            <div class="products__info">
              <div class="products__title">${product.name}</div>
              <div class="products__footer">
                <div class="products__price">${product.price} ₽</div>
                <button class="products__add">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4.16663V15.8333" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.16699 10H15.8337" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          `;
            container.appendChild(el);
        });
    }
};

// Функция сортировки карточек
const sortProducts = (criteria, list) => {
    if (list && list.length) {
        let sorted = [...list];

        switch (criteria) {
            case 'expensive':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'cheap':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'popular':
                sorted.sort((a, b) => b.favorites - a.favorites);
                break;
            case 'new':
                sorted.sort((a, b) => (b.type === 'new') - (a.type === 'new'));
                break;
            default:
                break;
        }
        console.log('sorted', sorted);
        return sorted;
    }

    return [];
};

// Фильтрация в сайдбаре
const filterItems = document.querySelectorAll('.filter__item');

filterItems.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        const filterValue = item.dataset.value;

        // Сброс фильтра при повторном клике на активный элемент
        if (isActive) {
            item.classList.remove('active');
            store.filteredProductList = [];
            renderSortedProductsByActiveOption(store.productList);

            // Активируем кнопки добавления в корзину
            addProductToBasket();
            return;
        }

        filterItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        if (filterValue === 'count') {
            store.filteredProductList = store.productList.filter(p => p.count > 0);
        } else {
            store.filteredProductList = store.productList.filter(p => p.type === filterValue);
        }

        // Рендер отфильтрованных карточек с учетом сортировки
        renderSortedProductsByActiveOption(store.filteredProductList);

        // Активируем кнопки добавления в корзину
        addProductToBasket();
    });

    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
        }
    });
});

// Сортировка в тулбаре
const sortToggle = document.getElementById('sortToggle');
const sortWrapper = document.querySelector('.sort');

// Открытие/закрытие сортировки и overlay
sortToggle.addEventListener('click', () => {
    const isOpen = sortWrapper.classList.toggle('sort--open');
    overlayState(isOpen, '.sort', 'sort--open');
});

// Клик по варианту сортировки
document.querySelectorAll('.sort__option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.sort__option').forEach(o => o.classList.remove('sort__option--active'));
        option.classList.add('sort__option--active');

        sortToggle.innerHTML = option.textContent + ' <span class="sort__arrow">&#9662;</span>';
        sortWrapper.classList.remove('sort--open');
        overlayState(false);

        const selectedValue = option.value;
        console.log('Выбрана сортировка:', selectedValue);

        // Сортируем и рендерим
        renderProducts(store.productList, selectedValue);

        // Активируем кнопки добавления в корзину
        addProductToBasket();
    });
});

// Сортировка активной опции
const renderSortedProductsByActiveOption = (list) => {
    const activeOption = document.querySelector('.sort__option--active');
    if (activeOption) {
        const selectedValue = activeOption.value;

        // Сортируем и рендерим
        renderProducts(list, selectedValue);
    } else {
        addProducts(list);
    }
}

// Рендер карточек с учетом фильтрации и сортировки
const renderProducts = (productList = [], selectedValue) => {
    const isProductFiltered = store.filteredProductList.length;
    let sortedProducts = sortProducts(selectedValue, productList);

    // Если была фильтрация сортируем эти данные
    if (isProductFiltered) {
        sortedProducts = sortProducts(selectedValue, store.filteredProductList);
    }

    addProducts(sortedProducts);
}

// Корзина товаров
const cart = document.querySelector('.cart');

const cartOpen = document.getElementById('cartOpen');
const cartClose = document.getElementById('cartClose');

cartOpen.addEventListener('click', () => {
    cart.classList.add('cart--open');
    overlayState(true, '.cart', 'cart--open');
    renderCart();
});

cartClose.addEventListener('click', () => {
    cart.classList.remove('cart--open');
    overlayState(false);
});

// Очистка корзины
document.querySelector('.cart__clear').addEventListener('click', () => {
    store.basketList = [];
    store.basketTotalCount = 0;
    const basketCountElement = document.getElementById('cartOpen');
    basketCountElement.innerText = store.basketTotalCount;
    renderCart();
});

// Пересчет цены в корзине
const updateCartTotal = () => {
    const cartItems = document.querySelectorAll('.cart__item');
    let totalPrice = 0;

    cartItems.forEach(item => {
        if (!item.classList.contains('cart__item--disabled')) {
            const id = parseInt(item.dataset.id);
            const product = store.basketList.find(p => p.id === id);
            if (product) {
                totalPrice += product.price * product.basketCount;
            }
        }
    });

    document.querySelector('.cart__total-price').textContent = `${totalPrice.toLocaleString()} ₽`;
};

// Увеличение количества в корзине
const setupCartHandlers = () => {
    document.querySelectorAll('.cart__item').forEach(item => {
        const id = parseInt(item.dataset.id);
        const product = store.basketList.find(p => p.id === id);
        const decreaseBtn = item.querySelector('.cart__btn--decrease');
        const increaseBtn = item.querySelector('.cart__btn--increase');
        const amountElem = item.querySelector('.cart__amount');
        const removeBtn = item.querySelector('.cart__remove');
        const recoveryBtn = item.querySelector('.cart__recovery');

        const update = () => {
            amountElem.textContent = product.basketCount;
        };

        increaseBtn.addEventListener('click', () => {
            product.basketCount++;
            update();
            updateCartTotal();
        });

        decreaseBtn.addEventListener('click', () => {
            if (product.basketCount > 1) {
                product.basketCount--;
                update();
                updateCartTotal();
            }
        });

        removeBtn.addEventListener('click', () => {
            item.classList.add("cart__item--disabled");
            removeBtn.style.display = "none";
            recoveryBtn.style.display = "inline-flex";
            product._removed = true;
            updateCartTotal();
        });

        recoveryBtn.addEventListener('click', () => {
            item.classList.remove("cart__item--disabled");
            recoveryBtn.style.display = "none";
            removeBtn.style.display = "inline-flex";
            product._removed = false;
            updateCartTotal();
        });
    });
};

// Открытие сайдбара на мобиле
document.querySelector('.burger')?.addEventListener('click', () => {
    document.querySelector('.sidebar')?.classList.add('sidebar--open');
    overlayState(true, '.sidebar', 'sidebar--open');
});

// Рендер корзины
const renderCart = () => {
    const cartItemsContainer = document.querySelector('.cart__items');
    const cartCountElem = document.querySelector('.cart__count');
    const cartTotalPriceElem = document.querySelector('.cart__total-price');

    cartItemsContainer.innerHTML = '';

    let totalCount = 0;
    let totalPrice = 0;

    store.basketList.forEach(product => {
        const item = document.createElement('div');
        item.className = 'cart__item';
        item.dataset.id = product.id;

        item.innerHTML = `
            <img src="${product.image}" class="cart__image" alt="${product.name}">
            <div class="cart__info">
                <div class="cart__name">${product.name}</div>
                <div class="cart__price">${product.price * product.basketCount} ₽</div>
            </div>
            <div class="cart__tools">
                <div class="cart__quantity">
                    <button class="cart__btn cart__btn--decrease">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div class="cart__amount">${product.basketCount}</div>
                    <button class="cart__btn cart__btn--increase">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33325V12.6666" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <button class="cart__remove">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2">
                            <path d="M18 6L6 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                </button>
                <button class="cart__recovery" style="display: none;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L21 5L17 9" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 23L3 19L7 15" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `;

        cartItemsContainer.appendChild(item);

        totalCount += product.basketCount;
        totalPrice += product.price * product.basketCount;
    });

    store.basketTotalCount = totalCount;

    cartCountElem.textContent = `${totalCount} товар${totalCount === 1 ? '' : totalCount < 5 ? 'а' : 'ов'}`;
    cartTotalPriceElem.textContent = `${totalPrice.toLocaleString('ru-RU')} ₽`;

    setupCartHandlers();
};

// Вывод формата данных в футере для наглядности
const product = {
    id: 1,
    name: "Краска Wallquest, Brownsone MS90102",
    image: "images/paint.png",
    price: 6000,
    count: 20,
    type: "new",
    typeText: "Новинка",
    favorites: 35
};

const responseContainer = document.querySelector('.footer__response');
responseContainer.innerText = JSON.stringify(product, null, 4);

