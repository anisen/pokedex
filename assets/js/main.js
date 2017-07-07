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
			var poke = $("<a class='waves-effect waves-light btn' href='#modal1'><div class = 'col l3 m3 s3 xs1'><img class = 'pokepoke' src=http://pokeapi.co/media/img/" + i + ".png id=" + i + "/></div></a>")
			$('div.pokemon').append(poke);
		}
		$('#modal1').modal('open');
		$('#modal1').modal('close');
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	})
});
