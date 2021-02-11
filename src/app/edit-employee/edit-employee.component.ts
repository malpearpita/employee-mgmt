import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee-service.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeForm:FormGroup;
  id:any
  employee: Employee;
  constructor(private fb:FormBuilder,
    private empS:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.editEmployeeForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      phone:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      address:this.fb.group({
        city:['',Validators.required],
        address_line1:['',Validators.required],
        address_line2:['',Validators.required],
        postal_code:['',Validators.required]
      })
    })

    this.id = this.route.snapshot.params["id"];
    this.employee = this.empS.getEmployee(this.id);
    console.log(this.employee);
    this.editEmployeeForm.patchValue({
      name:this.employee.name,
      phone:this.employee.phone,
      address: {
        city:this.employee.address.city,
        address_line1:this.employee.address.address_line1,
        address_line2:this.employee.address.address_line2,
        postal_code:this.employee.address.postal_code
      }
    });
    

    


  }

  editEmployee() {
    this.empS.editEmployee(this.id,this.editEmployeeForm.value);
    this.router.navigate(['/employee']);
  }

}
