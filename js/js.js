jQuery(document).ready(function($) {

	// Datepicker
	$('.date').datepicker({
	    language: "ru",
	    multidate: true,
	    clearBtn: true,
	    multidateSeparator: " – "
	});

	// jQuery placeholder
	$("input, textarea").placeholder();

	// Checkbox
	$("input[type=checkbox]").css({"opacity": 0}).after("<span class='chb'></span>");

	// Radio
	$("input[type=radio]").css({"opacity": 0}).after("<span class='rad'></span>");

	$(".checkbox label,.radio label,.checkbox-inline,.radio-inline").css({"padding-left":0});

	$('input[type=file]').bootstrapFileInput();
	$('.file-inputs').bootstrapFileInput();

	

});