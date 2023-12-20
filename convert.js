

function bin_to_dec(input){
    var answer= 0;
    parseInt(input, 10)
    if(input == ''){
        console.log("Field is empty.")
        return
    }

    for(i = 0; i<input.length; i++){
        answer += input[i] * (2**((input.length-1)-i))
    }

    return answer;
}


function oct_to_dec(input){
    var answer= 0;
    parseInt(input,10)
    if(input == ''){
        console.log("Field is empty.")
        return
    }

    for(i = 0; i<input.length; i++){
        answer += input[i] * (8**((input.length-1)-i))
    }

    return answer;
}


function hex_to_dec(input){
    var answer= 0;
    if(input == ''){
        console.log("Field is empty.")
        return
    }

    for(i = 0; i<input.length; i++){
        switch(input[i]){
            case 'A':
                answer += 10 * (16**((input.length-1)-i))
                break;
            case 'B':
                answer += 11 * (16**((input.length-1)-i))
                break;
            case 'C':
                answer += 12 * (16**((input.length-1)-i))
                break;
            case 'D':
                answer += 13 * (16**((input.length-1)-i))
                break;
            case 'E':
                answer += 14 * (16**((input.length-1)-i))
                break;
            case 'F':
                answer += 15 * (16**((input.length-1)-i))
                break;
            default:
                answer += input[i] * (16**((input.length-1)-i))
        } 
    }

    return answer;
}



function dec_to_bin(input){
    parseInt(input, 10);
    var answer = "";
    while(parseInt(input) != 0){
        input = parseInt(input) / 2;
        if(input % 1 == 0){
            answer+='0';
        }else{
            answer+='1';
        }
    }
    return answer.split("").reverse().join(''); 
}

function dec_to_oct(input){
    parseInt(input, 10);
    var answer = "";
    while(parseInt(input) != 0){
        var remainder = parseInt(input) % 8;
        input = parseInt(input) / 8;
        answer+=remainder;
    }
    return answer.split("").reverse().join(''); 
}

function dec_to_hex(input){
    parseInt(input, 10);
    var answer = "";
    while(parseInt(input) != 0){
        var remainder = parseInt(input) % 16;
        input = parseInt(input) / 16;

        switch(remainder){
            case 10:
                answer+='A'
                break;
            case 11:
                answer+='B'
                break;
            case 12:
                answer+='C'
                break;
            case 13:
                answer+='D'
                break;
            case 14:
                answer+='E'
                break;
            case 15:
                answer+='F'
                break;    
            default:
                answer+=remainder;
                break;
        }
        

    }
    return answer.split("").reverse().join(''); 
}


function bin_to_oct(input){
    return dec_to_oct(bin_to_dec(input));
}

function bin_to_hex(input){
    return dec_to_hex(bin_to_dec(input));
}

function oct_to_bin(input){
    return dec_to_bin(oct_to_dec(input));
}

function oct_to_hex(input){
    return dec_to_hex(oct_to_dec(input));
}

function hex_to_bin(input){
    return dec_to_bin(hex_to_dec(input));
}

function hex_to_oct(input){
    return dec_to_oct(hex_to_dec(input));
}





function myFunction(){
    var input = document.getElementById('input_area').value;
    
    switch(document.getElementById('conversion').value ){
        case 'bin_to_dec':
            document.getElementById("answer_label").innerHTML = bin_to_dec(input)
            break;
        case 'oct_to_dec':
            document.getElementById("answer_label").innerHTML = oct_to_dec(input)
            break;

         case 'hex_to_dec':
            document.getElementById("answer_label").innerHTML = hex_to_dec(input)
            break;

        case 'dec_to_bin':
            document.getElementById("answer_label").innerHTML = dec_to_bin(input)
            break;
        case 'dec_to_oct':
            document.getElementById("answer_label").innerHTML = dec_to_oct(input)
            break;
        case 'dec_to_hex':
            document.getElementById("answer_label").innerHTML = dec_to_hex(input)
            break;
        case 'bin_to_oct':
            document.getElementById("answer_label").innerHTML = bin_to_oct(input)
            break;
        case 'bin_to_hex':
            document.getElementById("answer_label").innerHTML = bin_to_hex(input)
            break;
        case 'oct_to_bin':
            document.getElementById("answer_label").innerHTML = oct_to_bin(input)
            break;
        case 'oct_to_hex':
            document.getElementById("answer_label").innerHTML = oct_to_hex(input)
            break;
        case 'hex_to_bin':
            document.getElementById("answer_label").innerHTML = hex_to_bin(input)
            break;
        case 'hex_to_oct':
            document.getElementById("answer_label").innerHTML = hex_to_oct(input)
            break;
        
    }

}





