import './styles/styles4/style.css'
// import './script.js'

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.games__search');
    const games = document.querySelectorAll('.games__topgames__game');
    const burgerIcon = document.getElementById('burger-icon');
    const burgerList = document.getElementById('burger-list');

    burgerIcon.addEventListener('click', function() {
        if (burgerList.style.display === 'flex') {
            burgerList.style.display = 'none';
        } else {
            burgerList.style.display = 'flex';
        }
    });
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        games.forEach(function(game) {
            const title = game.querySelector('.games__topgames__game__title').textContent.toLowerCase();
            if (title.includes(query)) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        });
    });

    games.forEach(function(game) {
        const overlay = game.querySelector('.games__topgames__game__overlay');
        const title = game.querySelector('.games__topgames__game__title').textContent;

        switch (title) {
            case 'Counter Strike 2':
                overlay.querySelector('p').textContent = 'Тестовые показатели: 60 FPS, 1080p, Ultra Settings';
                break;
            case 'Overwatch 2':
                overlay.querySelector('p').textContent = 'Тестовые показатели: 75 FPS, 1440p, High Settings';
                break;
            default:
                overlay.querySelector('p').textContent = 'Тестовые показатели недоступны';
                break;
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
document.querySelector('#games').innerHTML = `
<div class="container">
<div class="games">
    <input type="text" placeholder="Поиск..." class="games__search">
    <h3 class="games__title">ПК игры:</h3>
    <div class="games__topgames">
        <div class="games__topgames__game">
            <img src="/img/games/cs2.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Counter Strike 2</p>
            <div class="games__topgames__game__overlay">
                <p>Тестовые показатели: 60 FPS, 1080p, Ultra Settings</p>
            </div>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/over2.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Overwatch 2</p>
            <div class="games__topgames__game__overlay">
                <p>Тестовые показатели: 60 FPS, 1080p, Ultra Settings</p>
            </div>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/colda4.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Call of Duty BO4</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/fortnite.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Fortnite</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/apex.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Apex Legends</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/rainbow.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Raindbow SS</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/lol.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">League Of Legends</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/dota2.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Dota 2</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/pubg.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">PUBG</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/helldivers.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">HELLDIVERS</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/rust.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Rust</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/Warframe.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Warframe</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/GTAV.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">GTA V</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/LethalCompany.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Lethal Company</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/Raft.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Raft</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/Hunt_Showdown.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Hunt: Showdown</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/Phasmaphobia.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">Phasmaphobia</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/FFXIV.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">FF XIV</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/HELLDIVERS2.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">HELLDIVERS 2</p>
        </div>
        <div class="games__topgames__game">
            <img src="/img/games/GOT.svg" alt="" class="games__topgames__game__img">
            <p class="games__topgames__game__title">GOT</p>
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