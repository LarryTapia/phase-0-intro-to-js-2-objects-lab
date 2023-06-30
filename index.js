// Write your solution in this file!

 const employee = {
    name : `Larry`,
    streetAddress : `295 Fort Washington Ave`
 };

 function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee,[key]: value,};
 }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
 }

 function deleteFromEmployeeByKey(employee, key){
    const copyEmployee = {...employee};
    delete copyEmployee[key];
    return copyEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
 }