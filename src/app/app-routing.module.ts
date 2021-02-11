import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path:'employee',
    component:EmployeeListComponent
  },
  {
    path:'add',
    component:AddEmployeeComponent
  },
  {
    path:':id/edit',
    component:EditEmployeeComponent
  },
 {path:'**',pathMatch:'full',redirectTo:'employee'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
