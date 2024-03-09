var traffic1 = prompt('Enter Traffic Light first Color');
var traffic2 = prompt('Enter Traffic Light Second Color');
var traffic3 = prompt('Enter Traffic Light Third Color');

if(traffic1 === 'Red'){
    alert(`You're Correct First Traffic Light color is Red`);
    document.write(`You're Correct First Traffic Light color is Red <br>`);
}if(traffic2 === 'Yellow'){
    alert(`You're Correct Second Traffic Light color is Yellow`);
    document.write(`You're Correct Second Traffic Light color is Yellow <br>`);
}if(traffic3 === 'Green'){
    alert(`You're Correct Third Traffic Light color is Green`);
    document.write(`You're Correct Third Traffic Light color is Green <br>`);
}

let a = +prompt('Enter A Number!');

if(a <= 10){
    document.write('Tooo Low');
}if(a == 11){
    document.write('Yes its Correct');
}if(a >= 11){
    document.write('Tooo High');
}