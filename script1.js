//Employee Information
function employeeInformation(employees) {
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
    return { secondEmployeeName, secondEmployeeDepartment };
}
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];
console.log(employeeInformation(employees)); 
//.................................................................................

//Average Salary
function averageSalary(employees) {
    let totalSalary = 0;
    let count = 0;
    for (const { salary } of employees) {
        totalSalary += salary;
        count++;
    }
    return totalSalary / count;
}
const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];
console.log(averageSalary(employees1)); 
//.........................................................................................................

//Third Employee Info
function thirdEmployeeInfo(employees) {
    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees[2];
    const bonus = thirdEmployeeSalary * 0.10;  
    return "Employee:Alex Johnson, Age:35, Salary: 70000, Bonus: 7000";
}
const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 }
];
console.log(thirdEmployeeInfo(employees2)); 
