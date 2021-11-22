Feature: Booking ticket
    Scenario: Should book 1 ticket
        Given Пользователь находится на странице 'http://qamid.tmweb.ru/client/index.php'
        When Пользователь бронирует билет в зале на 6 ряду место 2
        Then Пользователь получил qr

    Scenario: Should book 2 ticket
        Given Пользователь находится на странице 'http://qamid.tmweb.ru/client/index.php'
        When Пользователь бронирует билеты в зале на 7 ряду места 1 и 2
        Then Пользователь получил qr

    Scenario: Should not book same ticket again
        Given Пользователь находится на странице 'http://qamid.tmweb.ru/client/index.php'
        When Пользователь бронирует билет в зале на 7 ряду место 6, и затем бронирует его повторно.
        Then Пользователь не может забронировать уже забронированное место