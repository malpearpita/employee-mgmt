import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { 
  }

  allEmployee:Employee[] = [{
    "id": '1',
    "name": "Jhon",
    "phone": "9999999999",
    "address":
    {
    "city": "Pune",
    "address_line1":"ABC road",
    "address_line2":"XYZ building",
    "postal_code":"12455"
    }
    }, {
    "id": '2',
    "name": "Jacob",
    "phone": "AZ99A99PQ9",
    "address":
    {
    "city": "Pune",
    "address_line1":"PQR road",
    "address_line2":"ABC building",
    "postal_code":"13455"
    }
    }, {
    "id": '3',
    "name": "Ari",
    "phone": "145458522",
    "address":
    {
    "city": "Mumbai",
    "address_line1":"ABC road",
    "address_line2":"XYZ building",
    "postal_code":"12455"
    }
    }]

    // Returns all the employees
 getAllEmployees():Employee[]{
  return this.allEmployee;
}

addEmployee(employee:Employee){
  this.allEmployee.push(employee);
}

getEmployee(id:string):Employee{
  return this.allEmployee.find(emp => emp.id == id);
}

editEmployee(id,employee:Employee){
  console.log(id);
  var updateEmployee = this.allEmployee.find(emp => emp.id == id);
  updateEmployee.name = employee.name;
  updateEmployee.phone = employee.phone;
  updateEmployee.address.city = employee.address.city;
  updateEmployee.address.address_line1 = employee.address.address_line1;
  updateEmployee.address.address_line2 = employee.address.address_line2;
  updateEmployee.address.postal_code = employee.address.postal_code;
}
}

 


