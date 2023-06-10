import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from './taskModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  taskList: TaskModel[] = [];
  filteredTasks: TaskModel[] = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe((data:any) => {
      this.taskList = data;
      // console.log("DONE",data)
    });
  }

  updateStatus(task: TaskModel, event: any) {
    task.completed = event.target.checked;
  }
}
