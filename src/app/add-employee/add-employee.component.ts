import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee;
  addEmployeeForm:FormGroup;
  constructor(private fb:FormBuilder,
    private empS:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      phone:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      address:this.fb.group({
        city:['',Validators.required],
        address_line1:['',Validators.required],
        address_line2:['',Validators.required],
        postal_code:['',Validators.required]
      })
    })

  }

  submit() {
    console.log(this.addEmployeeForm.value);
    let a = {
      city:this.addEmployeeForm.value.address.city, 
      address_line1:this.addEmployeeForm.value.address.address_line1, 
      address_line2: this.addEmployeeForm.value.address.address_line2, 
      postal_code:this.addEmployeeForm.value.address.postal_code
    }
    this.employee = new Employee(this.makeRandomID(),
    this.addEmployeeForm.value.name, 
    this.addEmployeeForm.value.phone,a
   );
    console.log(this.employee);
    this.empS.addEmployee(this.employee);
     this.router.navigate(['/employee']);
  }

  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
