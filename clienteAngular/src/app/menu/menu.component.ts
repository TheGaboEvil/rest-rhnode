import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { viewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @viewChild('start') 
  private dashboard: start;


  constructor() { }

  ngOnInit() {
  }

}
