$(document).ready(function() {
    $("#slider").slider({
        range: true,
        min: 0,
        max: 15000,
        step: 1,
        values: [0, 10000],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.slider-value[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });
    $("input.slider-value").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });

});