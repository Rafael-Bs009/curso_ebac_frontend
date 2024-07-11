$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        errorClass: "custom-error-popup",
        errorElement: "div",
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            check: {
                required: true
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            check: 'Este campo é obrigatório',
            telefone: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório'
        },

        submitHandler: function(form) {
            $('#abaSucesso').removeClass('d-none');
            form.reset();
        }
    });
    
});