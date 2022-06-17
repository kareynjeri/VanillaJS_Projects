//getting the elements 
// feather.replace()

// to display the modal container 
const modal = document.getElementById("modal");
//to get the button when clicked displays modal 
const btn = document.getElementById("modal-btn");
// to close the modal 
const addExpense = document.getElementById("add");


//display modal .
btn.addEventListener("click", function (){
modal.style.display = "block";
});

// close the modal
// closeModal.addEventListener("click", function (){
// modal.style.display = "none";
// });

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

console.log(modal)

//Month bill 
// shows month and budget set 

// create an array of objects that has all the months and budget 
//change display of month on click of button 

//list of all the months and their budget
const months = [ 

 {month : "January",
budget: "$70813"
},
{ month : "Feb",
budget: "$9780"
},
{month : "March",
budget: "$2813"
},
{month : "April",
budget: "$8813"
},
{month : "May",
budget: "$9813"
},
{ month : "June",
budget: "$9780"
},
{month : "July",
budget: "$2813"
},
{month : "August",
budget: "$8813"
},
{month : "September",
budget: "$9813"
},
{month : "October",
budget: "$9813"
},
{month : "November",
budget: "$9813"
},
{month : "December",
budget: "$9813"
}]


//loop through 
// for(let i = 0; i < months.length; i++){
//     if(months[i].budget <= 12000 ){
// document.getElementById("demo").innerHTML   ``= months[i].budget;
//     }
// }
// document.getElementById("demo").innerHTML= months.month + " " + months.budget;

//element selectors 
let position = 0
let budgetContainer = document.getElementById("month-bill");
const sliderLeft = document.getElementById("slider-btn-left");
const sliderRight = document.getElementById("slider-btn-right");

//clicknext 
 const clickNext = function () {
  position++;

  if (position > months.length -1){
   position = 0;
  }
  console.log(position);
  let month = months[position].month;
  let budget = months[position].budget;
  replaceHtml(month,budget);
}

const clickPrevious = function () {
  position--;

  if (position < 0){
   position = months.length-1
  }
  console.log(position);
  let month = months[position].month;
  let budget = months[position].budget;
  replaceHtml(month,budget);
}
 
const replaceHtml = function (month,budget) {
  let html = `  
    <h2>${month}</h2>
    <h2>${budget}</h2> 
  `
  clear()
  budgetContainer.innerHTML = html;
}

function clear() {
  budgetContainer.innerHTML = "";
}

//INTIALIZE
const init = function() {
  let month = months[0].month;
  let budget = months[0].budget;
replaceHtml(month,budget)
}

init()


sliderRight.addEventListener("click", clickNext);
sliderLeft.addEventListener("click", clickPrevious);


//preventing default 
const de = document.getElementsByClassName("form");
const defaults = function (event){
  event.preventDefault()
}


const transactions = [];
const addNewExpense = function (){
  let expenseObj = {}
    expenseObj.new = document.getElementById("new").value;
    //expenseObj.category = document.getElementById("category").value;
    expenseObj.amount = document.getElementById("amount").value;
    transactions.push(expenseObj);
    console.log({ transactions })
}
// addNewExpense(expense);eee
addExpense.addEventListener("click", addNewExpense);

de.addEventListener("click",defaults)

