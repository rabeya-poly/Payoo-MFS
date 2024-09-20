

document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();
console.log('click for add money');
// const addMoney = getInputFieldValueById();
// console.log('add money value',addMoney);
const addMoney = getInputFieldValueById('input-add-money');
 const pinNumber = getInputFieldValueById('input-pin-number');
console.log('add with parameter', addMoney, pinNumber);
})

