$(document).ready(function() {

 /*  for(var i = 1; i < 500; i++) {
       var pokePic = $("<img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
        $('div.pokemon').append(pokePic);
   }*/

    $.ajax({
            url: 'http://pokeapi.co/api/v2/pokemon/',
            type: 'GET',
            dataType: 'json',
            data: {limit: '19'},
        })
        .done(function(respuesta){
            for(var i = 1; i < respuesta.results.length; i++) {
                var pokePic = $("<div class='col-sm-4 col-md-4-col-lg-4 poke-box'><img src=http://pokeapi.co/media/img/" + i + ".png id=" + i + "><p>" + respuesta.results[i-1].name + "</p></div>");
                $('.pokemon').append(pokePic);
            }
            console.log(respuesta)
            console.log("nombre");
            
        })
        .fail(function( error) {
            console.log(error);
            console.log("error");
        })
        .always(function() {
            console.log("complete");
    });
    $.ajax({
        url: 'http://pokeapi.co/api/v2/pokemon/',
        type: 'GET',
        dataType: 'json',
        data: {limit: '19'},
    })
    .done(function(res) {
        var modal = $(".box-modal");
        modal.hide();
        $(".return").hide()
        $(".poke-box").click(function(){
            modal.html($(this));
            modal.show(100);
            $(".return").show();
            $(".return").click(function(){
            modal.hide();
            modal.empty();
            $(this).hide()
            })
        })
        console.log("success");
    })
    
});
/*
function pokeSubmit(){
    
    var pokeURL = "http://pokeapi.co/api/v1/pokemon/" ;
    $.getJSON(pokeURL, function(data){
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;
        console.log("Number: ", pokeID);
        console.log("Name: ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
    });
}*/





