var no1 = 23;
var no2 = 78;
var no3 = 67;

if (no1 % 2 == 0) {
    console.log(`The ${no1} is even`)
    if (no1 % 2 == 0 && no2 % 2 == 0) {
        console.log(`The ${no2} is even`)
    } else {
        console.log(`The ${no2} is odd`)
    }
}
else {
    console.log(`The ${no1} is odd`)
    if (no2 % 2 == 0 && no3 % 2 == 0) {
        console.log(`The ${no3} is even`)
    } else {
        console.log(`The ${no3} is odd`)

    }

}
