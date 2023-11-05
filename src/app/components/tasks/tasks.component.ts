import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private apiUrl = 'http://localhost:5000/tasks'
  
  task;
  date: Date;
  desc;

  add=true;

  tasks;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
      this.tasks = this.getTasks();
      //console.log(this.tasks);
  }
  onSubmit() {
    //console.log(this.date);
    this.task='';
    this.date=null;
    this.desc='';
  }

  onClick($event) {
    //console.log('Button clicked', $event);
    //$event.preventDefault()
  }

  toggleAdd(){
    this.add=!this.add;
  }

  getTasks(){
    //this.tasks = this.http.get<string[]>(this.apiUrl);
    //console.log(this.http.get<string[]>(this.apiUrl))
    return this.http.get<string[]>(this.apiUrl);
  }

}
