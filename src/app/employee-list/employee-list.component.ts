import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  _listFilterBy: string;
  allEmployees: Employee[];
  filteredList: Employee[];
  constructor(private empS:EmployeeService,
               private router:Router) { }
  
  dataSource = new MatTableDataSource();

  displayedColumns = ['id','name','phone','city','address_line1','address_line2','postal_code','action'];

  ngOnInit(): void {
    console.log( this.empS.getAllEmployees());


    let array = [];
    this.empS.getAllEmployees().forEach(e => {
      let a:any = e.phone;
      if(isNaN(a)) {
        e.phone="NA"
      }
      
      let body = {
        id:e.id,
        name: e.name,
        phone:e.phone,
        address: {
          city:e.address.city,
          address_line1:e.address.address_line1,
          address_line2:e.address.address_line2,
          postal_code:e.address.postal_code
        }
      };
      array.push(body);
      
    })

    this.dataSource = new MatTableDataSource(array);

    this.dataSource.filterPredicate = (data: Employee, filter: string) => {
      return data.name == filter || data.address.city == filter;
     };
   
  
  }

 
  applyFilter(filterValue: string) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addEmployee() {
     this.router.navigate(['/add']);
  }

  editEmployee(element) {
   console.log(element);
   this.router.navigate(['/'+element.id+'/edit'])
  }

}
