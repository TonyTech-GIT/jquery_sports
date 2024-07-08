$(document).ready(function () {
    let offset = {offset: "80%"}

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


    $('.header_container').waypoint(function () {
        $('.header_container').addClass("animate__animated animate__fadeInLeft")
    },
    )

    $('.about_container').waypoint(function () {
        $('.about_container').addClass("animate__animated animate__lightSpeedInRight")
    },
    offset)



    $('.cardOne').waypoint(function () {
        $('.cardOne').addClass("animate__animated animate__zoomIn")
    },
    offset)

    $('.cardTwo').waypoint(function () {
        $('.cardTwo').addClass("animate__animated animate__zoomIn")
    },
    offset)

    $('.cardThree').waypoint(function () {
        $('.cardThree').addClass("animate__animated animate__zoomIn")
    },
    offset)

    $(".contact_container").waypoint(function () {
        $(".contact_container").addClass("animate__animated animate__slideInUp")
    },
    offset)
});

