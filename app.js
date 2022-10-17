
let button_5 = document.getElementById('button_5');
let button_10 = document.getElementById('button_10');
let button_15 = document.getElementById('button_15');
let button_25 = document.getElementById('button_25');
let button_50 = document.getElementById('button_50');

let error = document.getElementById('error');
let totalAmount = document.getElementById('totalAmount');
let reset = document.getElementById('reset');

let bills = document.getElementById("inputBillNumber");
let numberOfPeopleInput = document.getElementById('numberOfPeopleInput');
let personAmount = document.getElementById('personAmount');

let customInput = document.getElementById('customInput').value;

button_5.addEventListener('click', () => {
    if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value <= 0) {
        error.innerHTML = "Can’t be zero"
        numberOfPeopleInput.style.border = "thick solid #E17052";
    } else {
        personAmount.innerHTML = "$" + (bills.value * 5/100) / numberOfPeopleInput.value;
        numberOfPeopleInput.style.border = "none";
        totalAmount.innerText = "$" + (bills.value * 5/100);
        error.innerHTML = "";
    };
});

// button_10.addEventListener('click', () => {
//     let personAmount = document.getElementById('personAmount');
//     let bills = document.getElementById("inputBillNumber");
//     let numberOfPeopleInput = document.getElementById('numberOfPeopleInput');

//     if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value <= 0) {
//         error.innerHTML = "Can’t be zero"
//         numberOfPeopleInput.style.border = "thick solid #E17052";
//     } else {
//         personAmount.innerHTML = "$" + (bills.value * 10/100) / numberOfPeopleInput.value;
//         numberOfPeopleInput.style.border = "none";
//         totalAmount.innerText = "$" + (bills.value * 10/100);
//         error.innerHTML = "";
//     };
// });

// button_15.addEventListener('click', () => {
//     let personAmount = document.getElementById('personAmount');
//     let bills = document.getElementById("inputBillNumber");
//     let numberOfPeopleInput = document.getElementById('numberOfPeopleInput');

//     if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value <= 0) {
//         error.innerHTML = "Can’t be zero"
//         numberOfPeopleInput.style.border = "thick solid #E17052";
//     } else {
//         personAmount.innerHTML = "$" + (bills.value * 15/100) / numberOfPeopleInput.value;
//         numberOfPeopleInput.style.border = "none";
//         totalAmount.innerText = "$" + (bills.value * 15/100);
//         error.innerHTML = "";
//     };
// });

// button_25.addEventListener('click', () => {
//     let personAmount = document.getElementById('personAmount');
//     let bills = document.getElementById("inputBillNumber");
//     let numberOfPeopleInput = document.getElementById('numberOfPeopleInput');

//     if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value <= 0) {
//         error.innerHTML = "Can’t be zero"
//         numberOfPeopleInput.style.border = "thick solid #E17052";
//     } else {
//         personAmount.innerHTML = "$" + (bills.value * 25/100) / numberOfPeopleInput.value;
//         numberOfPeopleInput.style.border = "none";
//         totalAmount.innerText = "$" + (bills.value * 25/100);
//         error.innerHTML = "";
//     };
// });

// button_50.addEventListener('click', () => {
//     let personAmount = document.getElementById('personAmount');
//     let bills = document.getElementById("inputBillNumber");
//     let numberOfPeopleInput = document.getElementById('numberOfPeopleInput');

//     if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value <= 0) {
//         error.innerHTML = "Can’t be zero"
//         numberOfPeopleInput.style.border = "thick solid #E17052";
//     } else {
//         personAmount.innerHTML = "$" + (bills.value * 50/100) / numberOfPeopleInput.value;
//         numberOfPeopleInput.style.border = "none";
//         totalAmount.innerText = "$" + (bills.value * 50/100);
//         error.innerHTML = "";
//     };
// });



numberOfPeopleInput.oninput = function () {
    
    let customInput = document.getElementById('customInput').value;
    let bills = document.getElementById("inputBillNumber");
    let numberOfPeopleInput = document.getElementById('numberOfPeopleInput');

    if (numberOfPeopleInput.value === '' || numberOfPeopleInput.value <= 0) {
        error.innerHTML = "Can’t be zero"
        numberOfPeopleInput.style.border = "thick solid #E17052";
    } else {
        personAmount.innerHTML = "$" + (bills.value * customInput) / numberOfPeopleInput.value;
        totalAmount.innerText = "$" + (bills.value * customInput);
        error.innerHTML = "";
        numberOfPeopleInput.style.border = "none";
    }

}

reset.addEventListener('click', () => {
    let numberOfPeopleInput = document.getElementById('numberOfPeopleInput')
    let customInput = document.getElementById('customInput');
    let bills = document.getElementById("inputBillNumber");
    personAmount.innerHTML = '$0.00';
    totalAmount.innerHTML = '$0.00';
    bills.value = "0";
    customInput.value = "0";
    numberOfPeopleInput.value = "0"
})