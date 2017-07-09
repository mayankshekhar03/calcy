var current   = [];
var prev      = [];
var symbol    = '';
var ans       = 0;
var pointused = false;

function calculate(op1, op, op2) {
    op1 = Number(op1);
    op2 = Number(op2);
    switch(op){
        case '+':
            ans = op1 + op2;
            prev = String(ans).split('');
            return ans;
            break;
        case 'x':
            ans = op1 * op2;
            prev = String(ans).split('');
            return ans;
            break;
        case '-':
            ans = op1 - op2;
            prev = String(ans).split('');
            return ans;
            break;
        case '/':
            ans = op1 / op2;
            prev = String(ans).split('');
            return ans;
            break;
    }
}


$(document).ready(function(){
    $('#ac').click(function(){
        current = [];
        prev    = [];
        symbol  = '';
        ans = 0;
        pointused = false;
        $('#in').text('');
        $('#his').text('');
    });
    
    $('#ce').click(function(){
        pointused = false;
        if (symbol.split('').length > 0 && prev.length > 0 && current.length === 0){
            symbol = '';
        }
        current = [];
        $('#in').text('');
        $('#his').text(prev.join('') + ' ' + symbol + ' ');
    });
    
    $('#equal').click(function(){
        if (prev.length > 0 && current.length > 0 && symbol.length > 0) {
            var a = calculate(prev.join(''), symbol, current.join(''));
            /* Calculate ans and put prev = ans and symbol = '' and current = [] */
            $('#in').text(ans);
            symbol = '';
            current = [];
            pointused = false;
            answer = 0;
        }
    });
    
    $('#divide').click(function(){
        if (symbol.split('').length === 0){
            if(current.length > 0){
                prev = current;
                current = [];
            }
            if(prev.length > 0 && current.length === 0) {
                symbol = '/';
                pointused = false;
                $('#in').html('/');
                $('#his').append(' / ');
            }
        }else if (symbol.split('').length > 0 && current.length > 0){
            var a = calculate(prev.join(''), symbol, current.join(''));
            current = [];
            $('#in').html('/');
            $('#his').append(' / ');
            symbol = '/';
        }
    });
    
    $('#multi').click(function(){
        if (symbol.split('').length === 0){
            if(current.length > 0){
                prev = current;
                current = [];
            }
            if(prev.length > 0 && current.length === 0) {
                symbol = 'x';
                pointused = false;
                $('#in').html('x');
                $('#his').append(' x ');
            }
        }else if (symbol.split('').length > 0 && current.length > 0){
            var a = calculate(prev.join(''), symbol, current.join(''));
            current = [];
            $('#in').html('x');
            $('#his').append(' x ');
            symbol = 'x';
        }
    });
    
    $('#minus').click(function(){
        if (symbol.split('').length === 0){
            if(current.length > 0){
                prev = current;
                current = [];
            }
            if(prev.length > 0 && current.length === 0) {
                symbol = '-';
                pointused = false;
                $('#in').html('-');
                $('#his').append(' - ');
            }
        }else if (symbol.split('').length > 0 && current.length > 0){
            var a = calculate(prev.join(''), symbol, current.join(''));
            current = [];
            $('#in').html('-');
            $('#his').append(' - ');
            symbol = '-';
        }
    });
    
    $('#plus').click(function(){
        if (symbol.split('').length === 0){
            if(current.length > 0){
                prev = current;
                current = [];
            }
            if(prev.length > 0 && current.length === 0) {
                symbol = '+';
                pointused = false;
                $('#in').html('+');
                $('#his').append(' + ');
            }
        }else if (symbol.split('').length > 0 && current.length > 0){
            var a = calculate(prev.join(''), symbol, current.join(''));
            current = [];
            $('#in').html('+');
            $('#his').append(' + ');
            symbol = '+';
        }
    });
    
    $('#one').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(1);
                $('#in').append(1);
                $('#his').append(1);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#two').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(2);
                $('#in').append(2);
                $('#his').append(2);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#three').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(3);
                $('#in').append(3);
                $('#his').append(3);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#four').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(4);
                $('#in').append(4);
                $('#his').append(4);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#five').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(5);
                $('#in').append(5);
                $('#his').append(5);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#six').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(6);
                $('#in').append(6);
                $('#his').append(6);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#seven').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(7);
                $('#in').append(7);
                $('#his').append(7);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#eight').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(8);
                $('#in').append(8);
                $('#his').append(8);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#nine').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(9);
                $('#in').append(9);
                $('#his').append(9);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#zero').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        
        if(prev.length > 0 && symbol.split('').length === 0) {
            alert('Please enter an operator first.');
        }else {
            if(current.length < 10){
                current.push(0);
                $('#in').append(0);
                $('#his').append(0);
            }else{
                alert('Length of operands greater than ten not supported!');
            }
        }
    });
    
    $('#point').click(function(){
        if (symbol.split('').length > 0 && current.length === 0){
            $('#in').text('');
        }
        if (prev.length > 0 && symbol.split('').length === 0){
            alert('Please enter an operator first.');
        }else{
            if(current.length < 9 && pointused === false){
                current.push('.');
                $('#in').append('.');
                $('#his').append('.');
                pointused = true;
            }else if (pointused === true){
                alert('Point already used!');
            }else {
                alert('Number length greater than 10 not supported.')
            }
        }
    });
});