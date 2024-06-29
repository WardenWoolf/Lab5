import './styles/indexstyles/style.css'

document.addEventListener('DOMContentLoaded', function() {
  const fnewsElement = document.querySelector('.fnews');
  const snewsElement = document.querySelector('.snews');
  const tnewsElement = document.querySelector('.tnews');
  const frnewsElement = document.querySelector('.frnews');
  const burgerIcon = document.getElementById('burger-icon');
  const burgerList = document.getElementById('burger-list');
  const authContainer = document.getElementById('auth-container');
  const authModal = document.getElementById('auth-modal');
  const registerModal = document.getElementById('register-modal');
  const switchToRegister = document.getElementById('switch-to-register');
  const switchToLogin = document.getElementById('switch-to-login');
  const authCloseBtn = document.getElementById('auth-close-btn');
  const registerCloseBtn = document.getElementById('register-close-btn');
  const profileLinks = document.querySelectorAll('.nav-menu__list__item__link[href="/profile.html"]');
  document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    fetch('/php/register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

  profileLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          authContainer.style.display = 'flex';
          authModal.style.display = 'block';
          registerModal.style.display = 'none';
      });
  });

  authCloseBtn.addEventListener('click', function() {
      authContainer.style.display = 'none';
  });

  registerCloseBtn.addEventListener('click', function() {
      authContainer.style.display = 'none';
  });

  switchToRegister.addEventListener('click', function(event) {
      event.preventDefault();
      authModal.style.display = 'none';
      registerModal.style.display = 'block';
  });

  switchToLogin.addEventListener('click', function(event) {
      event.preventDefault();
      registerModal.style.display = 'none';
      authModal.style.display = 'block';
  });

  burgerIcon.addEventListener('click', function() {
    if (burgerList.style.display === 'flex') {
        burgerList.style.display = 'none';
    } else {
        burgerList.style.display = 'flex';
    }
});

  fnewsElement.addEventListener('click', function() {
      const fnewsdscrElement = document.querySelector('.news__box__ls__dscr');
      const fnewstitleElement = document.querySelector('.news__box__ls__title');
      const fnewsimgElement = document.querySelector('.news__box__ls');

      fnewsdscrElement.textContent = 'Через неделю, совсем скоро, открывается новая лаундж зона!';
      fnewstitleElement.textContent = 'Новая Launge';
      fnewsimgElement.style.background = 'url("/img/news/launge.svg")';
      fnewsimgElement.style.backgroundSize = 'cover'    
  });

  snewsElement.addEventListener('click', function() {
      const snewsdscrElement = document.querySelector('.news__box__ls__dscr');
      const snewstitleElement = document.querySelector('.news__box__ls__title');
      const snewsimgElement = document.querySelector('.news__box__ls');

      snewsdscrElement.textContent = 'В нашей группе в ВК появилась статистика популярности той или иной игры!';
      snewstitleElement.textContent = 'Статистика';
      snewsimgElement.style.background = 'url("/img/news/statistic.svg")';
      snewsimgElement.style.backgroundSize = 'cover'
  });

  tnewsElement.addEventListener('click', function() {
      const tnewsdscrElement = document.querySelector('.news__box__ls__dscr');
      const tnewstitleElement = document.querySelector('.news__box__ls__title');
      const tnewsimgElement = document.querySelector('.news__box__ls');

      tnewsdscrElement.textContent = 'БОЛЬШЕ КОМНАТ БОГУ КОМНАТ! В скором времени будет открыта новая игровая зона!';
      tnewstitleElement.textContent = 'Больше комнат!';
      tnewsimgElement.style.background = 'url("/img/news/morerooms.svg")';
      tnewsimgElement.style.backgroundSize = 'cover'
  });

  frnewsElement.addEventListener('click', function() {
      const frnewsdscrElement = document.querySelector('.news__box__ls__dscr');
      const frnewstitleElement = document.querySelector('.news__box__ls__title');
      const frnewsimgElement = document.querySelector('.news__box__ls');

      frnewsdscrElement.textContent = '27.10.2948 будет открыт новый филлиал на марсе, присылайте заявки на отправление!';
      frnewstitleElement.textContent = 'Открытие филлиала';
      frnewsimgElement.style.background = 'url("/img/news/open.svg")';
      frnewsimgElement.style.backgroundSize = 'cover'
  });

  const lbElement = document.querySelector('.equipment__sl__btns__lb');
  const rbElement = document.querySelector('.equipment__sl__btns__rb');

  lbElement.addEventListener('click', function() {

    if (window.innerWidth < 376) {
        lbElement.style.borderWidth = '0';
        lbElement.style.padding = '9px 65px';
        lbElement.style.height = '35px'
        lbElement.style.backgroundColor = '#00050F';
        lbElement.style.borderTop = '2px solid #ca92ffa9';
        lbElement.style.borderLeft = '2px solid #ca92ffa9';
        lbElement.style.borderRight = '2px solid #ca92ffa9';
        lbElement.style.borderBottom = '2px solid #00050F';
        lbElement.style.marginBottom = '-3px';

        rbElement.style.height = '35px'
        rbElement.style.padding = '9px 95px';
        rbElement.style.borderTop = 'none';
        rbElement.style.borderLeft = 'none';
        rbElement.style.borderRight = 'none';
        rbElement.style.borderBottom = 'none';
        rbElement.style.marginBottom = '0px';
    } else {
        lbElement.style.padding = '30px 217px';
        lbElement.style.backgroundColor = '#00050F';
        lbElement.style.borderTop = '3px solid #ca92ffa9';
        lbElement.style.borderLeft = '3px solid #ca92ffa9';
        lbElement.style.borderRight = '3px solid #ca92ffa9';
        lbElement.style.borderBottom = '3px solid #00050F';
        lbElement.style.marginBottom = '-3px';

        rbElement.style.padding = '30px 314px';
        rbElement.style.borderTop = 'none';
        rbElement.style.borderLeft = 'none';
        rbElement.style.borderRight = 'none';
        rbElement.style.borderBottom = 'none';
        rbElement.style.marginBottom = '0px';
    }

      

      const imgItem = document.querySelector('.equipment__sl__dscr__img');
      if (imgItem) {
          imgItem.src = '/img/equipment/PC.svg';
      }
      const listItem2 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(2)');
      if (listItem2) {
          listItem2.textContent = 'Видеокарта: Geforce RTX 4090Ti';
      }
      const listItem3 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(3)');
      if (listItem3) {
          listItem3.textContent = 'Материнская плата: GIGABYTE AB-350';
      }
      const listItem4 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(4)');
      if (listItem4) {
          listItem4.textContent = 'Монитор: ACER 360fps';
      }
      const listItem5 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(5)');
      if (listItem5) {
          listItem5.textContent = 'Мышь: Logitech g-102';
      }
      const listItem6 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(6)');
      if (listItem6) {
          listItem6.textContent = 'Клавиатура: AJAZZ AK-350';
      }
  });

  rbElement.addEventListener('click', function() {
    if (window.innerWidth < 376) {
        lbElement.style.borderWidth = '0';
        lbElement.style.padding = '9px 65px';
        lbElement.style.height = '35px'
        rbElement.style.backgroundColor = '#00050F';
        rbElement.style.borderTop = '2px solid #ca92ffa9';
        rbElement.style.borderLeft = '2px solid #ca92ffa9';
        rbElement.style.borderRight = '2px solid #ca92ffa9';
        rbElement.style.borderBottom = '2px solid #00050F';
        rbElement.style.marginBottom = '-3px';

        rbElement.style.height = '35px'
        rbElement.style.padding = '9px 95px';
        lbElement.style.borderTop = 'none';
        lbElement.style.borderLeft = 'none';
        lbElement.style.borderRight = 'none';
        lbElement.style.borderBottom = 'none';
        lbElement.style.marginBottom = '0px';
    } else {
        lbElement.style.padding = '30px 217px';
        rbElement.style.backgroundColor = '#00050F';
        rbElement.style.borderTop = '3px solid #ca92ffa9';
        rbElement.style.borderLeft = '3px solid #ca92ffa9';
        rbElement.style.borderRight = '3px solid #ca92ffa9';
        rbElement.style.borderBottom = '3px solid #00050F';
        rbElement.style.marginBottom = '-3px';

        rbElement.style.padding = '30px 315px';
        lbElement.style.borderTop = 'none';
        lbElement.style.borderLeft = 'none';
        lbElement.style.borderRight = 'none';
        lbElement.style.borderBottom = 'none';
        lbElement.style.marginBottom = '0px';
    }

      const imgItem = document.querySelector('.equipment__sl__dscr__img');
      if (imgItem) {
          imgItem.src = '/img/equipment/PS5.svg';
      }
      const listItem2 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(2)');
      if (listItem2) {
          listItem2.textContent = 'Экран: 4K';
      }
      const listItem3 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(3)');
      if (listItem3) {
          listItem3.textContent = 'Кол-во дуалшоков: 4';
      }
      const listItem4 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(4)');
      if (listItem4) {
          listItem4.textContent = '';
      }
      const listItem5 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(5)');
      if (listItem5) {
          listItem5.textContent = '';
      }
      const listItem6 = document.querySelector('.equipment__sl__dscr__text__list__item:nth-child(6)');
      if (listItem6) {
          listItem6.textContent = '';
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
                    <li class="nav-menu__list__item"><a href="http://localhost/GameZone/profile.php" class="nav-menu__list__item__link"><img src="/img/avatar.svg" alt="" class="nav-menu__list__yem__link__avatar"></a></li>
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
                <div class="auth-container" id="auth-container">
                    <div class="auth-modal" id="auth-modal">
                        <div class="close-btn" id="auth-close-btn">&times;</div>
                        <h2>Авторизация</h2>
                        <input type="text" placeholder="Логин">
                        <input type="password" placeholder="Пароль">
                        <div class="auth-footer">
                            <label><input type="checkbox" style="margin-right:10px;"> Запомнить</label>
                            <button style="margin-left:50px;">Войти</button>
                        </div>
                        <p style="margin-left:80px; text-align:left;">Забыли пароль?<a href="#">Восстановить</a> <br> Нет аккаунта?<a href="#" id="switch-to-register">Зарегистрироваться</a></p>
                    </div>
                    <div class="register-modal" id="register-modal">
                    <div class="close-btn" id="register-close-btn">&times;</div>
                    <h2>Регистрация</h2>
                    <form id="register-form" method="POST">
                        <input type="text" name="username" placeholder="Логин" required>
                        <input type="email" name="email" placeholder="Почта*" required>
                        <input type="password" name="password" placeholder="Пароль*" required>
                        <input type="password" name="confirm_password" placeholder="Повторите пароль*" required>
                        <button type="submit">Зарегистрироваться</button>
                    </form>
                    <p>Есть аккаунт? <a href="#" id="switch-to-login">Авторизоваться</a></p>
                </div>
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
document.querySelector('#about').innerHTML = `
  
            <div class="container">
                <div class="about">
                    <h2 class="about__title">О нас</h2>
                    <div class="about__dscr">
                        <div class="about__dscr__ls">
                            <p class="about__dscr__ls__text">"GameZone" — место, где мечты геймеров становятся реальностью. Наш клуб создан для тех, кто ценит качественные игры, современные технологии и непревзойденный комфорт. Мы предлагаем уникальную атмосферу, где каждый посетитель найдет себе развлечение по душе, будь то киберспортсмен или казуальный игрок</p>
                            <a href="/index2.html" class="about__dscr__ls__btn">Подробнее</a>
                        </div>
                        <img src="/img/about/Rectangle117.svg" alt="" class="about__dscr__img">
                    </div>
                </div>
            </div>

`
document.querySelector('#newses').innerHTML = `
  
            <div class="container">
                <div class="news">
                    <h2 class="news__title">Последние новости</h2>
                    <div class="news__box">
                        <div class="news__box__ls" id="mainNews" style="background: url('/img/news/choosen.svg'); background-size: cover;background-repeat: no-repeat;background-position: center; ">
                            <p class="news__box__ls__title" id="mainTitle">Акция - Бесплатный день</p>
                            <p class="news__box__ls__dscr" id="mainDscr">Вторник - день, в который, случайному посетителю выпадает возможность играть бесплатно 10 часов!</p>
                        </div>
                        <div class="news__box__rs">
                            <div class="news__box__rs__partofnews">
                                <div class="news__box__rs__partofnews__news fnews" style="background: url('/img/news/launge.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Новая Launge</p>
                                </div>
                                <div class="news__box__rs__partofnews__news snews" style="background: url('/img/news/statistic.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Статистика</p>
                                </div>
                                <div class="news__box__rs__partofnews__news tnews" style="background: url('/img/news/morerooms.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Больше комнат</p>
                                </div>
                                <div class="news__box__rs__partofnews__news frnews" style="background: url('/img/news/open.svg');">
                                    <p class="news__box__rs__partofnews__news__title">Открытие!</p>
                                </div>
                            </div>
                            <a href="/index3.html" class="news__box__rs__btn">Перейти к новостям</a>
                        </div>
                    </div>
                </div>
            </div>

`
document.querySelector('#eq').innerHTML = `
  
            <div class="container">
                <div class="equipment">
                    <h2 class="equipment__title">Наше оборудование</h2>
                    <div class="equipment__sl">
                        <div class="equipment__sl__btns">
                            <button class="equipment__sl__btns__lb">ПК</button>
                            <button class="equipment__sl__btns__rb">PS5</button>
                        </div>
                        <div class="equipment__sl__dscr">
                            <img src="/img/equipment/PC.svg" alt="" class="equipment__sl__dscr__img">
                            <div class="equipment__sl__dscr__text">
                                <ul class="equipment__sl__dscr__text__list">
                                    <li class="equipment__sl__dscr__text__list__item">Характеристики:</li>
                                    <li class="equipment__sl__dscr__text__list__item">Видеокарта: Geforce RTX 4090Ti</li>
                                    <li class="equipment__sl__dscr__text__list__item">Материнская плата: GIGABYTE AB-350</li>
                                    <li class="equipment__sl__dscr__text__list__item">Монитор: ACER 360fps</li>
                                    <li class="equipment__sl__dscr__text__list__item">Мышь: Logitech g-102</li>
                                    <li class="equipment__sl__dscr__text__list__item">Клавиатура: AJAZZ AK-350</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

`
document.querySelector('#games').innerHTML = `
  
            <div class="container">
                <div class="games">
                    <h2 class="games__title">Топ игр</h2>
                    <h3 class="games__subtitle">ПК игры:</h3>
                    <div class="games__topgames">
                        <div class="games__topgames__game">
                            <img src="/img/games/cs2.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">Contre Strike 2</p>
                        </div>
                        <div class="games__topgames__game">
                            <img src="/img/games/over2.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">Overwatch 2</p>
                        </div>
                        <div class="games__topgames__game">
                            <img src="/img/games/colda4.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">Call of Duty BO4</p>
                        </div>
                        <div class="games__topgames__game">
                            <img src="/img/games/fortnite.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">Fortnite</p>
                        </div>
                    </div>
                    <a href="/index4.html" class="games__btn">Весь список</a>
                    <h3 class="games__subtitle">PS5 игры:</h3>
                    <div class="games__topgames">
                        <div class="games__topgames__game">
                            <img src="/img/games/mk.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">MK 11</p>
                        </div>
                        <div class="games__topgames__game">
                            <img src="/img/games/tek.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">Tekken 8</p>
                        </div>
                        <div class="games__topgames__game">
                            <img src="/img/games/gow.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">GOW Ragnarok</p>
                        </div>
                        <div class="games__topgames__game">
                            <img src="/img/games/sm.svg" alt="" class="games__topgames__game__img">
                            <p class="games__topgames__game__title">Spider-Man 2</p>
                        </div>
                    </div>
                    <a href="/index5.html" class="games__btn">Весь список</a>
                </div>
            </div>

`
document.querySelector('#tariffs').innerHTML = `
  
            <div class="container">
                <div class="tariffs">
                    <h2 class="tariffs__title">Наши тарифы</h2>
                    <div class="tariffs__ex">
                        <div class="tariffs__ex__attributes">
                            <p class="tariffs__ex__attributes__title-1">Тип</p>
                            <p class="tariffs__ex__attributes__title-2">Время</p>
                            <p class="tariffs__ex__attributes__title-3">Стоимость</p>
                            <p class="tariffs__ex__attributes__title-4">Бонусы</p>
                        </div>
                        <div class="tariffs__ex__tarif">
                            <div class="tariffs__ex__tarif__logo-title">
                                <img src="/img/tariffs/card.svg" alt="" class="tariffs__ex__tarif__logo-title__img">
                                <p class="tariffs__ex__tarif__logo-title__text">ПК - день</p>
                            </div>
                            <div class="tariffs__ex__tarif__types">
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Стандарт</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1 час</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">200р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Средний</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">5 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">850р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Максимум</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">10 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1500р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">Закуска</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tariffs__ex__tarif">
                            <div class="tariffs__ex__tarif__logo-title">
                                <img src="/img/tariffs/card.svg" alt="" class="tariffs__ex__tarif__logo-title__img">
                                <p class="tariffs__ex__tarif__logo-title__text">ПК - ночь</p>
                            </div>
                            <div class="tariffs__ex__tarif__types">
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Стандарт</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1 час</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">100р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Средний</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">5 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">450р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Максимум</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">10 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">900р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">Закуска</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tariffs__ex__tarif">
                            <div class="tariffs__ex__tarif__logo-title">
                                <img src="/img/tariffs/card.svg" alt="" class="tariffs__ex__tarif__logo-title__img">
                                <p class="tariffs__ex__tarif__logo-title__text">PS - день</p>
                            </div>
                            <div class="tariffs__ex__tarif__types">
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Стандарт</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1 час</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">350р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Средний</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">5 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1600р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Максимум</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">10 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">2650р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">Закуска</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tariffs__ex__tarif">
                            <div class="tariffs__ex__tarif__logo-title">
                                <img src="/img/tariffs/card.svg" alt="" class="tariffs__ex__tarif__logo-title__img">
                                <p class="tariffs__ex__tarif__logo-title__text">PS - ночь</p>
                            </div>
                            <div class="tariffs__ex__tarif__types">
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Стандарт</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1 час</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">300р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Средний</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">5 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1400р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">-</li>
                                    </ul>
                                </div>
                                <div class="tariffs__ex__tarif__types__type">
                                    <ul class="tariffs__ex__tarif__types__type__list">
                                        <li class="tariffs__ex__tarif__types__type__list__item">Максимум</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">10 часов</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">1500р</li>
                                        <li class="tariffs__ex__tarif__types__type__list__item">Закуска</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="tariffs__btn">Забронировать</a>
                </div>
            </div>

`
document.querySelector('#reservation').innerHTML = `
  
            <div class="container">
                <div class="reserve">
                    <h2 class="reserve__title">Бронь</h2>
                    <p class="reserve__dscr">Оставьте свои данные и желаемое время, и день брони. 
                        <br>Мы перезвоним Вам!</p>
                    <div class="reserve__inputs">
                        <div class="reserve__inputs__ls">
                            <textarea class="reserve__inputs__ls__name" placeholder="Имя*" name="Text1" cols="35" rows="1"></textarea>
                            <textarea class="reserve__inputs__ls__number" placeholder="Телефон*" name="Text2" cols="35" rows="1"></textarea>
                        </div>
                        <textarea class="reserve__inputs__dscr" placeholder="Желаемое время и дата брони" name="Text2" cols="35" rows="5"></textarea>
                    </div>
                    <button class="reserve__btn">Отправить</button>
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
                    <img src="/img/copyrighticn.svg" alt="" class="footer__bs__copyright">
                    <p class="footer__bs__copy">Компьютерный клуб “gamezone.ru”</p>
                    <img src="/img/footer/vk.svg" alt="" class="footer__bs__vk">
                    <img src="img/footer/tg.svg" alt="" class="footer__bs__tg">
                </div>
            </div>
       

`

