<?php
session_start();

// Подключение к базе данных
$db = mysqli_connect('localhost', 'root', '', 'ComputerClub');
if ($db == false) {
    echo 'Ошибка соединения!';
    exit;
}

// Проверяем, что $_SESSION['username'] установлено и не пустое
if (isset($_SESSION['username']) && !empty($_SESSION['username'])) {
    // Используем имя пользователя
    $username = $_SESSION['username'];

    // SQL-запрос для получения данных о заказах пользователя
    $query = "SELECT r.*, t.type AS tariff_type, t.duration AS tariff_duration, r.cost AS rental_cost, 
                     DAY(r.start_time) AS visit_day, MONTH(r.start_time) AS visit_month
              FROM Rentals r
              INNER JOIN Tariffs t ON r.tariff_id = t.tariff_id
              INNER JOIN Users u ON r.user_id = u.user_id
              WHERE u.username = '$username'";

    // Выполнение запроса
    $result = mysqli_query($db, $query);

    // Проверка на ошибку выполнения запроса
    if (!$result) {
        echo 'Ошибка выполнения запроса: ' . mysqli_error($db);
        exit;
    }

    // Получение данных о роли пользователя
    $role = "";
    $roleQuery = "SELECT role FROM Users WHERE username = '$username'";
    $roleResult = mysqli_query($db, $roleQuery);

    if ($roleResult) {
        $roleData = mysqli_fetch_assoc($roleResult);
        $role = $roleData['role'];
    }

    mysqli_close($db); // Закрываем соединение с базой данных после использования
} else {
    $username = "Гость"; // Или другое значение по умолчанию
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles5/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
$(document).ready(function() {
    // Функция для получения текущего названия таблицы (пример)
    function getCurrentTableName() {
        return $(".admin-panel__panel__attributes__btn.active").text().trim();
    }

    // Обработчик кнопок Добавить, Изменить, Удалить
    $(".admin-panel__panel__btns__btn").click(function() {
        let action = $(this).text().trim();
        let tableName = getCurrentTableName();

        let values = [];
        $(".admin-panel__inputs__atr-inp:visible").each(function() {
            values.push($(this).val().trim());
        });

        let postData = {
            action: action,
            table: tableName
        };

        // Добавление атрибутов в зависимости от таблицы и действия
        switch (tableName) {
            case "Games":
                postData.game_id = values[0];
                postData.name = values[1];
                postData.genre = values[2];
                break;
            case "ComputerStations":
                postData.station_id = values[0];
                postData.equipment_id = values[1];
                postData.class = values[2];
                postData.status = values[3];
                break;
            case "Equipment":
                postData.equipment_id = values[0];
                postData.type = values[1];
                postData.characteristics = values[2];
                break;
            case "Rentals":
                postData.rental_id = values[0];
                postData.user_id = values[1];
                postData.station_id = values[2];
                postData.game_id = values[3];
                postData.start_time = values[4];
                postData.end_time = values[5];
                postData.tariff_id = values[6];
                postData.cost = values[7];
                break;
            case "Tariffs":
                postData.tariff_id = values[0];
                postData.name = values[1];
                postData.type = values[2];
                postData.duration = values[3];
                postData.price = values[4];
                break;
            case "Users":
                postData.user_id = values[0];
                postData.username = values[1];
                postData.email = values[2];
                postData.password = values[3];
                postData.avatar = values[4];
                postData.role = values[5];
                postData.registration_date = values[6];
                break;
            default:
                console.log("Неизвестная таблица");
                return;
        }

        // Определение URL в зависимости от действия
        let url;
        switch (action) {
            case 'Добавить':
                url = 'add_' + tableName.toLowerCase() + '.php';
                break;
            case 'Изменить':
                url = 'update_' + tableName.toLowerCase() + '.php';
                break;
            case 'Удалить':
                url = 'delete_' + tableName.toLowerCase() + '.php';
                break;
            default:
                console.log("Неизвестное действие");
                return;
        }

        // Отправка POST запроса на сервер
        $.post(url, postData, function(response) {
            alert(response);
        });
    });

    // Функция для переключения таблиц
    $(".admin-panel__panel__attributes__btn").click(function(){
        $(".admin-panel__panel__attributes__btn").removeClass("active");
        $(this).addClass("active");

        var buttonText = $(this).text().trim();
        var validTables = ["Users", "Equipment", "ComputerStations", "Tariffs", "Rentals", "Games"];

        if (validTables.includes(buttonText)) {
            $.ajax({
                url: 'load_table.php',
                type: 'POST',
                data: { table: buttonText.replace(/\s+/g, '') },
                success: function(data) {
                    var response = JSON.parse(data);
                    $('.admin-panel__panel__gridview').html(response.table);
                    var attributes = response.attributes;
                    $(".admin-panel__inputs__atr-name").each(function(index){
                        $(this).text(attributes[index] || '');
                        if (attributes[index]) {
                            $(this).show(); // Показываем используемые названия атрибутов
                            $(this).next(".admin-panel__inputs__atr-inp").show(); // Показываем соответствующий инпут
                        } else {
                            $(this).hide(); // Скрываем неиспользуемые названия атрибутов
                            $(this).next(".admin-panel__inputs__atr-inp").hide(); // Скрываем соответствующий инпут
                        }
                    });
                },
                error: function(xhr, status, error) {
                    console.error(xhr);
                }
            });
        }
    });

    $(".admin-panel__viewses__list__item").click(function() {
        $(".admin-panel__viewses__list__item").removeClass("active");
        $(this).addClass("active");

        var viewNumber = $(this).text().trim().slice(1); // Получаем номер представления (например, "2" из "#2")

        $.ajax({
            url: 'load_view.php',
            type: 'POST',
            data: { view: 'view' + viewNumber },
            success: function(data) {
                try {
                    var response = JSON.parse(data);
                    $('.admin-panel__panel__gridview').html(response.table);
                    var attributes = response.attributes;
                    $(".admin-panel__inputs__atr-name").each(function(index) {
                        $(this).text(attributes[index] || '');
                        if (attributes[index]) {
                            $(this).show(); // Показываем используемые названия атрибутов
                            $(this).next(".admin-panel__inputs__atr-inp").show(); // Показываем соответствующий инпут
                        } else {
                            $(this).hide(); // Скрываем неиспользуемые названия атрибутов
                            $(this).next(".admin-panel__inputs__atr-inp").hide(); // Скрываем соответствующий инпут
                        }
                    });
                } catch (e) {
                    console.error("Error parsing JSON: " + e);
                }
            },
            error: function(xhr, status, error) {
                console.error("Error loading view:", error);
            }
        });
    });

    // Выбор строки и заполнение инпутов
    $(".admin-panel__panel__gridview").on("click", "tr", function(){
        $("tr").removeClass("selected");
        $(this).addClass("selected");
        var cells = $(this).find("td");
        $(".admin-panel__inputs__atr-inp:visible").each(function(index){
            $(this).val($(cells[index]).text());
        });
    });
});
</script>



    <link rel="stylesheet" href="./styles/styles5/style.css">
    <title>Profile</title>
</head>
<body>
    
    <header id="header"><div class="container">
            <div class="nav-menu">
                <ul class="nav-menu__list">
                    <li class="nav-menu__list__item"><a href="/GameZone/index.php" class="nav-menu__list__item__link"><img src="img/logo.svg" alt="" class="nav-menu__list__yem__link__logo"></a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#tariffs" class="nav-menu__list__item__link">Тарифы</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#eq" class="nav-menu__list__item__link">Оборудование</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#games" class="nav-menu__list__item__link">Игры</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#about" class="nav-menu__list__item__link">О нас</a></li>
                    <li class="nav-menu__list__item"><a href="/index.html#newses" class="nav-menu__list__item__link">Новости</a></li>
                    <li class="nav-menu__list__item"><a href="/profile.html" class="nav-menu__list__item__link"><?php echo htmlspecialchars($username); ?></a></li>
                    <li class="nav-menu__list__item"><a href="/profile.html" class="nav-menu__list__item__link"><img src="img/avatar.svg" alt="" class="nav-menu__list__yem__link__avatar"></a></li>
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
        </div></header>
    <main>
        <section class="index-sec" id="index-sec" style="background: url('img/bckg.svg');">
            <div class="container">
                <h1 class="index__title" style="background: url('img/profile/title.svg');">ПРОФИЛЬ</h1>
            </div></section>
        <section class="profile-sec" id="profile">
  
            
  <div class="container">
      <div class="profile">
          <img src="" alt="" class="profile__avatar">
          <div class="profile__dscr">
              <div class="profile__dscr__line">
                  <p class="profile__dscr__line__atr">Логин: </p>
                  <p class="profile__dscr__line__atr-name"><?php echo htmlspecialchars($username); ?></p>
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
    <p class="profile__dscr__history__name">История Посещений</p>
    <div class="profile__dscr__history__exmpls">
        <?php
        if (isset($result) && mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                // Получаем данные о заказе
                $visit_day = sprintf('%02d', $row['visit_day']); // Форматируем день с ведущим нулем
                $visit_month = sprintf('%02d', $row['visit_month']); // Форматируем месяц с ведущим нулем
                $tariffType = $row['tariff_type'];
                $tariffDuration = $row['tariff_duration'];
                $rentalCost = $row['rental_cost'];
                ?>
                <div class="profile__dscr__history__exmpls__cur">
                    <div class="profile__dscr__history__exmpls__cur__date">
                        <p class="profile__dscr__history__exmpls__cur__date__day"><?php echo $visit_day; ?></p>
                        <p class="profile__dscr__history__exmpls__cur__date__month"><?php echo $visit_month; ?></p>
                    </div>
                    <div class="profile__dscr__history__exmpls__cur__inf">
                        <div class="profile__dscr__history__exmpls__cur__inf__geo">
                            <img src="img/footer/geo.svg" alt="" class="profile__dscr__history__exmpls__cur__inf__geo__icn">
                            <p class="profile__dscr__history__exmpls__cur__inf__geo__name">Фомичевой 7к1</p>
                        </div>
                        <p class="profile__dscr__history__exmpls__cur__inf__rentals">
                            Тариф: <span class="profile__dscr__history__exmpls__cur__inf__rentals__tariff"><?php echo htmlspecialchars($tariffType); ?></span> 
                            Тип: <span class="profile__dscr__history__exmpls__cur__inf__rentals__type"><?php echo htmlspecialchars($tariffDuration); ?></span> 
                            Цена: <span class="profile__dscr__history__exmpls__cur__inf__rentals__cost"><?php echo htmlspecialchars($rentalCost); ?></span>
                        </p>
                    </div>
                </div>
                <?php
            }
        } else {
            echo '<p>Нет данных о заказах пользователя.</p>';
        }
        ?>
    </div>
    <div class="profile__dscr__history__bottom"></div>
</div>

          </div>
      </div>
      <?php
    // Проверяем роль пользователя и добавляем стиль, если роль не "admin"
    if ($role !== "admin") {
        echo '<style>.admin-panel { display: none; }</style>';
    }
    ?>
      <div class="admin-panel">
          <div class="admin-panel__inputs">
              <p class="admin-panel__inputs__atr-name" style="display:none;">First</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Second</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Third</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Fourth</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Five</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Six</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Seven</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
              <p class="admin-panel__inputs__atr-name"style="display:none;">Eight</p>
              <input type="text" class="admin-panel__inputs__atr-inp"style="display:none;">
          </div>
          <div class="admin-panel__panel">
              <div class="admin-panel__panel__attributes">
                  <button class="admin-panel__panel__attributes__btn">Users</button>
                  <button class="admin-panel__panel__attributes__btn">Equipment</button>
                  <button class="admin-panel__panel__attributes__btn">ComputerStations</button>
                  <button class="admin-panel__panel__attributes__btn">Tariffs</button>
                  <button class="admin-panel__panel__attributes__btn">Rentals</button>
                  <button class="admin-panel__panel__attributes__btn">Games</button>
              </div>
              <div class="admin-panel__panel__gridview">
                  <?php include '/OSPanel/domains/localhost/GameZone/script.php'; ?>
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

</section>
    </main>
    <footer id="footer"><div class="footer">
            <div class="footer__ts">
                <img src="img/footer/geo.svg" alt="" class="footer__ts__geo-icn">
                <p class="footer__ts__geo">Ул. Фомичевой д7 (круглосуточно)</p>
                <p class="footer__ts__number">+7 800 555-35-35</p>
            </div>
            <div class="footer__bs">
                <img src="" alt="" class="footer__bs__copyright">
                <p class="footer__bs__copy">Компьютерный клуб “gamezone.ru”</p>
                <img src="img/footer/vk.svg" alt="" class="footer__bs__vk">
                <img src="img/footer/tg.svg" alt="" class="footer__bs__tg">
            </div>
        </div></footer>
</body>
</html>