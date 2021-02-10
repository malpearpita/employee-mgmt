import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empS:EmployeeService) { }

  dataSource = new MatTableDataSource();

  displayedColumns = ['id','name','phone','city','address_line1','address_line2','postal_code'];

  ngOnInit(): void {
    console.log( this.empS.getAllEmployees());


    let array = [];
    this.empS.getAllEmployees().forEach(e => {
      let a:any = e.phone;
      if(isNaN(a)) {
        e.phone="NA"
      }
      
      let body = {
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

    
  
  }



}
