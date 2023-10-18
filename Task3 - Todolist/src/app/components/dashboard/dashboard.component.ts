import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  taskObj :Task = new Task();
  taskArr :Task[] = [];
  
  addTaskValue !:string;
  editTaskValue :string = '';
  
  constructor(private crud :CrudService) { } 
  
  ngOnInit(): void {
    this.addTaskValue = '';
    this.editTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTasks();
  }

  addTask() {
    this.taskObj.taskname = this.addTaskValue;
    console.log(this.addTaskValue);
    this.crud.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    });
  }

  getAllTasks() {
    this.crud.getAllTasks().subscribe(res => {
      this.taskArr = res;
    });
  }

  editTask() {
    this.taskObj.taskname = this.editTaskValue;
    this.crud.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    });
  }

  deleteTask(etask :Task) {
    this.crud.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    })
  }

  call(etask :Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.taskname;
  }

}
