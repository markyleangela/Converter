

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
    }

}




