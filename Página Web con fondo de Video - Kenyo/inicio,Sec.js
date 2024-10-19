$(function () {
    $(".btn").click(function () {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
    });

    $(".btn-signup").click(function () {
        $(".nav").toggleClass("nav-up");
        $(".form-signup-left").toggleClass("form-signup-down");
        $(".success").toggleClass("success-left");
        $(".frame").toggleClass("frame-short");
    });

    $(".btn-signin").click(function () {
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        $(".forgot").toggleClass("forgot-fade");
    });
});

// Función para registrar usuario
function registrarUsuario() {
    // Obtener los valores de los campos del formulario
    var nombreCompleto = document.querySelector('input[name="fullname"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmarPassword = document.querySelector('input[name="confirmpassword"]').value;

    // Validar que todos los campos estén llenos
    if (!nombreCompleto || !email || !password || !confirmarPassword) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmarPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Aquí podrías enviar los datos al servidor utilizando fetch o XMLHttpRequest
    alert("Registro exitoso para: " + nombreCompleto);
    $(".success").show(); // Muestra el mensaje de éxito
}
