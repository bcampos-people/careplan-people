import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {

  photo: string;
  qtd: number;
  percent: number;
  constructor() { }

  ngOnInit() {
    this.photo = 'http://via.placeholder.com/97x97';
    this.qtd = 6;
    this.percent = 33;
  }

}
