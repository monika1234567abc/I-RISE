var num = [25, 53, 69, 61, 42, 44, 89, 21, 22, 23, 78, 74]

function FindSumAndEven(array){

    for (var i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {
            console.log(`${array[i]} is even no.`)
        }
        else {
            console.log(`${array[i]} is odd no.`)
         }
        }
    }
    FindSumAndEven (num)

   
    var num = [25, 53, 69, 61, 42, 44, 89, 21, 22, 23, 78, 74,56,85]
    function FindEvenAndOdd (array){
        var oddcount=0;
        var evencount=0;
        for (var i=0;i<array.length;i++){

            if (array[i]%2==0){
                evencount++;
            }else {

                oddcount++;
            }
        }
        console.log (oddcount,"-oddcount")
        console.log (evencount,"-evencount")
        
    }
    FindEvenAndOdd(num)


    var array=[23, 3, 4, 8, 4, 2, 58, 9, 6, 4, 24, 6, 7, 65, 4, 5]
    var target=6;
    for (var i=0;i<array.length-1;i++){
        for (var j=i+1;j<array.length;j++){
            if (array[i]+array[j]==target){
                console.log(`${array[i]}+${array[j]}=${target}`)

            }
         }
        
        }


