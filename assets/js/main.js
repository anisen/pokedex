$(document).ready(function() {
	$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		dataType: 'JSON',
		data: {"limit": '811'},
	})
	.done(function(res) {
		console.log("success");
		console.log(res);
		for (var i = 1; i < 719; i++) {
			var pokePic = $("<img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
			$('div.pokemon').append(pokePic);
			for (var x=1 ;x<i.length; x++) {
				
			}
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	})
});
