const textCarouselAnimate = () => {
        document.querySelectorAll('.text-carousel__track').forEach(track => {
                track.insertAdjacentHTML(
                    'beforeend',
                    track.innerHTML
                );
                const trackClone = track.cloneNode(true);
                track.parentNode.insertBefore(
                    trackClone,
                    track.nextSibling
                );
        });
};

textCarouselAnimate();

const media = window.matchMedia('(max-width: 767px)');
// const slider = document.querySelector('.stages__slider');
const track = document.querySelector('.stages__track');
const prevBtn = document.querySelector('.stages__arrow--prev');
const nextBtn = document.querySelector('.stages__arrow--next');
const dotsWrapper = document.querySelector('.stages__dots');
const cards = [...document.querySelectorAll('.stage-card')];

let current = 0;
let slides = [];

const mobileSlides = [
        [0, 1], // 1 + 2
        [2],    // 3
        [3, 4], // 4 + 5
        [5],    // 6
        [6]     // 7
];

function buildSlider() {
        if (!media.matches) {
                track.style.transform = '';
                track.innerHTML = '';

                cards.forEach(card => {
                        track.append(card);
                });

                dotsWrapper.innerHTML = '';

                return;
        }
        track.innerHTML = '';
        slides = [];
        mobileSlides.forEach(group => {
                const slide = document.createElement('div');
                slide.className = 'stages__slide';
                group.forEach(index => {
                        slide.append(cards[index]);
                });
                track.append(slide);
                slides.push(slide);
        });
        createDots();
        current = 0;
        updateSlider();
}

function createDots() {
        dotsWrapper.innerHTML = '';
        slides.forEach((_, index) => {
                const dot = document.createElement('button');

                dot.className = 'stages__dot';

                if (index === current) {
                        dot.classList.add('active');
                }

                dot.addEventListener('click', () => {
                        current = index;
                        updateSlider();
                });

                dotsWrapper.append(dot);
        });
}

function updateSlider() {
        track.style.transform =
            `translateX(-${current * 100}%)`;

        const dots = [...dotsWrapper.children];

        dots.forEach((dot, index) => {
                dot.classList.toggle(
                    'active',
                    index === current
                );
        });
        prevBtn.disabled = current === 0;
        nextBtn.disabled =
            current === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
        if (current > 0) {
                current--;
                updateSlider();
        }
});

nextBtn.addEventListener('click', () => {
        if (current < slides.length - 1) {
                current++;
                updateSlider();
        }
});

buildSlider();

media.addEventListener('change', buildSlider);

const participantsSlider = (() => {
        const slider = document.querySelector('.slider');
        if (!slider) return null;

        const sliderTrack = slider.querySelector('.slider__track');
        const sliderCards = [...slider.querySelectorAll('.participant-card')];
        const sliderPrev = slider.querySelector('.slider__arrow--prev');
        const sliderNext = slider.querySelector('.slider__arrow--next');
        const currentEl = slider.querySelector('.slider__current');
        const totalEl = slider.querySelector('.slider__total');

        let index = 0;
        let visible = 3;

        const getVisible = () => {
                if (window.innerWidth < 768) return 1;
                if (window.innerWidth < 992) return 2;
                return 3;
        };

        const getStepWidth = () => {
                const firstCard = sliderCards[0];
                if (!firstCard) return 0;
                const cardWidth = firstCard.getBoundingClientRect().width;
                const gap = parseFloat(getComputedStyle(sliderTrack).gap) || 0;
                return cardWidth + gap;
        };

        const update = () => {
                visible = getVisible();

                const maxIndex = Math.max(0, sliderCards.length - visible);
                index = Math.min(index, maxIndex);

                const step = getStepWidth();
                sliderTrack.style.transform = `translateX(-${index * step}px)`;

                currentEl.textContent = String(Math.min(sliderCards.length, index + visible));
                totalEl.textContent = `/ ${sliderCards.length}`;

                sliderPrev.disabled = index === 0;
                sliderNext.disabled = index >= maxIndex;
        };

        sliderPrev.addEventListener('click', () => {
                if (index <= 0) return;
                index -= 1;
                update();
        });

        sliderNext.addEventListener('click', () => {
                const maxIndex = Math.max(0, sliderCards.length - visible);
                if (index >= maxIndex) return;
                index += 1;
                update();
        });

        window.addEventListener('resize', update);
        update();

        return {
                update
        };
})();