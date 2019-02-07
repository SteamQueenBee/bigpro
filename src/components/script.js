$('#search-input').on('clink', function () {
$.ajax({
    url : 'http://omdbapi.com' ,
    type : 'get',
    dataType: 'json',
    data : {
        'apikey' : 'e8883891',
        's': $('#search-input').val() 
    },
    success:function(result) {
        if (result.Response == "True" ) {

        } else {
            $('#movie-list').html('<h1> movie not found! </h1>')
        }

    }

})

});