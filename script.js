<script type="text/javascript">
  $(function () {
    $('#telephone').focusin(function() {
        $(this).mask('(99) 99999-999?9');
    }).focusout(function() {
        if ($(this).val().replace(/\D/g, '').length == 10)
            $(this).mask('(99) 9999-9999');
    });
});
</script>