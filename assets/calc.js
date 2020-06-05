$(function(){
    $('form').submit(function(e){
        e.preventDefault()
    });

    $('#updatedb').submit(function(e){
        e.preventDefault();

        var post_url = $(this).attr("action"); //get form action url

        $('tbody tr').each(function(index){

            //console.log($('.Basarwert')[index].childNodes[1].value);
            var Basarwert = $('.Basarwert')[index].childNodes[1].value;

            var id = $('.id')[index].innerHTML;
            id = id.replace(/ /g,'');
            id = id.replace(/\r?\n|\r/g,'');

            console.log(id, Basarwert);

            var form_data = {
                'id' : id,
                'Basarwert' : Basarwert
            }; //Encode form elements for submission
    
    
            $.post( post_url, form_data, function( response ) {
                console.log( response );
                location.reload();
                });

        });
    
    });

    $('#create').submit(function(e){
        e.preventDefault();

        var post_url = $(this).attr("action");
        var form_data = $(this).serialize();
        $.post( post_url, form_data, function( response ) {
            console.log( response );
            location.reload();
            });

    });

    $('#Update').click(function(){
        var Talerpreis = $('#Talerpreis').val();
        var Basarwert = $('.Basarwert');
        var Taler = $('.Taler');
        for(var i = 0; i < Taler.length; i++){
            var Talerwert = Talerpreis * Taler[i].innerHTML * 1000;
            document.getElementsByClassName('Talerwert')[i].innerHTML = Talerwert;

            var Diff = Basarwert[i].childNodes[1].value - Talerwert;
            document.getElementsByClassName('Diff')[i].innerHTML = Diff;

           if(Diff <= 0){
               document.getElementsByClassName('Kaufen')[i].style.backgroundColor = "red";
           }else{
            document.getElementsByClassName('Kaufen')[i].style.backgroundColor = "green";

           }
        };


    });

    $(document).ready(function() {
        $('#maintable').DataTable();
    } );
});