'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',  // ["Jonas"," Schmedtmann"]
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



const createUserName = function (accs) {

  accs.forEach(acc => {
    acc.username = acc.owner //"Chinmay Deshpabde"
      .toLowerCase()         // "chinmay deshpande"
      .split(' ')            // ["chinmay","despande"]
      .map((el) => {         // ["c","d"]
        return el[0]
      })
      .join("");             // "cd"


  });

}

createUserName(accounts)
//console.log(accounts)


// Event handling 

btnLogin.addEventListener('click', (e) => {
  // prevent for submitting 
  e.preventDefault()
  /*
    let accounts = [account1, account2, account3, account4];
  */

  // let currentAcc = accounts.find((acc)=>{
  //   return acc.username  == inputLoginUsername.value

  // });

  const inputLoginPin = document.querySelector('.login__input--pin');
  let currentAcc = accounts.find((acc) => acc.username == inputLoginUsername.value && acc.pin == inputLoginPin.value);

  if (currentAcc) {
    
    containerApp.style.opacity = 100
    labelWelcome.textContent = `Welcome ${currentAcc.owner.split(" ")[0]} !`
    inputLoginUsername.value = " "
    inputLoginPin.value = " "
  }

  displayMovements(currentAcc)


  //console.log(currentAcc)


})



function displayMovements(currentAcc) {
  containerMovements.innerHTML = " "
  currentAcc.movements.forEach(function (el, index) {
    let type = el > 0 ? "deposit" : "withdrawal"
    let html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${index+1} ${type}</div>
          <div class="movements__value">${el}</div>
      </div>`

    //console.log(html)
    containerMovements.insertAdjacentHTML('afterbegin', html);

  })

}

// mayuri --> atish , tejaswi , amurta , amol
// krishna - sagar , vaishali , vikrant , ravina , sakshi
// karan -  enamul  raksha  prajakta dhiraj pratiksha , ankita

