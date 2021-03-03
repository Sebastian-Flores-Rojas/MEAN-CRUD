import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { NgForm } from "@angular/forms";
import { Employee } from 'src/app/models/employees';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService],
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  clear(form?: NgForm){
    if (form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  };

  getEmployess(){
    this.employeeService.getEmployees().subscribe(res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    })
  }

  addEmployee(form: NgForm){
    if (form.value._id){
      this.employeeService.putEmployee(form.value).subscribe(res =>{
        this.getEmployess();
        this.clear(form);
        M.toast({html: 'Actualizado Exitosamente!'})
      });
    } else { 
   this.employeeService.postEmployee(form.value).subscribe(res => {
    form.reset();
    this.getEmployess();
    this.clear(form);
    M.toast({html: 'Guardado Exitosamente!'})
    });
  }};

  deletedEmployee(_id: String, form: NgForm){
    this.employeeService.deleteEmployee(_id).subscribe(res => {
      this.getEmployess();
      this.clear(form);
      M.toast({html: 'Borrado Exitosamente!'});
    })
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  ngOnInit(): void {
    this.getEmployess();
  }

}
