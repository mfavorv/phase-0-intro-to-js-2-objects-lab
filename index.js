// Write your solution in this file!
const employee = {
    name : "David" ,
    streetAddress: 2130-100 
}

function updateEmployeeWithKeyAndValue(employee, position, manager){
let employees = {...employee};
    employees[position] = manager ;
return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Jolene ){
    employee[name] = Jolene ;
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    let deleteEmployee = {...employee};
     delete deleteEmployee[ name ];
     return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress){
    delete employee [ streetAddress ];
    return employee;
}
