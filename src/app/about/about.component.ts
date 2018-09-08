import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  employees:Employee[];
  constructor(private employeeSevice:EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeSevice.getEmployees();
  }

}
