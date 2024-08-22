
$(document).ready(function () {

    $('#add').on('click', function () {
        $('.form-container').show();
    });

    $(document).on('click', '.cancel-btn', function () {
        $('.form-container').hide();
    });
})

