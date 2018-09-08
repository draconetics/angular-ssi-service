import { Injectable } from '@angular/core';
import {Employee} from '../shared/employee';

import {EMPLOYEES} from '../shared/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() { }

  getEmployees():Employee[]{
    return EMPLOYEES;
  }

  getEmployeeById(id:number):Employee{
    //return array of items, from that list get the position 0
    return EMPLOYEES.filter((emp)=>emp.id === id)[0];
  }

  getFeaturedEmployee():Employee{
    //return array of items, from that list get the position 0
    return EMPLOYEES.filter((emp)=>emp.featured === true)[0];
  }
}
