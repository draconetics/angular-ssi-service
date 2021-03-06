import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item:Item;
  employee:Employee;

  constructor(private itemService : ItemService,
              private employeeSevice:EmployeeService) { }

  ngOnInit() {
    this.item = this.itemService.getFeaturedItem();
    this.employee = this.employeeSevice.getFeaturedEmployee();
  }

}
