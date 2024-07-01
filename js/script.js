$(document).ready(function () {
    $('.header_container-menuBtn').click(function () {

        // When the menu button is first clicked...
        $('.mobile_menu-container').toggleClass('show');
        $('.overlay').toggle();

        $('.header_container-menuBtn').hide()
        $('.header_container-menuClose').show()
    })



    // When the closing menu button is clicked...
    $('.header_container-menuClose').click(function () {
        $('.header_container-menuBtn').show()
        $('.header_container-menuClose').hide()

        $('.mobile_menu-container').removeClass('show');
        $('.overlay').toggle(); 
    })
});

