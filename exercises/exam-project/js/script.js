$(document).ready(function(){
    $('.burger').click(function(){
        $('.burger').toggleClass('open__menu'); // Додавання класу для руху стрілок меню-бургер
        $('.main_nav').slideToggle("slow"); // Розкриваюче плавне меню
        $('body').toggleClass("removeoverf"); // Додаємо клас, який блокує прокрутку на body
    });
});