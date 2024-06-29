import './styles/styles2/style.css'
// import './script.js'
document.addEventListener('DOMContentLoaded', function() {
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
document.querySelector('#about-page').innerHTML = `

<div class="container">
<div class="about">
    <h2 class="about__title">О нас</h2>
    <div class="about__dscr" >
        <p class="about__dscr__text">"GameZone" — место, где мечты <br>геймеров становятся реальностью. <br>Наш клуб создан для тех, кто <br>ценит качественные игры, <br>современные технологии и <br>непревзойденный комфорт. Мы <br>предлагаем уникальную <br>атмосферу, где каждый посетитель <br>найдет себе развлечение по душе, <br>будь то киберспортсмен или<br>казуальный игрок</p>
        <img src="/img/about/Rectangle117.svg" alt="" class="about__dscr__img">
    </div>
    <div class="about__dscr dscr2">
        <img src="/img/about/Rectangle117.svg" alt="" class="about__dscr__img">
        <p class="about__dscr__text dscrtext2" >
            "GameZone" — место, где мечты 
            геймеров становятся реальностью. 
            Наш клуб создан для тех, кто 
            ценит качественные игры, 
            современные технологии и 
            непревзойденный комфорт. Мы 
            предлагаем уникальную 
            атмосферу, где каждый посетитель 
            найдет себе развлечение по душе, 
            будь то киберспортсмен или
            казуальный игрок</p>
    </div>
    <h2 class="about__title">Франшиза</h2>
    <div class="about__dscr dscr3">
        <p class="about__dscr__text dscrtext3">
        "GameZone" — место, где мечты 
            геймеров становятся реальностью. 
            Наш клуб создан для тех, кто 
            ценит качественные игры, 
            современные технологии и 
            непревзойденный комфорт. Мы 
            предлагаем уникальную 
            атмосферу, где каждый посетитель 
            найдет себе развлечение по душе, 
            будь то киберспортсмен или
            казуальный игрок</p>
        <div class="about__dscr__locations">
            <div class="about__dscr__locations__ex">
                <p class="about__dscr__locations__ex__title">На Арбатской</p>
                <div class="about__dscr__locations__ex__adres">
                    <img src="/img/footer/geo.svg" alt="" class="about__dscr__locations__ex__adres__icn">
                    <p class="about__dscr__locations__ex__adres__text">ул. Воздвиженка, 9</p>
                </div>
                <p class="about__dscr__locations__ex__time">Круглосуточно</p>
            </div>
        </div>
        <img src="/img/about/карта.svg" alt="" class="about__dscr__img" >
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