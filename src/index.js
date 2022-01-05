module.exports = function toReadable (number) {
    let big = ['hundred', 'thousand']
    let arg = String(number);
    let arr = arg.split('')
    let final = [];
    if(arr.length > 7){
        console.log('Please enter the number lass than 999999');
        return;
    }
    if(arr[0] == 0 && arr.length !== 1){
        console.log('Please enter only natural numbers');
        return;
    }
   

    function ones(x){
        let result;

        switch(+x){
            case 1:
                result='one'
                break; 
            case 2:
                result='two'
                break; 
            case 3:
                result='three'
                break; 
            case 4:
                result='four'
                break; 
            case 5:
                result='five'
                break; 
            case 6:
                result='six'
                break; 
            case 7:
                result='seven'
                break; 
            case 8:
                result='eight'
                break; 
            case 9:
                result='nine'
                break; 
            case 0:
                result='zero'
                break; 
        }

        return result;
    }
    function exceptTens(x){
        let result;

        switch(+x){
            case 10:
                result='ten'
                break; 
            case 11:
                result='eleven'
                break; 
            case 12:
                result='twelve'
                break; 
            case 13:
                result='thirteen'
                break; 
            case 14:
                result='fourteen'
                break; 
            case 15:
                result='fifteen'
                break; 
            case 16:
                result='sixteen'
                break; 
            case 17:
                result='seventeen'
                break; 
            case 18:
                result='eighteen'
                break; 
            case 19:
                result='nineteen'
                break; 
            case 20:
                result='twenty'
                break; 
        }

        return result;
    }
    function tens(x){
        let result;

        switch(+x){
            case 1:
                result='ten'
                break; 
            case 2:
                result='twenty'
                break; 
            case 3:
                result='thirty'
                break; 
            case 4:
                result='forty'
                break; 
            case 5:
                result='fifty'
                break; 
            case 6:
                result='sixty'
                break; 
            case 7:
                result='seventy'
                break; 
            case 8:
                result='eighty'
                break; 
            case 9:
                result='ninety'
                break; 
            
        }

        return result;
    }
    

    function hundreds(x) { 
     return   `${ones(x)} hundred` 
     }


     if(arr.length ==1){
        final.push(ones(arr[0])) 
        return final[0];
     }
     if(arr.length ==2){
         if(arr[0] == 1){
            final.push(exceptTens(arr.join(''))) 
         }
         else{

             final.push(tens(arr[0]))
             if(arr[1] != 0){
                 final.push(ones(arr[1])) 
             }
         }
     }
     if(arr.length ==3){
         final.push(hundreds(arr[0]))

         if(arr[1] == 1){
            final.push(exceptTens(`${arr[1]}${arr[2]}`)) 
         }
         else{

             final.push(tens(arr[1]))
             if(arr[2] != 0){
                 final.push(ones(arr[2])) 
             }
         }
     }
     console.log(final);
     let filering = final.filter(c => c !== undefined && c !== null && c !== '')
     return filering.join(' ')


}


// console.log(toReadable(0));
