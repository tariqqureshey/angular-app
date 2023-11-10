import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

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

  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;

  constructor(private http:HttpClient){
    
  }

  ngOnInit(): void {
      this.http.get(this.apiUrl).subscribe(response=>{
      this.tasks = response;
    })
  }
  onSubmit($event) {
    let taskObj = {
      task: this.task,
      date: this.date,
      desc: this.desc
    }

    this.task='';
    this.date=null;
    this.desc='';
    //console.log($event.target);
    //console.log(JSON.stringify(taskObj))
    this.http.post(this.apiUrl, JSON.stringify(taskObj), httpOptions)
    .subscribe(response =>{
      taskObj['id'] = response
      this.tasks.splice(0,0,taskObj)
      //console.log(taskObj)
    })

    
  }

  onClick() {
    //console.log('Button clicked', $event);
    //$event.preventDefault()
  }

  toggleAdd(){
    this.add=!this.add;
  }

  getTasks(){
    //this.tasks = this.http.get<string[]>(this.apiUrl);
    //console.log(this.http.get<string[]>(this.apiUrl))
    return this.http.get(this.apiUrl);
  }

  onDelete(task){
    console.log(task);
    this.http.delete(this.apiUrl+'/'+task.id)
    .subscribe(response => {
      let i = this.tasks.indexOf(task);
      this.tasks.splice(i,1)
    })
  }

  onEdit(task){

  }

}
