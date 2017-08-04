import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  greeting: string;
  iconGreeting: string;
  nameUser: string;

  constructor() { }

  ngOnInit() {
    this.greeting = 'BOM DIA';
    this.iconGreeting = '../assets/img/sun.png';
    this.nameUser = 'FÁBIO';
  }

}
