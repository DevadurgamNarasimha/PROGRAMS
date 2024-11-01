const expenses=[
    {name:"Food" , amount:50},
    {name:"Transportation" , amount:30},
    {name:"Internet" , amount:45},
    {name:"Groceries" , amount:80}
];
function calculaterTotalExpense(expenses){
    return expenses.reduce((total,expense)=>total+expense.amount,0);
}
const totalExpenses=calculaterTotalExpense(expenses);
console.log(totalExpenses)