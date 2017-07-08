var current = [];
var prev    = [];
var symbol  = '';


$(document).ready(function(){
    $('#ac').click(function(){
        current = [];
        prev    = [];
        symbol  = '';
        $('#in').text('');
        $('#his').text('');
    });
    
    $('#one').click(function(){
        current.push(1);
        $('#in').append(1);
    });
    
    $('#two').click(function(){
        current.push(2);
        $('#in').append(2);
    });
    
    $('#three').click(function(){
        current.push(3);
        $('#in').append(3);
    });
    
    $('#four').click(function(){
        current.push(4);
        $('#in').append(4);
    });
    
    $('#five').click(function(){
        current.push(5);
        $('#in').append(5);
    });
    
    $('#six').click(function(){
        current.push(6);
        $('#in').append(6);
    });
    
    $('#seven').click(function(){
        current.push(7);
        $('#in').append(7);
    });
    
    $('#eight').click(function(){
        current.push(8);
        $('#in').append(8);
    });
    
    $('#nine').click(function(){
        current.push(9);
        $('#in').append(9);
    });
    
    $('#zero').click(function(){
        if (current.length >= 1) {
            current.push(0);
            $('#in').append(0);
        }
    });
});