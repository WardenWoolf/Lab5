import './styles/styles5/style.css'
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
    $('.admin-panel__panel__attributes__btn').click(function() {
        var tableName = $(this).data('table');

        $.ajax({
            url: '../php/fetch_table.php',
            type: 'GET',
            data: { table: tableName },
            success: function(data) {
                $('.admin-panel__panel__gridview').html(data);
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error: ' + status + error);
            }
        });
    });

    // Обработка нажатий на элементы списка представлений
    $('.admin-panel__viewses__list__item').click(function() {
        var viewName = $(this).data('view');

        $.ajax({
            url: 'fetch_view.php',
            type: 'GET',
            data: { view: viewName },
            success: function(data) {
                $('.admin-panel__panel__gridview').html(data);
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error: ' + status + error);
            }
        });
    });
});



document.querySelector('#header').innerHTML = `
  
        <div class="container">
            <div class="nav-menu">
                <ul class="nav-menu__list">
                    <li class="nav-menu__list__item"><a href="/index.html" class="nav-menu__list__item__link"><img src="/img/logo.svg" alt="" class="nav-menu__list__yem__link__logo"></a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#tariffs" class="nav-menu__list__item__link">Тарифы</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#eq" class="nav-menu__list__item__link">Оборудование</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#games" class="nav-menu__list__item__link">Игры</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#about" class="nav-menu__list__item__link">О нас</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#newses" class="nav-menu__list__item__link">Новости</a></li>
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
                <h1 class="index__title">ПРОФИЛЬ</h1>
            </div>

`
document.querySelector('#profile').innerHTML = `
  
            
            <div class="container">
                <div class="profile">
                    <img src="" alt="" class="profile__avatar">
                    <div class="profile__dscr">
                        <div class="profile__dscr__line">
                            <p class="profile__dscr__line__atr">Логин:</p>
                            <p class="profile__dscr__line__atr-name">Абобус</p>
                            <button class="profile__dscr__line__atr-change">изменить</button>
                        </div>
                        <div class="profile__dscr__line">
                            <p class="profile__dscr__line__atr">Почта:</p>
                            <p class="profile__dscr__line__atr-name">i.........ru</p>
                            <button class="profile__dscr__line__atr-change">изменить</button>
                        </div>
                        <div class="profile__dscr__line">
                            <p class="profile__dscr__line__atr">Пароль:</p>
                            <p class="profile__dscr__line__atr-name">******</p>
                            <button class="profile__dscr__line__atr-change">изменить</button>
                        </div>
                        <div class="profile__dscr__history">
                            <p class="profile__dscr__history__name">История Поссещений</p>
                            <div class="profile__dscr__history__exmpls">
                                <div class="profile__dscr__history__exmpls__cur">
    
                                </div>
                            </div>
                            <div class="profile__dscr__history__bottom"></div>
                        </div>
                    </div>
                </div>
                <div class="admin-panel">
                    <div class="admin-panel__inputs">
                        <p class="admin-panel__inputs__atr-name">First</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                        <p class="admin-panel__inputs__atr-name">Second</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                        <p class="admin-panel__inputs__atr-name">Third</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                        <p class="admin-panel__inputs__atr-name">Fourth</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                        <p class="admin-panel__inputs__atr-name">Five</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                        <p class="admin-panel__inputs__atr-name">Six</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                        <p class="admin-panel__inputs__atr-name">Seven</p>
                        <input type="text" class="admin-panel__inputs__atr-inp">
                    </div>
                    <div class="admin-panel__panel">
                        <div class="admin-panel__panel__attributes">
                            <button class="admin-panel__panel__attributes__btn">Users</button>
                            <button class="admin-panel__panel__attributes__btn">Equipment</button>
                            <button class="admin-panel__panel__attributes__btn">Comp Stat</button>
                            <button class="admin-panel__panel__attributes__btn">Tarifs</button>
                            <button class="admin-panel__panel__attributes__btn">Rentals</button>
                            <button class="admin-panel__panel__attributes__btn">Games</button>
                        </div>
                        <div class="admin-panel__panel__gridview">
                            <?php include '/script.php'; ?>
                        </div>
                        <div class="admin-panel__panel__btns">
                            <button class="admin-panel__panel__btns__btn" style="margin-left: 90px">Добавить</button>
                            <button class="admin-panel__panel__btns__btn">Изменить</button>
                            <button class="admin-panel__panel__btns__btn">Удалить</button>
                        </div>
                    </div>
                    <div class="admin-panel__viewses">
                        <ul class="admin-panel__viewses__list">
                            <li class="admin-panel__viewses__list__item">#1</li>
                            <li class="admin-panel__viewses__list__item">#2</li>
                            <li class="admin-panel__viewses__list__item">#3</li>
                            <li class="admin-panel__viewses__list__item">#4</li>
                            <li class="admin-panel__viewses__list__item">#5</li>
                            <li class="admin-panel__viewses__list__item">#6</li>
                            <li class="admin-panel__viewses__list__item">#7</li>
                            <li class="admin-panel__viewses__list__item">#8</li>
                            <li class="admin-panel__viewses__list__item">#9</li>
                            <li class="admin-panel__viewses__list__item">#10</li>
                        </ul>
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