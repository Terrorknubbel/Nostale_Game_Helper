$(function(){
    $('form').submit(function(e){
        e.preventDefault()
    });

    $('#Update').click(function(){
        var Talerpreis = $('#Talerpreis').val();
        var Basarwert = $('.Basarwert');
        var Taler = $('.Taler');
        for(var i = 0; i < Taler.length; i++){
            var Talerwert = Talerpreis * Taler[i].innerHTML * 1000;
            document.getElementsByClassName('Talerwert')[i].innerHTML = Talerwert;

            var Diff = Basarwert[i].innerHTML - Talerwert;
            document.getElementsByClassName('Diff')[i].innerHTML = Diff;

           if(Diff <= 0){
               document.getElementsByClassName('Kaufen')[i].style.backgroundColor = "red";
           }else{
            document.getElementsByClassName('Kaufen')[i].style.backgroundColor = "green";

           }
        };


    });
});