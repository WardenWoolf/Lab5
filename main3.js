import './styles/styles3/style.css'
// import './script.js'

document.addEventListener('DOMContentLoaded', () => {
    // Описание новостей
    const newsDescriptions = {
        "Новая Launge": "Открытие новой комфортной зоны отдыха для посетителей.",
        "Статистика": "Подробный анализ посещаемости и активности пользователей.",
        "Больше комнат": "Увеличение числа игровых комнат для удобства клиентов.",
        "Пррофыв!": "фывфывыв.",
        "Открытие!": "Празднование открытия нового клуба с массой приятных сюрпризов."
    };

    const setupSlider = (sliderClass, btnClass) => {
        const slider = document.querySelector(`.${sliderClass}`);
        const buttons = slider.querySelectorAll(`.${btnClass}`);

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const page = button.dataset.page;

                // Снять активный класс со всех кнопок
                buttons.forEach(btn => btn.classList.remove('active'));
                // Добавить активный класс на нажатую кнопку
                button.classList.add('active');

                // Показать соответствующую страницу
                const pages = slider.querySelectorAll('.news__box__rs__partofnews');
                pages.forEach(p => p.classList.remove('active-page'));
                const activePage = slider.querySelector(`.news__box__rs__partofnews.page-${page}`);
                activePage.classList.add('active-page');
            });
        });

        // Обработчики клика на новости
        const newsItems = slider.querySelectorAll('.news__box__rs__partofnews__news');
        newsItems.forEach(item => {
            item.addEventListener('click', () => {
                // Получаем данные новости
                const title = item.dataset.title;
                const bgImage = item.dataset.bg;

                // Обновляем левый блок с информацией о новости
                const newsBoxLs = slider.querySelector('.news__box__ls');
                newsBoxLs.style.backgroundImage = `url('${bgImage}')`;
                newsBoxLs.querySelector('.news__box__ls__title').textContent = title;
                newsBoxLs.querySelector('.news__box__ls__dscr').innerHTML = newsDescriptions[title];
            });
        });
    };

    setupSlider('latest-news', 'latest-page-btn');
    setupSlider('franchise-news', 'franchise-page-btn');

    const initialNews = document.querySelector('.news__box__rs__partofnews__news.snews');
    initialNews.click();
    const burgerIcon = document.getElementById('burger-icon');
    const burgerList = document.getElementById('burger-list');

    burgerIcon.addEventListener('click', function() {
        if (burgerList.style.display === 'flex') {
            burgerList.style.display = 'none';
        } else {
            burgerList.style.display = 'flex';
        }
    });
});


document.querySelector('#header').innerHTML = `
  
        <div class="container">
            <div class="nav-menu">
                <ul class="nav-menu__list">
                    <li class="nav-menu__list__item"><a href="http://localhost/GameZone/index.php" class="nav-menu__list__item__link"><img src="/img/logo.svg" alt="" class="nav-menu__list__yem__link__logo"></a></li>
                    <li class="nav-menu__list__item"><a href="#tariffs" class="nav-menu__list__item__link">Тарифы</a></li>
                    <li class="nav-menu__list__item"><a href="#eq" class="nav-menu__list__item__link">Оборудование</a></li>
                    <li class="nav-menu__list__item"><a href="#games" class="nav-menu__list__item__link">Игры</a></li>
                    <li class="nav-menu__list__item"><a href="#about" class="nav-menu__list__item__link">О нас</a></li>
                    <li class="nav-menu__list__item"><a href="#newses" class="nav-menu__list__item__link">Новости</a></li>
                    <li class="nav-menu__list__item"><a href="/profile.html" class="nav-menu__list__item__link">Профиль</a></li>
                    <li class="nav-menu__list__item"><a href="/profile.html" class="nav-menu__list__item__link"><img src="/img/avatar.svg" alt="" class="nav-menu__list__yem__link__avatar"></a></li>
                </ul>
                <div class="burger-menu" id="burger-menu">
                    <div class="burger-menu__icon" id="burger-icon">
                        &#9776;
                    </div>
                    <ul class="burger-menu__list" id="burger-list">
                        <li class="burger-menu__item"><a href="/index.html">Главная</a></li>
                        <li class="burger-menu__item"><a href="/index4.html">Игры</a></li>
                        <li class="burger-menu__item"><a href="/index2.html">О нас</a></li>
                        <li class="burger-menu__item"><a href="/index3.html">Новости</a></li>
                        <li class="burger-menu__item"><a href="/profile.html">Профиль</a></li>
                    </ul>
                </div>
            </div>
        </div>

`
document.querySelector('#index-sec').innerHTML = `
  
            <div class="container">
                <div class="index">
                    <h1 class="index__title f-phr"><span class="index__title__f-phr"><em>САМЫЙ МОЩНЫЙ</em></span><br><span class="index__title__scnd-phr"><em>КЛУБ ЖДЕТ ТЕБЯ!</em></span></h1>
                </div>
            </div>

`
document.querySelector('#last-news').innerHTML = `
  
            <div class="container">
                <div class="news">
                    <h2 class="news__title">Последние новости</h2>
                    <div class="news__box latest-news">
                        <div class="news__box__ls" >
                            <p class="news__box__ls__title">Заголовок новости</p>
                            <p class="news__box__ls__dscr">Описание новости</p>
                        </div>
                        <div class="news__box__rs">
                            <div class="news__box__rs__partofnews page-1 active-page">
                                <div class="news__box__rs__partofnews__news fnews" data-title="Новая Launge" data-dscr="Описание для Новая Launge" data-bg="/img/news/launge.svg" style="background: url('/img/news/launge.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Новая Launge</p>
                                </div>
                                <div class="news__box__rs__partofnews__news snews" data-title="Статистика" data-dscr="Описание для Статистика" data-bg="/img/news/statistic.svg" style="background: url('/img/news/statistic.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Статистика</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" data-title="Больше комнат" data-dscr="Описание для Больше комнат" data-bg="/img/news/morerooms.svg" style="background: url('/img/news/morerooms.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Больше комнат</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" data-title="Открытие!" data-dscr="Описание для Открытие!" data-bg="/img/news/open.svg" style="background: url('/img/news/open.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Открытие!</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" data-title="Больше комнат" data-dscr="Описание для Больше комнат" data-bg="/img/news/morerooms.svg" style="background: url('/img/news/morerooms.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Больше комнат</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" data-title="Пррофыв!" data-dscr="Описание для Открытие!" data-bg="/img/news/open.svg" style="background: url('/img/news/open.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Скоро!</p>
                                </div>
                            </div>
                            <div class="news__box__rs__partofnews page-2">
                                <div class="news__box__rs__partofnews__news fnews" data-title="Больше комнат" data-dscr="Описание для Больше комнат" data-bg="/img/news/morerooms.svg" style="background: url('/img/news/morerooms.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Больше комнат</p>
                                </div>
                                <div class="news__box__rs__partofnews__news snews" data-title="Открытие!" data-dscr="Описание для Открытие!" data-bg="/img/news/open.svg" style="background: url('/img/news/open.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Открытие!</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" data-title="Новая Launge" data-dscr="Описание для Новая Launge" data-bg="/img/news/launge.svg" style="background: url('/img/news/launge.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Новая Launge</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" data-title="Статистика" data-dscr="Описание для Статистика" data-bg="/img/news/statistic.svg" style="background: url('/img/news/statistic.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Статистика</p>
                                </div>
                            </div>
                        </div>
                        <div class="news__box__pagination">
                            <button class="news__box__btn latest-page-btn active" data-page="1">1</button>
                            <button class="news__box__btn latest-page-btn" data-page="2">2</button>
                        </div>
                    </div>
                
                    <h2 class="news__title">Новости Франшизы</h2>
                    <div class="news__box franchise-news">
                        <div class="news__box__rs">
                            <div class="news__box__rs__partofnews page-1 active-page">
                                <div class="news__box__rs__partofnews__news fnews" data-title="Новая Launge" data-dscr="Описание для Новая Launge" data-bg="/img/news/launge.svg" style="background: url('/img/news/launge.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Новая Launge</p>
                                </div>
                                <div class="news__box__rs__partofnews__news snews" data-title="Статистика" data-dscr="Описание для Статистика" data-bg="/img/news/statistic.svg" style="background: url('/img/news/statistic.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Статистика</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" data-title="Больше комнат" data-dscr="Описание для Больше комнат" data-bg="/img/news/morerooms.svg" style="background: url('/img/news/morerooms.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Больше комнат</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" data-title="Открытие!" data-dscr="Описание для Открытие!" data-bg="/img/news/open.svg" style="background: url('/img/news/open.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Открытие!</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" data-title="Новая Launge" data-dscr="Описание для Новая Launge" data-bg="/img/news/launge.svg" style="background: url('/img/news/launge.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Новая Launge</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" data-title="Статистика" data-dscr="Описание для Статистика" data-bg="/img/news/statistic.svg" style="background: url('/img/news/statistic.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Статистика</p>
                                </div>
                            </div>
                            <div class="news__box__rs__partofnews page-2">
                                <div class="news__box__rs__partofnews__news fnews" data-title="Больше комнат" data-dscr="Описание для Больше комнат" data-bg="/img/news/morerooms.svg" style="background: url('/img/news/morerooms.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Больше комнат</p>
                                </div>
                                <div class="news__box__rs__partofnews__news snews" data-title="Открытие!" data-dscr="Описание для Открытие!" data-bg="/img/news/open.svg" style="background: url('/img/news/open.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Открытие!</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" data-title="Новая Launge" data-dscr="Описание для Новая Launge" data-bg="/img/news/launge.svg" style="background: url('/img/news/launge.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Новая Launge</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" data-title="Статистика" data-dscr="Описание для Статистика" data-bg="/img/news/statistic.svg" style="background: url('/img/news/statistic.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Статистика</p>
                                </div>
                            </div>
                        </div>
                        <div class="news__box__ls" >
                            <p class="news__box__ls__title">Акция - Бесплатный день</p>
                            <p class="news__box__ls__dscr">Вторник - день, в который, случайному посетителю <br>выпадает возможность играть бесплатно 10 часов!</p>
                        </div>
                        <div class="news__box__pagination news__box__pagination-2">
                            <button class="news__box__btn franchise-page-btn active" data-page="1">1</button>
                            <button class="news__box__btn franchise-page-btn" data-page="2">2</button>
                        </div>
                    </div>
                </div>
                
            </div>

`

document.querySelector('#footer').innerHTML = `
  
        <div class="footer">
            <div class="footer__ts">
                <img src="/img/footer/geo.svg" alt="" class="footer__ts__geo-icn">
                <p class="footer__ts__geo">Ул. Фомичевой д7 (круглосуточно)</p>
                <p class="footer__ts__number">+7 800 555-35-35</p>
            </div>
            <div class="footer__bs">
                <img src="" alt="" class="footer__bs__copyright">
                <p class="footer__bs__copy">Компьютерный клуб “gamezone.ru”</p>
                <img src="/img/footer/vk.svg" alt="" class="footer__bs__vk">
                <img src="img/footer/tg.svg" alt="" class="footer__bs__tg">
            </div>
        </div>

`